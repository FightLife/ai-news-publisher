# 公众号发布指南 - 2026-08-21

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-21.md`

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
   - 文件路径：`output/wechat-2026-08-21.html`
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

# AI HOT 日报 - 2026年8月21日星期五

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 阿里发布 Qwen-UI-Agent，主打让模型真正“会用”每一块屏幕

- 来源：IT之家（RSS）
- 摘要：阿里巴巴正式推出 Qwen-UI-Agent，一个以真实世界为中心的 GUI 智能体基座模型，覆盖移动端、电脑端、网页端及深度搜索（DeepSearch）环境。
- 阅读：https://aihot.virxact.com/items/cmt1di48c04vuro1q95i06dby

### 2. Hugging Face 发布 LFM2.5 系列 DSpark 草稿模型，推理速度最高提升 3.18 倍

- 来源：Hugging Face：Blog（RSS）
- 摘要：Hugging Face 发布 LFM2.5 系列三款模型的 DSpark 草稿模型检查点，通过投机解码在不改变输出质量的前提下，GPU 吞吐最高提升 3.18 倍，端侧最高 2.87 倍。草稿模...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/21 08:53:43