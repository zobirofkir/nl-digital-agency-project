import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCircleComponent from './slider/AnimatedCircleComponent'
import SliderBackgroundImageComponent from './slider/SliderBackgroundImageComponent'
import SliderContentComponent from './slider/SliderContentComponent'
import SliderLogo from '@/assets/slider/slider-logo.png' // Add this import

const SliderComponent = () => {
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Animated Circles */}
      <AnimatedCircleComponent
        position="left-center"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        size="large"
      />
      <AnimatedCircleComponent
        position="top-right"
        className="absolute right-0 top-0 z-10"
        size="medium"
      />
      {/* Background slider image */}
      <SliderBackgroundImageComponent />
      {/* Slider content */}
      <SliderContentComponent />
      {/* Animated slider logo on the right, centered and big */}
      <motion.img
        src={SliderLogo}
        alt="Slider Logo"
        className="absolute right-8 top-1/2 -translate-y-1/2 w-full h-full object-contain z-30"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      />
    </div>
  )
}

export default SliderComponent