import React from 'react'
import { motion } from 'framer-motion'
import AboutBackgroundImage from '@/assets/abouts/about-image-background.png'

const AboutComponent = () => {
  return (
    <motion.div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat -mt-[13%] z-30"
      style={{ 
        backgroundImage: `url(${AboutBackgroundImage})`
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Brands Row at Top */}
      <div className="absolute top-25 px-4 left-0 z-10 pt-8">
        <div className="flex justify-center items-center gap-8 text-white font-semibold text-lg">
          {['NIKE', 'APPLE', 'GOOGLE', 'AMAZON', 'MICROSOFT', 'TESLA'].map((brand, i) => (
            <span key={i} className="whitespace-nowrap">{brand}</span>
          ))}
        </div>
      </div>

    </motion.div>
  )
}

export default AboutComponent