import React from 'react'

const LANGUAGES = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'en', flag: '🇬🇧' },
]

const LanguageSwitcherComponent = ({
  lang,
  setLang,
  isMobile = false,
}: {
  lang: 'fr' | 'en'
  setLang: (lang: 'fr' | 'en') => void
  isMobile?: boolean
}) => (
  <div className={`lg:ml-6 flex items-center relative${isMobile ? ' mt-6 w-full' : ''}`}>
    <div className={`flex ${isMobile ? 'w-full' : ''} bg-white border border-gray-400 rounded-full overflow-hidden shadow-sm relative`}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={`${
            isMobile ? 'flex-1 justify-center py-2' : 'px-3 py-1'
          } flex items-center gap-1 font-semibold transition-colors duration-200 focus:outline-none z-10 ${
            lang === l.code ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setLang(l.code as 'fr' | 'en')}
          aria-label={l.code}
        >
          <span className="text-lg">{l.flag}</span>
        </button>
      ))}
      {/* Animated background */}
      <span
        className="absolute top-0 left-0 h-full w-1/2 bg-black rounded-full transition-transform duration-300"
        style={{
          transform: lang === 'fr' ? 'translateX(0%)' : 'translateX(100%)',
          zIndex: 1,
        }}
        aria-hidden
      />
    </div>
  </div>
)

export default LanguageSwitcherComponent
