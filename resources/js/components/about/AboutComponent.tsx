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

      {/* Enhanced Flush Animation */}
      <motion.img 
        src={FlushImage} 
        alt="Flush" 
        className="absolute lg:block hidden lg:-top-[30%] left-1/2 transform -translate-x-1/2 lg:ml-25 z-40"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        animate={{
          y: [0, -12, 0],
          rotateY: [0, 5, -5, 0],
          filter: [
            'drop-shadow(0 0 0px rgba(239, 68, 68, 0))',
            'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))',
            'drop-shadow(0 0 0px rgba(239, 68, 68, 0))'
          ]
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          filter: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 0.8, ease: 'easeOut' },
          scale: { duration: 0.8, ease: 'easeOut' },
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.5))',
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-1/2 sm:h-2/3 md:h-3/4 lg:ml-10 flex items-center justify-center"
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
            className="absolute inset-0 w-[85%] h-[92%] object-cover flex justify-center items-center mx-auto my-auto"
            style={{
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 50%)'
            }}
            animate={{ 
              y: [0, -10, 0],
              filter: [
                'brightness(1) contrast(1)',
                'brightness(1.1) contrast(1.1)',
                'brightness(1) contrast(1)'
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        </div>
      </motion.div>
      
      {/* Text content - Mobile: below image, Desktop: right side */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 lg:left-1/2 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 flex items-center justify-center lg:justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center lg:text-left max-w-lg bg-black/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-lg lg:rounded-none p-4 lg:p-0">
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
            className="text-white/80 text-xs sm:text-sm italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            "Ensemble, construisons un avenir numérique prospère."
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="absolute top-8 right-8 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-red-400/20">
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
    </motion.div>
  )
}

export default AboutComponent