import React from 'react'
import { motion } from 'framer-motion'
import AboutBackgroundImage from '@/assets/abouts/about-image-background.png'
import AboutPersonneImageBackground from '@/assets/abouts/about-persone-background.png'
import AboutPersonneImage from '@/assets/abouts/about-personne.png'

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
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-1/2 sm:h-2/3 md:h-3/4 flex items-center justify-center">
        <div 
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutPersonneImageBackground})` }}
        >
          <img 
            src={AboutPersonneImage} 
            alt="About Person" 
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutComponent