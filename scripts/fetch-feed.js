#!/usr/bin/env node
/**
 * 拉取 follow-builders 的公共feed数据
 * 数据来源：https://github.com/zarazhangrui/follow-builders
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

// follow-builders 的原始feed数据URL
const FEED_SOURCES = {
  blogs: 'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-blogs.json',
  podcasts: 'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-podcasts.json',
  twitter: 'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-x.json'
};

async function fetchFeedData() {
  console.log('🚀 开始拉取 AI 内容feed数据...\n');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const results = {};
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  for (const [key, url] of Object.entries(FEED_SOURCES)) {
    try {
      console.log(`📡 正在拉取: ${key}`);
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; AINewsBot/1.0)'
        },
        timeout: 30000
      });
      
      results[key] = response.data;
      console.log(`✅ ${key} 拉取成功，获取到 ${Array.isArray(response.data) ? response.data.length : 'N/A'} 条数据\n`);
      
    } catch (error) {
      console.error(`❌ ${key} 拉取失败:`, error.message);
      results[key] = [];
    }
  }
  
  // 保存原始数据
  const rawDataPath = path.join(outputDir, `raw-feed-${timestamp}.json`);
  fs.writeFileSync(rawDataPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`💾 原始数据已保存: ${rawDataPath}`);
  
  // 过滤出最近24小时的内容
  const filteredData = filterRecentContent(results);
  const filteredDataPath = path.join(outputDir, `filtered-feed-${timestamp}.json`);
  fs.writeFileSync(filteredDataPath, JSON.stringify(filteredData, null, 2), 'utf8');
  console.log(`💾 过滤后数据已保存: ${filteredDataPath}`);
  
  return filteredData;
}

function filterRecentContent(feedData) {
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  
  const filtered = {
    blogs: [],
    podcasts: [],
    twitter: []
  };
  
  // 过滤博客（如果有日期字段）
  if (Array.isArray(feedData.blogs)) {
    filtered.blogs = feedData.blogs.filter(item => {
      const itemDate = item.pubDate || item.date || item.published;
      if (!itemDate) return true; // 如果没有日期，保留
      return new Date(itemDate) >= oneDayAgo;
    });
  }
  
  // 过滤播客
  if (Array.isArray(feedData.podcasts)) {
    filtered.podcasts = feedData.podcasts.filter(item => {
      const itemDate = item.pubDate || item.date || item.published;
      if (!itemDate) return true;
      return new Date(itemDate) >= oneDayAgo;
    });
  }
  
  // 过滤Twitter
  if (Array.isArray(feedData.twitter)) {
    filtered.twitter = feedData.twitter.filter(item => {
      const itemDate = item.created_at || item.date || item.timestamp;
      if (!itemDate) return true;
      return new Date(itemDate) >= oneDayAgo;
    });
  }
  
  console.log('\n📊 过滤统计（最近24小时）:');
  console.log(`  - 博客: ${filtered.blogs.length} 篇`);
  console.log(`  - 播客: ${filtered.podcasts.length} 期`);
  console.log(`  - Twitter: ${filtered.twitter.length} 条`);
  
  return filtered;
}

// 主函数
async function main() {
  try {
    const data = await fetchFeedData();
    
    // 生成摘要用的数据文件
    const summaryInputPath = path.join(outputDir, 'latest-feed.json');
    fs.writeFileSync(summaryInputPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`\n✨ 数据准备完成，已保存到: ${summaryInputPath}`);
    
  } catch (error) {
    console.error('❌ 执行失败:', error);
    process.exit(1);
  }
}

main();
