# 公众号发布指南 - 2026-06-30

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-06-30.md`

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
   - 文件路径：`output/wechat-2026-06-30.html`
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

# AI 圈日报 - 2026年6月30日星期二


## 📰 重要博客文章

### 如何在产品中控制 Claude

来自 Anthropic 工程团队的官方博客，Claude AI 开发者
在过去的十二个月里，我们曾经会完全拒绝给予 Claude 足够的访问权限以关闭内部 Anthropic 服务的想法。而现在，这种访问权限已经变得常规，Anthropic 的开发者因此变得更加高效。这些部署的风险有两个组成部分：失败的可能性和可能造成的损害。关于安全措施和模型训练的进展稳步推进。
[原文链接](https://www.anthropic.com/engineering/how-we-contain-claude)

## 🎙️ 最新播客节选

（当前没有最新播客内容）

## 🐦 Twitter 热门动态

### Swyx 发布的动态

Swyx（AI Engineer World's Fair 创始人，AI 工程师社区领袖）在推文中提到：“今天我们注册了1000人。这是第三个小时的情况。明天和星期二将会非常疯狂！”  
[原文链接](https://x.com/swyx...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/6/30 10:42:22