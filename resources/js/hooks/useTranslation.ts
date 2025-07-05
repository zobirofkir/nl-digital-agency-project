import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/LanguageContext'

const useTranslation = () => {
  const { lang } = useLanguageContext()
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[lang]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { t, lang }
}

export default useTranslation