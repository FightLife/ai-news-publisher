# 公众号发布指南 - 2026-08-11

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-11.md`

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
   - 文件路径：`output/wechat-2026-08-11.html`
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

# AI HOT 日报 - 2026年8月11日星期二

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. SGLang 为 Muse Glimmer 提供 Day-0 支持，针对本地智能体工作流优化推理

- 来源：LMSYS：Blog（Chatbot Arena 团队）
- 摘要：SGLang 与 Meta Superintelligence Labs 合作，为 30B 参数多模态模型 Muse Glimmer 提供 Day-0 支持，该模型拥有 128k+ token 上下文窗口。
- 阅读：https://aihot.virxact.com/items/cmsn68brx03q2ron5vwp3pwta

### 2. Meta 发布开源模型 Muse Glimmer

- 来源：X：AI at Meta (@AIatMeta)
- 摘要：推出 Muse Glimmer，一款开放权重、300 亿参数的模型，专为本地、常驻运行的智能体工作流优化。 与同尺寸领先模型相比，Muse ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/11 09:09:15