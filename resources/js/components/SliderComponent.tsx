import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCircleComponent from './slider/AnimatedCircleComponent'
import SliderBackgroundImageComponent from './slider/SliderBackgroundImageComponent'
import SliderContentComponent from './slider/SliderContentComponent'
import AnimatedSliderLogoComponent from './slider/AnimatedSliderLogoComponent' // Added import

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
      
      {/* Mobile Layout: Content above logo */}
      <div className="lg:hidden">
        <SliderContentComponent />
        <div className="absolute bottom-0 right-0 w-full h-1/2">
          <AnimatedSliderLogoComponent />
        </div>
      </div>
      
      {/* Desktop Layout: Content left, logo right */}
      <div className="hidden lg:block">
        <SliderContentComponent />
        <AnimatedSliderLogoComponent />
      </div>
    </div>
  )
}

export default SliderComponent