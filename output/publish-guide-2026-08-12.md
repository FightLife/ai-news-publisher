# 公众号发布指南 - 2026-08-12

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-12.md`

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
   - 文件路径：`output/wechat-2026-08-12.html`
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

# AI HOT 日报 - 2026年8月12日星期三

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. NVIDIA 推出 Nemotron 3.5 Lightning，加速本地智能体任务

- 来源：NVIDIA Blog（RSS）
- 摘要：NVIDIA 发布 Nemotron 3.5 Lightning，一款可定制的开源 30B 混合专家（MoE）模型，专为常驻智能体设计。相比同类开源模型，其 token 生成速度最高提升 4 倍，任务完成时间缩短 30%。该模型采用开放权重，支持用户微调以匹配特定任务，并可在 RTX PC、DGX Spark 及 Jetson 等设备上运行。
- 阅读：https://aihot.virxact.com/items/cmsoolxde07isrop2eb5rrtvq

### 2. SGLang 宣布 Day-0 支持 NVIDIA Nemotron 3.5 Lightning

- 来源：LMSYS：Blog（Chatbot Arena ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/12 09:17:19