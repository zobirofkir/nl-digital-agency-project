import React from 'react'
import { motion } from 'framer-motion'
import SliderDesktopLogo from '@/assets/slider/slider-desktop-logo.png'
import SliderDesktopPersonne from '@/assets/slider/slider-desktop-personne-image.png'

const AnimatedSliderLogoComponent = () => (
  <div className="flex items-center justify-center lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:justify-end z-30 px-4">
    {/* Personne Image - Large, Overlay, Pro Style, Robotic Auto-Movement */}
    <motion.img
      src={SliderDesktopPersonne}
      alt="Slider Personne"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-contain z-40 drop-shadow-2xl"
      initial={{ x: 120, opacity: 0, rotate: 0, scale: 1 }}
      animate={{
        x: 0,
        opacity: 1,
        rotate: [0, 2, -2, 0, 1, -1, 0],
        scale: [1, 1.03, 0.98, 1.01, 1], 
        y: [0, -6, 4, -2, 0], 
        filter: [
          'drop-shadow(0 8px 32px rgba(0,0,0,0.25))',
          'drop-shadow(0 12px 36px rgba(0,0,0,0.28))',
          'drop-shadow(0 8px 32px rgba(0,0,0,0.25))'
        ]
      }}
      transition={{
        x: { type: 'spring', stiffness: 70, damping: 18, delay: 0.15 },
        opacity: { duration: 0.7, delay: 0.15 },
        rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
        scale: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        filter: { repeat: Infinity, duration: 7, ease: 'easeInOut' }
      }}
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.25))' }}
    />
    {/* Logo - Normal Size, Underneath */}
    <motion.img
      src={SliderDesktopLogo}
      alt="Slider Logo"
      className="relative right-8 w-full h-full object-contain z-30"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    />
  </div>
)

export default AnimatedSliderLogoComponent
