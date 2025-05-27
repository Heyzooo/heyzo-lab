import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative gradient-mesh">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fadeIn">
              愚痴で終わるか、<br />
              <span className="gradient-text">現実を変えるか。</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              世界中のスペシャリストはもうあなたの手の中にいる。<br />
              使うか使わないかは、あなた次第。
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <Link href="#services" className="btn-primary">
                サービスを見る
              </Link>
              <Link href="#contact" className="btn-secondary">
                無料相談する
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* AI Era Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              AIが変えた、<span className="gradient-text">新しい創造の時代</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              世界トップレベルのデザイナー、エンジニア、マーケッターが、<br />
              あなたの指示を待っています。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-semibold text-lg mb-2">デザイナー</h3>
                <p className="text-gray-600 text-sm">
                  美しいUIやロゴを瞬時に生成
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="font-semibold text-lg mb-2">エンジニア</h3>
                <p className="text-gray-600 text-sm">
                  アプリやWebサイトを高速開発
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-lg mb-2">マーケッター</h3>
                <p className="text-gray-600 text-sm">
                  効果的な戦略とコンテンツ作成
                </p>
              </div>
            </div>
            <p className="mt-12 text-lg text-gray-700 font-medium">
              指示があれば、24時間365日、彼らはあなたの力となってくれるでしょう。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">サービス内容</span>
            </h2>
            <p className="text-lg text-gray-600">
              お悩み相談から問題解決まで、トータルでサポートします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="text-3xl mb-4">💭</div>
              <h3 className="heading-md mb-4">想いの深掘り</h3>
              <p className="text-gray-600 mb-4">
                まずは、あなたが本当にやりたいことは何なのかを一緒に探します。
                漠然とした想いを、具体的な目標に変えていきます。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>日常の困りごとの整理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>人生の夢や目標の明確化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>実現可能な計画の立案</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="heading-md mb-4">形にする支援</h3>
              <p className="text-gray-600 mb-4">
                システムが必要な場合は、アプリやWebサイト、ツールを作成します。
                ご自身で作りたい場合は、その支援も行います。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>アプリ・Webサイト開発</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>業務効率化ツール作成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>開発スキルの習得支援</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">実績</span>
            </h2>
            <p className="text-lg text-gray-600">
              実際に問題を解決した事例
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-6xl">🧘‍♀️</div>
                <div className="flex-1">
                  <h3 className="heading-md mb-4">朝ヨガアラームアプリ</h3>
                  <p className="text-gray-600 mb-4">
                    「朝起きたときにヨガをやりたいので、時間になったらYouTube動画を再生するアラームアプリを作ってほしい」
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>結果：</strong>アプリ開発は未経験でしたが、約1週間でアプリを完成。
                      コードは1行も書かずに実現しました。
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    やりたいことを明確にし、最高のチームメンバーに伝える。<br />
                    これで想像の世界にあるものを現実に持ってこれるようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">プロセス</span>
            </h2>
            <p className="text-lg text-gray-600">
              あなたの想いを形にする3つのステップ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">ヒアリング</h3>
              <p className="text-gray-600">
                あなたの想いや課題を<br />じっくりお聞きします
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">プランニング</h3>
              <p className="text-gray-600">
                最適な解決方法を<br />一緒に考えます
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">実現</h3>
              <p className="text-gray-600">
                AIの力を活用して<br />スピーディーに形にします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding gradient-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              まずは無料相談から
            </h2>
            <p className="text-xl mb-8 opacity-90">
              あなたの「やりたい」を聞かせてください。<br />
              一緒に最適な解決方法を見つけましょう。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:hello@example.com" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-1"
              >
                メールで相談する
              </a>
              <a 
                href="#" 
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}