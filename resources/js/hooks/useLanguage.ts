import { useState, useEffect } from 'react'

type Language = 'fr' | 'en'

const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'fr'
    }
    return 'fr'
  })

  useEffect(() => {
    localStorage.setItem('language', lang)
  }, [lang])

  return { lang, setLang }
}

export default useLanguage
