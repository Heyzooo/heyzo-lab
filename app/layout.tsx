import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'heyzo-lab - AIで夢を現実に',
  description: 'AIの力で、あなたの「やりたい」を現実に。プログラミング不要で、アプリやWebサービスを作成。無料相談実施中。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}