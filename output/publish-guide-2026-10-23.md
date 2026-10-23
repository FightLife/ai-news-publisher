# 公众号发布指南 - 2026-10-23

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-10-23.md`

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
   - 文件路径：`output/wechat-2026-10-23.html`
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

# AI HOT 日报 - 2026年10月23日星期五

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 今日主线

**AI 挖出潜伏十几年的 PHP 底层漏洞，PHP2Shell 事件全景复盘**

作者复盘 PHP2Shell 事件：两个 CVSS 满分定为 9.2 分的 PHP 远程代码执行漏洞（CVE-2026-109618 和 CVE-2026-109619）在补丁发布前泄露，攻击演示视频外流，多国政府网站预防性下线，OpenAI 认领漏洞由 GPT-5.6 Sol 辅助发现。

## 产品发布/更新

### 1. OpenAI 正式发布 Decisions API，面向低延迟低成本小决策

- 来源：OpenAI：官网动态（RSS · 排除企业/客户案例）
- 摘要：OpenAI 宣布基于 GPT-6 Luna 的 Decisions API 正式可用，用于分类、路由、评分等有界答案问题，速度最高比通过 Responses API 使用 GPT-6 Luna 快 10x。
- 阅读：https:/...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/10/23 10:50:38