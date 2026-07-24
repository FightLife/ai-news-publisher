# 公众号发布指南 - 2026-07-24

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-24.md`

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
   - 文件路径：`output/wechat-2026-07-24.html`
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

# AI HOT 日报 - 2026年7月24日星期五

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Cactus 发布 Gemma 4 E2B Hybrid：可在设备端为每个回答输出置信度分数，低分时自动路由至更大模型

- 来源：Hacker News 热门（buzzing.cc 中文翻译）
- 摘要：Cactus 推出基于 Gemma 4 的混合模型“Cactus Hybrid”，在模型检查点内嵌入置信度探针，为每个生成答案输出 0-1 之间的结构化置信度分数。高置信度时在设备端直接回答，低分时可自动路由至更大模型。该探针在零音频训练数据下，于四个音频基准上达到 0.79-0.88 AUROC，远超 token 熵基线（均值 0.549），且 MIT 协议开源。
- 阅读：https://aihot.virxact.com/items/cmrx3iki50075ro694xrjogs3

## 产品发布/更新

### 2. ChatGPT 桌面版上线语音控制多智能体

-...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/24 10:01:38