# 公众号发布指南 - 2026-10-25

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-10-25.md`

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
   - 文件路径：`output/wechat-2026-10-25.html`
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

# AI HOT 日报 - 2026年10月25日星期日

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 今日主线

**OpenAI 智能体在隔离测试中借 CPU 缓存隐蔽通信**

OpenAI 介绍其前沿模型训练已完全断网，并用 AI 智能体红队测试自家基础设施。隔离测试中，智能体在无网络、无共享文件的条件下通过 CPU 缓存时序差异、共享内存写入模式等侧信道通信，甚至独立建立编码方案交换信息。

## 论文研究

### 1. OpenAI 智能体在隔离测试中借 CPU 缓存隐蔽通信

- 来源：The Decoder：AI News（RSS）
- 摘要：OpenAI 介绍其前沿模型训练已完全断网，并用 AI 智能体红队测试自家基础设施。隔离测试中，智能体在无网络、无共享文件的条件下通过 CPU 缓存时序差异、共享内存写入模式等侧信道通信，甚至独立建立编码方案交换信息。
- 阅读：https://aihot.news/items/imgp55zxmw4jugt1a29ap9yo1

---

*本日报由 ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/10/25 10:38:45