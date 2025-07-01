import React from 'react'
import { motion } from 'framer-motion'
import AboutBackgroundImage from '@/assets/abouts/about-image-background.png'
import AboutPersonneImageBackground from '@/assets/abouts/about-persone-background.png'
import AboutPersonneImage from '@/assets/abouts/about-personne.png'
import FlushImage from '@/assets/abouts/about-flush.png'

const AboutComponent = () => {

  return (
    <motion.div 
      className="relative min-h-screen bg-cover bg-center sm:bg-top md:bg-center bg-no-repeat -mt-[56%] sm:-mt-[45%] md:-mt-[30%] lg:-mt-[13%] z-30"
      style={{ 
        backgroundImage: `url(${AboutBackgroundImage})`
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Floating Elements */}
      <motion.div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* Robotic Flush Animation */}
      <motion.img 
        src={FlushImage} 
        alt="Flush" 
        className="absolute lg:block hidden lg:-top-[30%] left-1/2 transform -translate-x-1/2 lg:ml-15 z-0"
        initial={{ opacity: 0, scale: 0.8, y: 50, rotateZ: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
        animate={{
          y: [0, -15, -8, -20, 0],
          x: [0, 3, -2, 4, 0],
          rotateZ: [0, 2, -1, 3, 0],
          rotateY: [0, 8, -5, 12, 0],
          scale: [1, 1.02, 0.98, 1.03, 1],
          filter: [
            'drop-shadow(0 0 10px rgba(239, 68, 68, 0.2)) brightness(1)',
            'drop-shadow(0 0 25px rgba(239, 68, 68, 0.4)) brightness(1.1)',
            'drop-shadow(0 0 15px rgba(239, 68, 68, 0.3)) brightness(1.05)',
            'drop-shadow(0 0 30px rgba(239, 68, 68, 0.5)) brightness(1.15)',
            'drop-shadow(0 0 10px rgba(239, 68, 68, 0.2)) brightness(1)'
          ]
        }}
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] },
          x: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 6.5, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] },
          rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          filter: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
        whileHover={{
          scale: 1.08,
          rotateY: 15,
          rotateZ: 5,
          filter: 'drop-shadow(0 0 35px rgba(239, 68, 68, 0.6)) brightness(1.2)',
          transition: { duration: 0.4, ease: 'easeOut' }
        }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-1/2 sm:h-2/3 md:h-3/4 lg:ml-10 flex items-center justify-center lg:mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div 
          className="relative w-full lg:h-[110%] h-full bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${AboutPersonneImageBackground})` }}
        >
          <motion.img 
            src={AboutPersonneImage} 
            alt="About Person" 
            className="absolute inset-0 w-full h-[88%] object-cover flex justify-center items-center mx-auto my-auto overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%)'
            }}
            animate={{ 
              x: [0, 8, -5, 12, 0],
              filter: [
                'brightness(1) contrast(1) saturate(1)',
                'brightness(1.05) contrast(1.08) saturate(1.1)',
                'brightness(0.98) contrast(1.02) saturate(0.95)',
                'brightness(1.08) contrast(1.12) saturate(1.15)',
                'brightness(1) contrast(1) saturate(1)'
              ]
            }}
            transition={{ 
              x: { duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] },
              scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
            }}
          />
        </div>
      </motion.div>
      
      {/* Text content - Mobile: below image, Desktop: right side */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 lg:left-1/2 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 flex items-center justify-center lg:justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center lg:text-left max-w-lg  bg-black/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-lg lg:rounded-none lg:mt-50 p-4 lg:p-0">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 lg:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="text-red-500">Naoual Lebbar</span>
          </motion.h2>
          
          <motion.p 
            className="text-red-400 text-xs sm:text-sm lg:text-base mb-3 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Fondatrice & CEO, NL Marketing Digital
          </motion.p>
          
          <motion.p 
            className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Nous transformons vos idées en <span className="text-red-400 font-semibold">succès digitaux</span> grâce à des stratégies innovantes. 
            Notre équipe passionnée vous accompagne dans votre <span className="text-red-400">transformation digitale</span> 
            pour atteindre vos objectifs.
          </motion.p>
          
          <motion.p 
            className="text-white/80 text-xs sm:text-sm italic mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            "Ensemble, construisons un avenir numérique prospère."
          </motion.p>
          
          {/* Desktop-only sections */}
          <div className="hidden lg:block space-y-6 mb-4">
            {/* Services Preview */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-red-400/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h3 className="text-red-400 font-semibold mb-3 text-sm">Nos Services</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Web Design', 'SEO', 'Marketing', 'Branding'].map((service, i) => (
                  <div key={i} className="text-white/80 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Contact */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-red-400/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h3 className="text-red-400 font-semibold mb-3 text-sm">Contact Rapide</h3>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  contact@nldigital.ma
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Casablanca, Maroc
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Action Buttons */}
          <motion.div 
            className="lg:flex hidden flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-xl hover:shadow-red-500/30 border border-red-400/20 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#about'}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Découvrir Plus
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
            
            <motion.button
              className="group relative bg-black/40 hover:bg-black/60 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border border-red-400/40 hover:border-red-400/60 backdrop-blur-md overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch a Video
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="absolute top-8 right-8 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-red-400/20 lg:mt-50">
          {[
            { number: "150+", label: "Projets" },
            { number: "98%", label: "Satisfaction" },
            { number: "5+", label: "Années" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <motion.div 
                className="text-2xl font-bold text-red-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Achievement Badges */}
      {
        /**
         *
        <motion.div 
        className="absolute top-1/4 left-8 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[
          { icon: "🏆", text: "Excellence" },
          { icon: "⚡", text: "Innovation" },
          { icon: "🎯", text: "Précision" }
        ].map((badge, i) => (
          <motion.div
            key={i}
            className="mb-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-red-400/20"
            animate={{
              x: [0, 10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            whileHover={{ scale: 1.1, x: 15 }}
          >
            <span className="text-lg mr-2">{badge.icon}</span>
            <span className="text-white text-sm font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>
      */
      }
    </motion.div>
  )
}

export default AboutComponent