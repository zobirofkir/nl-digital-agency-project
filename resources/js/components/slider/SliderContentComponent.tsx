import React from 'react'
import { motion } from 'framer-motion'

const SliderContentComponent: React.FC = () => (
  <div className="absolute inset-0 z-20 flex items-center">
    <div className="w-full lg:w-1/2 px-8 lg:px-16">
      <motion.div
        className="max-w-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-black">Digital</span>{' '}
          <span className="text-red-600">Innovation</span>{' '}
          <span className="text-black">Meets</span>{' '}
          <span className="text-red-600">Excellence</span>
        </motion.h1>
        
        <motion.p
          className="text-lg lg:text-xl mb-8 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="text-black">Transform your business with our </span>
          <span className="text-red-600 font-semibold">cutting-edge solutions</span>
          <span className="text-black">. We deliver </span>
          <span className="text-red-600 font-semibold">premium digital experiences</span>
          <span className="text-black"> that drive growth and innovation.</span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Learn More
          </button>
        </motion.div>
        
      </motion.div>
    </div>
  </div>
)

export default SliderContentComponent
