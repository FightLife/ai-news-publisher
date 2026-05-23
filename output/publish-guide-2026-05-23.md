# 公众号发布指南 - 2026-05-23

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-05-23.md`

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
   - 文件路径：`output/wechat-2026-05-23.html`
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

# AI 圈日报 - 2026年5月23日星期六


## 📰 重要博客文章

### Claude 代码自动模式：一种更安全的跳过权限的方法

来自 Anthropic 工程团队的官方博客，Claude AI 开发者
Claude Code 默认情况下会在运行命令或修改文件之前请求用户的批准。这虽然可以保护用户安全，但也意味着用户需要频繁点击“批准”。这种情况可能导致用户疲惫，逐渐失去对批准内容的关注。为了解决这个问题，用户可以选择两种方案：一种是内置的沙箱模式，它将工具隔离，以防止危险操作。
[阅读原文](https://www.anthropic.com/engineering/claude-code-auto-mode)

## 🎙️ 最新播客节选

### OpenAI 的 Yann Dubois：为什么 AI 进展突然感觉真实

在《MAD 播客》中，Yann Dubois 讨论了 AI 工具的可靠性对其实用性的影响。他提到，我们在去年年底达到了一个可靠性水平，现在可以信任这些模型执行许多工作。最近几个月的进展令人瞩目，从竞争走向了对用户的实用性，这种转变正是我们现在所...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/5/23 10:28:28