#!/usr/bin/env node
/**
 * 将 AI HOT 官方日报整理为 Markdown。
 * AI HOT 已提供中文摘要，因此这里不再依赖 OpenAI 或 GitHub Models。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

function generateSummary() {
  console.log('📝 开始整理 AI HOT 日报...\n');

  const feedDataPath = path.join(outputDir, 'latest-feed.json');
  if (!fs.existsSync(feedDataPath)) {
    console.error('❌ 未找到 feed 数据，请先运行 fetch-feed.js');
    process.exit(1);
  }

  const feedData = JSON.parse(fs.readFileSync(feedDataPath, 'utf8'));
  if (feedData.source !== 'aihot' || feedData.type !== 'daily') {
    console.error('❌ latest-feed.json 不是 AI HOT 日报数据，请先重新运行 npm run fetch');
    process.exit(1);
  }

  const summary = renderAihotDailyMarkdown(feedData);
  const timestamp = new Date().toISOString().split('T')[0];
  const reportDate = feedData.date || timestamp;

  const summaryPath = path.join(outputDir, `summary-${reportDate}.md`);
  fs.writeFileSync(summaryPath, summary, 'utf8');
  console.log(`✨ 日报 Markdown 已生成: ${summaryPath}`);

  const latestSummaryPath = path.join(outputDir, 'latest-summary.md');
  fs.writeFileSync(latestSummaryPath, summary, 'utf8');
  console.log(`📝 最新摘要已更新: ${latestSummaryPath}`);

  return summary;
}

function renderAihotDailyMarkdown(daily) {
  const displayDate = formatDate(daily.date);
  let index = 1;
  const lines = [
    `# AI HOT 日报 - ${displayDate}`,
    '',
    `> 数据来自 AI HOT（${daily.sourceUrl || 'https://aihot.virxact.com'}），链接优先指向站内中文阅读页。`,
    ''
  ];

  if (daily.lead?.title || daily.lead?.leadParagraph) {
    lines.push('## 今日主线', '');
    if (daily.lead.title) {
      lines.push(`**${daily.lead.title}**`, '');
    }
    if (daily.lead.leadParagraph) {
      lines.push(daily.lead.leadParagraph, '');
    }
  }

  const sections = Array.isArray(daily.sections) ? daily.sections : [];
  sections.forEach(section => {
    const items = Array.isArray(section.items) ? section.items : [];
    if (items.length === 0) return;

    lines.push(`## ${section.label || '未分类'}`, '');

    items.forEach(item => {
      const link = getItemLink(item);
      lines.push(`### ${index}. ${item.title || '无标题'}`, '');
      lines.push(`- 来源：${item.sourceName || '未知来源'}`);
      if (item.summary) {
        lines.push(`- 摘要：${cleanSummary(item.summary)}`);
      }
      if (link) {
        lines.push(`- 阅读：${link}`);
      }
      lines.push('');
      index += 1;
    });
  });

  const flashes = Array.isArray(daily.flashes) ? daily.flashes : [];
  if (flashes.length > 0) {
    lines.push('## 快讯', '');
    flashes.forEach(item => {
      const link = getItemLink(item);
      const time = formatBeijingTime(item.publishedAt);
      const source = item.sourceName ? ` — ${item.sourceName}` : '';
      const timeText = time ? `（${time}）` : '';
      const linkText = link ? `：${link}` : '';
      lines.push(`- ${item.title || '无标题'}${source}${timeText}${linkText}`);
    });
    lines.push('');
  }

  lines.push('---', '');
  lines.push('*本日报由 AI HOT 提供中文资讯与摘要，本项目自动整理并推送。*');

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

function getItemLink(item) {
  return item.permalink || item.sourceUrl || item.url || '';
}

function cleanSummary(summary) {
  return String(summary).replace(/\s+/g, ' ').trim();
}

function formatDate(dateString) {
  if (!dateString) {
    return new Date().toLocaleDateString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  }

  const date = new Date(`${dateString}T00:00:00+08:00`);
  return date.toLocaleDateString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
}

function formatBeijingTime(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

function main() {
  try {
    generateSummary();
    console.log('\n🎉 日报整理完成！');
  } catch (error) {
    console.error('❌ 执行失败:', error.message);
    process.exit(1);
  }
}

main();
