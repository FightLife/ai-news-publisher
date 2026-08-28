# 公众号发布指南 - 2026-08-28

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-28.md`

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
   - 文件路径：`output/wechat-2026-08-28.html`
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

# AI HOT 日报 - 2026年8月28日星期五

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Gemini Omni 1.1 Flash 发布，为开发者提供更强生成式视频控制

- 来源：Google DeepMind：Blog（RSS）
- 摘要：Google 推出 Gemini Omni 1.1 Flash，为开发者提供更强的生成式视频控制能力。新模型支持场景扩展（可分析最多 10 秒先前上下文，以 10 秒为增量累计延长至 40 秒）、指定首尾帧生成平滑过渡，以及 4K 高清输出。
- 阅读：https://aihot.virxact.com/items/cmtbq1hfq156croamzzo9gno2

### 2. Midjourney 开放 V8.2 图像编辑模型测试

- 来源：Midjourney：Updates（RSS）
- 摘要：Midjourney 开始向所有用户开放其首个 V8.2 图像编辑模型的测试。该模型支持指令编辑、以图生图（最多同时引用 ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/28 16:23:10