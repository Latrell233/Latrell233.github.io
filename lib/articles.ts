import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
}

export interface Article extends ArticleMeta {
  content: string
}

/**
 * 获取所有文章的元数据（用于列表页）
 */
export function getAllArticles(): ArticleMeta[] {
  // 检查目录是否存在
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      const date = data.date
        ? typeof data.date === 'string'
          ? data.date
          : data.date.toISOString().split('T')[0]
        : ''

      return {
        slug,
        title: data.title || slug,
        date,
        tags: data.tags || [],
        summary: data.summary || '',
      }
    })

  // 按日期降序排列
  return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * 获取所有文章的 slug（用于生成静态路径）
 */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

/**
 * 根据 slug 获取单篇文章的完整内容
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // 使用 remark 将 Markdown 转为 HTML
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  const date = data.date
    ? typeof data.date === 'string'
      ? data.date
      : data.date.toISOString().split('T')[0]
    : ''

  return {
    slug,
    title: data.title || slug,
    date,
    tags: data.tags || [],
    summary: data.summary || '',
    content: contentHtml,
  }
}
