# 个人主页维护指南

本文档说明如何维护和更新这个个人主页网站。

## 目录结构

```
├── app/                    # Next.js App Router 页面
│   ├── articles/[slug]/    # 文章详情页（动态路由）
│   ├── globals.css         # 全局样式与主题配置
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── components/             # React 组件
│   ├── header.tsx          # 导航栏
│   ├── hero.tsx            # 首屏区域（头像、介绍）
│   ├── products.tsx        # 产品展示模块
│   ├── writing.tsx         # 文章列表
│   ├── about.tsx           # 关于我
│   ├── newsletter.tsx      # 订阅组件
│   ├── footer.tsx          # 页脚
│   └── side-decorations.tsx # 装饰元素
├── content/                # 内容文件夹
│   └── articles/           # Markdown 文章
├── lib/                    # 工具函数
│   ├── data.ts             # 产品/个人数据
│   ├── articles.ts         # 文章读取工具
│   └── utils.ts            # 通用工具
└── public/                 # 静态资源
```

---

## 常见更新操作

### 1. 添加/更新文章

文章存放在 `content/articles/` 目录，使用 Markdown 格式。

**步骤：**

1. 在 `content/articles/` 目录创建新的 `.md` 文件
2. 文件名即为文章的 URL slug（如 `my-new-post.md` 对应 `/articles/my-new-post`）
3. 在文件顶部添加 frontmatter 元数据

**Markdown 文件格式：**

```markdown
---
title: 文章标题
date: '2025-06-01'
tags:
  - 标签1
  - 标签2
summary: 文章摘要，显示在列表页
---

# 文章正文

正文内容使用标准 Markdown 语法...
```

**支持的 frontmatter 字段：**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | 是 | 文章标题 |
| date | string | 是 | 发布日期（YYYY-MM-DD） |
| tags | string[] | 否 | 标签数组 |
| summary | string | 否 | 摘要文本 |

---

### 2. 更新产品/项目数据

编辑 `lib/data.ts` 文件中的 `projects` 数组。

**产品数据结构：**

```typescript
{
  id: '1',                              // 唯一 ID
  title: 'DevFlow',                     // 产品名称
  description: '产品描述...',            // 简短描述
  tech: ['Next.js', 'TypeScript'],      // 技术栈标签
  status: 'released',                   // 状态：released | development | concept
  category: 'flagship',                 // 分类：flagship | project | experiment
  links: { 
    github: 'https://...',              // GitHub 链接（可选）
    demo: 'https://...'                 // 演示链接（可选）
  },
  metrics: {                            // 指标数据（可选）
    mrr: '$2.4k',                       // 月收入
    users: '1,200+'                     // 用户数
  },
  image: '/images/product.png',         // 产品图片路径
}
```

**状态说明：**
- `released` - 已发布（绿色标签）
- `development` - 开发中（黄色标签）
- `concept` - 概念/实验（灰色标签）

**分类说明：**
- `flagship` - 主打产品（大卡片展示）
- `project` - 常规项目
- `experiment` - 实验项目

---

### 3. 更新个人信息

编辑 `lib/data.ts` 文件中的 `profile` 对象。

```typescript
export const profile = {
  name: '你的名字',
  tagline: 'Solo Builder',
  bio: '个人简介...',
  currentWork: '正在构建 XXX',
  currentReading: '《书名》',
  philosophy: '个人理念...',
  learning: ['学习中的内容1', '学习中的内容2'],
  hobbies: '爱好描述',
  social: {
    github: 'https://github.com/username',
    twitter: 'https://x.com/username',
    email: 'your@email.com',
  },
}
```

---

### 4. 更换头像和横幅

1. 将图片文件放入 `public/` 目录（如 `public/avatar.jpg`、`public/banner.jpg`）
2. 编辑 `components/hero.tsx`，替换占位内容：

