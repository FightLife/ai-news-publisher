#!/usr/bin/env node
/**
 * 拉取 AI HOT 官方日报数据
 * 数据来源：https://aihot.virxact.com
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

const AIHOT_BASE_URL = 'https://aihot.virxact.com';
const AIHOT_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 aihot-skill/0.3.1';

const client = axios.create({
  baseURL: AIHOT_BASE_URL,
  timeout: 30000,
  headers: {
    'User-Agent': AIHOT_USER_AGENT,
    Accept: 'application/json'
  }
});

async function fetchAihotDaily() {
  console.log('🚀 开始拉取 AI HOT 日报...\n');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const daily = await fetchLatestDailyWithFallback();
  const timestamp = new Date().toISOString().split('T')[0];
  const reportDate = daily.date || timestamp;
  const normalizedData = normalizeDaily(daily);

  const rawDataPath = path.join(outputDir, `raw-aihot-daily-${reportDate}.json`);
  fs.writeFileSync(rawDataPath, JSON.stringify(daily, null, 2), 'utf8');
  console.log(`💾 AI HOT 原始日报已保存: ${rawDataPath}`);

  const latestFeedPath = path.join(outputDir, 'latest-feed.json');
  fs.writeFileSync(latestFeedPath, JSON.stringify(normalizedData, null, 2), 'utf8');
  console.log(`✨ 摘要输入数据已保存: ${latestFeedPath}`);

  return normalizedData;
}

async function fetchLatestDailyWithFallback() {
  try {
    console.log('📡 正在拉取最新 AI HOT 日报');
    const response = await client.get('/api/public/daily');
    console.log(`✅ 已获取 ${response.data.date || '最新'} 日报\n`);
    return response.data;
  } catch (error) {
    if (error.response?.status !== 404) {
      throw buildRequestError('拉取最新 AI HOT 日报失败', error);
    }

    console.warn('⚠️  今日日报尚未生成，尝试读取最近可用日报...');
    const dailies = await fetchRecentDailies();
    const latestAvailable = dailies.items?.[0];

    if (!latestAvailable?.date) {
      throw new Error('未找到可用的 AI HOT 日报归档');
    }

    const response = await client.get(`/api/public/daily/${latestAvailable.date}`);
    console.log(`✅ 已回退到最近可用日报: ${latestAvailable.date}\n`);
    return response.data;
  }
}

async function fetchRecentDailies() {
  try {
    const response = await client.get('/api/public/dailies', {
      params: { take: 2 }
    });
    return response.data;
  } catch (error) {
    throw buildRequestError('读取 AI HOT 日报归档失败', error);
  }
}

function normalizeDaily(daily) {
  const sections = Array.isArray(daily.sections)
    ? daily.sections.map(section => ({
        label: section.label || '未分类',
        items: Array.isArray(section.items)
          ? section.items.map(normalizeDailyItem)
          : []
      }))
    : [];

  return {
    source: 'aihot',
    sourceName: 'AI HOT',
    sourceUrl: AIHOT_BASE_URL,
    type: 'daily',
    date: daily.date || new Date().toISOString().split('T')[0],
    generatedAt: daily.generatedAt || null,
    windowStart: daily.windowStart || null,
    windowEnd: daily.windowEnd || null,
    lead: daily.lead || null,
    sections,
    flashes: Array.isArray(daily.flashes) ? daily.flashes.map(normalizeFlash) : []
  };
}

function normalizeDailyItem(item) {
  return {
    title: item.title || '无标题',
    summary: item.summary || '',
    sourceName: item.sourceName || item.source || '未知来源',
    sourceUrl: item.sourceUrl || item.url || '',
    permalink: item.permalink || item.sourceUrl || item.url || ''
  };
}

function normalizeFlash(item) {
  return {
    title: item.title || '无标题',
    sourceName: item.sourceName || item.source || '未知来源',
    sourceUrl: item.sourceUrl || item.url || '',
    permalink: item.permalink || item.sourceUrl || item.url || '',
    publishedAt: item.publishedAt || null
  };
}

function buildRequestError(message, error) {
  const detail = error.response?.data?.error || error.response?.statusText || error.message;
  return new Error(`${message}: ${detail}`);
}

async function main() {
  try {
    await fetchAihotDaily();
    console.log('\n🎉 AI HOT 数据准备完成！');
  } catch (error) {
    console.error('❌ 执行失败:', error.message);
    process.exit(1);
  }
}

main();
