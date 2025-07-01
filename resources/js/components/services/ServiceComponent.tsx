import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaMobile, FaBullseye, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ServiceComponent = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [activeProcess, setActiveProcess] = useState(0)

  const services = [
    {
      icon: FaRocket,
      title: 'Développement Web',
      description: 'Sites web modernes et performants avec les dernières technologies',
      features: ['React/Next.js', 'Laravel/PHP', 'Responsive Design']
    },
    {
      icon: FaMobile,
      title: 'Applications Mobile',
      description: 'Applications natives et cross-platform pour iOS et Android',
      features: ['React Native', 'Flutter', 'UI/UX Design']
    },
    {
      icon: FaBullseye,
      title: 'Marketing Digital',
      description: 'Stratégies digitales pour booster votre présence en ligne',
      features: ['SEO/SEA', 'Social Media', 'Analytics']
    }
  ]

  return (
    <motion.section 
      className="relative bg-red-600 text-white px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 mt-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 30px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Nos <span className="text-red-200">Services</span>
          </motion.h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="relative">
          {/* Previous Button */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-xl" />
          </motion.button>
          
          {/* Next Button */}
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-xl" />
          </motion.button>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 md:h-96 cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => {
                setFlippedCards(prev => 
                  prev.includes(index) 
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
                )
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front - Logo Only */}
                <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  {/* Laser Animations */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={`laser-${i}`}
                        className={`absolute w-0.5 h-6 ${i % 2 === 0 ? 'bg-white/80' : 'bg-red-500/80'} rounded-full`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: 'center'
                        }}
                        animate={{
                          x: [
                            Math.cos((i * 60) * Math.PI / 180) * 60,
                            Math.cos((i * 60 + 90) * Math.PI / 180) * 80,
                            Math.cos((i * 60 + 180) * Math.PI / 180) * 60,
                            Math.cos((i * 60 + 270) * Math.PI / 180) * 80,
                            Math.cos((i * 60) * Math.PI / 180) * 60
                          ],
                          y: [
                            Math.sin((i * 60) * Math.PI / 180) * 60,
                            Math.sin((i * 60 + 90) * Math.PI / 180) * 80,
                            Math.sin((i * 60 + 180) * Math.PI / 180) * 60,
                            Math.sin((i * 60 + 270) * Math.PI / 180) * 80,
                            Math.sin((i * 60) * Math.PI / 180) * 60
                          ],
                          rotate: [0, 90, 180, 270, 360],
                          opacity: [0.6, 1, 0.4, 1, 0.6],
                          scale: [0.8, 1.2, 0.6, 1.4, 0.8]
                        }}
                        transition={{
                          duration: 4 + i * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2 + i * 0.1
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.div 
                    className="text-8xl text-red-500 relative z-10"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                  >
                    <service.icon />
                  </motion.div>
                </div>

                {/* Back - Full Info */}
                <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 p-4 md:p-6 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-black text-center mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 md:space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center text-sm md:text-base text-black">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <button className="bg-transparent border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ServiceComponent