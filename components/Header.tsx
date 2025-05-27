'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">HappyLab</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              サービス
            </Link>
            <Link 
              href="/#process" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              プロセス
            </Link>
            <Link 
              href="/#case-studies" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              実績
            </Link>
            <Link 
              href="/#contact" 
              className="btn-primary text-sm"
            >
              無料相談
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <Link
              href="/#services"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="/#process"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              プロセス
            </Link>
            <Link
              href="/#case-studies"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              実績
            </Link>
            <Link
              href="/#contact"
              className="block btn-primary text-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              無料相談
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}