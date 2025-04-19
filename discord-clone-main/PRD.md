# Discord克隆项目 - 产品需求文档 (PRD)

## 项目概述

本项目是一个基于Next.js构建的Discord克隆应用，集成了实时聊天、语音通话、用户认证等功能。使用了现代Web技术栈，包括React、TypeScript、Tailwind CSS、Prisma ORM等。

## 环境要求

- Node.js 18.x 或更高版本
- npm、yarn 或 pnpm 包管理器
- PostgreSQL数据库（项目默认配置）
- 现代浏览器（Chrome, Firefox, Safari, Edge等）
- 必要的第三方服务账号（Clerk, UploadThing, LiveKit）

## 详细安装和使用步骤

### 1. 获取项目代码

如果您已下载项目代码，请进入项目目录：

```bash
cd discord-clone-main
```

如果尚未获取项目代码，请按照以下步骤进行：

```bash
git clone <仓库地址> discord-clone
cd discord-clone
```

### 2. 安装依赖

在项目根目录下执行以下命令安装所有必要的依赖包：

```bash
npm install
# 或者
yarn install
# 或者
pnpm install
```

### 3. 环境变量配置

在项目根目录创建`.env`文件并配置以下环境变量：

```
# 数据库连接
DATABASE_URL="postgresql://用户名:密码@localhost:5432/discord_clone"
DIRECT_URL="postgresql://用户名:密码@localhost:5432/discord_clone"

# Clerk认证（用户身份验证）
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_***********
CLERK_SECRET_KEY=sk_test_****************
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# UploadThing（文件上传服务）
UPLOADTHING_SECRET=sk_live_*****************
UPLOADTHING_APP_ID=*************

# LiveKit（实时音视频）
LIVEKIT_API_KEY=API************************
LIVEKIT_API_SECRET=************************
NEXT_PUBLIC_LIVEKIT_URL=wss://your-project.livekit.cloud

# 站点URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

请注意，您需要在相应的服务提供商平台注册并获取这些密钥：
- Clerk: https://clerk.dev/ (用户认证)
- UploadThing: https://uploadthing.com/ (文件上传)
- LiveKit: https://livekit.io/ (实时音视频)

### 4. 数据库设置

#### 4.1 安装并设置PostgreSQL

如果您尚未安装PostgreSQL，请先安装它。对于Windows用户，您可以从官方网站下载安装程序：https://www.postgresql.org/download/windows/

安装完成后，创建一个新的数据库：
```bash
# 登录PostgreSQL
psql -U postgres

# 创建数据库
CREATE DATABASE discord_clone;

# 退出
\q
```

#### 4.2 初始化Prisma

执行以下命令初始化数据库并应用Prisma模型：

```bash
# 生成Prisma客户端
npx prisma generate

