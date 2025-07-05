import React from 'react'
import useLanguage from '@/hooks/useLanguage'

const LanguageToggle = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
      className={`px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors ${className}`}
    >
      {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
    </button>
  )
}

export default LanguageToggle