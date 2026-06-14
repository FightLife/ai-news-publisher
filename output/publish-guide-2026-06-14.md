# 公众号发布指南 - 2026-06-14

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-06-14.md`

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
   - 文件路径：`output/wechat-2026-06-14.html`
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

# AI 圈日报 - 2026年6月14日星期日


## 📰 重要博客文章


### 关于 Claude 代码质量报告的最新进展

来自 Anthropic 工程团队
[原文链接](https://www.anthropic.com/engineering/april-23-postmortem)  
Anthropic 工程团队在最新的博客中提到，他们对部分用户反映 Claude 的响应质量下降进行了调查，发现问题源于三个不同的变化，这些变化影响了 Claude Code、Claude Agent SDK 和 Claude Cowork。API 受到的影响不大，所有问题已于 4 月 20 日解决，版本更新为 v2.1.116。

### 扩展托管代理：将大脑与双手解耦

来自 Anthropic 工程团队
[原文链接](https://www.anthropic.com/engineering/managed-agents)  
在最新的博客中，Anthropic 工程团队讨论了如何有效构建 Claude 托管代理及其设计问题。他们强调，设计的假设需要不断审视，因为随着模型的改...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/6/14 10:55:58