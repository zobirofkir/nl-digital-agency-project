import React from 'react'
import { motion } from 'framer-motion'

const ServiceComponent = () => {
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(255,255,255,0.1)',
                    '0 15px 40px rgba(255,255,255,0.2)',
                    '0 10px 30px rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-4 text-center"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: index * 0.3
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold mb-3 text-center group-hover:text-red-200 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-red-100 text-sm mb-4 text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center justify-center text-xs text-red-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="w-1 h-1 bg-red-300 rounded-full mr-2"></span>
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-red-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
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