# 公众号发布指南 - 2026-05-21

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-05-21.md`

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
   - 文件路径：`output/wechat-2026-05-21.html`
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

# AI 圈日报 - 2026年5月21日星期四


## 📰 重要博客文章

### 管理代理的扩展：将大脑与双手解耦

来自 Anthropic 工程团队的官方博客，Claude AI 开发者
核心观点：通过阅读我们的文档，您可以开始使用 Claude 管理代理。工程博客的一个主要讨论主题是如何构建有效的代理并设计长期工作的工具。这个工作的共同点是工具编码了对于 Claude 自主能力的假设，但这些假设需要不断被质疑，因为随着模型的进步，它们可能会过时。
[阅读更多](https://www.anthropic.com/engineering/managed-agents)

### Claude 管理代理的新功能：自托管沙盒和MCP隧道

来自 Claude AI 官方博客
核心观点：从今天开始，Claude 管理代理可以在您控制的沙盒中运行，并连接到您的私有模型上下文协议（MCP）服务器。代理执行工具的沙盒和它所访问的服务都在您企业的既定边界内，受您的安全和运行时控制。
[阅读更多](https://claude.com/blog/claude-managed-agents-...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/5/21 10:41:45