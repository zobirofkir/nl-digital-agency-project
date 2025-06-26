import React from 'react'
import SliderBackground from '@/assets/slider/slider-background.png';
import { motion } from 'framer-motion';
import CirclePng from '@/assets/icons/circle-icon.png';

// Inline SVG Circle component
const AnimatedCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="#38bdf8"
      strokeWidth="16"
      fill="#e0f2fe"
      opacity="0.8"
    />
  </svg>
);

const bounceTransition = {
  y: {
    duration: 1.5,
    yoyo: Infinity,
    ease: 'easeInOut'
  }
};

const SliderComponent = () => {
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Animated Circles */}
      {/* Left Center Circle */}
      <motion.div
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={bounceTransition}
        style={{ pointerEvents: 'none' }}
      >
        <img
          src={CirclePng}
          alt="Decorative Circle"
          className="w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
          draggable={false}
        />
      </motion.div>
      {/* Top Right Circle */}
      <motion.div
        className="absolute right-0 top-0 z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={bounceTransition}
        style={{ pointerEvents: 'none' }}
      >
        <img
          src={CirclePng}
          alt="Decorative Circle"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          draggable={false}
        />
      </motion.div>
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
      <div className="relative z-20">
        Slider Component
      </div>
    </div>
  )
}

export default SliderComponent