# 将Prisma模型推送到数据库
npx prisma db push
```

这将根据`prisma/schema.prisma`文件中定义的模型创建以下数据库表：
- Profile（用户资料）
- Server（服务器）
- Member（服务器成员）
- Channel（频道）
- Message（消息）
- Conversation（对话）
- DirectMessage（私信）

### 5. 启动开发服务器

执行以下命令启动开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

### 6. 访问应用

打开浏览器并访问 http://localhost:3000 即可使用应用。

### 7. 注册和使用应用

1. 在首页通过Clerk认证系统注册/登录
2. 创建或加入一个服务器
3. 创建文字或语音频道
4. 开始与其他用户聊天、分享文件或进行语音通话

## 项目结构

### 目录结构

```
discord-clone-main/
├── app/                       # Next.js 应用主目录
│   ├── (auth)/                # 认证相关路由
│   ├── (invite)/              # 邀请功能相关路由
│   ├── (main)/                # 主应用路由
│   ├── (setup)/               # 初始设置相关路由
│   ├── api/                   # API路由
│   ├── globals.css            # 全局样式
│   └── layout.tsx             # 根布局组件
├── components/                # 可复用组件
├── hooks/                     # 自定义React钩子
├── lib/                       # 工具函数和类库
├── prisma/                    # Prisma数据库相关
│   └── schema.prisma          # 数据库模型定义
├── public/                    # 静态资源文件
├── middleware.ts              # Next.js中间件（认证）
├── next.config.mjs            # Next.js配置
├── package.json               # 项目依赖
└── tailwind.config.ts         # Tailwind CSS配置
```

### 认证流程

项目使用Clerk提供的认证服务。用户首次登录后会进入设置流程：

1. 新用户登录后会被重定向到初始设置页面
2. 用户需要创建个人资料和第一个服务器
3. 创建完成后自动进入服务器页面

认证保护通过middleware.ts中的authMiddleware实现，默认所有路由都需要登录才能访问，除了/api/uploadthing是公开的。

## 主要功能模块

1. **用户认证**
   - 注册/登录（通过Clerk实现）
   - 个人资料管理
   - 用户状态（在线/离线/忙碌等）

2. **服务器管理**
   - 创建/编辑服务器
   - 生成和管理邀请链接
   - 邀请用户加入服务器
   - 成员角色管理（管理员、版主、访客）

3. **频道系统**
   - 文字频道
   - 语音频道
   - 视频频道
   - 频道权限设置

4. **实时通信**
   - 文字聊天
   - 表情反应
   - 文件/图片分享（通过UploadThing实现）
   - 语音/视频通话（通过LiveKit实现）

5. **好友系统**
   - 添加/删除好友
   - 私人消息
   - 好友状态查看

## 开发指南

### 创建新频道类型

如需添加新的频道类型，需要进行以下操作：

1. 在`prisma/schema.prisma`文件中的ChannelType枚举中添加新类型
2. 在频道创建表单组件中添加新的选项
3. 在频道渲染组件中处理新的频道类型显示逻辑
4. 根据需要实现新频道类型的特定功能

### 添加新的消息类型

如需支持新的消息内容类型（如代码块、投票等），需要：

1. 修改Message模型，添加新的字段（如messageType）
2. 更新消息输入组件，添加新消息类型的创建界面
3. 更新消息显示组件，添加新消息类型的渲染逻辑

### 权限系统扩展

如需扩展当前的权限系统，可以：

1. 在Member模型中增加更多细粒度的权限字段
2. 实现权限检查中间件
3. 在UI中添加权限管理界面

## 数据库模型结构

项目使用Prisma ORM，数据库模型如下：

1. **Profile** - 用户资料
   - 基本信息：id, userId, name, imageUrl, email
   - 关联：servers, members, channels

2. **Server** - 服务器
   - 基本信息：id, name, imageUrl, inviteCode
   - 关联：profile, members, channels

3. **Member** - 服务器成员
   - 基本信息：id, role (ADMIN, MODERATOR, GUEST)
   - 关联：profile, server, messages, directMessages

4. **Channel** - 频道
   - 基本信息：id, name, type (TEXT, VOICE, VIDEO)
   - 关联：profile, server, messages

5. **Message** - 频道消息
   - 基本信息：id, content, fileUrl, fileName, deleted
   - 关联：member, channel

6. **Conversation** - 对话
   - 基本信息：id
   - 关联：memberOne, memberTwo, directMessages

7. **DirectMessage** - 私信
   - 基本信息：id, content, fileUrl, fileName, deleted
   - 关联：member, conversation

## 生产环境部署

如需部署到生产环境，请执行以下步骤：

```bash
# 构建生产版本
npm run build
# 或者
yarn build
# 或者
pnpm build

# 启动生产服务器
npm run start
# 或者
yarn start
# 或者
pnpm start
```

推荐使用Vercel平台进行部署，可实现自动化CI/CD流程：

```bash
# 安装Vercel CLI
npm install -g vercel

# 部署到Vercel
vercel
```

部署到Vercel时，请确保在Vercel项目设置中配置所有必要的环境变量。

## 常见问题及解决方案

### 1. 数据库连接问题

如果遇到数据库连接错误，请检查：
- `.env`文件中的`DATABASE_URL`和`DIRECT_URL`配置是否正确
- PostgreSQL服务是否正常运行
- 数据库用户名和密码是否正确
- 防火墙设置是否允许数据库连接
- 网络连接是否正常

解决方案：
```bash
# 验证数据库连接
npx prisma db pull

# 重置并重新同步数据库（谨慎使用，会删除所有数据）
npx prisma migrate reset
```

### 2. 认证相关问题

如果用户认证功能不正常：
- 检查Clerk相关环境变量配置
- 确保已在Clerk控制面板中设置了正确的回调URL
- 检查Clerk控制面板中的应用状态是否为"活动"
- 清除浏览器缓存和Cookie尝试重新登录

### 3. 文件上传失败

如果无法上传文件：
- 检查UploadThing配置是否正确
- 文件大小是否超过限制（默认最大4MB）
- 文件类型是否受支持（图片、文档等）
- 检查网络连接状态

### 4. 音视频通话问题

如遇到音视频通话问题：
- 检查LiveKit配置是否正确
- 确保浏览器授予了麦克风和摄像头权限
- 检查网络连接质量（WebRTC需要稳定的网络）
- 尝试使用最新版本的Chrome或Firefox浏览器

### 5. 项目启动失败

如果项目无法启动：
- 检查Node.js版本是否兼容（推荐v18+）
- 确保所有依赖都已正确安装
- 检查环境变量配置
- 查看控制台错误信息

解决方案：
```bash
# 清除npm缓存
npm cache clean --force

# 删除node_modules并重新安装
rm -rf node_modules
npm install
```

## 技术支持与反馈

如有任何问题或建议，请通过以下方式联系：
- 提交GitHub Issues
- 发送邮件至项目维护团队

---

文档更新日期：2024年5月 