# 公众号发布指南 - 2026-08-20

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-20.md`

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
   - 文件路径：`output/wechat-2026-08-20.html`
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

# AI HOT 日报 - 2026年8月20日星期四

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Liquid AI 发布 LFM2.5 系列 QAD Q4_0 量化检查点，恢复 97% 精度损失

- 来源：Hugging Face：Blog（RSS）
- 摘要：Liquid AI 发布基于量化感知蒸馏（QAD）训练的 LFM2.5-230M、350M、1.2B-Instruct 和 2.6B 四款 Q4_0 GGUF 检查点，在保持原生 Q4_0 内存与速度的同时，恢复 BF16 平均精度损失的 97%。
- 阅读：https://aihot.virxact.com/items/cmt05zhyg139trodp6bxsy9e2

## 产品发布/更新

### 2. GLM-5.3上线：AA智能指数60分并列开源第一，成本更低

- 来源：公众号：智谱（GLM）
- 摘要：GLM-5.3 API即日上线，擅长复杂编码、防御性网络安全与长程任务，在AA综合智能指数中取得6...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/20 08:49:41