import React from 'react'
import SliderBackground from '@/assets/slider/slider-background.png';

const SliderComponent = () => {
  return (
    <div className="relative w-full min-h-screen h-screen">
      {/* Background slider image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${SliderBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25, 
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      {/* Slider content */}
      <div className="relative z-10">
        Slider Component
      </div>
    </div>
  )
}

export default SliderComponent