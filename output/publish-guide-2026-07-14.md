# 公众号发布指南 - 2026-07-14

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-14.md`

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
   - 文件路径：`output/wechat-2026-07-14.html`
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

# AI HOT 日报 - 2026年7月14日星期二

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 腾讯混元发布 HyOCR-1.5：端到端 OCR 大模型全栈开源，推理提速 6.37 倍

- 来源：公众号：腾讯混元
- 摘要：腾讯混元发布 HyOCR-1.5，这是端到端 OCR 大模型领域首个将训练、推理、模型权重完整开源的专家模型。仅 1B 参数，覆盖 8 种以上 text-centric 任务。引入 DFlash 投机解码框架，在 Transformers 下实现 6.37× 加速，vLLM 下 2.14× 加速，端到端推理达每页 1.408s。支持 4K 分辨率与 128K 上下文窗口，通过 Agentic Data Flow 扩展低资源 OCR（331 种语言）、古文字识别与多图问答能力。在 OmniDocBench v1.6 上以 94.74 分居端到端第一。
- 阅读：https://aihot.virxact.com/items/cmrj4s89p05nhbi...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/14 09:50:55