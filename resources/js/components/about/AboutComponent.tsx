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
    </motion.div>
  )
}

export default AboutComponent