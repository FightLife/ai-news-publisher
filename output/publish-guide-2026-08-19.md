# 公众号发布指南 - 2026-08-19

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-19.md`

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
   - 文件路径：`output/wechat-2026-08-19.html`
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

# AI HOT 日报 - 2026年8月19日星期三

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 产品发布/更新

### 1. Sentence Transformers v6.0 新增 MultiVectorEncoder，支持 ColBERT 风格多向量模型

- 来源：Hugging Face：Blog（RSS）
- 摘要：Sentence Transformers v6.0 新增第四种模型类型 MultiVectorEncoder，可直接加载 PyLate、Stanford-NLP ColBERT 及 colpali-engine 检查点，用于 ColBERT 式晚期交互检索。
- 阅读：https://aihot.virxact.com/items/cmsyqip4o14umroz0ch5iv0iv

### 2. Mojo 语言正式开源，编译器与工具链全面开放

- 来源：Hacker News 热门（buzzing.cc 中文翻译）
- 摘要：Mojo🔥 语言现已正式开源，采用 Apach...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/19 08:49:44