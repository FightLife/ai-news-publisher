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

### 扩展管理代理：将大脑与手分离

Anthropic 工程团队在其官方博客中介绍了如何开始使用 Claude 管理代理，并探讨了有效代理的构建方法。在这些工作中，常常需要重新审视关于 Claude 无法独立完成的假设，因为这些假设可能会随着模型的改进而失效。  
[查看原文](https://www.anthropic.com/engineering/managed-agents)  
来源：Anthropic 工程团队官方博客，Claude AI 开发者

### Claude 管理代理的新功能：自托管沙箱和 MCP 隧道

Claude 官方博客更新了 Claude 管理代理的新功能，用户现在可以在自己控制的沙箱中操作，并连接到私有模型上下文协议（MCP）服务器。这一沙箱运行在用户自己的基础设施上，确保了安全性和运行时控制。  
[查看原文](https://claude.com/blog/claude-managed-agents-updates)  
来源：Claude AI 官方博客，An...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/5/20 19:27:00