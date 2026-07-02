#!/usr/bin/env node
/**
 * 将 AI HOT 日报 Markdown 格式化为公众号复制版与邮件 HTML。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

function formatForWechat() {
  console.log('🎨 开始格式化 AI HOT 日报...\n');

  const summaryPath = path.join(outputDir, 'latest-summary.md');
  if (!fs.existsSync(summaryPath)) {
    console.error('❌ 未找到摘要文件，请先运行 generate-summary.js');
    process.exit(1);
  }

  const markdown = fs.readFileSync(summaryPath, 'utf8');
  const reportDate = readReportDate();
  const timestamp = reportDate || new Date().toISOString().split('T')[0];

  const cleanMarkdown = cleanMarkdownForCopy(markdown);
  const mdPath = path.join(outputDir, `wechat-${timestamp}.md`);
  fs.writeFileSync(mdPath, cleanMarkdown, 'utf8');
  console.log(`📝 Markdown版本已保存: ${mdPath}`);

  const copyPath = path.join(outputDir, 'latest-for-wechat.txt');
  fs.writeFileSync(copyPath, cleanMarkdown, 'utf8');
  console.log(`📋 最新版本（用于复制）: ${copyPath}`);

  const html = convertMarkdownToHTML(cleanMarkdown, {
    title: `AI HOT 日报 - ${timestamp}`,
    mode: 'wechat'
  });
  const htmlPath = path.join(outputDir, `wechat-${timestamp}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`✅ HTML版本已保存: ${htmlPath}`);

  const emailHtml = convertMarkdownToHTML(cleanMarkdown, {
    title: `AI HOT 日报 - ${timestamp}`,
    mode: 'email'
  });
  const emailPath = path.join(outputDir, 'latest-email.html');
  fs.writeFileSync(emailPath, emailHtml, 'utf8');
  console.log(`📧 邮件HTML已保存: ${emailPath}`);

  return { htmlPath, mdPath, copyPath, emailPath };
}

function readReportDate() {
  const feedPath = path.join(outputDir, 'latest-feed.json');
  if (!fs.existsSync(feedPath)) return '';

  try {
    const feed = JSON.parse(fs.readFileSync(feedPath, 'utf8'));
    return feed.date || '';
  } catch (error) {
    return '';
  }
}

function convertMarkdownToHTML(markdown, options = {}) {
  const body = renderMarkdownBody(markdown);
  const isEmail = options.mode === 'email';
  const maxWidth = isEmail ? '760px' : '680px';
  const background = isEmail ? '#f6f8fb' : '#ffffff';
  const contentBackground = '#ffffff';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(options.title || 'AI HOT 日报')}</title>
  <style>
    body {
      margin: 0;
      padding: ${isEmail ? '24px 12px' : '20px'};
      background: ${background};
      color: #1f2933;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      line-height: 1.75;
    }
    .container {
      max-width: ${maxWidth};
      margin: 0 auto;
      background: ${contentBackground};
      ${isEmail ? 'border: 1px solid #e5e7eb; border-radius: 8px; padding: 28px;' : ''}
    }
    h1 {
      margin: 0 0 18px;
      padding-bottom: 14px;
      border-bottom: 3px solid #0f766e;
      color: #111827;
      font-size: 26px;
      line-height: 1.35;
    }
    h2 {
      margin: 32px 0 14px;
      padding-left: 10px;
      border-left: 4px solid #0f766e;
      color: #0f766e;
      font-size: 21px;
      line-height: 1.4;
    }
    h3 {
      margin: 22px 0 10px;
      color: #111827;
      font-size: 17px;
      line-height: 1.45;
    }
    p {
      margin: 10px 0;
    }
    blockquote {
      margin: 0 0 22px;
      padding: 10px 14px;
      background: #eef7f6;
      border-left: 4px solid #14b8a6;
      color: #46615f;
    }
    ul {
      margin: 8px 0 18px;
      padding-left: 22px;
    }
    li {
      margin: 6px 0;
    }
    a {
      color: #0f766e;
      text-decoration: none;
      word-break: break-all;
    }
    a:hover {
      text-decoration: underline;
    }
    hr {
      border: 0;
      border-top: 1px solid #e5e7eb;
      margin: 30px 0;
    }
    .footer {
      margin-top: 34px;
      padding-top: 18px;
      border-top: 2px solid #0f766e;
      color: #64748b;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <main class="container">
${body}
    <div class="footer">
      <p><strong>关于本账号</strong></p>
      <p>本邮件每日推送 AI HOT 中文日报，由 GitHub Actions 自动获取、整理并发送。</p>
      <p>数据来源：<a href="https://aihot.virxact.com">AI HOT</a></p>
    </div>
  </main>
</body>
</html>
  `.trim();
}

function renderMarkdownBody(markdown) {
  const lines = markdown.split('\n');
  const html = [];
  let paragraph = [];
  let inList = false;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    html.push(`    <p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!inList) return;
    html.push('    </ul>');
    inList = false;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    if (line === '---') {
      flushParagraph();
      closeList();
      html.push('    <hr>');
      continue;
    }

    if (line.startsWith('# ')) {
      flushParagraph();
      closeList();
      html.push(`    <h1>${renderInline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith('## ')) {
      flushParagraph();
      closeList();
      html.push(`    <h2>${renderInline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith('### ')) {
      flushParagraph();
      closeList();
      html.push(`    <h3>${renderInline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith('> ')) {
      flushParagraph();
      closeList();
      html.push(`    <blockquote>${renderInline(line.slice(2))}</blockquote>`);
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      if (!inList) {
        html.push('    <ul>');
        inList = true;
      }
      html.push(`      <li>${renderInline(line.slice(2))}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return html.join('\n');
}

function renderInline(text) {
  let html = escapeHtml(text);

  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2">$1</a>'
  );
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(
    /(?<!href=")(https?:\/\/[^\s<）)，。]+)/g,
    '<a href="$1">$1</a>'
  );

  return html;
}

function cleanMarkdownForCopy(markdown) {
  let cleaned = markdown.replace(/\n{3,}/g, '\n\n').trim();

  if (!cleaned.includes('关于本账号')) {
    cleaned += '\n\n---\n\n## 关于本账号\n\n';
    cleaned += '本邮件每日推送 AI HOT 中文日报，由 GitHub Actions 自动获取、整理并发送。\n\n';
    cleaned += '数据来源：[AI HOT](https://aihot.virxact.com)\n';
  }

  return cleaned + '\n';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function main() {
  try {
    formatForWechat();
    console.log('\n🎉 格式化完成！');
  } catch (error) {
    console.error('❌ 执行失败:', error.message);
    process.exit(1);
  }
}

main();
