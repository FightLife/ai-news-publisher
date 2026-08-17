# 公众号发布指南 - 2026-08-17

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-17.md`

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
   - 文件路径：`output/wechat-2026-08-17.html`
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

# AI HOT 日报 - 2026年8月17日星期一

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 技巧与观点

### 1. Qwen 3.8 27B 表现出色，但默认推理强度过高导致过度思考

- 来源：Simon Willison 博客
- 摘要：阿里 Qwen 实验室发布 Apache 2 许可的 27B 参数视觉大模型 Qwen 3.8 27B，官方基准显示其超越前代 Qwen 3.6 27B 及闭源 Qwen 3.7-Plus。
- 阅读：https://aihot.virxact.com/items/cmswesk6a0r2hrovml2edcl2c

### 2. The hyping of Anthropic’s IPO

- 来源：Gary Marcus：The Road to AI We Can Trust（RSS）
- 摘要：对 Anthropic IPO 静默期流传的 2028 年 1900 亿美元级营收预测，文章提示其多基于匿名信源和未披露算法，可帮助在追踪上市进展时区分已核实数据...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/17 08:51:26