```tsx
// 头像
<Image src="/avatar.jpg" alt="头像" fill className="object-cover" />

// 横幅
<Image src="/banner.jpg" alt="横幅" fill className="object-cover" />
```

---

### 5. 修改主题颜色

编辑 `app/globals.css` 中的 CSS 变量：

```css
/* 亮色主题 */
:root {
  --primary: #0066CC;        /* 主色调 */
  --background: #FFFFFF;     /* 背景色 */
  --foreground: #1F2937;     /* 文字色 */
  /* ... */
}

/* 暗色主题 */
.dark {
  --primary: #4B9FFF;
  --background: #1A1A1A;
  --foreground: #E5E7EB;
  /* ... */
}
```

---

### 6. 修改导航链接

编辑 `components/header.tsx` 中的 `navItems` 数组：

```typescript
const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
]
```

---

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署，每次推送 `main` 分支会自动更新

### 本地开发

```bash
# 安装依赖（如未全局安装 pnpm，使用 npx pnpm）
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

> 如果提示 `pnpm: command not found`，将命令中的 `pnpm` 替换为 `npx pnpm` 即可。

---

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS v4
- **组件**: shadcn/ui
- **Markdown**: gray-matter + remark
- **主题**: next-themes

---

## 注意事项

1. **文章文件名**：使用小写字母、数字和连字符，避免空格和特殊字符
2. **图片优化**：建议使用 WebP 格式，控制文件大小
3. **SEO**：记得在文章中填写 `summary` 字段，用于搜索引擎摘要
4. **缓存**：文章内容在构建时静态生成，更新后需要重新部署

---

## 常见问题

**Q: 文章没有显示在列表中？**  
A: 确保文件以 `.md` 为后缀名，且 frontmatter 格式正确（顶部 `---` 包裹的部分不能有语法错误）。

**Q: 样式没有生效？**  
A: 清除浏览器缓存或重启开发服务器。

**Q: 如何添加新的页面？**  
A: 在 `app/` 目录下创建新文件夹和 `page.tsx` 文件。

---

如有其他问题，欢迎提 Issue 或联系我。


1. 个人资料（5分钟）
编辑 lib/data.ts 的 profile 对象，把真实链接填上：

social.github / social.twitter / social.email — 目前是 github.com、x.com、hello@example.com
currentWork、currentReading、learning、hobbies — 可以顺便更新成当前状态
2. 头像和横幅（5分钟）
把两张图片放进 public/，然后在 hero.tsx 里取消注释替换：

头像：正方形，建议 400x400 以上 → 放 public/avatar.jpg
横幅：宽幅横图，建议 1200x600 以上 → 放 public/banner.jpg
编辑 hero.tsx：找到 {/* Example: <Image ... /> */} 两处，取消注释并删掉占位 div
3. 产品/项目（10-20分钟）
编辑 lib/data.ts 的 projects 数组。当前 6 个全是虚构项目且链接都是 #。建议：

只保留你真实做过的项目，删除不存在的
每个项目替换真实的 demo 和 github 链接
产品截图放到 public/ 下，更新 image 字段
metrics（MRR、用户数）有就填，没有就删掉，不会显示
4. 文章（按需）
当前 content/articles/ 下有 2 篇示例，你可以：

删除示例文章，换成自己的真实文章（遵循 MAINTENANCE.md 的 frontmatter 格式）
data.ts 里的 articles 静态数组是死代码，文章只需要在 content/articles/ 放 .md 文件即可

问题	修复
文件名有空格 → 404	Vibe Coding 101.md → vibe-coding-101.md
PNG 图片放在 articles 目录	移到 public/vibe-coding-101.png
Obsidian 语法 ![[]]	改为标准 Markdown ![]()
日期不带引号	加上引号避免 YAML 解析为 Date 对象

lsof -ti:3000 | xargs kill
lsof -ti:3000 | xargs kill 2>/dev/null && echo "已关停" || echo "3000端口没有运行中的服务器"