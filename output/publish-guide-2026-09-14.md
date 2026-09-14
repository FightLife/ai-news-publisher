# 公众号发布指南 - 2026-09-14

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-09-14.md`

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
   - 文件路径：`output/wechat-2026-09-14.html`
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

# AI HOT 日报 - 2026年9月14日星期一

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 行业动态

### 1. Anthropic 报告称胡塞组织用 Claude Code 开发导弹制导软件

- 来源：Hacker News：AI 热帖
- 摘要：Anthropic 9 月威胁报告披露，据评估极可能关联胡塞组织的也门小组使用 Claude Code 开发制导火箭、射程超 2,000 公里弹道导弹及名为 R2000 的高超声速滑翔载具概念的相关软件。
- 阅读：https://aihot.news/items/cmu01iavi08reroymepsxnar2

## 技巧与观点

### 2. Agent 长任务上下文工程解析：用预算控制、压缩、todo-state 和记忆对抗上下文溢出与目标丢失

- 来源：MarkTechPost（RSS）
- 摘要：文章解析 Agent harness 层应对长任务中上下文溢出与目标丢失的四类机制：上下文预算与卸载、压缩、todo-state 复述和跨会...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/9/14 10:46:37