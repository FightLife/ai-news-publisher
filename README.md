# AI HOT 日报自动推送系统

每天从 [AI HOT](https://aihot.virxact.com) 获取官方中文 AI 日报，整理为适合邮箱和公众号复制的格式，并通过 GitHub Actions 自动发送到邮箱。

## 功能特性

- 自动获取 AI HOT 官方日报，无需维护 RSS 或 Twitter 源。
- 默认使用 AI HOT 的中文分版块日报，不再依赖 OpenAI 或 GitHub Models 生成摘要。
- 输出 Markdown、公众号复制文本和邮件 HTML。
- 通过 GitHub Actions 每天北京时间 08:00 自动运行。
- 支持 QQ 邮箱 SMTP 自动发送日报邮件。
- 保留微信公众号发布脚本；未配置公众号 API 时会生成手动发布指南。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置邮件推送

在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 中添加：

- `MAIL_USERNAME`：发件邮箱账号，例如 QQ 邮箱地址。
- `MAIL_PASSWORD`：SMTP 授权码，不是邮箱登录密码。

当前工作流收件人为 `504029540@qq.com`。如需修改，编辑 `.github/workflows/daily-ai-news.yml` 中的 `to` 字段。

### 3. 启用 GitHub Actions

进入仓库的 `Actions` 页面，启用 `AI 圈日报自动发布` 工作流。

默认定时：

- UTC 0:00
- 北京时间 08:00

也可以在 Actions 页面手动触发 `workflow_dispatch`。

## 本地运行

```bash
# 1. 拉取 AI HOT 日报
npm run fetch

# 2. 整理为 Markdown
npm run summarize

# 3. 生成公众号和邮件格式
npm run format

# 4. 生成公众号发布指南或尝试 API 发布
npm run publish

# 一步执行完整流程
npm run daily
```

## 输出文件

每次运行会在 `output/` 目录生成或更新：

- `raw-aihot-daily-YYYY-MM-DD.json`：AI HOT 原始日报数据。
- `latest-feed.json`：标准化后的最新日报数据。
- `summary-YYYY-MM-DD.md`：整理后的 Markdown 日报。
- `latest-summary.md`：最新 Markdown 日报。
- `wechat-YYYY-MM-DD.md`：公众号复制用 Markdown。
- `wechat-YYYY-MM-DD.html`：公众号/浏览器 HTML 版本。
- `latest-for-wechat.txt`：最新公众号复制文本。
- `latest-email.html`：邮件 HTML 正文。
- `publish-guide-YYYY-MM-DD.md`：未配置公众号 API 时生成的手动发布指南。

GitHub Actions 会把 `output/` 上传为 artifact，并在运行成功后提交生成文件。

## 数据源说明

系统调用 AI HOT 公开接口：

- 最新日报：`https://aihot.virxact.com/api/public/daily`
- 日报归档：`https://aihot.virxact.com/api/public/dailies`

API 匿名可用，无需 token。请求会带浏览器风格 `User-Agent` 和 `aihot-skill/0.3.1` 标识，以符合 AI HOT 的公开接入要求。

日报条目默认使用 `permalink` 字段作为阅读链接；该链接指向 AI HOT 站内中文阅读页。若个别条目没有 `permalink`，会回退到原始 `sourceUrl`。

## 可选：微信公众号 API

如果要尝试自动创建公众号草稿，需要在 GitHub Secrets 中添加：

- `WECHAT_APPID`
- `WECHAT_APPSECRET`

没有这些配置时，`npm run publish` 会生成手动发布指南，邮件推送不受影响。

## 常见问题

### 邮件没有收到

- 检查 `MAIL_USERNAME` 和 `MAIL_PASSWORD` 是否配置正确。
- QQ 邮箱必须使用 SMTP 授权码。
- 查看 GitHub Actions 的 `发送邮件通知` 步骤日志。

### 当天日报未生成怎么办

`npm run fetch` 会在最新日报不可用时读取日报归档，并回退到最近一篇可用日报。

### 是否还需要 OpenAI API Key

默认不需要。AI HOT 已提供中文标题、摘要和版块结构，本项目只负责获取、整理和发送。

## 技术架构

```text
AI HOT 官方日报
        ↓
scripts/fetch-feed.js
        ↓
scripts/generate-summary.js
        ↓
scripts/format-for-wechat.js
        ↓
GitHub Actions
        ↓
邮箱 / 公众号手动发布
```

## License

MIT License
