# 公众号发布指南 - 2026-10-03

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-10-03.md`

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
   - 文件路径：`output/wechat-2026-10-03.html`
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

# AI HOT 日报 - 2026年10月3日星期六

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 今日主线

**Google Project Suncatcher 首颗原型卫星发射入轨**

Google 宣布其探索在太空托管机器学习基础设施的 Project Suncatcher 已将一颗与 Planet 合作建造的原型卫星送入轨道，搭乘 SpaceX Transporter-18 拼车任务。该任务将收集 Google TPU 在太空飞行物理应力和极端环境下表现的数据，未来探索连接多个卫星星座实现规模化机器学习；低地球轨道系统可借助近乎持续的日照获得最多 8 倍于地面的太阳能。

## 模型发布/更新

### 1. Ai2 开源 8B 科学报告生成模型 AstaBrief

- 来源：Ai2 / Allen Institute for AI（RSS）
- 摘要：Ai2 开源 AstaBrief 8B，一个基于 Qwen3-8B、将研究问题和检索文献片段转化为带引用报告的科学报告生成模型，现已在 Ast...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/10/3 11:13:29