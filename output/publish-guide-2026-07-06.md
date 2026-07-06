# 公众号发布指南 - 2026-07-06

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-06.md`

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
   - 文件路径：`output/wechat-2026-07-06.html`
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

# AI HOT 日报 - 2026年7月6日星期一

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 美团 LongCat-2.0 完全开源（MIT 许可），1.6T MoE 模型开放权重与推理代码

- 来源：X：美团 LongCat (@Meituan_LongCat)
- 摘要：美团今日宣布 LongCat-2.0 完全开源（MIT 许可），公开模型权重与推理代码。该模型为 MoE 架构，总参数量 1.6T，每 token 激活约 48B，支持 1M token 上下文。技术亮点包括 LongCat Sparse Attention 高效处理长文本、Zero-Compute Experts 动态激活 33B–56B 零浪费计算、MOPD 按任务路由 Agent/Reasoning/Interaction 三组专家。Benchmark 成绩：Terminal-Bench 2.1 70.8；SWE-bench Pro 59.5（超越 GPT-5.5 的 58.6）；SWE-ben...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/6 10:32:03