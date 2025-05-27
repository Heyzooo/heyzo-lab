import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative gradient-mesh">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-8 md:mb-10 animate-fadeIn leading-tight">
              <span className="block">愚痴で終わるか、</span>
              <span className="gradient-text block">現実を変えるか。</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 animate-fadeIn max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              <span className="block md:inline">世界中のスペシャリストは</span>
              <span className="block md:inline">もうあなたの手の中にいる。</span>
              <span className="block mt-2 md:mt-0 md:block">使うか使わないかは、あなた次第。</span>
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
            <p className="text-base md:text-lg text-gray-600 mb-12 md:mb-16 leading-relaxed">
              <span className="block md:inline">世界トップレベルのデザイナー、</span>
              <span className="block md:inline">エンジニア、マーケッターが、</span>
              <span className="block mt-2 md:mt-0">あなたの指示を待っています。</span>
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">デザイナー</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  美しいUIやロゴを<br className="md:hidden" />瞬時に生成
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">エンジニア</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  アプリやWebサイトを<br className="md:hidden" />高速開発
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">マーケッター</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  効果的な戦略と<br className="md:hidden" />コンテンツ作成
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
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">想いの深掘り</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="block">まずは、あなたが本当にやりたいことは</span>
                <span className="block">何なのかを一緒に探します。</span>
                <span className="block mt-3">漠然とした想いを、</span>
                <span className="block">具体的な目標に変えていきます。</span>
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

            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">形にする支援</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="block">システムが必要な場合は、</span>
                <span className="block">アプリやWebサイト、ツールを作成。</span>
                <span className="block mt-3">ご自身で作りたい場合は、</span>
                <span className="block">その支援も行います。</span>
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
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="heading-md mb-4">朝ヨガアラームアプリ</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="block">「朝起きたときにヨガをやりたいので、</span>
                    <span className="block">時間になったらYouTube動画を再生する</span>
                    <span className="block">アラームアプリを作ってほしい」</span>
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>結果：</strong>アプリ開発は未経験でしたが、約1週間でアプリを完成。
                      コードは1行も書かずに実現しました。
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    <span className="block">やりたいことを明確にし、</span>
                    <span className="block">最高のチームメンバーに伝える。</span>
                    <span className="block mt-2">これで想像の世界にあるものを</span>
                    <span className="block">現実に持ってこれるようになります。</span>
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
              <p className="text-gray-600 leading-relaxed">
                <span className="block">あなたの想いや課題を</span>
                <span className="block">じっくりお聞きします</span>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">プランニング</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="block">最適な解決方法を</span>
                <span className="block">一緒に考えます</span>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">実現</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="block">AIの力を活用して</span>
                <span className="block">スピーディーに形にします</span>
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
            <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 leading-relaxed">
              <span className="block">あなたの「やりたい」を聞かせてください。</span>
              <span className="block mt-1">一緒に最適な解決方法を見つけましょう。</span>
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