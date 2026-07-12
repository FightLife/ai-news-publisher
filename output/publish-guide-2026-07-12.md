# 公众号发布指南 - 2026-07-12

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-12.md`

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
   - 文件路径：`output/wechat-2026-07-12.html`
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

# AI HOT 日报 - 2026年7月12日星期日

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 蚂蚁集团 Robbyant 发布 LingBot-VA 2.0，首个原生具身基础模型

- 来源：MarkTechPost（RSS）
- 摘要：蚂蚁集团旗下具身智能团队 Robbyant 发布 LingBot-VA 2.0，首个原生具身基础模型。该模型采用因果 DiT 架构，视频专家约 13.0B 参数（约 1.9B 激活），训练规模约 15.3B 参数，推理时每 token 约 2.5B 激活。模型引入多块预测（MCP）实现 2.3 倍训练加速，并通过前瞻推理将推理延迟降至 142 ms/chunk。在 RoboTwin 2.0 的 50 个任务上，干净与随机演示数据平均成功率分别达 93.8% 和 93.4%。
- 阅读：https://aihot.virxact.com/items/cmrg3dsyt00g4iha7og0687tc

### 2. OpenAI 发布 GP...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/12 10:03:06