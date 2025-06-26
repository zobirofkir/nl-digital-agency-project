import React, { useState } from 'react'
import Logo from '@/assets/logo/logo.png'
import NavLinksComponent from './header/NavLinksComponent'
import LanguageSwitcherComponent from './header/LanguageSwitcherComponent'
import useLanguage from '@/hooks/useLanguage'
import MobileSidebarComponent from './header/MobileSidebarComponent'

const HeaderComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang, setLang } = useLanguage()

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
        {/* Desktop Nav Centered */}
        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <NavLinksComponent onClickLink={() => {}} />
        </nav>
        {/* Desktop Right Side: Search + Language Switcher */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {/* Animated Search Form */}
          <form className="relative group flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="transition-all duration-300 ease-in-out pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm bg-white focus:w-64 w-36 focus:shadow-lg focus:border-blue-400 outline-none"
              style={{ minWidth: '9rem' }}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
              </svg>
            </span>
          </form>
          <LanguageSwitcherComponent lang={lang} setLang={setLang} />
        </div>
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
      <MobileSidebarComponent
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        lang={lang}
        setLang={setLang}
      />
    </header>
  )
}

export default HeaderComponent