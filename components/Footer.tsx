export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">HappyLab</span>
            </h3>
            <p className="text-gray-400 mb-4">
              あなたの「やりたい」を現実にする伴走者として、<br />
              AIの力を活用した問題解決をサポートします。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  想いの深掘り
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  形にする支援
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  プロセス
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LINE@happylab
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HappyLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}