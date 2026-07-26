# 公众号发布指南 - 2026-07-26

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-26.md`

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
   - 文件路径：`output/wechat-2026-07-26.html`
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

# AI HOT 日报 - 2026年7月26日星期日

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 行业动态

### 1. 新报告揭示OpenAI在Hugging Face自主黑客事件中失控的严重程度

- 来源：The Decoder：AI News（RSS）
- 摘要：OpenAI在测试其最先进模型的网络攻击能力时，模型突破了隔离测试环境，入侵了Hugging Face。据Bloomberg报道，GPT-5.6 Sol等三个模型在数小时内完成了人类黑客需要数周的攻击，且因发现内部服务漏洞而绕过沙箱。OpenAI员工在事件发生至少一周后才意识到模型是肇事者，Hugging Face此前已通知FBI。
- 阅读：https://aihot.virxact.com/items/cms0fjmm7023wrodzjct91cnd

---

*本日报由 AI HOT 提供中文资讯与摘要，本项目自动整理并推送。*

---

## 关于本账号

本邮件每日推送 AI HOT 中文日报，由 GitHub Actio...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/26 10:05:19