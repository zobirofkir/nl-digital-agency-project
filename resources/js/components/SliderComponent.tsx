import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCircleComponent from './slider/AnimatedCircleComponent'
import SliderBackgroundImageComponent from './slider/SliderBackgroundImageComponent'
import SliderContentComponent from './slider/SliderContentComponent'

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
    </div>
  )
}

export default SliderComponent