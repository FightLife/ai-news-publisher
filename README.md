# AI 圈日报自动发布系统 🤖📰

自动从 [follow-builders](https://github.com/zarazhangrui/follow-builders) 项目抓取 AI 圈最新内容，使用 AI 生成中文摘要，并自动发布到微信公众号。

## ✨ 功能特性

- 🔄 **全自动运行**：通过 GitHub Actions 每日定时运行
- 📊 **多源聚合**：自动抓取博客、播客、Twitter 等 AI 圈内容
- 🤖 **AI 智能摘要**：使用 GPT-4o-mini 生成专业中文摘要
- 🏷️ **来源简介**：自动为数据源添加中文简介（如"OpenAI CEO，ChatGPT 创始人"）
- 🎨 **公众号适配**：自动格式化为公众号友好的排版
- 📧 **邮件推送**：支持将生成的日报自动发送到邮箱（推荐）
- 📱 **灵活发布**：支持自动发布（需 API）或手动复制粘贴
- ☁️ **云端运行**：无需本地环境，完全在 GitHub 云端运行

## 🚀 快速开始

### 1. Fork 或克隆本仓库

```bash
git clone https://github.com/你的用户名/ai-news-publisher.git
cd ai-news-publisher
```

### 2. 安装依赖（本地测试用）

```bash
npm install
```

### 3. 配置 AI 模型

在 GitHub 仓库的 `Settings → Secrets and variables → Actions` 中添加以下 secrets：

#### 方式一：使用 GitHub Models（推荐，免费）

- `GITHUB_TOKEN`：自动提供，无需手动配置

#### 方式二：使用 OpenAI API

- `OPENAI_API_KEY`：你的 OpenAI API Key
- `OPENAI_BASE_URL`（可选）：自定义 API 端点

### 4. （可选）配置邮件推送

如果你想让系统自动将生成的日报发送到邮箱，需要配置邮件服务：

#### 方式一：使用 QQ 邮箱（推荐，简单）

1. **开启 QQ 邮箱 SMTP 服务并获取授权码**
   - 登录 QQ 邮箱网页版
   - 进入 `设置` → `账户`
   - 找到 `POP3/IMAP/SMTP/Exchange/CardDAV/日历服务`
   - 开启 `IMAP/SMTP服务` 或 `POP3/SMTP服务`
   - 按提示用手机发送短信验证
   - 验证成功后会显示**授权码**（不是邮箱密码！）

2. **在 GitHub 仓库中添加 secrets**
   - 进入仓库 `Settings` → `Secrets and variables` → `Actions`
   - 添加 `MAIL_USERNAME`：你的 QQ 邮箱地址（如 `504029540@qq.com`）
   - 添加 `MAIL_PASSWORD`：上一步获取的**授权码**（不是邮箱密码）

3. **修改工作流文件**（已完成）
   - 邮件推送步骤已添加到 `.github/workflows/daily-ai-news.yml`
   - 接收邮箱已设置为 `504029540@qq.com`

#### 方式二：使用 Gmail 或其他邮箱

- Gmail：需要[应用专用密码](https://myaccount.google.com/apppasswords)
- 163 邮箱：SMTP 服务器为 `smtp.163.com`
- 其他邮箱：查询对应 SMTP 服务器地址和端口

> **注意**：如果不配置邮件推送，也可以手动从 GitHub Actions 的 Artifact 下载生成的文件。

### 5. （可选）配置微信公众号 API

如果你想启用自动发布到公众号，需要添加：

- `WECHAT_APPID`：微信公众号 AppID
- `WECHAT_APPSECRET`：微信公众号 AppSecret

> **注意**：微信公众号 API 仅对认证的服务号开放。如果没有权限，可以使用手动复制粘贴方式发布。

### 5. 启用 GitHub Actions

- 进入仓库的 `Actions` 选项卡
- 启用 `AI 圈日报自动发布` 工作流
- 工作流将每天早上 8:00（北京时间）自动运行

## 📅 定时任务说明

GitHub Actions 使用 UTC 时间，已配置为：

- **定时触发**：每天 UTC 0:00（北京时间 8:00）
- **手动触发**：可以在 Actions 页面手动触发运行

如需修改时间，编辑 `.github/workflows/daily-ai-news.yml` 中的 `cron` 表达式。

## 📂 输出文件说明

每次运行后，会在 `output/` 目录生成以下文件：

- `raw-feed-YYYY-MM-DD.json`：原始 feed 数据
- `filtered-feed-YYYY-MM-DD.json`：过滤后的数据（最近24小时）
- `summary-YYYY-MM-DD.md`：AI 生成的摘要（Markdown）
- `wechat-YYYY-MM-DD.html`：公众号格式版本（HTML）
- `wechat-YYYY-MM-DD.md`：公众号格式版本（Markdown）
- `latest-for-wechat.txt`：最新内容（用于复制粘贴）
- `publish-guide-YYYY-MM-DD.md`：发布指南

所有文件也会作为 GitHub Actions 的 Artifact 保存30天。

## 📋 手动发布到公众号（无 API 权限）

1. 进入 GitHub Actions 运行记录，下载 Artifact
2. 解压后打开 `latest-for-wechat.txt`
3. 全选并复制内容
4. 登录 [微信公众平台](https://mp.weixin.qq.com)
5. 新建图文消息，粘贴内容
6. 预览并发布

## 🔧 本地测试

如果你想在本地测试整个流程：

```bash
# 1. 拉取数据
npm run fetch

# 2. 生成摘要（需要配置 AI API）
npm run summarize

# 3. 格式化为公众号格式
npm run format

# 4. 发布（如已配置 API）
npm run publish

# 或者一步完成
npm run daily
```

## 🏷️ 数据源简介功能

从 v2.0 开始，系统支持为数据源添加中文简介，让读者了解内容来源的背景信息。

### 功能说明

- 在生成的日报中，会自动在来源名称后添加中文简介
- 例如：`Sam Altman（OpenAI CEO，ChatGPT 创始人）`
- 简介信息存储在 `source-profiles.json` 文件中

### 自定义简介

编辑 `source-profiles.json` 文件，为每个数据源添加或修改 `profile` 字段：

```json
{
  "twitter": [
    {
      "handle": "sama",
      "name": "Sam Altman",
      "profile": "OpenAI CEO，ChatGPT 创始人"
    }
  ]
}
```

支持的数据源类型：
- `blogs`：博客来源
- `podcasts`：播客来源
- `twitter`：Twitter 账号

### 添加新数据源

如果使用自定义的 follow-builders 配置，可以在 `source-profiles.json` 中添加新的数据源简介，系统会自动匹配。

## 📊 数据源说明

本项目的所有内容来源于 [follow-builders](https://github.com/zarazhangrui/follow-builders) 项目，包括：

- 📰 **官方博客**：Anthropic Engineering、Claude Blog 等
- 🎙️ **顶级播客**：6 档 AI 相关 YouTube 播客的最新单集
- 🐦 **Twitter 动态**：25 位 AI 建造者的公开动态

所有内容均由 follow-builders 项目维护者预聚合，无需自行申请 API 密钥。

## ⚙️ 自定义配置

### 修改摘要提示词

编辑 `scripts/generate-summary.js` 中的 `prompt` 变量，可以自定义：
- 摘要长度
- 语言风格
- 内容侧重点
- 输出格式

### 修改公众号样式

编辑 `scripts/format-for-wechat.js` 中的 `convertMarkdownToWechatHTML` 函数，可以自定义：
- 标题颜色
- 字体大小
- 行间距
- 添加自定义页眉页脚

## 🚨 常见问题

### 1. GitHub Actions 运行失败

- 检查是否正确配置了 secrets
- 查看 Actions 日志获取详细错误信息
- 确保仓库有正确的访问权限

### 2. AI 摘要生成失败

- 检查 API Key 是否有效
- 确认 API 额度是否充足
- 可以尝试切换到 GitHub Models（免费）

### 3. 公众号格式错乱

- 公众号编辑器对 HTML 支持有限
- 建议使用 Markdown 版本手动复制粘贴
- 在公众号编辑器中手动调整格式

## 📜 开源协议

MIT License

## 🙏 致谢

- [follow-builders](https://github.com/zarazhangrui/follow-builders) - 提供优质的 AI 内容聚合
- [OpenAI](https://openai.com) - 提供 AI 摘要生成能力
- [GitHub Actions](https://github.com/features/actions) - 提供免费的云端运行环境

## 📧 联系反馈

如果你有任何问题或建议，欢迎：
- 提交 Issue
- 提交 Pull Request
- 联系作者

---

**⭐ 如果这个项目对你有帮助，请给它一个 Star！**
