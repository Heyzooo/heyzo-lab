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
                  「時間がない」「技術がない」で<br />
                  諦めていた夢、<span className="gradient-text">AIで叶えませんか？</span>
                </h1>
                <p className="body-large mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  プログラミング経験ゼロでも大丈夫。AIの力を使えば、<br />
                  あなたのアイデアがすぐに形になります。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
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

      {/* Target Examples Section */}
      <section id="target-examples" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              こんな方の夢を<span className="gradient-text">実現</span>しています
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* 主婦向け */}
            <div className="card-colorful card-pink">
              <div className="icon-circle icon-primary mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-center">主婦の方へ</h3>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">🏠 子育ての隙間時間でハンドメイド販売を自動化</h4>
                  <p className="body-small">在庫管理や注文処理を自動化するアプリを作成</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">💰 家計簿アプリを作って家族の支出を見える化</h4>
                  <p className="body-small">家族みんなで使えるオリジナル家計管理アプリ</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">🍳 料理レシピのオリジナルアプリで副収入</h4>
                  <p className="body-small">あなたのレシピを収益化するプラットフォーム</p>
                </div>
              </div>
            </div>
            
            {/* 会社員向け */}
            <div className="card-colorful card-blue">
              <div className="icon-circle icon-secondary mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="9"/>
                  <line x1="9" y1="13" x2="15" y2="13"/>
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-center">会社員の方へ</h3>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">⏰ 残業時間を使って副業アプリ開発</h4>
                  <p className="body-small">本業の知識を活かしたサービスで副収入を得る</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">📸 趣味の写真でAI画像生成サービス</h4>
                  <p className="body-small">写真を活用したユニークなビジネスを構築</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">📊 業務効率化ツールを作って社内評価アップ</h4>
                  <p className="body-small">社内の課題を解決するツールで一目置かれる存在に</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Training App Section */}
      <section id="ai-training" className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF8E1 0%, #E8F5E9 100%)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <div className="badge mb-4">差別化ポイント</div>
            <h2 className="heading-lg mb-4">
              AIトレ（AI Training）<br />
              <span className="gradient-text">AIを使う癖を付ける教育アプリ</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              毎日1つずつ簡単なAI活用チャレンジを提示。<br />
              遊びながらAIの便利さを体験できます。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* チャレンジ例 */}
            <div className="card-colorful card-purple">
              <h3 className="heading-md mb-4">📅 毎日のチャレンジ例</h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <span className="font-bold text-purple">Day 1:</span>
                  <p className="body-small">ChatGPTで今日の献立を考えてもらう</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <span className="font-bold text-purple">Day 7:</span>
                  <p className="body-small">自分の写真をAIでアート風に変換</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <span className="font-bold text-purple">Day 14:</span>
                  <p className="body-small">AIで簡単なロゴを作成</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <span className="font-bold text-purple">Day 30:</span>
                  <p className="body-small">AIで短編小説を共同執筆</p>
                </div>
              </div>
            </div>
            
            {/* ゲーミフィケーション要素 */}
            <div className="card-colorful card-green">
              <h3 className="heading-md mb-4">🏆 ゲーミフィケーション要素</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="icon-circle icon-green" style={{ width: '50px', height: '50px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6V12L16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">連続利用日数バッジ</h4>
                    <p className="body-small">毎日続けると特別なバッジを獲得</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-circle icon-green" style={{ width: '50px', height: '50px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">スキルレベル</h4>
                    <p className="body-small">初心者→中級者→上級者へ成長</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-circle icon-green" style={{ width: '50px', height: '50px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"/>
                      <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">成果シェア機能</h4>
                    <p className="body-small">他のユーザーと成果を共有</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section - 3-Tier Package */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">サービスプラン</h2>
            <p className="body-large max-w-3xl mx-auto">
              あなたの状況に合わせた3つのプランをご用意しました
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* ライト相談 */}
            <div className="card-colorful text-center">
              <div className="badge mb-4" style={{ background: '#E8F5E9', color: '#2ECC71' }}>お試し</div>
              <h3 className="heading-md mb-2">ライト相談</h3>
              <div className="text-3xl font-bold mb-4 gradient-text">無料</div>
              <div className="space-y-3 mb-6">
                <p className="body-small">✓ 30分のオンライン相談</p>
                <p className="body-small">✓ やりたいことの整理</p>
                <p className="body-small">✓ AI活用の可能性診断</p>
                <p className="body-small">✓ AIトレアプリ無料利用権</p>
              </div>
              <Link href="#contact" className="btn-secondary w-full">
                無料で相談する
              </Link>
            </div>
            
            {/* スタンダード支援 */}
            <div className="card-colorful text-center" style={{ border: '3px solid var(--primary)' }}>
              <div className="badge mb-4">人気No.1</div>
              <h3 className="heading-md mb-2">スタンダード支援</h3>
              <div className="text-3xl font-bold mb-4 gradient-text">3万円</div>
              <div className="space-y-3 mb-6">
                <p className="body-small">✓ 3回の相談セッション(各1時間)</p>
                <p className="body-small">✓ 具体的なAI活用プラン作成</p>
                <p className="body-small">✓ 3ヶ月間のフォローアップ</p>
                <p className="body-small">✓ AIトレプレミアム機能</p>
              </div>
              <Link href="#contact" className="btn-primary w-full">
                このプランで始める
              </Link>
            </div>
            
            {/* フルサポート */}
            <div className="card-colorful text-center">
              <div className="badge mb-4" style={{ background: '#F3E5F5', color: '#9B59B6' }}>本格的</div>
              <h3 className="heading-md mb-2">フルサポート</h3>
              <div className="text-3xl font-bold mb-4 gradient-text">10万円〜</div>
              <div className="space-y-3 mb-6">
                <p className="body-small">✓ 月4回の相談セッション</p>
                <p className="body-small">✓ アプリ・サービス開発代行</p>
                <p className="body-small">✓ 6ヶ月間の運用サポート</p>
                <p className="body-small">✓ AIトレ個別カスタマイズ</p>
              </div>
              <Link href="#contact" className="btn-accent w-full">
                相談してみる
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="cases" className="section-padding" style={{ background: '#F3E5F5' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">ビフォー・アフター事例</h2>
            <p className="body-large max-w-3xl mx-auto">
              AIコンサルティングで人生が変わった方々の実例
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Case 1: 主婦のAさん */}
            <div className="card-colorful shadow-colorful">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle icon-primary flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21V16C20 13.79 18.21 12 16 12H8C5.79 12 4 13.79 4 16V21"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-md">Case 1: 主婦のAさん（35歳）</h3>
                  <div className="badge">手作りアクセサリー販売</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-600 mb-3">😢 Before</h4>
                  <p className="body-regular mb-3">「副業したいけど何から始めれば...」</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">手作りアクセサリーの在庫管理がExcelで大変</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">注文対応に1日3時間かかる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">月収1万円程度で伸び悩み</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-600 mb-3">😊 After</h4>
                  <p className="body-regular mb-3">「在庫管理アプリで効率化に成功！」</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">AIで在庫管理アプリを作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">注文対応が30分に短縮</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">月収5万円達成！売上5倍に</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case 2: 会社員のBさん */}
            <div className="card-colorful shadow-colorful">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle icon-secondary flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"/>
                    <line x1="9" y1="9" x2="15" y2="9"/>
                    <line x1="9" y1="13" x2="15" y2="13"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-md">Case 2: 会社員のBさん（42歳）</h3>
                  <div className="badge">営業部門勤務</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-600 mb-3">😢 Before</h4>
                  <p className="body-regular mb-3">「毎日の報告書作成に2時間」</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">毎晩21時まで残業が当たり前</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">同じような報告書を毎日手作業で作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      <span className="body-small">家族との時間が取れない</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-600 mb-3">😊 After</h4>
                  <p className="body-regular mb-3">「AI活用で報告書を10分で自動生成」</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">定時退社が当たり前に</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">AIが過去データから自動で報告書作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="body-small">残業時間ゼロ達成！家族との時間増加</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section id="process" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">たった3ステップ</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="feature-number">1</div>
                <h3 className="heading-sm mb-2">無料相談</h3>
                <p className="body-small">
                  30分であなたの想いを整理
                </p>
              </div>

              <div className="text-center">
                <div className="feature-number">2</div>
                <h3 className="heading-sm mb-2">プラン選択</h3>
                <p className="body-small">
                  3つの中から最適なプランを
                </p>
              </div>

              <div className="text-center">
                <div className="feature-number">3</div>
                <h3 className="heading-sm mb-2">実現サポート</h3>
                <p className="body-small">
                  AIであなたの夢を形に
                </p>
              </div>
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