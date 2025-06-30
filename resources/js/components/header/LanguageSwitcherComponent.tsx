import React from 'react'
import { motion } from 'framer-motion'

const LANGUAGES = [
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
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
    <motion.div 
      className={`flex ${isMobile ? 'w-full' : ''} bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl relative backdrop-blur-sm`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.02 }}
    >
      {LANGUAGES.map((l) => (
        <motion.button
          key={l.code}
          className={`${
            isMobile ? 'flex-1 justify-center py-3' : 'px-4 py-2'
          } flex items-center gap-2 font-bold text-sm tracking-wide focus:outline-none z-10 relative overflow-hidden ${
            lang === l.code ? 'text-white' : 'text-black hover:text-red-600'
          }`}
          onClick={() => setLang(l.code as 'fr' | 'en')}
          aria-label={l.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.span 
            className="text-base"
            animate={{ rotate: lang === l.code ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            {l.flag}
          </motion.span>
          <span className="font-black">{l.label}</span>
          {lang !== l.code && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
      <motion.span
        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg"
        animate={{
          x: lang === 'fr' ? '0%' : '100%',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        style={{ zIndex: 1 }}
      />
    </motion.div>
  </div>
)

export default LanguageSwitcherComponent
