import React, { useState } from 'react'
import Logo from '@/assets/logo/logo.png'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projets', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const LANGUAGES = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'en', flag: '🇬🇧' },
]

const HeaderComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [lang, setLang] = useState<'fr' | 'en'>('fr')

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 h-20 relative">
        {/* Logo */}
        <div className="relative h-16 w-44 flex-shrink-0 flex items-center overflow-hidden" style={{ minWidth: '8rem', minHeight: '4rem' }}>
          <a href="/" className="absolute inset-0 flex items-center justify-start">
            <img
              src={Logo}
              alt="Logo"
              className="h-96 w-auto max-h-none object-contain"
              style={{
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))',
                maxHeight: 'none',
              }}
            />
          </a>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200 group"
            >
              {link.name}
            </a>
          ))}
          {/* Language Switcher with animation */}
          <div className="ml-6 flex items-center relative">
            <div className="flex bg-white border border-gray-400 rounded-full overflow-hidden shadow-sm relative">
              {LANGUAGES.map((l, idx) => (
                <button
                  key={l.code}
                  className={`flex items-center gap-1 px-3 py-1 font-semibold transition-colors duration-200 focus:outline-none z-10
                    ${lang === l.code
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}
                  style={{
                    position: 'relative',
                  }}
                  onClick={() => setLang(l.code as 'fr' | 'en')}
                  aria-label={l.code}
                >
                  <span className="text-lg">{l.flag}</span>
                </button>
              ))}
              {/* Animated background */}
              <span
                className="absolute top-0 left-0 h-full w-1/2 bg-gray-700 rounded-full transition-transform duration-300"
                style={{
                  transform: lang === 'fr' ? 'translateX(0%)' : 'translateX(100%)',
                  zIndex: 1,
                }}
                aria-hidden
              />
            </div>
          </div>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded transition hover:bg-black/5"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation"
        >
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="font-bold text-lg text-black flex items-center gap-2">
            Menu
          </span>
          <button
            className="p-2 rounded hover:bg-black/5 transition"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200 group"
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Language Switcher Mobile with animation */}
          <div className="flex mt-6 relative">
            <div className="flex w-full bg-white border border-gray-400 rounded-full overflow-hidden shadow-sm relative">
              {LANGUAGES.map((l, idx) => (
                <button
                  key={l.code}
                  className={`flex-1 flex items-center justify-center gap-1 py-2 font-semibold transition-colors duration-200 focus:outline-none z-10
                    ${lang === l.code
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}
                  onClick={() => setLang(l.code as 'fr' | 'en')}
                  aria-label={l.code}
                >
                  <span className="text-lg">{l.flag}</span>
                </button>
              ))}
              {/* Animated background */}
              <span
                className="absolute top-0 left-0 h-full w-1/2 bg-gray-700 rounded-full transition-transform duration-300"
                style={{
                  transform: lang === 'fr' ? 'translateX(0%)' : 'translateX(100%)',
                  zIndex: 1,
                }}
                aria-hidden
              />
            </div>
          </div>
        </nav>
      </aside>
    </header>
  )
}

export default HeaderComponent