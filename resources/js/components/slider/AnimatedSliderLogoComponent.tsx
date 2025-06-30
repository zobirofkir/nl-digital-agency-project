import React from 'react'
import { motion } from 'framer-motion'
import SliderDesktopLogo from '@/assets/slider/slider-desktop-logo.png'
import SliderDesktopPersonne from '@/assets/slider/slider-desktop-personne-image.png'
import SliderMobileLogo from '@/assets/slider/slider-mobile-logo.png'
import SliderMobilePersonne from '@/assets/slider/slider-mobile-personne.png'

const AnimatedSliderLogoComponent = () => (
  <div className="flex items-center justify-center lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:justify-end z-30 px-0 lg:px-8">
    {/* Desktop Personne Image */}
    <motion.img
      src={SliderDesktopPersonne}
      alt="Slider Personne"
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-contain z-40 drop-shadow-2xl"
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
    />

    {/* Mobile Personne Image */}
    <motion.img
      src={SliderMobilePersonne}
      alt="Slider Personne"
      className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full h-full object-contain z-40 drop-shadow-2xl"
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { type: 'spring', stiffness: 70, damping: 18, delay: 0.15 }, opacity: { duration: 0.7, delay: 0.15 } }}
    />  

    {/* Desktop Logo */}
    <motion.img
      src={SliderDesktopLogo}
      alt="Slider Logo"
      className="hidden lg:block relative right-8 w-full h-full object-contain z-30"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    />
    {/* Mobile Logo */}
    <motion.img
      src={SliderMobileLogo}
      alt="Slider Logo"
      className="lg:hidden w-48 h-32 object-contain z-30"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    />
  </div>
)

export default AnimatedSliderLogoComponent
