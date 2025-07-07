/**
 * AnimatedCircleComponent
 * Renders an animated decorative circle with CSS animations for better performance.
 */
import React from 'react'
import CirclePng from '@/assets/icons/circle-icon.png'

type AnimatedCircleProps = {
  position: 'left-center' | 'top-right'
  className?: string
  size?: 'large' | 'medium'
}

const sizeClass = {
  large: 'w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64',
  medium: 'w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40'
}

const AnimatedCircleComponent: React.FC<AnimatedCircleProps> = ({ position, className, size = 'large' }) => {
  const animationClass = position === 'left-center' ? 'animate-bounce' : 'animate-pulse'
  
  return (
    <div
      className={`${className} ${animationClass}`}
      style={{ pointerEvents: 'none' }}
    >
      <img
        src={CirclePng}
        alt="Decorative Circle"
        className={`${sizeClass[size]} object-contain`}
        draggable={false}
      />
    </div>
  )
}

export default AnimatedCircleComponent
