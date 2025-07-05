import React from 'react'
import NavLinksComponent from './NavLinksComponent'
import LanguageSwitcherComponent from './LanguageSwitcherComponent'
import useTranslation from '@/hooks/useTranslation'

const MobileSidebarComponent = ({
  open,
  onClose,
  lang,
  setLang,
}: {
  open: boolean
  onClose: () => void
  lang: 'fr' | 'en'
  setLang: (lang: 'fr' | 'en') => void
}) => {
  const { t } = useTranslation()
  
  return (
  <>
    <div
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-hidden={!open}
    />
    <aside
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <span className="font-bold text-lg text-black flex items-center gap-2">
          NL
        </span>
        <button
          className="p-2 rounded hover:bg-black/5 transition"
          onClick={onClose}
          aria-label={t('header.closeNavigation')}
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col gap-4 px-6 py-6">
        <NavLinksComponent onClickLink={onClose} />
        <LanguageSwitcherComponent lang={lang} setLang={setLang} isMobile />
      </nav>
    </aside>
  </>
  )
}

export default MobileSidebarComponent
