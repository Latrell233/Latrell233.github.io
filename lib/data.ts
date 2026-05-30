// 示例数据 - 可替换为从 JSON 文件读取或 CMS 获取

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: 'released' | 'development' | 'concept'
  category: 'flagship' | 'project' | 'experiment'
  links: {
    github?: string
    demo?: string
  }
  metrics?: {
    mrr?: string
    users?: string
  }
  image?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: '财富自由之路',
    description: '一款基于“时间与复利”的阶梯式财务未来模拟器。通过可视化对撞，消除财务焦虑，提供即时掌控感。',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'development',
    category: 'flagship',
    links: { github: '#', demo: '#' },
    //metrics: { mrr: '$2.4k', users: '1,200+' },
    image: '/placeholder.svg?height=400&width=800',
  },
  {
    id: '2',
    title: 'LANchat',
    description: '局域网即时通讯工具，支持自动设备发现、文字聊天、语音通话和文件传输功能。',
    tech: ['Python', 'WebSocket', 'Zeroconf'],
    status: 'released',
    category: 'flagship',
    links: { github: 'https://github.com/Latrell233/LANChat'},
    // metrics: { users: '3,500+' },
    image: '/LANchat.png?height=600&width=1200',
  },
  // {
  //   id: '3',
  //   title: 'API Tester',
  //   description: '轻量级 API 调试工具',
  //   tech: ['Vue 3', 'Pinia', 'Axios'],
  //   status: 'development',
  //   category: 'project',
  //   links: { github: '#' },
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   id: '4',
  //   title: 'Code Snippets',
  //   description: '代码片段管理与分享平台',
  //   tech: ['Svelte', 'Supabase'],
  //   status: 'released',
  //   category: 'project',
  //   links: { github: '#', demo: '#' },
  //   metrics: { users: '850+' },
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   id: '5',
  //   title: 'Theme Studio',
  //   description: 'VS Code 主题可视化编辑器',
  //   tech: ['React', 'Monaco Editor'],
  //   status: 'concept',
  //   category: 'experiment',
  //   links: { github: '#' },
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   id: '6',
  //   title: 'AI 写作助手',
  //   description: '基于本地 LLM 的写作辅助工具',
  //   tech: ['Python', 'Ollama', 'FastAPI'],
  //   status: 'development',
  //   category: 'experiment',
  //   links: { github: '#' },
  //   image: '/placeholder.svg?height=200&width=300',
  // },
]

export const profile = {
  name: '澄森 Chengsen',
  tagline: 'Solo Builder',
  bio: 'Developer/Designer/Builder\n写代码、写文章、做产品',
  currentWork: '正在构建 《财富自由之路》',
  currentReading: '《The Psychology of Money》',
  philosophy: 'Never lose the control of your life.',
  learning: ['vibe coding', 'AI/ML', '系统设计'],
  hobbies: '健身、阅读、摄影',
  social: {
    github: 'https://github.com/Latrell233',
    twitter: 'https://x.com/Latrell233',
    email: 'Latrell233@qq.com',
  },
}
