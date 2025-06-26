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
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLinksComponent onClickLink={() => {}} />
          <LanguageSwitcherComponent lang={lang} setLang={setLang} />
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