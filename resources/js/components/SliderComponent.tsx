import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCircle from './slider/AnimatedCircle'
import SliderBackgroundImage from './slider/SliderBackgroundImage'
import SliderContent from './slider/SliderContent'

const SliderComponent = () => {
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Animated Circles */}
      <AnimatedCircle
        position="left-center"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
        size="large"
      />
      <AnimatedCircle
        position="top-right"
        className="absolute right-0 top-0 z-10"
        size="medium"
      />
      {/* Background slider image */}
      <SliderBackgroundImage />
      {/* Slider content */}
      <SliderContent />
    </div>
  )
}

export default SliderComponent