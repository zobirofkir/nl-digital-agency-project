import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ServiceComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const services = [
    {
      icon: '🚀',
      title: 'Développement Web',
      description: 'Sites web modernes et performants avec les dernières technologies',
      features: ['React/Next.js', 'Laravel/PHP', 'Responsive Design']
    },
    {
      icon: '📱',
      title: 'Applications Mobile',
      description: 'Applications natives et cross-platform pour iOS et Android',
      features: ['React Native', 'Flutter', 'UI/UX Design']
    },
    {
      icon: '🎯',
      title: 'Marketing Digital',
      description: 'Stratégies digitales pour booster votre présence en ligne',
      features: ['SEO/SEA', 'Social Media', 'Analytics']
    },
    {
      icon: '⚡',
      title: 'E-commerce',
      description: 'Solutions complètes pour votre boutique en ligne',
      features: ['Shopify', 'WooCommerce', 'Paiement sécurisé']
    }
  ]

  return (
    <motion.section 
      className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-20 px-4 overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10">
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
          <motion.p 
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </motion.p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <motion.button
            onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : services.length - 1)}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <span className="text-white/60">{currentIndex + 1} / {services.length}</span>
          <motion.button
            onClick={() => setCurrentIndex(prev => prev < services.length - 1 ? prev + 1 : 0)}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>

        {/* Service Card */}
        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            className="relative w-80 h-96 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => {
              setFlippedCards(prev => 
                prev.includes(currentIndex) 
                  ? prev.filter(i => i !== currentIndex)
                  : [...prev, currentIndex]
              )
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: flippedCards.includes(currentIndex) ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front - Logo Only */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                <motion.div 
                  className="text-8xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: 'easeInOut'
                  }}
                >
                  {services[currentIndex].icon}
                </motion.div>
              </div>

              {/* Back - Full Info */}
              <div className="absolute inset-0 bg-red-500 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <h3 className="text-2xl font-bold mb-4 text-center text-red-200">
                  {services[currentIndex].title}
                </h3>
                <p className="text-red-100 text-center mb-6 leading-relaxed">
                  {services[currentIndex].description}
                </p>
                <div className="space-y-3">
                  {services[currentIndex].features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center text-red-200">
                      <span className="w-2 h-2 bg-red-300 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255,255,255,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            Démarrer Votre Projet
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServiceComponent