import React from 'react'
import SliderBackground from '@/assets/slider/slider-background.png'

const SliderBackgroundImage: React.FC = () => (
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
)

export default SliderBackgroundImage
