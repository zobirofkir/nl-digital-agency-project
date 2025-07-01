import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ServiceComponent = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [activeProcess, setActiveProcess] = useState(0)

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
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Interfaces utilisateur modernes et expériences optimisées',
      features: ['Figma', 'Adobe XD', 'Prototypage']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Infrastructure cloud et déploiement automatisé',
      features: ['AWS', 'Docker', 'CI/CD']
    }
  ]

  const pricingPlans = [
    { name: 'Starter', price: '999 MAD', features: ['Site vitrine', 'Design responsive', 'SEO de base'], popular: false },
    { name: 'Business', price: '2499 MAD', features: ['E-commerce complet', 'CMS personnalisé', 'Support 24/7'], popular: true },
    { name: 'Enterprise', price: 'Sur devis', features: ['Solution sur mesure', 'Intégrations avancées', 'Support dédié'], popular: false }
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

      <div className="container mx-auto relative z-10">
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

        {/* Service Cards Grid */}
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
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Back - Full Info */}
                <div className="absolute inset-0 bg-red-500 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-6 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center text-red-200">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-red-100 text-center mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center text-sm md:text-base text-red-200">
                        <span className="w-2 h-2 bg-red-300 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-100">Nos Tarifs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border text-center relative ${
                  plan.popular 
                    ? 'bg-white text-red-600 border-white scale-105' 
                    : 'bg-white/10 backdrop-blur-sm border-white/20 text-white'
                }`}
                whileHover={{ scale: plan.popular ? 1.08 : 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Populaire
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className={`w-2 h-2 rounded-full mr-3 ${
                        plan.popular ? 'bg-red-600' : 'bg-red-300'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all ${
                  plan.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Choisir ce plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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