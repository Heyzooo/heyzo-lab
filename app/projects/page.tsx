'use client'

import { useState } from 'react'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  description: string
  category: 'tool' | 'app' | 'creative'
  tags: string[]
  icon: string
  gradient: string
}

const projects: Project[] = [
  {
    id: 'happy-timer',
    title: 'Happy Timer',
    description: 'ポモドーロタイマーに癒し要素を追加。作業中も心地よく。',
    category: 'tool',
    tags: ['生産性', 'タイマー', 'リラックス'],
    icon: '⏰',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'mood-tracker',
    title: 'Mood Tracker',
    description: '毎日の気分を記録して、幸せパターンを発見。',
    category: 'app',
    tags: ['健康', 'メンタルヘルス', '記録'],
    icon: '😊',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'gratitude-journal',
    title: 'Gratitude Journal',
    description: '感謝の気持ちを綴る日記アプリ。小さな幸せを見つけよう。',
    category: 'app',
    tags: ['日記', 'マインドフルネス', '習慣'],
    icon: '📝',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'color-palette-generator',
    title: 'Happy Colors',
    description: '気分を上げるカラーパレットジェネレーター。',
    category: 'tool',
    tags: ['デザイン', 'カラー', 'クリエイティブ'],
    icon: '🎨',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'meditation-sounds',
    title: 'Calm Sounds',
    description: 'リラックスできる環境音を生成するツール。',
    category: 'creative',
    tags: ['音楽', 'リラックス', '瞑想'],
    icon: '🎵',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'habit-builder',
    title: 'Habit Builder',
    description: '良い習慣を楽しく身につけるアプリ。',
    category: 'app',
    tags: ['習慣', '自己改善', 'ゲーミフィケーション'],
    icon: '🌱',
    gradient: 'from-teal-600 to-green-600'
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tool' | 'app' | 'creative'>('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 hero-gradient">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-in">
            <span className="gradient-text text-glow">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            日常に小さな幸せをもたらすプロジェクト
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'glass border border-gray-700 hover:border-purple-500'
              }`}
            >
              すべて
              <span className="ml-2 text-sm opacity-70">({projects.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('tool')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'tool' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'glass border border-gray-700 hover:border-purple-500'
              }`}
            >
              🛠️ ツール
              <span className="ml-2 text-sm opacity-70">({projects.filter(p => p.category === 'tool').length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('app')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'app' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'glass border border-gray-700 hover:border-purple-500'
              }`}
            >
              📱 アプリ
              <span className="ml-2 text-sm opacity-70">({projects.filter(p => p.category === 'app').length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('creative')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'creative' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'glass border border-gray-700 hover:border-purple-500'
              }`}
            >
              🎨 クリエイティブ
              <span className="ml-2 text-sm opacity-70">({projects.filter(p => p.category === 'creative').length})</span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity" 
                     style={{ backgroundImage: `linear-gradient(to right, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})` }}></div>
                <div className="relative glass rounded-2xl overflow-hidden hover-lift">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-7xl z-10 animate-float">{project.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs glass border border-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Coming Soon</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="text-4xl mb-3 opacity-50">🎮</div>
                <h3 className="font-semibold mb-2 text-gray-300">Happy Games</h3>
                <p className="text-sm text-gray-500">楽しくてポジティブなミニゲーム</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="text-4xl mb-3 opacity-50">🎬</div>
                <h3 className="font-semibold mb-2 text-gray-300">Motion Works</h3>
                <p className="text-sm text-gray-500">心地よいアニメーション作品</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="text-4xl mb-3 opacity-50">🤖</div>
                <h3 className="font-semibold mb-2 text-gray-300">AI Assistant</h3>
                <p className="text-sm text-gray-500">優しく寄り添うAIアシスタント</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}