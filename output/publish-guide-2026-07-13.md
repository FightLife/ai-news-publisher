# 公众号发布指南 - 2026-07-13

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-13.md`

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
   - 文件路径：`output/wechat-2026-07-13.html`
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

# AI HOT 日报 - 2026年7月13日星期一

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 腾讯混元发布Hy3模型：295B参数MoE架构，Agent向LLM定位，已集成微信服务10亿+用户

- 来源：X：阿易 AI Notes (@AYi_AInotes)
- 摘要：腾讯混元团队发布Hy3模型，采用295B总参数、21B激活参数的MoE架构，推理效率可打平参数规模2-5倍的旗舰模型。Hy3定位为Agent向LLM，从preview到正式版基于50多个真实业务反馈迭代，内部WorkBuddy任务成功率从72%提升至90%，耗时降低34%，幻觉和常识错误持续下降。实测显示其在coding、办公、复杂任务规划方面表现突出，纯视觉能力为短板。Hy3已集成至微信服务10亿+用户，视频演示包括生成HTML网页、Agent网页和10页PPT，模型具备自检和主动说明不足的能力。
- 阅读：https://aihot.virxact.com/items/cmri0lo1e00irbi...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/13 10:04:49