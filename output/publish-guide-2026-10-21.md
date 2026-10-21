# 公众号发布指南 - 2026-10-21

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-10-21.md`

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
   - 文件路径：`output/wechat-2026-10-21.html`
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

# AI HOT 日报 - 2026年10月21日星期三

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 今日主线

**DeepSeek 全面开源内部推理框架 DeepInfer**

DeepSeek 宣布将内部推理框架 DeepInfer 全面开源，并同步开源生产级 Token 编解码组件 deepseek-recipe。

## 模型发布/更新

### 1. Inception Labs 发布扩散大语言模型 Mercury 3，速度达 1068 tokens/秒

- 来源：Inception Labs：Blog（网页）
- 摘要：Inception Labs 发布扩散式大语言模型 Mercury 3，称其在多项基准上超过 GPT-6 Luna 和 Claude Haiku 5.5，速度达 1068 tokens/秒，参数量较 Mercury 1 扩大 40 倍以上。
- 阅读：https://aihot.news/items/osk3jj5jltogwr6zpo09w80j8

## 产品发布/更新
...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/10/21 10:48:24