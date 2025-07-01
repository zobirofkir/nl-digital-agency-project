import React from 'react'
import { motion } from 'framer-motion'
import AboutBackgroundImage from '@/assets/abouts/about-image-background.png'
import AboutPersonneImageBackground from '@/assets/abouts/about-persone-background.png'
import AboutPersonneImage from '@/assets/abouts/about-personne.png'
import FlushImage from '@/assets/abouts/about-flush.png'

const AboutComponent = () => {
  const cards = [
    { title: "Stratégie Digitale", desc: "Solutions sur mesure" },
    { title: "Design Créatif", desc: "Expériences uniques" },
    { title: "Développement", desc: "Technologies modernes" },
    { title: "Marketing Digital", desc: "Croissance durable" },
    { title: "SEO & Analytics", desc: "Performance optimisée" },
    { title: "Branding", desc: "Identité forte" }
  ]

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
      <motion.img 
        src={FlushImage} 
        alt="Flush" 
        className="absolute lg:block hidden lg:-top-[30%] left-1/2 transform -translate-x-1/2 lg:ml-25 z-40"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={{
          y: [0, -8, 0],
          x: [0, 2, -2, 0],
          rotate: [0, 1, -1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 0.6, delay: 0.2 }
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
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

      {/* Auto-scrolling Cards */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="flex gap-6 h-full items-center"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...cards, ...cards].map((card, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 bg-gradient-to-r from-red-500/20 to-red-600/30 backdrop-blur-sm border border-red-400/30 rounded-lg p-4 min-w-[200px]"
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
              <p className="text-red-300 text-xs">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AboutComponent