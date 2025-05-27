'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Happy Lab 🌈
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              <li>
                <Link href="/" className="block py-2 px-4 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block py-2 px-4 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-4 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}