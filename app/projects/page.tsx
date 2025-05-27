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
  color: string
}

const projects: Project[] = [
  {
    id: 'happy-timer',
    title: 'Happy Timer',
    description: 'ポモドーロタイマーに癒し要素を追加。作業中も心地よく。',
    category: 'tool',
    tags: ['生産性', 'タイマー', 'リラックス'],
    icon: '⏰',
    color: 'from-pink-400 to-pink-600'
  },
  {
    id: 'mood-tracker',
    title: 'Mood Tracker',
    description: '毎日の気分を記録して、幸せパターンを発見。',
    category: 'app',
    tags: ['健康', 'メンタルヘルス', '記録'],
    icon: '😊',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'gratitude-journal',
    title: 'Gratitude Journal',
    description: '感謝の気持ちを綴る日記アプリ。小さな幸せを見つけよう。',
    category: 'app',
    tags: ['日記', 'マインドフルネス', '習慣'],
    icon: '📝',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'color-palette-generator',
    title: 'Happy Colors',
    description: '気分を上げるカラーパレットジェネレーター。',
    category: 'tool',
    tags: ['デザイン', 'カラー', 'クリエイティブ'],
    icon: '🎨',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'meditation-sounds',
    title: 'Calm Sounds',
    description: 'リラックスできる環境音を生成するツール。',
    category: 'creative',
    tags: ['音楽', 'リラックス', '瞑想'],
    icon: '🎵',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'habit-builder',
    title: 'Habit Builder',
    description: '良い習慣を楽しく身につけるアプリ。',
    category: 'app',
    tags: ['習慣', '自己改善', 'ゲーミフィケーション'],
    icon: '🌱',
    color: 'from-teal-400 to-teal-600'
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tool' | 'app' | 'creative'>('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Projects
        </h1>
        <p className="text-xl text-gray-600">
          日常に小さな幸せをもたらすプロジェクト
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setSelectedCategory('tool')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === 'tool' 
              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          🛠️ ツール
        </button>
        <button
          onClick={() => setSelectedCategory('app')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === 'app' 
              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          📱 アプリ
        </button>
        <button
          onClick={() => setSelectedCategory('creative')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === 'creative' 
              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          🎵 クリエイティブ
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="bg-white rounded-2xl overflow-hidden card-shadow hover-float group"
          >
            <div className={`h-40 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl`}>
              {project.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}