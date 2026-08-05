# 公众号发布指南 - 2026-08-05

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-08-05.md`

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
   - 文件路径：`output/wechat-2026-08-05.html`
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

# AI HOT 日报 - 2026年8月5日星期三

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. NVIDIA Alpamayo 2 Super 开放商用，面向 Robotaxi 与自动驾驶的前沿开源模型

- 来源：NVIDIA Blog（RSS）
- 摘要：NVIDIA Alpamayo 2 Super 现已开放商用，基于 Cosmos 3 Super Reasoner 构建，采用强化学习后训练，支持轨迹预测、因果链推理、元动作、自动标注及视觉问答等多任务输出。
- 阅读：https://aihot.virxact.com/items/cmsesrlcn15j6ro2ecpj577wj

### 2. 商汤 SenseNova U1 开源：统一推理与图像生成

- 来源：X：商汤 SenseTime (@SenseTime_AI)
- 摘要：商汤发布开源模型 SenseNova U1，可在统一流程中同时进行推理与图像生成。其信息图模式可将单条提示词转为结构化幻灯片，交错模式...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/8/5 09:52:28