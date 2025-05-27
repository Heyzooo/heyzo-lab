import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <div className="mb-8 animate-float">
          <span className="text-8xl">✨</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          毎日をちょっとハッピーに
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          日常の小さな瞬間に幸せを見つけるお手伝いをする
          ツールやアプリを作っています
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover-float hover:shadow-lg transition-all"
        >
          プロジェクトを見る
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-8 rounded-2xl card-shadow hover-float text-center">
          <div className="text-5xl mb-4">🛠️</div>
          <h3 className="text-xl font-bold mb-2">便利なツール</h3>
          <p className="text-gray-600">
            日常をスムーズにする小さなツールたち
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl card-shadow hover-float text-center">
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">楽しいアプリ</h3>
          <p className="text-gray-600">
            毎日に彩りを加えるアプリケーション
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl card-shadow hover-float text-center">
          <div className="text-5xl mb-4">🎵</div>
          <h3 className="text-xl font-bold mb-2">クリエイティブ</h3>
          <p className="text-gray-600">
            音楽や動画など創造的なコンテンツ
          </p>
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">最新のプロジェクト</h2>
        <p className="text-gray-600 mb-8">
          最近取り組んでいるプロジェクトをチェック
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl hover-float">
            <div className="bg-gradient-to-r from-primary to-secondary h-32 rounded-lg mb-4"></div>
            <h3 className="font-bold mb-2">Happy Timer</h3>
            <p className="text-sm text-gray-600">ポモドーロタイマーに癒し要素を追加</p>
          </div>
          <div className="bg-white p-6 rounded-xl hover-float">
            <div className="bg-gradient-to-r from-secondary to-accent h-32 rounded-lg mb-4"></div>
            <h3 className="font-bold mb-2">Mood Tracker</h3>
            <p className="text-sm text-gray-600">毎日の気分を記録して振り返る</p>
          </div>
        </div>
      </section>
    </div>
  )
}