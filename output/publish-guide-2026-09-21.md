# 公众号发布指南 - 2026-09-21

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-09-21.md`

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
   - 文件路径：`output/wechat-2026-09-21.html`
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

# AI HOT 日报 - 2026年9月21日星期一

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. Qwen 开源 Qwen-Image-2.1：7B 统一生成与编辑并原生支持透明图像

- 来源：Qwen：Blog Retrieval（API）
- 摘要：Qwen 团队开源 Qwen-Image-2.1，将文生图与图像编辑统一到一个模型中，视觉生成组件仅 7B 参数，并原生支持生成和编辑透明图像。模型支持最多 10 张参考图、圆形/涂鸦/独立蒙版指定局部编辑，通过混合粒度注意力架构和 KV cache 复用提升推理效率，同时改进文字渲染、人像光照与人物产品保真度，并覆盖全景图、信息图和分镜等任务。
- 阅读：https://aihot.news/items/cmu9tfhu904turokx2vfjy34f

### 2. 阶跃星辰发布旗舰模型 Step 5 Preview，10 月 15 日开源权重

- 来源：公众号：阶跃星辰（Step）
- 摘要：阶跃星辰发布旗舰基座模...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/9/21 10:43:22