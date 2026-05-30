import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllArticles } from '@/lib/articles'

export function Writing() {
  const articles = getAllArticles()

  // 如果没有文章，显示提示
  if (articles.length === 0) {
    return (
      <section id="writing" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Writing <span className="text-muted-foreground font-normal">/ 文章</span>
          </h2>
          <p className="text-muted-foreground">
            暂无文章。请在 <code className="px-1.5 py-0.5 bg-muted rounded text-sm">content/articles/</code> 目录下添加 Markdown 文件。
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="writing" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Writing <span className="text-muted-foreground font-normal">/ 文章</span>
        </h2>

        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-6 py-4 border-b border-border last:border-b-0"
            >
              {/* Date */}
              <time className="text-sm text-muted-foreground shrink-0 md:w-28">
                {article.date}
              </time>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  <Link href={`/articles/${article.slug}`} className="hover:underline underline-offset-2">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  <Link
                    href={`/articles/${article.slug}`}
                    className="ml-auto text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1"
                  >
                    阅读
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
