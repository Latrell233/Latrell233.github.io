import type { Metadata } from 'next'
import { Inter, Noto_Sans_SC, Fira_Code } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  weight: ['400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: '澄森实验室',
  description: '独立建设者 — 写代码、写文章、做产品',
  keywords: ['Solo Builder', '独立开发者', 'Developer', 'Builder'],
  authors: [{ name: '澄森 Chengsen' }],
  openGraph: {
    title: '澄森实验室',
    description: '独立建设者 — 写代码、写文章、做产品',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '澄森实验室',
    description: '独立建设者 — 写代码、写文章、做产品',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}
