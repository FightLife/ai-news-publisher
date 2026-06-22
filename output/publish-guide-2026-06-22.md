# 公众号发布指南 - 2026-06-22

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-06-22.md`

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
   - 文件路径：`output/wechat-2026-06-22.html`
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

# AI 圈日报 - 2026年6月22日星期一


## 📰 重要博客文章


### 关于最近 Claude 代码质量报告的更新

Anthropic 工程团队官方博客，Claude AI 开发者  
在过去一个月中，我们调查了部分用户反馈的 Claude 响应质量下降问题。经过分析，我们发现这些问题与 Claude 代码、Claude Agent SDK 和 Claude Cowork 的三个独立变更有关。API 并未受到影响。目前所有问题已于 4 月 20 日（版本 2.1.116）解决。本文详细解释了我们发现了什么、修复了什么，以及我们未来的计划。  
[原文链接](https://www.anthropic.com/engineering/april-23-postmortem)

### 扩展管理代理：将大脑与双手分离

Anthropic 工程团队官方博客，Claude AI 开发者  
通过阅读我们的文档，开始使用 Claude 管理代理。工程博客上常讨论如何构建有效的代理以及设计长时间运行工作的工具。我们注意到，这些工具通常基于对 Claude 独立能力的假设，而...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/6/22 11:30:28