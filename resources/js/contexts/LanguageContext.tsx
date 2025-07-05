import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'fr'
    }
    return 'fr'
  })

  useEffect(() => {
    localStorage.setItem('language', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider')
  }
  return context
}