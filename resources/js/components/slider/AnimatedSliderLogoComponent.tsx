import React from 'react'
import { motion } from 'framer-motion'
import SliderLogo from '@/assets/slider/slider-logo.png'

const AnimatedSliderLogoComponent = () => (
  <motion.img
    src={SliderLogo}
    alt="Slider Logo"
    className="absolute lg:right-8 top-1/2 -translate-y-1/2 w-full h-full object-contain z-30"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 80, damping: 20 }}
  />
)

export default AnimatedSliderLogoComponent
