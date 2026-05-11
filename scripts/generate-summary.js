#!/usr/bin/env node
/**
 * 使用 AI 生成内容摘要
 * 支持 OpenAI API 或 GitHub Models
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

async function generateSummary() {
  console.log('🤖 开始生成 AI 内容摘要...\n');
  
  // 读取过滤后的feed数据
  const feedDataPath = path.join(outputDir, 'latest-feed.json');
  if (!fs.existsSync(feedDataPath)) {
    console.error('❌ 未找到feed数据，请先运行 fetch-feed.js');
    process.exit(1);
  }
  
  const feedData = JSON.parse(fs.readFileSync(feedDataPath, 'utf8'));
  
  // 初始化 OpenAI 客户端（支持 GitHub Models）
  const apiKey = process.env.OPENAI_API_KEY || process.env.GITHUB_TOKEN;
  const baseURL = process.env.OPENAI_BASE_URL || 'https://models.inference.ai.azure.com';
  
  if (!apiKey) {
    console.error('❌ 未找到 API Key，请设置 OPENAI_API_KEY 或 GITHUB_TOKEN 环境变量');
    console.log('💡 GitHub Models 可免费使用，访问 https://github.com/marketplace/models 获取');
    process.exit(1);
  }
  
  const client = new OpenAI({
    apiKey: apiKey,
    baseURL: baseURL
  });
  
  const model = process.env.AI_MODEL || 'gpt-4o-mini';
  
  // 生成摘要
  const summary = await generateContentSummary(client, model, feedData);
  
  // 保存摘要
  const timestamp = new Date().toISOString().split('T')[0];
  const summaryPath = path.join(outputDir, `summary-${timestamp}.md`);
  fs.writeFileSync(summaryPath, summary, 'utf8');
  console.log(`\n✨ 摘要已生成: ${summaryPath}`);
  
  // 保存为最新摘要
  const latestSummaryPath = path.join(outputDir, 'latest-summary.md');
  fs.writeFileSync(latestSummaryPath, summary, 'utf8');
  console.log(`📝 最新摘要已更新: ${latestSummaryPath}`);
  
  return summary;
}

async function generateContentSummary(client, model, feedData) {
  const date = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
  
  // 构建提示词
  const prompt = `你是一个专业的AI行业内容编辑。请根据以下从 follow-builders 项目获取的内容，生成一份中文日报。

**要求**：
1. 标题格式：# AI 圈日报 - ${date}
2. 内容分类：
   - 📰 重要博客文章（来自 Anthropic 等官方博客）
   - 🎙️ 最新播客节选（来自顶尖AI播客）
   - 🐦 Twitter 热门动态（来自AI建造者的推文）
3. 每条内容包含：
   - 标题/主题
   - 核心观点（2-3句话概括）
   - 原文链接
4. 语言风格：专业、简洁、易懂
5. 总长度控制在 1500-2000 字

**数据源**：
${JSON.stringify(feedData, null, 2)}

请直接输出 Markdown 格式的日报内容，不要添加额外解释。`;
  
  console.log('📡 正在调用 AI 模型生成摘要...');
  
  try {
    const response = await client.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content: '你是一个专业的AI行业内容编辑，擅长将英文技术内容转化为简洁易懂的中文摘要。'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000
    });
    
    const summary = response.choices[0].message.content;
    console.log('✅ AI 摘要生成成功');
    return summary;
    
  } catch (error) {
    console.error('❌ AI 摘要生成失败:', error.message);
    
    // 如果AI调用失败，返回基础版本
    return generateBasicSummary(feedData, date);
  }
}

function generateBasicSummary(feedData, date) {
  let summary = `# AI 圈日报 - ${date}\n\n`;
  
  // 博客内容
  if (feedData.blogs && feedData.blogs.length > 0) {
    summary += '## 📰 官方博客\n\n';
    feedData.blogs.slice(0, 5).forEach((blog, index) => {
      summary += `### ${index + 1}. ${blog.title || '无标题'}\n\n`;
      summary += `- 来源：${blog.source || '未知'}\n`;
      summary += `- 链接：${blog.link || blog.url || '#'}\n\n`;
    });
  }
  
  // 播客内容
  if (feedData.podcasts && feedData.podcasts.length > 0) {
    summary += '## 🎙️ 最新播客\n\n';
    feedData.podcasts.slice(0, 3).forEach((podcast, index) => {
      summary += `### ${index + 1}. ${podcast.title || '无标题'}\n\n`;
      summary += `- 频道：${podcast.channel || '未知'}\n`;
      summary += `- 链接：${podcast.link || podcast.url || '#'}\n\n`;
    });
  }
  
  // Twitter内容
  if (feedData.twitter && feedData.twitter.length > 0) {
    summary += '## 🐦 Twitter 动态\n\n';
    feedData.twitter.slice(0, 10).forEach((tweet, index) => {
      summary += `### ${index + 1}. @${tweet.username || 'unknown'}\n\n`;
      summary += `${tweet.text || tweet.content || '无内容'}\n\n`;
      summary += `- 链接：${tweet.url || '#'}\n\n`;
    });
  }
  
  summary += '\n---\n\n*本日报由 AI 自动生成，内容来源于 follow-builders 项目*';
  
  return summary;
}

// 主函数
async function main() {
  try {
    await generateSummary();
    console.log('\n🎉 摘要生成完成！');
  } catch (error) {
    console.error('❌ 执行失败:', error);
    process.exit(1);
  }
}

main();
