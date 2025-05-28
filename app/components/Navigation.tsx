'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl gradient-text">heyzo-lab</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="text-gray-700 hover:text-primary transition-colors">
              メリット
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
              サービス
            </Link>
            <Link href="#cases" className="text-gray-700 hover:text-primary transition-colors">
              成功事例
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-primary transition-colors">
              ご利用の流れ
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary transition-colors">
              よくある質問
            </Link>
            <Link href="#contact" className="btn-primary text-sm px-6 py-2">
              無料相談
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="#benefits" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                メリット
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                サービス
              </Link>
              <Link href="#cases" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                成功事例
              </Link>
              <Link href="#process" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                ご利用の流れ
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                よくある質問
              </Link>
              <Link href="#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                無料相談
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}