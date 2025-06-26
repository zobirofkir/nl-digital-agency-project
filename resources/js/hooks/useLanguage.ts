import { useState } from 'react'

const useLanguage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')
  return { lang, setLang }
}

export default useLanguage
