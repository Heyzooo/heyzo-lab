import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[100vh] flex items-center justify-center hero-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 animate-slide-in">
            <span className="gradient-text text-glow">Happy Lab</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            毎日をちょっと
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ハッピー </span>
            に
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.4s' }}>
            日常の小さな瞬間に幸せを見つけるお手伝いをする
            <br />
            クリエイティブなツールとアプリを創造しています
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover-scale overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                プロジェクトを探索
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <a 
              href="https://github.com/Heyzooo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass border border-gray-700 rounded-full font-semibold text-lg hover-scale flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">What I Create</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tool Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative glass rounded-2xl p-8 hover-lift h-full">
                <div className="text-5xl mb-6">🛠️</div>
                <h3 className="text-2xl font-bold mb-4">便利なツール</h3>
                <p className="text-gray-400 mb-6">
                  日常をスムーズにする小さなツールたち。生産性を高めながら、使う楽しさも追求。
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">▸</span>
                    タスク管理ツール
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">▸</span>
                    時間追跡アプリ
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">▸</span>
                    カラーパレット生成
                  </li>
                </ul>
              </div>
            </div>

            {/* App Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative glass rounded-2xl p-8 hover-lift h-full">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold mb-4">楽しいアプリ</h3>
                <p className="text-gray-400 mb-6">
                  毎日に彩りを加えるアプリケーション。心地よいUXと美しいデザインを重視。
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    気分トラッカー
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    習慣化サポート
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">▸</span>
                    日記アプリ
                  </li>
                </ul>
              </div>
            </div>

            {/* Creative Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative glass rounded-2xl p-8 hover-lift h-full">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold mb-4">クリエイティブ</h3>
                <p className="text-gray-400 mb-6">
                  音楽や動画など創造的なコンテンツ。感性を刺激する作品づくり。
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">▸</span>
                    アンビエント音楽
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">▸</span>
                    モーショングラフィックス
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">▸</span>
                    インタラクティブアート
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Latest Projects</span>
            </h2>
            <p className="text-xl text-gray-400">最新の作品をチェック</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Project Card 1 */}
            <Link href="/projects/happy-timer" className="group">
              <div className="relative overflow-hidden rounded-2xl h-64 glass-dark hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse-glow">⏰</div>
                    <h3 className="text-2xl font-bold mb-2">Happy Timer</h3>
                    <p className="text-gray-400">ポモドーロタイマーに癒し要素を追加</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project Card 2 */}
            <Link href="/projects/mood-tracker" className="group">
              <div className="relative overflow-hidden rounded-2xl h-64 glass-dark hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse-glow">😊</div>
                    <h3 className="text-2xl font-bold mb-2">Mood Tracker</h3>
                    <p className="text-gray-400">毎日の気分を記録して振り返る</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-4 glass border border-gray-700 rounded-full font-semibold text-lg hover-scale"
            >
              すべてのプロジェクトを見る
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}