import React from 'react'
import { motion } from 'framer-motion'

const SliderContentComponent: React.FC = () => (
  <div className="absolute inset-0 z-20 flex items-center">
    <div className="w-full lg:w-1/2 px-8 lg:px-20">
      <motion.div
        className="max-w-3xl"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 rounded-full mb-6 border border-red-200"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
          <span className="text-red-700 font-medium text-sm tracking-wide">AGENCE DIGITALE PREMIUM</span>
        </motion.div>

        <motion.h1
          className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.5 }}
        >
          <motion.span 
            className="block text-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Innovation
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Digitale
          </motion.span>
          <motion.span 
            className="block text-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            d'Excellence
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl lg:text-2xl mb-10 leading-relaxed text-gray-700 font-light max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.7 }}
        >
          Transformez votre entreprise avec nos{' '}
          <span className="text-red-600 font-semibold">solutions de pointe</span>.
          Nous créons des{' '}
          <span className="text-red-600 font-semibold">expériences digitales premium</span>{' '}
          qui stimulent la croissance et l'innovation.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.9 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">Commencer Maintenant</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button 
            className="group border-2 border-gray-800 text-gray-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 hover:text-white transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="relative z-10">Découvrir Plus</span>
            <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.button>
        </motion.div>
              
      </motion.div>
    </div>
  </div>
)

export default SliderContentComponent
