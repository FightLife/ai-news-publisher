# 公众号发布指南 - 2026-09-15

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-09-15.md`

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
   - 文件路径：`output/wechat-2026-09-15.html`
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

# AI HOT 日报 - 2026年9月15日星期二

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 小红书 AllSpark 开源 Search Agent 模型 Iris，35B 与 397B 版本同量级成绩领先

- 来源：公众号：小红书技术（dots.llm）
- 摘要：小红书 AllSpark 团队发布并开源 Search Agent 模型 Iris，权重和评测代码已公开，数据与训练配方将陆续公布。
- 阅读：https://aihot.news/items/cmu12ocst0b6nro2nypi25zyq

### 2. 硅基流动上线开源模型 Hy4 preview，770B 总参数、1M 上下文

- 来源：X：硅基流动 SiliconFlow (@SiliconFlowAI)
- 摘要：硅基流动（SiliconFlow）宣布开源模型 Hy4 preview 上线其平台。该模型总参数 770B、每 token 激活 49B、支持 1M 上下文，采用 Apache ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/9/15 10:49:26