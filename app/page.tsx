import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="heading-hero mb-6 animate-fadeIn">
                愚痴で終わるか、<br />
                <span className="text-blue-600">現実を変えるか。</span>
              </h1>
              <p className="body-large mb-8 animate-fadeIn max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
                AIの力で、あなたの「やりたい」を現実に。<br />
                世界トップレベルのスペシャリストが24時間365日待機しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <Link href="#services" className="btn-primary">
                  サービスを見る
                </Link>
                <Link href="#contact" className="btn-secondary">
                  無料相談する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              AIが変えた、新しい創造の時代
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              世界トップレベルのデザイナー、エンジニア、マーケッターが<br />
              あなたの指示を待っています。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-feature">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3">デザイナー</h3>
              <p className="body-regular">
                美しいUIやロゴを瞬時に生成。<br />
                ブランディングから細部まで。
              </p>
            </div>
            
            <div className="card-feature">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16,18 22,12 16,6"/>
                  <polyline points="8,6 2,12 8,18"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3">エンジニア</h3>
              <p className="body-regular">
                アプリやWebサイトを高速開発。<br />
                最新技術で確実に実現。
              </p>
            </div>
            
            <div className="card-feature">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3">マーケッター</h3>
              <p className="body-regular">
                効果的な戦略とコンテンツ作成。<br />
                成果につながる施策を提案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">サービス内容</h2>
            <p className="body-large">
              お悩み相談から問題解決まで、トータルでサポートします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="icon-container mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4">想いの深掘り</h3>
              <p className="body-regular mb-6">
                まずは、あなたが本当にやりたいことは何なのかを一緒に探します。
                漠然とした想いを、具体的な目標に変えていきます。
              </p>
              <div className="space-y-3">
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">日常の困りごとの整理</span>
                </div>
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">人生の夢や目標の明確化</span>
                </div>
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">実現可能な計画の立案</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="icon-container mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4">形にする支援</h3>
              <p className="body-regular mb-6">
                システムが必要な場合は、アプリやWebサイト、ツールを作成します。
                ご自身で作りたい場合は、その支援も行います。
              </p>
              <div className="space-y-3">
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">アプリ・Webサイト開発</span>
                </div>
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">業務効率化ツール作成</span>
                </div>
                <div className="list-item">
                  <div className="list-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span className="body-regular">開発スキルの習得支援</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">実績</h2>
            <p className="body-large">
              実際に問題を解決した事例
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="icon-container flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="heading-md mb-4">朝ヨガアラームアプリ</h3>
                  <p className="body-regular mb-6">
                    「朝起きたときにヨガをやりたいので、時間になったらYouTube動画を再生するアラームアプリを作ってほしい」
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <p className="body-regular text-gray-700">
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
      <section className="section-padding bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">プロセス</h2>
            <p className="body-large">
              あなたの想いを形にする3つのステップ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="step-indicator">1</div>
              <h3 className="heading-sm mb-3">ヒアリング</h3>
              <p className="body-regular">
                あなたの想いや課題を<br />
                じっくりお聞きします
              </p>
            </div>

            <div className="text-center">
              <div className="step-indicator">2</div>
              <h3 className="heading-sm mb-3">プランニング</h3>
              <p className="body-regular">
                最適な解決方法を<br />
                一緒に考えます
              </p>
            </div>

            <div className="text-center">
              <div className="step-indicator">3</div>
              <h3 className="heading-sm mb-3">実現</h3>
              <p className="body-regular">
                AIの力を活用して<br />
                スピーディーに形にします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              まずは無料相談から
            </h2>
            <p className="body-large mb-10">
              あなたの「やりたい」を聞かせてください。<br />
              一緒に最適な解決方法を見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@heyzo-lab.com" 
                className="btn-primary"
              >
                メールで相談する
              </a>
              <a 
                href="#" 
                className="btn-outline"
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