import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section>
      {/* Top Banner — full-width, gradient fade at bottom */}
      <div className="relative w-full h-48 sm:h-56 md:h-72 overflow-hidden bg-muted">
        {/* Light mode banner */}
        <Image src="/Banner_light.png" alt="Banner" fill className="object-cover dark:hidden" priority />
        {/* Dark mode banner */}
        <Image src="/Banner_dark.png" alt="Banner" fill className="object-cover hidden dark:block" priority />

        {/* Gradient fade to background */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Info Section — shifted up so avatar overlaps banner, text aligns at same level */}
      <div className="max-w-5xl mx-auto px-4 pb-12 -mt-12 md:-mt-14 relative z-10">
        <div className="flex items-start md:items-end gap-4 md:gap-8">
          {/* Avatar — right side on desktop (order-2) */}
          <div className="shrink-0 md:order-2">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-muted border-[3px] border-background overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs md:text-sm">
                头像
              </div>
              {<Image src="/avatar.jpg" alt="Avatar" fill className="object-cover" /> }
            </div>
          </div>

          {/* Text — left on desktop (order-1) */}
          <div className="flex-1 space-y-3 md:order-1 md:pb-4 min-w-0">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-lg">
              {profile.tagline} — {profile.bio}
            </p>

            {/* Dynamic Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-status-released animate-pulse" />
                {profile.currentWork}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>在读：{profile.currentReading}</span>
            </div>

            {/* CTAs — horizontal row, compact on mobile */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                浏览作品
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                关注我
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
