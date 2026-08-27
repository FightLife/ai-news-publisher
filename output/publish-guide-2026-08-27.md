# 公众号发布指南 - 2026-08-27

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-27.md`

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
   - 文件路径：`output/wechat-2026-08-27.html`
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

# AI HOT 日报 - 2026年8月27日星期四

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. GLM-5.3-Flash 开源：320B 总参数、AA 指数 57 分，定价为 Opus 4.8 的 1/40

- 来源：公众号：智谱（GLM）
- 摘要：智谱上线并开源 GLM-5.3-Flash（320B-A18B），这是 GLM-5 系列首个原生多模态模型，AA 综合智能指数 57 分，与 Claude Opus 4.8 持平。其定价为 GLM-5.3 的 1/10，限时折扣内为 Opus 4.8 的 1/40，并已接入 ZCode 等平台开放 API 调用。该模型采用稀疏注意力与线性注意力混合架构，推理服务已跑在国产芯片集群上。
- 阅读：https://aihot.virxact.com/items/cmta7bh1k04u6roj2e4pt7bob

### 2. Qwen3.8-Flash-Next 开源：Qwen4 架构早期预览

- 来源：Qwen：Blog...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/27 14:32:55