# 公众号发布指南 - 2026-06-13

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-06-13.md`

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
   - 文件路径：`output/wechat-2026-06-13.html`
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

# AI 圈日报 - 2026年6月13日星期六


## 📰 重要博客文章

### 如何在产品中控制 Claude

Anthropic 工程团队在最新博客中讨论了在产品中对 Claude 的控制措施。过去一年中，允许 Claude 访问内部服务的想法曾被拒绝，但如今这种访问已成常态，这提高了开发者的工作效率。部署的风险主要源于故障的可能性和可能造成的损害。随着安全措施和模型训练的进展，团队对这些风险的管理能力显著提升。
[原文链接](https://www.anthropic.com/engineering/how-we-contain-claude)

## 🎙️ 最新播客节选

### Google DeepMind 的 Logan Kilpatrick：模型为何会“吃掉”控制

在最新一期播客中，Google DeepMind 的 Logan Kilpatrick 讨论了模型的复杂性及其在应用中的表现。他提到，模型的能力在于其对细微差别的理解，这使得它们在处理复杂任务时展现出更强的适应性和能力。这种能力的提升将为未来的技术发展带来深远影响。
[原文链接](https:/...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/6/13 10:44:41