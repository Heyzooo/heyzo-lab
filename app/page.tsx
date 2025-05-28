import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-pattern min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #E3F2FD 50%, #E8F5E9 100%)' }}>
        <div className="decoration-dots top-10 right-10"></div>
        <div className="decoration-dots bottom-20 left-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="badge mb-4 animate-fadeInUp">AIコンサルティング</div>
                <h1 className="heading-hero mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  愚痴で終わるか、<br />
                  <span className="gradient-text">現実を変えるか。</span>
                </h1>
                <p className="body-large mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  AIの力を使えば、誰でも簡単に「やりたいこと」を実現できる時代になりました。
                  世界中のトップクリエイターたちが、あなたの夢の実現をサポートします。
                  もう「できない」と諦める必要はありません。
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 mb-8 animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">相談実績300件以上</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">満足度98%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">完全無料相談</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <Link href="#services" className="btn-primary">
                    今すぐ始める →
                  </Link>
                  <Link href="#contact" className="btn-secondary">
                    無料で相談する
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-float">
                <div className="relative">
                  {/* Enhanced Hero Illustration */}
                  <svg viewBox="0 0 500 500" className="w-full h-auto">
                    {/* Background circles */}
                    <circle cx="250" cy="250" r="200" fill="url(#gradient1)" opacity="0.2"/>
                    <circle cx="250" cy="250" r="150" fill="url(#gradient2)" opacity="0.3"/>
                    
                    {/* Main character - friendly AI assistant */}
                    <g transform="translate(250, 250)">
                      {/* Body */}
                      <rect x="-60" y="-40" width="120" height="100" rx="30" fill="#3498DB" />
                      {/* Screen/Face */}
                      <rect x="-50" y="-30" width="100" height="60" rx="20" fill="#2C3E50" />
                      {/* Eyes */}
                      <circle cx="-20" cy="-5" r="8" fill="#4ECDC4">
                        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="20" cy="-5" r="8" fill="#4ECDC4">
                        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                      </circle>
                      {/* Smile */}
                      <path d="M -20 10 Q 0 20 20 10" stroke="#4ECDC4" strokeWidth="3" fill="none" strokeLinecap="round" />
                      {/* Arms */}
                      <rect x="-80" y="-20" width="20" height="60" rx="10" fill="#3498DB" />
                      <rect x="60" y="-20" width="20" height="60" rx="10" fill="#3498DB" />
                      {/* Antenna */}
                      <line x1="0" y1="-40" x2="0" y2="-60" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="0" cy="-65" r="8" fill="#FF6B6B">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    
                    {/* Floating elements */}
                    <g className="animate-float">
                      <rect x="80" y="100" width="60" height="40" rx="10" fill="#FFE66D" opacity="0.8" />
                      <text x="110" y="125" textAnchor="middle" fontSize="20" fill="#2C3E50">AI</text>
                    </g>
                    
                    <g className="animate-float" style={{ animationDelay: '1s' }}>
                      <circle cx="380" cy="150" r="30" fill="#FF6B9D" opacity="0.8" />
                      <text x="380" y="158" textAnchor="middle" fontSize="16" fill="white">App</text>
                    </g>
                    
                    <g className="animate-float" style={{ animationDelay: '2s' }}>
                      <polygon points="120,350 150,320 180,350 165,380 135,380" fill="#2ECC71" opacity="0.8" />
                      <text x="150" y="355" textAnchor="middle" fontSize="14" fill="white">Web</text>
                    </g>
                    
                    {/* Connection lines */}
                    <path d="M 250 250 L 110 120" stroke="#4ECDC4" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M 250 250 L 380 150" stroke="#FF6B6B" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M 250 250 L 150 350" stroke="#9B59B6" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B6B" />
                        <stop offset="100%" stopColor="#4ECDC4" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3498DB" />
                        <stop offset="100%" stopColor="#9B59B6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              なぜ今、<span className="gradient-text">AIコンサルティング</span>が必要なのか？
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              技術の進化により、プログラミングやデザインの専門知識がなくても、
              誰でも簡単にアプリやWebサービスを作れる時代になりました。
              しかし、多くの人は「何から始めればいいか分からない」という壁にぶつかっています。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-colorful card-pink">
              <div className="icon-circle icon-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-center">専門知識不要</h3>
              <p className="body-regular text-center">
                プログラミングやデザインの知識は一切不要。
                あなたの「やりたいこと」を聞かせていただければ、
                最適な解決方法をご提案します。
              </p>
            </div>
            
            <div className="card-colorful card-blue">
              <div className="icon-circle icon-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6V12L16 14"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-center">時間を大幅短縮</h3>
              <p className="body-regular text-center">
                従来なら数ヶ月かかっていた開発も、
                AIを活用すれば数日〜数週間で完成。
                あなたの貴重な時間を節約できます。
              </p>
            </div>
            
            <div className="card-colorful card-green">
              <div className="icon-circle icon-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-center">低コストで実現</h3>
              <p className="body-regular text-center">
                専門家に依頼すると数百万円かかる開発も、
                AIを活用すれば圧倒的に低コストで実現可能。
                個人でも手軽に始められます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Specialists Section */}
      <section className="section-padding" style={{ background: '#FFF8E1' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              世界トップレベルの<span className="gradient-text">AIスペシャリスト</span>があなたの味方に
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              24時間365日、いつでもあなたの指示を待っている優秀なチームメンバーたち。
              彼らの力を借りれば、どんな夢も現実にできます。
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="feature-box">
              <div className="icon-circle icon-purple animate-float">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15L14 8L5 17"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">デザイナー</h3>
              <p className="body-small">
                ロゴ、UI/UX、イラスト、動画まで、
                あらゆるビジュアルを美しく作成
              </p>
            </div>
            
            <div className="feature-box">
              <div className="icon-circle icon-blue animate-float" style={{ animationDelay: '0.5s' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">エンジニア</h3>
              <p className="body-small">
                Web、アプリ、AI、データベースまで、
                最新技術で高速開発
              </p>
            </div>
            
            <div className="feature-box">
              <div className="icon-circle icon-green animate-float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">マーケッター</h3>
              <p className="body-small">
                SEO、SNS、広告戦略まで、
                売上アップの施策を提案
              </p>
            </div>
            
            <div className="feature-box">
              <div className="icon-circle icon-primary animate-float" style={{ animationDelay: '1.5s' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">ライター</h3>
              <p className="body-small">
                コピーライティング、記事作成、
                心を動かす文章を作成
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">サービス内容</h2>
            <p className="body-large max-w-3xl mx-auto">
              お客様の状況やご要望に合わせて、最適なサポートをご提供します。
              まずは無料相談で、あなたの「やりたいこと」をお聞かせください。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-colorful card-purple p-8">
              <div className="icon-circle icon-purple mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11L12 14L22 4"/>
                  <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4">コンサルティングプラン</h3>
              <p className="body-regular mb-6">
                あなたの想いを整理し、実現可能な計画を一緒に作ります。
                何から始めればいいか分からない方も安心してご相談ください。
              </p>
              <ul className="list-colorful">
                <li>現状の課題や目標のヒアリング</li>
                <li>実現可能な解決策の提案</li>
                <li>具体的なアクションプランの作成</li>
                <li>必要なツールやサービスの選定</li>
                <li>継続的なフォローアップ</li>
              </ul>
            </div>

            <div className="card-colorful card-pink p-8">
              <div className="icon-circle icon-primary mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4">開発支援プラン</h3>
              <p className="body-regular mb-6">
                アプリやWebサイトなど、実際のプロダクト開発をサポート。
                AIを活用して、高品質なものを短期間で作成します。
              </p>
              <ul className="list-colorful">
                <li>要件定義と設計のサポート</li>
                <li>UI/UXデザインの作成</li>
                <li>プロトタイプの開発</li>
                <li>本番環境への実装支援</li>
                <li>運用・保守のアドバイス</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="body-large mb-6">
              どちらのプランも、お客様のペースに合わせて柔軟に対応します。
            </p>
            <Link href="#contact" className="btn-accent">
              まずは無料相談から始める →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="section-padding" style={{ background: '#F3E5F5' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">成功事例</h2>
            <p className="body-large max-w-3xl mx-auto">
              実際にAIを活用して夢を実現された方々の事例をご紹介します。
              あなたも次の成功者になれます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-colorful shadow-colorful">
              <div className="flex items-start gap-4">
                <div className="icon-circle icon-secondary flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21V16C20 13.79 18.21 12 16 12H8C5.79 12 4 13.79 4 16V21"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-md mb-3">朝ヨガ習慣化アプリ</h3>
                  <div className="badge mb-3">主婦・30代</div>
                  <p className="body-regular mb-4">
                    「朝起きてすぐヨガをしたいけど、いつも忘れてしまう」という悩みから、
                    YouTube動画と連動するアラームアプリを開発。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="body-small">
                      <strong>結果：</strong>プログラミング経験ゼロでしたが、1週間でアプリが完成。
                      今では毎朝の習慣として定着し、健康的な生活を送れています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-colorful shadow-colorful">
              <div className="flex items-start gap-4">
                <div className="icon-circle icon-green flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-md mb-3">予約管理システム</h3>
                  <div className="badge mb-3">個人事業主・40代</div>
                  <p className="body-regular mb-4">
                    「お客様の予約を紙で管理していて大変」という課題から、
                    オンライン予約システムを構築。
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <p className="body-small">
                      <strong>結果：</strong>予約管理の時間が1日2時間から10分に短縮。
                      空いた時間でサービスの質を向上させ、売上が1.5倍に増加しました。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">ご利用の流れ</h2>
            <p className="body-large max-w-3xl mx-auto">
              難しい手続きは一切ありません。
              あなたの「やりたい」を実現するまで、しっかりサポートします。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="feature-number">1</div>
                <h3 className="heading-sm mb-3">無料相談</h3>
                <p className="body-regular">
                  まずはお気軽にご相談ください。
                  あなたの想いや課題をじっくりお聞きします。
                  オンラインでも対面でもOKです。
                </p>
              </div>

              <div className="text-center">
                <div className="feature-number">2</div>
                <h3 className="heading-sm mb-3">プラン作成</h3>
                <p className="body-regular">
                  お聞きした内容をもとに、
                  最適な解決方法とスケジュールをご提案。
                  ご予算に合わせて調整も可能です。
                </p>
              </div>

              <div className="text-center">
                <div className="feature-number">3</div>
                <h3 className="heading-sm mb-3">実現サポート</h3>
                <p className="body-regular">
                  AIツールの使い方から、
                  実際の開発まで丁寧にサポート。
                  完成後のフォローもお任せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding" style={{ background: '#E3F2FD' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">よくあるご質問</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-colorful mb-6">
              <h3 className="heading-sm mb-3">Q. 本当にプログラミングの知識がなくても大丈夫ですか？</h3>
              <p className="body-regular">
                A. はい、まったく問題ありません。私たちがAIツールの使い方から丁寧にサポートしますので、
                専門知識は一切不要です。実際に、ご利用者の8割以上がプログラミング未経験の方々です。
              </p>
            </div>

            <div className="card-colorful mb-6">
              <h3 className="heading-sm mb-3">Q. どのくらいの期間で完成しますか？</h3>
              <p className="body-regular">
                A. プロジェクトの規模によりますが、簡単なアプリなら1週間程度、
                本格的なWebサービスでも1ヶ月以内に完成することがほとんどです。
                従来の開発に比べて、大幅に期間を短縮できます。
              </p>
            </div>

            <div className="card-colorful">
              <h3 className="heading-sm mb-3">Q. 費用はどのくらいかかりますか？</h3>
              <p className="body-regular">
                A. お客様のご要望や規模によって異なりますが、
                従来の開発会社に依頼する場合の1/10程度の費用で実現可能です。
                まずは無料相談で、ご予算に合わせた最適なプランをご提案させていただきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding" style={{ background: 'linear-gradient(135deg, #FFE66D 0%, #FF6B6B 100%)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-xl mb-6 text-white">
              今すぐ、あなたの「やりたい」を<br />
              現実に変えましょう
            </h2>
            <p className="body-large mb-10 text-white">
              もう「できない」と諦める必要はありません。<br />
              AIの力を借りて、あなたの夢を一緒に実現させましょう。<br />
              まずは無料相談から、お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@heyzo-lab.com" 
                className="btn-primary bg-white text-primary hover:bg-gray-100"
              >
                メールで無料相談する
              </a>
              <a 
                href="#" 
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                LINEで気軽に相談する
              </a>
            </div>
            <p className="body-small text-white mt-8">
              ※ 相談は完全無料です。営業や勧誘は一切ありません。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}