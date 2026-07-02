# 公众号发布指南 - 2026-07-02

## 📋 自动发布未配置，请按以下步骤手动发布：

### 方式一：直接复制粘贴（推荐）

1. **打开内容文件**
   - 文件路径：`output/latest-for-wechat.txt`
   - 或直接打开：`output/wechat-2026-07-02.md`

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
   - 文件路径：`output/wechat-2026-07-02.html`
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

# AI HOT 日报 - 2026年7月2日星期四

> 数据来自 AI HOT（https://aihot.virxact.com），链接优先指向站内中文阅读页。

## 模型发布/更新

### 1. 美团 LongCat-2.0 正式发布：国产算力集群训练的万亿参数大模型

- 来源：公众号：龙猫LongCat（美团）
- 摘要：美团于6月30日发布新一代万亿参数大模型LongCat-2.0并开源。总参数1.6T，平均激活约48B，原生支持1M超长上下文，在五万卡国产算力集群上完成全流程训练与推理。采用LSA稀疏注意力、零计算专家、ScMoE及MOPD多专家融合（Agent/Reasoning/Interaction三组专家）架构。评测中SWE-bench Pro获59.5，SWE-bench Multilingual获77.3。预览版已通过OpenRouter和longcat.ai开放，月调用量跻身OpenRouter全球前三。
- 阅读：https://aihot.virxact.com/items/cmr1js18u03imslnld2yrjboo

### 2. NVI...

（完整内容请查看 output/latest-for-wechat.txt）

---

生成时间：2026/7/2 11:43:46