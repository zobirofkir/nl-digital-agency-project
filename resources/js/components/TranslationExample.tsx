import React from 'react'
import useTranslation from '@/hooks/useTranslation'
import useLanguage from '@/hooks/useLanguage'

// Example component showing how to use translations
const TranslationExample = () => {
  const { t } = useTranslation()
  const { lang, setLang } = useLanguage()

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Translation System Example</h2>
      
      {/* Current language display */}
      <p className="mb-2">Current language: <strong>{lang}</strong></p>
      
      {/* Language switcher */}
      <div className="mb-4">
        <button
          onClick={() => setLang('fr')}
          className={`px-3 py-1 mr-2 rounded ${lang === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Français
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
      </div>
      
      {/* Translation examples */}
      <div className="space-y-2">
        <p><strong>Navigation:</strong> {t('nav.home')} | {t('nav.about')} | {t('nav.services')}</p>
        <p><strong>About:</strong> {t('about.founder')}</p>
        <p><strong>Services:</strong> {t('services.webDesign')}, {t('services.seo')}</p>
        <p><strong>Common:</strong> {t('common.readMore')} | {t('common.learnMore')}</p>
      </div>
    </div>
  )
}

export default TranslationExample