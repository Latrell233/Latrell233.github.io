import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Writing } from '@/components/writing'
import { Newsletter } from '@/components/newsletter'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { SideDecorations, MobileDecorations } from '@/components/side-decorations'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative Side Elements */}
      <SideDecorations />
      <MobileDecorations />
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Writing />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
