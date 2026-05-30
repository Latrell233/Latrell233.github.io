'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, ExternalLink, Sparkles, Rocket, FlaskConical } from 'lucide-react'
import { projects, type Project } from '@/lib/data'
import { cn } from '@/lib/utils'

type Category = 'all' | 'flagship' | 'project' | 'experiment'

const categoryConfig: Record<Category, { label: string; icon: React.ReactNode }> = {
  all: { label: '全部', icon: null },
  flagship: { label: '主打产品', icon: <Rocket className="h-3.5 w-3.5" /> },
  project: { label: '项目', icon: <Sparkles className="h-3.5 w-3.5" /> },
  experiment: { label: '实验', icon: <FlaskConical className="h-3.5 w-3.5" /> },
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    released: { label: 'Live', className: 'bg-status-released/20 text-status-released' },
    development: { label: 'Dev', className: 'bg-status-development/20 text-status-development' },
    concept: { label: 'Idea', className: 'bg-muted text-muted-foreground' },
  }
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.concept
  return (
    <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', config.className)}>
      {config.label}
    </span>
  )
}

function ProductCard({ project }: { project: Project }) {
  const isMain = project.category === 'flagship'

  return (
    <article
      className={cn(
        'group relative bg-card rounded-xl overflow-hidden border border-border',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30',
        isMain && 'md:col-span-2'
      )}
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden', isMain ? 'h-48 md:h-56' : 'h-40')}>
        <Image
          src={project.image || '/placeholder.svg?height=200&width=300'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            {project.metrics.mrr && (
              <span className="text-xs font-medium px-2 py-1 bg-status-released/90 text-white rounded-md">
                {project.metrics.mrr}/mo
              </span>
            )}
            {project.metrics.users && (
              <span className="text-xs font-medium px-2 py-1 bg-background/80 backdrop-blur-sm rounded-md">
                {project.metrics.users} users
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className={cn('font-semibold', isMain ? 'text-xl' : 'text-lg')}>
            {project.title}
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.slice(0, isMain ? 4 : 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 bg-muted rounded-md text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > (isMain ? 4 : 3) && (
            <span className="text-xs px-2 py-0.5 text-muted-foreground">
              +{project.tech.length - (isMain ? 4 : 3)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              访问
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              源码
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Sort: flagship first, then by status
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.category === 'flagship' && b.category !== 'flagship') return -1
    if (a.category !== 'flagship' && b.category === 'flagship') return 1
    return 0
  })

  return (
    <section id="products" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Products <span className="text-muted-foreground font-normal">/ 产品</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
            {(Object.keys(categoryConfig) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all',
                  activeCategory === cat
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {categoryConfig[cat].icon}
                {categoryConfig[cat].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <ProductCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
