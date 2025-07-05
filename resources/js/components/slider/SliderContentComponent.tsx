import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from '@/hooks/useTranslation'

const SliderContentComponent: React.FC = () => {
  const { t } = useTranslation()
  const [displayedText, setDisplayedText] = useState('')
  const [displayedQuote, setDisplayedQuote] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentQuoteWordIndex, setCurrentQuoteWordIndex] = useState(0)
  const fullText = t('slider.description')
  const fullQuote = t('slider.quote')
  const words = fullText.split(' ')
  const quoteWords = fullQuote.split(' ')

  useEffect(() => {
    const startTyping = () => {
      setDisplayedText('')
      setDisplayedQuote('')
      setCurrentWordIndex(0)
      setCurrentQuoteWordIndex(0)
      
      let textIndex = 0
      let wordIndex = 0
      const textTimer = setInterval(() => {
        if (textIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, textIndex + 1))
          const currentText = fullText.slice(0, textIndex + 1)
          const currentWords = currentText.split(' ')
          if (currentWords.length > wordIndex) {
            setCurrentWordIndex(currentWords.length - 1)
            wordIndex = currentWords.length
          }
          textIndex++
        } else {
          clearInterval(textTimer)
        }
      }, 50)

      const quoteTimer = setTimeout(() => {
        let quoteIndex = 0
        let quoteWordIdx = 0
        const quoteInterval = setInterval(() => {
          if (quoteIndex < fullQuote.length) {
            setDisplayedQuote(fullQuote.slice(0, quoteIndex + 1))
            const currentQuoteText = fullQuote.slice(0, quoteIndex + 1)
            const currentQuoteWords = currentQuoteText.split(' ')
            if (currentQuoteWords.length > quoteWordIdx) {
              setCurrentQuoteWordIndex(currentQuoteWords.length - 1)
              quoteWordIdx = currentQuoteWords.length
            }
            quoteIndex++
          } else {
            clearInterval(quoteInterval)
          }
        }, 60)
      }, 2500)
    }

    startTyping()
    const loopTimer = setInterval(startTyping, 8000)

    return () => {
      clearInterval(loopTimer)
    }
  }, [fullText, fullQuote]) // Restart animation when language changes

  return (
  <div className="absolute inset-0 z-20 flex items-center lg:items-center items-start md:mt-0 mt-10 pt-16 lg:pt-0">
    <div className="w-full lg:w-1/2 px-8 lg:px-20">
      <motion.div
        className="max-w-3xl"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 rounded-full mb-6 border border-red-200"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
          <span className="text-red-700 font-medium text-sm tracking-wide">{t('slider.badge')}</span>
        </motion.div>

        <motion.h1
          className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.5 }}
        >
          <motion.span 
            className="block text-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('slider.title1')}
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('slider.title2')}
          </motion.span>
          <motion.span 
            className="block text-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('slider.title3')}
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="text-xl lg:text-2xl mb-10 leading-relaxed max-w-2xl relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.7 }}
        >
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {words.map((word, index) => {
              const isVisible = displayedText.includes(word) && index <= currentWordIndex
              const isCurrentWord = index === currentWordIndex && displayedText.length > 0
              
              return (
                <span key={index} className="relative inline-block">
                  <motion.span
                    className={`font-thin text-black ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      textShadow: '2px 2px 4px rgba(239, 68, 68, 0.5), 0 0 8px rgba(239, 68, 68, 0.3)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {word}
                  </motion.span>
                  
                  <AnimatePresence>
                    {isCurrentWord && (
                      <motion.div
                        className="absolute -inset-1 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-red-500/20 rounded blur-sm animate-pulse" />
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute inset-0 border-2 border-red-500 rounded animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              )
            })}
          </div>
          <span className="animate-pulse text-black font-thin ml-1">|</span>
        </motion.div>
        
        <motion.div
          className="mb-8 text-lg max-w-2xl relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.9 }}
        >
          <div className="flex flex-wrap gap-x-2 gap-y-1 italic">
            <span className="font-thin text-black" style={{ textShadow: '1px 1px 2px rgba(239, 68, 68, 0.3)' }}>"</span>
            {quoteWords.map((word, index) => {
              const isVisible = displayedQuote.includes(word) && index <= currentQuoteWordIndex
              const isCurrentWord = index === currentQuoteWordIndex && displayedQuote.length > 0
              
              return (
                <span key={index} className="relative inline-block">
                  <motion.span
                    className={`font-thin text-black italic ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      textShadow: '1px 1px 3px rgba(239, 68, 68, 0.4), 0 0 6px rgba(239, 68, 68, 0.2)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {word}
                  </motion.span>
                  
                  <AnimatePresence>
                    {isCurrentWord && (
                      <motion.div
                        className="absolute -inset-1 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-red-400/15 rounded blur-sm animate-pulse" />
                        <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping" />
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
                        <div className="absolute inset-0 border border-red-400 rounded animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              )
            })}
            <span className="font-thin text-black" style={{ textShadow: '1px 1px 2px rgba(239, 68, 68, 0.3)' }}>"</span>
          </div>
          {displayedQuote.length === fullQuote.length && (
            <motion.div 
              className="mt-4 text-red-600 font-thin not-italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ textShadow: '1px 1px 2px rgba(239, 68, 68, 0.3)' }}
            >
              {t('slider.ceoName')}
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          className="lg:flex hidden flex-col sm:flex-row gap-4 sm:gap-6 mb-5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 1.1 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">{t('slider.startButton')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button 
            className="group border-2 border-gray-800 text-gray-800 px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:bg-gray-800 hover:text-white transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">{t('slider.learnMoreButton')}</span>
            <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.button>
        </motion.div>
        
        <motion.div
          className="lg:hidden flex flex-col gap-3 -mt-5 w-2/5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 1.3 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-lg font-bold text-xs shadow-xl hover:shadow-red-500/25 transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">{t('slider.startButton')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button 
            className="group border border-gray-800 text-gray-800 px-3 py-2 rounded-lg font-bold text-xs hover:bg-gray-800 hover:text-white transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">{t('slider.learnMoreButton')}</span>
            <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.button>
        </motion.div>
              
      </motion.div>
    </div>
    

  </div>
  )
}

export default SliderContentComponent
