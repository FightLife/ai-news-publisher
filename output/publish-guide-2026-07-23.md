# 公众号发布指南 - 2026-07-23

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-23.md`

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
   - 文件路径：`output/wechat-2026-07-23.html`
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

# AI HOT 日报 - 2026年7月23日星期四

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 产品发布/更新

### 1. 腾讯设计Agent平台Miora全面开放

- 来源：公众号：数字生命卡兹克
- 摘要：腾讯设计Agent平台Miora今日全面开放，无需邀请码即可使用。该平台由WorkBuddy团队打造，提供品牌设计、影视创意等五大场景模式，支持自定义多模态模型和Agent推理深度，并内置Skill市场与记忆系统。
- 阅读：https://aihot.virxact.com/items/cmrvl3qgw03hubihbavi1fla0

### 2. GigaToken 发布：语言模型分词速度最高提升约 1000 倍，可无缝替代 HuggingFace Tokenizers

- 来源：Hacker News 热门（buzzing.cc 中文翻译）
- 摘要：GigaToken 是一款新的语言模型分词器，在 AMD EPYC 9565 双路 144 核 CPU 上对 GPT-2 分词速度达...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/23 10:06:02