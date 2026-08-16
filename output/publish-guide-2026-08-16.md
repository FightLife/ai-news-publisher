# 公众号发布指南 - 2026-08-16

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-16.md`

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
   - 文件路径：`output/wechat-2026-08-16.html`
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
     - `WECHAT_APPID`: 公众号 AppID
     - `WECHAT_APPSECRET`: 公众号 AppSecret

3. **重新运行 GitHub Actions**
   - 自动发布将生效

---

## 📄 今日内容预览

# AI HOT 日报 - 2026年8月16日星期日

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 论文研究

### 1. AI生成书籍正淹没亚马逊，并拉低人类作者的单书收入

- 来源：The Decoder：AI News（RSS）
- 摘要：一项对14,419本自出版电子书的分析显示，AI生成书籍正以数量而非质量挤占人类作者市场，即便未检测到AI文本的书籍，单书收入也在下滑。2023年Q1至2026年Q1，书目总量增长38.3倍，而季度收入仅增长8.9倍；在八个类型中，七个类型的无AI文本书籍单书收入下降。
- 阅读：https://aihot.virxact.com/items/cmsuaf2hr05zgroe0y1e7275v

---

*本日报由 AI HOT 提供中文资讯与摘要，本项目自动整理并推送。*

---

## 关于本账号

本邮件每日推送 AI HOT 中文日报，由 GitHub Actions 自动获取、整理并发送。

数据来源：[AI HOT](https://aihot.v...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/16 08:52:49