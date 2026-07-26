# Wrestle Bros

[Wrestle Bros](https://wrestlebros.xyz/) 是一个基于 Next.js 构建的在线摔跤游戏站点。网站嵌入 Blue Wizard Digital 开发的物理引擎摔跤游戏，支持单人 AI 对战和本地双人对战，无需下载或注册，打开浏览器即可开打。

## 技术栈

- **框架:** Next.js 14 (App Router)
- **语言:** TypeScript
- **样式:** Tailwind CSS
- **字体:** Nunito + Quicksand (Google Fonts)
- **部署:** Vercel

## 项目结构

```
├── app/                      # 页面路由
│   ├── layout.tsx            # 全局布局（Header、Footer、GA、AdSense）
│   ├── page.tsx              # 首页（游戏嵌入 + 介绍内容）
│   ├── about/                # 关于页面
│   ├── contact/              # 联系页面
│   ├── privacy/              # 隐私政策
│   ├── terms/                # 服务条款
│   ├── robots.ts             # robots.txt 配置
│   ├── sitemap.ts            # sitemap.xml 配置
│   └── globals.css           # 全局样式
├── components/               # UI 组件
│   ├── Header.tsx            # 顶部导航栏
│   ├── Hero.tsx              # 游戏区域（标题 + 嵌入容器）
│   ├── GameEmbed.tsx         # 游戏 iframe 嵌入
│   ├── GameContent.tsx       # 游戏介绍内容（玩法、特色、FAQ）
│   ├── Footer.tsx            # 页脚
│   ├── SidebarLayout.tsx     # 内容区布局（带广告位预留）
│   ├── AdSlot.tsx            # 广告位占位组件
│   ├── LegalPage.tsx         # 法律页面布局模板
│   └── SchemaMarkup.tsx      # JSON-LD 结构化数据
├── lib/
│   ├── site.config.ts        # 站点配置（域名、游戏信息、主题色）
│   └── seo.ts                # SEO 工具函数
├── public/                   # 静态资源
│   ├── favicon.ico
│   ├── og-image.png
│   ├── wrestlebros-desc-1.jpeg
│   ├── wrestlebros-desc-2.jpeg
│   └── wrestlebros-desc-3.jpeg
└── .env.example              # 环境变量模板
```

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 生产模式启动
npm run start
```

访问 [http://localhost:3000](http://localhost:3000) 预览。

## 环境变量

复制 `.env.example` 为 `.env.local`，按需填入：

```
NEXT_PUBLIC_GA_ID=           # Google Analytics 4 Measurement ID
NEXT_PUBLIC_ADSENSE_CLIENT_ID= # Google AdSense Publisher ID
```

## 部署

推荐使用 Vercel 部署：

1. 将仓库导入 Vercel
2. Framework Preset 自动选择 Next.js
3. 在项目设置中添加环境变量
4. 绑定域名后部署

## 自定义

### 配色

主题色在 `lib/site.config.ts` 的 `theme` 中定义：

- `primary` — 主色（按钮、链接高亮）
- `secondary` — 辅色
- `background` — 页面背景
- `surface` — 内容面板背景
- `textDark` — 正文文字色

### 图片

替换 `public/` 下的图片文件，并更新 `lib/site.config.ts` 中的 `coverImage` 路径。

### 游戏介绍

介绍内容集中在 `components/GameContent.tsx`，包含简介、玩法说明、操作按键、游戏特色和 FAQ。

## License

MIT
