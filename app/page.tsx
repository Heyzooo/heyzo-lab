import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Brand Logo */}
            <div className="inline-flex items-center justify-center mb-8 animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="heading-hero mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <span className="block text-gray-800">愚痴で終わるか、</span>
              <span className="gradient-text block mt-2">現実を変えるか。</span>
            </h1>
            <p className="body-large text-gray-600 mb-12 animate-fadeIn max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              世界中のスペシャリストは、もうあなたの手の中にいる。
              <span className="block mt-2 font-medium text-gray-700">使うか使わないかは、あなた次第。</span>
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gray-300 rounded-full animate-bounce mt-2"></div>
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-50 animate-pulse-soft"></div>
          </div>
        </div>
      </section>

      {/* AI Era Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">
              AIが変えた、<span className="gradient-text">新しい創造の時代</span>
            </h2>
            <p className="body-large text-gray-600">
              世界トップレベルのデザイナー、エンジニア、マーケッターが
              <span className="block">あなたの指示を待っています。</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="icon-container-lg mx-auto mb-4 group-hover:bg-purple-50 transition-colors">
                <svg className="text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">デザイナー</h3>
              <p className="body-small text-gray-600">
                美しいUIやロゴを瞬時に生成
              </p>
            </div>
            
            <div className="text-center group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="icon-container-lg mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                <svg className="text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">エンジニア</h3>
              <p className="body-small text-gray-600">
                アプリやWebサイトを高速開発
              </p>
            </div>
            
            <div className="text-center group animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="icon-container-lg mx-auto mb-4 group-hover:bg-green-50 transition-colors">
                <svg className="text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">マーケッター</h3>
              <p className="body-small text-gray-600">
                効果的な戦略とコンテンツ作成
              </p>
            </div>
          </div>
          
          <p className="text-center mt-16 body-large text-gray-700 font-medium">
            指示があれば、24時間365日、彼らはあなたの力となってくれるでしょう。
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">サービス内容</span>
            </h2>
            <p className="body-large text-gray-600">
              お悩み相談から問題解決まで、トータルでサポートします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 group">
              <div className="icon-container mb-6 group-hover:bg-purple-50 transition-colors">
                <svg className="text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">想いの深掘り</h3>
              <p className="body-regular text-gray-600 mb-6">
                まずは、あなたが本当にやりたいことは何なのかを一緒に探します。
                漠然とした想いを、具体的な目標に変えていきます。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">日常の困りごとの整理</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">人生の夢や目標の明確化</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">実現可能な計画の立案</span>
                </li>
              </ul>
            </div>

            <div className="card p-8 md:p-10 group">
              <div className="icon-container mb-6 group-hover:bg-blue-50 transition-colors">
                <svg className="text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">形にする支援</h3>
              <p className="body-regular text-gray-600 mb-6">
                システムが必要な場合は、アプリやWebサイト、ツールを作成します。
                ご自身で作りたい場合は、その支援も行います。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">アプリ・Webサイト開発</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">業務効率化ツール作成</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-small">開発スキルの習得支援</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">実績</span>
            </h2>
            <p className="body-large text-gray-600">
              実際に問題を解決した事例
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 shadow-soft">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="icon-container-lg flex-shrink-0">
                  <svg className="text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="heading-md mb-4">朝ヨガアラームアプリ</h3>
                  <p className="body-regular text-gray-600 mb-6">
                    「朝起きたときにヨガをやりたいので、時間になったらYouTube動画を再生するアラームアプリを作ってほしい」
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                    <p className="body-small text-gray-700">
                      <strong>結果：</strong>アプリ開発は未経験でしたが、約1週間でアプリを完成。
                      コードは1行も書かずに実現しました。
                    </p>
                  </div>
                  <p className="body-small text-gray-600 italic">
                    やりたいことを明確にし、最高のチームメンバーに伝える。
                    これで想像の世界にあるものを現実に持ってこれるようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">プロセス</span>
            </h2>
            <p className="body-large text-gray-600">
              あなたの想いを形にする3つのステップ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="process-step mx-auto mb-6 group-hover:scale-110">
                1
              </div>
              <h3 className="font-semibold text-lg mb-3">ヒアリング</h3>
              <p className="body-small text-gray-600">
                あなたの想いや課題を
                じっくりお聞きします
              </p>
            </div>

            <div className="text-center group">
              <div className="process-step mx-auto mb-6 group-hover:scale-110">
                2
              </div>
              <h3 className="font-semibold text-lg mb-3">プランニング</h3>
              <p className="body-small text-gray-600">
                最適な解決方法を
                一緒に考えます
              </p>
            </div>

            <div className="text-center group">
              <div className="process-step mx-auto mb-6 group-hover:scale-110">
                3
              </div>
              <h3 className="font-semibold text-lg mb-3">実現</h3>
              <p className="body-small text-gray-600">
                AIの力を活用して
                スピーディーに形にします
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
            <p className="body-large mb-10 opacity-90">
              あなたの「やりたい」を聞かせてください。
              <span className="block mt-2">一緒に最適な解決方法を見つけましょう。</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:hello@example.com" 
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-1"
              >
                メールで相談する
              </a>
              <a 
                href="#" 
                className="bg-transparent text-white border-2 border-white/30 backdrop-blur-sm px-8 py-3 rounded-xl font-medium hover:bg-white/10 hover:border-white/50 transition-all"
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