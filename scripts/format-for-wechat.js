#!/usr/bin/env node
/**
 * 将AI摘要格式化为公众号适配的格式
 * 输出HTML格式（可直接复制到公众号编辑器）
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

function formatForWechat() {
  console.log('🎨 开始格式化为公众号格式...\n');
  
  // 读取最新摘要
  const summaryPath = path.join(outputDir, 'latest-summary.md');
  if (!fs.existsSync(summaryPath)) {
    console.error('❌ 未找到摘要文件，请先运行 generate-summary.js');
    process.exit(1);
  }
  
  const markdown = fs.readFileSync(summaryPath, 'utf8');
  const timestamp = new Date().toISOString().split('T')[0];
  
  // 转换为公众号友好的HTML格式
  const html = convertMarkdownToWechatHTML(markdown);
  
  // 保存HTML文件
  const htmlPath = path.join(outputDir, `wechat-${timestamp}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`✅ HTML版本已保存: ${htmlPath}`);
  
  // 保存为精简版Markdown（去除多余空行）
  const cleanMarkdown = cleanMarkdownForCopy(markdown);
  const mdPath = path.join(outputDir, `wechat-${timestamp}.md`);
  fs.writeFileSync(mdPath, cleanMarkdown, 'utf8');
  console.log(`📝 Markdown版本已保存: ${mdPath}`);
  
  // 生成一键复制版本
  const copyPath = path.join(outputDir, 'latest-for-wechat.txt');
  fs.writeFileSync(copyPath, cleanMarkdown, 'utf8');
  console.log(`📋 最新版本（用于复制）: ${copyPath}`);
  
  return { htmlPath, mdPath, copyPath };
}

function convertMarkdownToWechatHTML(markdown) {
  let html = markdown;
  
  // 标题转换
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // 加粗
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // 链接
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  
  // 列表项
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  // 段落
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  
  // 添加公众号样式
  const styledHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AI 圈日报</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      line-height:1.8;
      color: #333;
      max-width: 680px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      font-size: 24px;
      color: #1a1a1a;
      border-bottom: 3px solid #07C160;
      padding-bottom: 10px;
    }
    h2 {
      font-size: 20px;
      color: #07C160;
      margin-top: 30px;
    }
    h3 {
      font-size: 18px;
      color: #333;
      margin-top: 20px;
    }
    p {
      margin: 15px 0;
    }
    ul {
      padding-left: 25px;
    }
    li {
      margin: 8px 0;
    }
    a {
      color: #07C160;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    hr {
      border: none;
      border-top: 1px solid #eee;
      margin: 30px 0;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #07C160;
      font-size: 14px;
      color: #888;
    }
  </style>
</head>
<body>
${html}
  <div class="footer">
    <p>📢 <strong>关于本账号</strong></p>
    <p>本公众号每日推送 AI 圈最新动态，内容来源于 follow-builders 项目，由 AI 自动生成摘要。</p>
    <p>🔗 想了解更多？访问 <a href="https://github.com/zarazhangrui/follow-builders">follow-builders</a></p>
  </div>
</body>
</html>
  `.trim();
  
  return styledHTML;
}

function cleanMarkdownForCopy(markdown) {
  let cleaned = markdown;
  
  // 去除过多的空行
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  
  // 确保标题格式正确
  cleaned = cleaned.replace(/^(#{1,3}) (.+)$/gm, '$1 $2\n');
  
  // 添加公众号友好的分隔符
  cleaned = cleaned.replace(/^---$/gm, '\n---\n');
  
  // 添加结尾信息
  if (!cleaned.includes('关于本账号')) {
    cleaned += '\n\n---\n\n## 📢 关于本账号\n\n';
    cleaned += '本公众号每日推送 AI 圈最新动态，内容来源于 follow-builders 项目，由 AI 自动生成摘要。\n\n';
    cleaned += '🔗 想了解更多？访问 [follow-builders](https://github.com/zarazhangrui/follow-builders)\n';
  }
  
  return cleaned;
}

// 主函数
async function main() {
  try {
    const result = formatForWechat();
    console.log('\n🎉 格式化完成！');
    console.log('\n📋 下一步：');
    console.log('  1. 打开 output/latest-for-wechat.txt');
    console.log('  2. 复制全部内容');
    console.log('  3. 粘贴到公众号编辑器');
    console.log('  4. 预览并发布\n');
  } catch (error) {
    console.error('❌ 执行失败:', error);
    process.exit(1);
  }
}

main();
