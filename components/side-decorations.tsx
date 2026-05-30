'use client'

import { useEffect, useState } from 'react'

// 装饰性边栏元素 - 让页面更灵动有趣
export function SideDecorations() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Left Side Decorations */}
      <div className="absolute left-0 top-0 w-24 md:w-32 h-full">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        
        {/* Floating Dots */}
        <div 
          className="absolute left-6 md:left-10 w-2 h-2 rounded-full bg-primary/40"
          style={{ top: `${150 + Math.sin(scrollY * 0.003) * 20}px` }}
        />
        <div 
          className="absolute left-10 md:left-14 w-1.5 h-1.5 rounded-full bg-accent/30"
          style={{ top: `${350 + Math.cos(scrollY * 0.002) * 30}px` }}
        />
        <div 
          className="absolute left-4 md:left-8 w-1 h-1 rounded-full bg-status-released/50"
          style={{ top: `${550 + Math.sin(scrollY * 0.004) * 15}px` }}
        />
        
        {/* Geometric Shapes */}
        <div 
          className="absolute left-4 md:left-6 w-6 h-6 border border-border/40 rounded-lg"
          style={{ 
            top: `${250 + scrollY * 0.05}px`,
            transform: `rotate(${scrollY * 0.02}deg)`,
            opacity: 0.5
          }}
        />
        <div 
          className="absolute left-8 md:left-12 w-4 h-4 border border-primary/20"
          style={{ 
            top: `${650 + scrollY * 0.03}px`,
            transform: `rotate(${45 + scrollY * 0.015}deg)`,
            opacity: 0.6
          }}
        />
      </div>

      {/* Right Side Decorations */}
      <div className="absolute right-0 top-0 w-24 md:w-32 h-full">
        {/* Vertical Line */}
        <div className="absolute right-8 md:right-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        
        {/* Floating Dots */}
        <div 
          className="absolute right-6 md:right-10 w-2 h-2 rounded-full bg-accent/40"
          style={{ top: `${200 + Math.cos(scrollY * 0.003) * 25}px` }}
        />
        <div 
          className="absolute right-10 md:right-14 w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{ top: `${400 + Math.sin(scrollY * 0.002) * 20}px` }}
        />
        <div 
          className="absolute right-5 md:right-9 w-1 h-1 rounded-full bg-status-development/50"
          style={{ top: `${600 + Math.cos(scrollY * 0.004) * 18}px` }}
        />
        
        {/* Geometric Shapes */}
        <div 
          className="absolute right-6 md:right-10 w-8 h-8 border border-border/30 rounded-full"
          style={{ 
            top: `${300 + scrollY * 0.04}px`,
            opacity: 0.4
          }}
        />
        <div 
          className="absolute right-4 md:right-6 w-3 h-3 bg-primary/10 rounded-sm"
          style={{ 
            top: `${700 + scrollY * 0.02}px`,
            transform: `rotate(${-scrollY * 0.02}deg)`,
            opacity: 0.6
          }}
        />
      </div>

      {/* Background Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          left: '-10%',
          top: `${100 + scrollY * 0.1}px`,
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          right: '-5%',
          top: `${500 + scrollY * 0.08}px`,
        }}
      />
    </div>
  )
}

// 简化版装饰条纹 - 用于移动端
export function MobileDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden md:hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Subtle corner decorations */}
      <div className="absolute top-20 left-2 w-1 h-8 bg-gradient-to-b from-primary/20 to-transparent rounded-full" />
      <div className="absolute top-40 right-2 w-1 h-6 bg-gradient-to-b from-accent/20 to-transparent rounded-full" />
    </div>
  )
}
