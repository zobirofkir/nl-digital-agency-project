import { translations } from '@/lib/translations'
import useLanguage from './useLanguage'

const useTranslation = () => {
  const { lang } = useLanguage()
  
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