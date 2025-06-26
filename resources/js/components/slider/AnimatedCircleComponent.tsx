import React from 'react'
import { motion } from 'framer-motion'
import CirclePng from '@/assets/icons/circle-icon.png'

type AnimatedCircleProps = {
  position: 'left-center' | 'top-right'
  className?: string
  size?: 'large' | 'medium'
}

const animationVariants = {
  'left-center': {
    x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
    y: [0, -30, 0, 30, 60, 30, 0, -30, 0]
  },
  'top-right': {
    x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
    y: [0, 30, 0, -30, -60, -30, 0, 30, 0]
  }
}

const sizeClass = {
  large: 'w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain',
  medium: 'w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain'
}

const AnimatedCircleComponent: React.FC<AnimatedCircleProps> = ({ position, className, size = 'large' }) => (
  <motion.div
    className={className}
    initial={{ x: 0, y: 0 }}
    animate={animationVariants[position]}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{ pointerEvents: 'none' }}
  >
    <img
      src={CirclePng}
      alt="Decorative Circle"
      className={sizeClass[size]}
      draggable={false}
    />
  </motion.div>
)

export default AnimatedCircleComponent
