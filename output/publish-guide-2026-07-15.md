# 公众号发布指南 - 2026-07-15

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-15.md`

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
   - 文件路径：`output/wechat-2026-07-15.html`
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

# AI HOT 日报 - 2026年7月15日星期三

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Bonsai 27B：首款可在手机上运行的27B级多模态模型

- 来源：Hacker News 热门（buzzing.cc 中文翻译）
- 摘要：Bonsai 27B 基于 Qwen3.6 27B，提供三元（1.71 有效比特/权重，5.9 GB）和 1-bit（1.125 有效比特/权重，3.9 GB）两个变体，后者首次将 27B 级模型装入 iPhone 17 Pro。模型支持多步推理、结构化工具调用、视觉任务和计算机使用智能体循环，拥有 262K token 上下文窗口，支持推测解码加速。在 15 项基准测试中，三元变体保留全精度基线 95% 的性能，1-bit 变体保留 90%，数学和编码能力几乎无损。采用 Apache 2.0 许可证开源。
- 阅读：https://aihot.virxact.com/items/cmrl2m4yg00awbicqo2arojvd

...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/15 09:47:30