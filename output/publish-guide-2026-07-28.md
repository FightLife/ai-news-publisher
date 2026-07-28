# 公众号发布指南 - 2026-07-28

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-28.md`

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
   - 文件路径：`output/wechat-2026-07-28.html`
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

# AI HOT 日报 - 2026年7月28日星期二

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Kimi K3 开源：2.8T MoE 模型与技术报告

- 来源：X：Kimi.ai (@Kimi_Moonshot)
- 摘要：Kimi 发布其最强模型 Kimi K3，这是一个 2.8T 参数的 MoE 模型，具备原生视觉理解和 1M token 上下文窗口。新架构实现了每单位计算 2.5 倍的智能提升。除模型权重外，Kimi 还开源了高性能注意力内核、MoE 通信库及大规模智能体运行环境基础设施。
- 阅读：https://aihot.virxact.com/items/cms3dxit00betro3fiwkotg0j

### 2. Kimi K3 上线 Modal，支持无损加速推理

- 来源：X：Kimi.ai (@Kimi_Moonshot)
- 摘要：很高兴 @modal 成为 Kimi K3 的 Day 0 发布合作伙伴！ 他们为 K3 的架构训练了自定义 ...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/28 09:53:25