import React from 'react'
import { motion } from 'framer-motion'
import SliderDesktopLogo from '@/assets/slider/slider-desktop-logo.png'
import SliderDesktopPersonne from '@/assets/slider/slider-desktop-personne-image.png'
import SliderMobileLogo from '@/assets/slider/slider-mobile-logo.png'
import SliderMobilePersonne from '@/assets/slider/slider-mobile-personne.png'

const AnimatedSliderLogoComponent = () => (
  <div className="flex items-center justify-end lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-30 px-0 lg:px-8">
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
    <div className="lg:hidden absolute -right-25 top-1/2 -translate-y-1/2 w-full h-full z-40">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-red-500 rounded-full opacity-60" style={{ borderStyle: 'dashed' }} />
        <div className="absolute top-0 left-1/2 w-1 h-8 bg-red-500 -translate-x-1/2 -translate-y-4" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
        <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-red-500 -translate-x-1/2 translate-y-4" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
        <div className="absolute left-0 top-1/2 w-8 h-1 bg-red-500 -translate-y-1/2 -translate-x-4" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
        <div className="absolute right-0 top-1/2 w-8 h-1 bg-red-500 -translate-y-1/2 translate-x-4" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
      </motion.div>
      <motion.img
        src={SliderMobilePersonne}
        alt="Slider Personne"
        className="w-full h-full object-contain drop-shadow-2xl"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ x: { type: 'spring', stiffness: 70, damping: 18, delay: 0.15 }, opacity: { duration: 0.7, delay: 0.15 } }}
      />
    </div>  

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
    <div className="lg:hidden w-[60%] h-[60%] relative -right-2 z-30">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-red-500 rounded-lg opacity-70" style={{ borderStyle: 'dotted' }} />
        <motion.div
          className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.9)' }}
        />
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.9)' }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.9)' }}
        />
        <motion.div
          className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.9)' }}
        />
      </motion.div>
      <motion.img
        src={SliderMobileLogo}
        alt="Slider Logo"
        className="w-full h-full object-contain"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      />
    </div>
  </div>
)

export default AnimatedSliderLogoComponent
