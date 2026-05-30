'use client'

import { useState } from 'react'
import { Mail, ArrowRight, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 p-6 sm:p-8 bg-card border border-border rounded-2xl">
          {/* Icon */}
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>

          {/* Text */}
          <div>
            <p className="font-semibold text-lg">订阅周报</p>
            <p className="text-sm text-muted-foreground mt-1">
              每周分享独立开发与技术探索
            </p>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center gap-2 text-status-released py-2">
              <Check className="h-5 w-5" />
              <span className="font-medium">订阅成功！</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-background border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
              >
                {status === 'loading' ? (
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    订阅
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
