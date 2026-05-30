import { Github, Twitter, Mail } from 'lucide-react'
import { profile } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          About <span className="text-muted-foreground font-normal">/ 关于我</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Philosophy */}
            <div>
              <h3 className="font-semibold text-lg mb-3">技术哲学</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {profile.philosophy}
              </p>
            </div>

            {/* Current Learning */}
            <div>
              <h3 className="font-semibold text-lg mb-3">当前学习</h3>
              <ul className="space-y-2 text-muted-foreground">
                {profile.learning.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Reading */}
            <div>
              <h3 className="font-semibold text-lg mb-3">当前阅读</h3>
              <p className="text-muted-foreground">{profile.currentReading}</p>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="font-semibold text-lg mb-3">线下生活</h3>
              <p className="text-muted-foreground">{profile.hobbies}</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-3">联系方式</h3>
              <div className="flex items-center gap-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/60 dark:bg-white/[0.08] backdrop-blur-sm border border-white/50 dark:border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/60 dark:bg-white/[0.08] backdrop-blur-sm border border-white/50 dark:border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.social.email}`}
                  className="p-3 rounded-lg bg-white/60 dark:bg-white/[0.08] backdrop-blur-sm border border-white/50 dark:border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
