#!/usr/bin/env node
/**
 * 发布到微信公众号
 * 支持两种方式：
 * 1. 使用微信公众号 API（需要认证的服务号）
 * 2. 生成草稿文件，手动复制粘贴
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');

async function publishToWechat() {
  console.log('🚀 开始发布到公众号...\n');
  
  // 读取格式化后的内容
  const contentPath = path.join(outputDir, 'latest-for-wechat.txt');
  if (!fs.existsSync(contentPath)) {
    console.error('❌ 未找到内容文件，请先运行 format-for-wechat.js');
    process.exit(1);
  }
  
  const content = fs.readFileSync(contentPath, 'utf8');
  
  // 检查是否有API配置
  const useAPI = process.env.WECHAT_APPID && process.env.WECHAT_APPSECRET;
  
  if (useAPI) {
    console.log('📡 检测到公众号 API 配置，尝试自动发布...');
    await publishViaAPI(content);
  } else {
    console.log('⚠️  未配置公众号 API，生成手动发布指南...');
    generateManualGuide(content);
  }
}

async function publishViaAPI(content) {
  try {
    const appId = process.env.WECHAT_APPID;
    const appSecret = process.env.WECHAT_APPSECRET;
    
    // 获取 access_token
    console.log('🔑 获取 access_token...');
    const tokenResponse = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
      params: {
        grant_type: 'client_credential',
        appid: appId,
        secret: appSecret
      }
    });
    
    if (tokenResponse.data.errcode) {
      throw new Error(`获取 token 失败: ${tokenResponse.data.errmsg}`);
    }
    
    const accessToken = tokenResponse.data.access_token;
    console.log('✅ access_token 获取成功');
    
    // 提取标题和内容
    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : 'AI 圈日报';
    
    // 上传素材（这里简化为创建草稿）
    console.log('📝 创建草稿...');
    const draftData = {
      articles: [
        {
          title: title,
          author: 'AI 自动生成',
          digest: '每日 AI 圈最新动态，一键掌握',
          content: content,
          content_source_url: 'https://github.com/zarazhangrui/follow-builders',
          thumb_media_id: '', // 需要先上传封面图
          need_open_comment: 1,
          only_fans_can_comment: 0
        }
      ]
    };
    
    const draftResponse = await axios.post(
      `https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${accessToken}`,
      draftData,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
    if (draftResponse.data.errcode === 0) {
      console.log('✅ 草稿创建成功！');
      console.log(`📋 草稿 media_id: ${draftResponse.data.media_id}`);
      console.log('\n💡 请登录公众号后台查看并发布草稿');
    } else {
      throw new Error(`创建草稿失败: ${draftResponse.data.errmsg}`);
    }
    
  } catch (error) {
    console.error('❌ API 发布失败:', error.message);
    console.log('\n💡 降级为手动发布模式...');
    const content = fs.readFileSync(path.join(outputDir, 'latest-for-wechat.txt'), 'utf8');
    generateManualGuide(content);
  }
}

function generateManualGuide(content) {
  const timestamp = new Date().toISOString().split('T')[0];
  const guidePath = path.join(outputDir, `publish-guide-${timestamp}.md`);
  
  const guide = `# 公众号发布指南 - ${timestamp}

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：\`output/latest-for-wechat.txt\`
   - 或直接打开：\`output/wechat-${timestamp}.md\`

2. **复制内容**
   - 打开文件，全选（Ctrl+A / Cmd+A）
   - 复制（Ctrl+C / Cmd+C）

3. **粘贴到公众号**
   - 登录 [微信公众平台](https://mp.weixin.qq.com)
   - 新建图文消息
   - 粘贴内容到编辑器
   - 调整格式（如需要）
   - 预览并发布

### 方式二：使用HTML版本

1. **打开HTML文件**
   - 文件路径：\`output/wechat-${timestamp}.html\`
   - 用浏览器打开，复制浏览器中的内容

2. **粘贴到公众号**
   - 部分格式可能会丢失，需要手动调整

### 配置自动发布（高级）

如果你想启用自动发布，需要：

1. **获取公众号 API 权限**
   - 必须是认证的服务号
   - 在公众号后台获取 AppID 和 AppSecret

2. **配置 GitHub Secrets**
   - 进入你的 GitHub 仓库
   - Settings → Secrets and variables → Actions
   - 添加以下 secrets：
     - \`WECHAT_APPID\`: 公众号 AppID
     - \`WECHAT_APPSECRET\`: 公众号 AppSecret

3. **重新运行 GitHub Actions**
   - 自动发布将生效

---

## 📄 今日内容预览

${content.substring(0, 500)}...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
  `.trim();
  
  fs.writeFileSync(guidePath, guide, 'utf8');
  console.log(`📖 发布指南已生成: ${guidePath}`);
  console.log('\n📋 内容已准备好，可以复制到公众号！');
  console.log(`📂 文件路径: ${path.join(outputDir, 'latest-for-wechat.txt')}`);
}

// 主函数
async function main() {
  try {
    await publishToWechat();
    console.log('\n🎉 发布流程完成！');
  } catch (error) {
    console.error('❌ 执行失败:', error);
    process.exit(1);
  }
}

main();
