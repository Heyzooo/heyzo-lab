import { notFound } from 'next/navigation'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'tool' | 'app' | 'creative'
  tags: string[]
  icon: string
  color: string
  features: string[]
  techStack: string[]
  status: 'development' | 'beta' | 'released'
  demoUrl?: string
  githubUrl?: string
}

const projects: Record<string, Project> = {
  'happy-timer': {
    id: 'happy-timer',
    title: 'Happy Timer',
    description: 'ポモドーロタイマーに癒し要素を追加。作業中も心地よく。',
    longDescription: 'Happy Timerは、従来のポモドーロタイマーに癒し要素を加えた新しいタイプの作業支援ツールです。作業中にリラックスできる音楽や、達成感を感じられるアニメーションなど、生産性を保ちながら心地よく作業できる工夫が満載です。',
    category: 'tool',
    tags: ['生産性', 'タイマー', 'リラックス'],
    icon: '⏰',
    color: 'from-pink-400 to-pink-600',
    features: [
      'カスタマイズ可能な作業・休憩時間',
      'リラックスできるBGMの自動再生',
      '達成度を可視化するプログレスバー',
      '作業履歴の記録と分析',
      'かわいいアニメーションエフェクト'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    status: 'beta',
    demoUrl: '#',
    githubUrl: '#'
  },
  'mood-tracker': {
    id: 'mood-tracker',
    title: 'Mood Tracker',
    description: '毎日の気分を記録して、幸せパターンを発見。',
    longDescription: 'Mood Trackerは、日々の気分を簡単に記録し、長期的な傾向を分析できるアプリです。シンプルな5段階評価と、詳細なメモ機能により、自分の感情パターンを理解し、より良い生活習慣を見つけるお手伝いをします。',
    category: 'app',
    tags: ['健康', 'メンタルヘルス', '記録'],
    icon: '😊',
    color: 'from-blue-400 to-blue-600',
    features: [
      '直感的な5段階の気分評価',
      '日記機能付きメモ',
      '月間・年間の気分トレンドグラフ',
      'ポジティブな日のパターン分析',
      'リマインダー通知機能'
    ],
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    status: 'development',
    githubUrl: '#'
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects[params.id]
  
  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        プロジェクト一覧に戻る
      </Link>

      <div className="bg-white rounded-3xl overflow-hidden card-shadow">
        <div className={`h-64 bg-gradient-to-r ${project.color} flex items-center justify-center text-8xl`}>
          {project.icon}
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
              project.status === 'released' ? 'bg-green-100 text-green-800' :
              project.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {project.status === 'released' ? 'リリース済み' :
               project.status === 'beta' ? 'ベータ版' : '開発中'}
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          
          <div className="prose max-w-none mb-12">
            <p>{project.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">主な機能</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">技術スタック</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-100 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover-float"
              >
                デモを見る
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover-float"
              >
                GitHubで見る
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}