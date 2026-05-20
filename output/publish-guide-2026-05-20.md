# 公众号发布指南 - 2026-05-20

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-05-20.md`

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
   - 文件路径：`output/wechat-2026-05-20.html`
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

# AI 圈日报 - 2026年5月20日星期三


## 📰 重要博客文章

### 标题：Scaling Managed Agents: Decoupling the brain from the hands

- **核心观点**：Anthropic 工程团队在其官方博客中探讨了如何构建有效的管理代理，并设计适用于长期工作的工具。文章强调，尽管现有的假设可能随着模型的改进而过时，但持续质疑这些假设是必要的。
- [原文链接](https://www.anthropic.com/engineering/managed-agents)
- **来源简介**：Anthropic 工程团队官方博客，Claude AI 开发者。

### 标题：New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels

- **核心观点**：Claude Managed Agents 现在可以在用户控制的沙盒中操作，并连接到私有模型上下文协议（MCP）服务器。这一新功能增强了企业的安全性和运行时控制。
- [原文链接](htt...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/5/20 18:23:57