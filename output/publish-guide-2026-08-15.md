# 公众号发布指南 - 2026-08-15

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-15.md`

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
   - 文件路径：`output/wechat-2026-08-15.html`
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

# AI HOT 日报 - 2026年8月15日星期六

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. dots3-note Preview 开源：280B 参数轻量模型，主打长程智能体与多模态推理

- 来源：公众号：小红书技术（dots.llm）
- 摘要：小红书技术开源 dots3-note Preview，这是 dots3 系列最轻量模型，总参数 280B、激活参数 16B，支持 512K 上下文及文本、视觉、语音多模态理解，并针对复杂推理和长程 Agent 任务优化。
- 阅读：https://aihot.virxact.com/items/cmssv94cg0h4mroffsb9e7a88

### 2. GLM-5.3 发布：编程能力开源第一，并涌现网络安全能力

- 来源：公众号：智谱（GLM）
- 摘要：智谱发布GLM-5.3，基于与GLM-5.2相同的基座，通过极致的后训练Scaling提升智能上界，编程能力较前代提升50%，在Terminal Bench 3....

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/15 08:49:42