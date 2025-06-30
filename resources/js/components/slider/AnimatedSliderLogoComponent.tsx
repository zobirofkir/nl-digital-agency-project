import React from 'react'
import { motion } from 'framer-motion'
import SliderLogo from '@/assets/slider/slider-logo.png'
import SliderPersonne from '@/assets/slider/slider-personne-image.png'

const AnimatedSliderLogoComponent = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-end z-30">
    {/* Personne Image - Large, Overlay, Pro Style */}
    <motion.img
      src={SliderPersonne}
      alt="Slider Personne"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-contain z-40 drop-shadow-2xl"
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.15 }}
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.25))' }}
    />
    {/* Logo - Normal Size, Underneath */}
    <motion.img
      src={SliderLogo}
      alt="Slider Logo"
      className="relative right-8 w-full h-full object-contain z-30"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    />
  </div>
)

export default AnimatedSliderLogoComponent
