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
    desktop: {
      x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
      y: [0, -30, 0, 30, 60, 30, 0, -30, 0]
    },
    mobile: {
      // Subtle, small movement for mobile
      x: [0, 6, 12, 6, 0, -6, -12, -6, 0],
      y: [0, -8, 0, 8, 12, 8, 0, -8, 0]
    }
  },
  'top-right': {
    desktop: {
      x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
      y: [0, 30, 0, -30, -60, -30, 0, 30, 0]
    },
    mobile: {
      // Subtle, small movement for mobile
      x: [0, 8, 16, 8, 0, -8, -16, -8, 0],
      y: [0, 8, 0, -8, -16, -8, 0, 8, 0]
    }
  }
}

const sizeClass = {
  large: 'w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain',
  medium: 'w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain',
  // Smaller for mobile for both circles
  mobileLarge: 'w-30 h-30 object-contain',
  mobileMedium: 'w-20 h-20 object-contain'
}

const useIsMobile = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 767px)').matches
}

const AnimatedCircleComponent: React.FC<AnimatedCircleProps> = ({ position, className, size = 'large' }) => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 767px)').matches)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const variant = isMobile ? animationVariants[position].mobile : animationVariants[position].desktop
  const appliedSize = isMobile
    ? (size === 'large' ? sizeClass.mobileLarge : sizeClass.mobileMedium)
    : sizeClass[size]

  return (
    <motion.div
      className={className}
      initial={{ x: 0, y: 0 }}
      animate={variant}
      transition={{
        duration: isMobile ? 6 : 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ pointerEvents: 'none' }}
    >
      <img
        src={CirclePng}
        alt="Decorative Circle"
        className={appliedSize}
        draggable={false}
      />
    </motion.div>
  )
}

export default AnimatedCircleComponent
