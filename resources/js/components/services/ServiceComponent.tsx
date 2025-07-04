import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaMobile, FaBullseye, FaChevronLeft, FaChevronRight, FaPaintBrush, FaShoppingCart, FaCloud, FaCog, FaCamera, FaArrowRight } from 'react-icons/fa'
import ServicePersonneImage from '@/assets/services/service-personne-image.png';

interface ServiceComponentProps {
  bgColor?: 'red' | 'black' | 'white'
}

interface Service {
  id: number;
  title: string;
  description: string;
  skills: string[];
  url?: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}

const ServiceComponent = ({ bgColor = 'red' }: ServiceComponentProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    )
  }

  const cardsPerView = 3
  const maxIndex = Math.max(0, services.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <motion.section 
      className={`relative ${bgColor === 'red' ? 'bg-gradient-to-br from-red-900 via-red-700 to-red-800' : bgColor === 'white' ? 'bg-white' : 'bg-black'} ${bgColor === 'white' ? 'text-black' : 'text-white'} py-20 lg:px-4 px-1 overflow-hidden min-h-screen flex items-center`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${bgColor === 'white' ? 'bg-black/30' : 'bg-white/30'} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className={`absolute top-20 left-10 w-32 h-32 border-2 ${bgColor === 'white' ? 'border-black/20' : 'border-white/20'} rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={`absolute bottom-20 right-10 w-24 h-24 border-2 ${bgColor === 'white' ? 'border-gray-400/30' : 'border-red-300/30'} rotate-45`}
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10 mt-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div className="mb-8">
            <motion.span 
              className={`inline-block ${bgColor === 'white' ? 'text-gray-600' : 'text-red-200'} text-lg font-medium tracking-wider uppercase mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Excellence & Innovation
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Nos{' '}
              <motion.span 
                className={`relative inline-block text-transparent bg-clip-text ${bgColor === 'white' ? 'bg-gradient-to-r from-black to-gray-600' : 'bg-gradient-to-r from-white to-red-200'}`}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                Services
                <motion.div 
                  className={`absolute -bottom-2 left-0 h-1 ${bgColor === 'white' ? 'bg-gradient-to-r from-black to-gray-600' : 'bg-gradient-to-r from-white to-red-200'} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${bgColor === 'white' ? 'text-gray-700' : 'text-red-100'} max-w-2xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Des solutions digitales sur mesure pour propulser votre entreprise vers le succès
            </motion.p>
          </motion.div>
          
          {/* Navigation */}
          <motion.div 
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`group ${bgColor === 'white' ? 'bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50' : 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'} backdrop-blur-md rounded-full p-4 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg`}
              whileHover={{ scale: currentIndex === 0 ? 1 : 1.05, y: -2 }}
              whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
            >
              <FaChevronLeft className={`text-xl ${bgColor === 'white' ? 'group-hover:text-gray-600' : 'group-hover:text-red-200'} transition-colors`} />
            </motion.button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(services.length / cardsPerView) }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / cardsPerView) === i ? (bgColor === 'white' ? 'bg-black' : 'bg-white') : (bgColor === 'white' ? 'bg-black/30' : 'bg-white/30')
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`group ${bgColor === 'white' ? 'bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50' : 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'} backdrop-blur-md rounded-full p-4 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg`}
              whileHover={{ scale: currentIndex === maxIndex ? 1 : 1.05, y: -2 }}
              whileTap={{ scale: currentIndex === maxIndex ? 1 : 0.95 }}
            >
              <FaChevronRight className={`text-xl ${bgColor === 'white' ? 'group-hover:text-gray-600' : 'group-hover:text-red-200'} transition-colors`} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8 lg:gap-10"
            animate={{ x: -currentIndex * (100 / cardsPerView) + '%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-80 md:w-96 h-[500px] cursor-pointer group"
                style={{ perspective: '1200px' }}
                onClick={() => {
                  setFlippedCards(prev => 
                    prev.includes(index) 
                      ? prev.filter(i => i !== index)
                      : [...prev, index]
                  )
                }}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Front Card */}
                  <div 
                    className={`absolute inset-0 ${bgColor === 'white' ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 border-gray-400/30' : 'bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-red-500/30'} rounded-3xl shadow-2xl border overflow-hidden`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Card Background Effects */}
                    <div className="absolute inset-0">
                      <div className={`absolute top-0 left-0 w-full h-full ${bgColor === 'white' ? 'bg-gradient-to-br from-black/10 to-transparent' : 'bg-gradient-to-br from-white/10 to-transparent'}`}></div>
                      <motion.div 
                        className={`absolute -top-20 -right-20 w-40 h-40 ${bgColor === 'white' ? 'bg-black/5' : 'bg-white/5'} rounded-full`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div 
                        className={`absolute -bottom-10 -left-10 w-32 h-32 ${bgColor === 'white' ? 'bg-gray-400/10' : 'bg-red-400/10'} rounded-full`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    
                    {/* Service Image */}
                    <motion.img 
                      src={ServicePersonneImage} 
                      alt="Service" 
                      className="absolute inset-0 w-full h-full object-cover opacity-5"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, 0]
                      }}
                      transition={{
                        duration: 8 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                      <motion.div 
                        className={`mb-8 p-6 ${bgColor === 'white' ? 'bg-black/10 border-black/20' : 'bg-white/10 border-white/20'} backdrop-blur-sm rounded-2xl border`}
                        animate={{ 
                          boxShadow: [
                            '0 0 20px rgba(255,255,255,0.1)',
                            '0 0 40px rgba(255,255,255,0.2)',
                            '0 0 20px rgba(255,255,255,0.1)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <motion.div 
                          className={`text-6xl ${bgColor === 'white' ? 'text-black' : 'text-white'}`}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: 'easeInOut',
                            delay: index * 0.3
                          }}
                        >
                          <FaCog />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className={`text-2xl md:text-3xl font-bold mb-4 ${bgColor === 'white' ? 'text-black' : 'text-white'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className={`${bgColor === 'white' ? 'text-gray-700' : 'text-red-100'} text-lg leading-relaxed mb-8`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.div 
                        className={`text-sm ${bgColor === 'white' ? 'text-gray-600' : 'text-red-200'} mb-4`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        Par: {service.user.name}
                      </motion.div>
                      
                      <motion.div 
                        className={`flex items-center ${bgColor === 'white' ? 'text-black/80' : 'text-white/80'} text-sm font-medium`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <span className="mr-2">Cliquez pour découvrir</span>
                        <FaArrowRight className="text-xs" />
                      </motion.div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    />
                  </div>

                  {/* Back Card */}
                  <div 
                    className={`absolute inset-0 ${bgColor === 'white' ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 border-gray-400/50' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black border-red-500/50'} rounded-3xl shadow-2xl border p-8 flex flex-col justify-center z-[9999]`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <motion.div 
                      className="text-center mb-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: flippedCards.includes(index) ? 1 : 0, scale: flippedCards.includes(index) ? 1 : 0.8 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className={`text-4xl ${bgColor === 'white' ? 'text-gray-700' : 'text-red-400'} mb-4`}>
                        <FaCog />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 ${bgColor === 'white' ? 'text-black' : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className={`${bgColor === 'white' ? 'text-gray-700' : 'text-gray-300'} mb-6 leading-relaxed`}>
                        {service.description}
                      </p>
                      <p className={`text-sm ${bgColor === 'white' ? 'text-gray-600' : 'text-gray-400'} mb-4`}>
                        Créé par: {service.user.name}
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-3 mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: flippedCards.includes(index) ? 1 : 0, x: flippedCards.includes(index) ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {service.skills.map((skill, i) => (
                        <motion.div 
                          key={i} 
                          className={`flex items-center ${bgColor === 'white' ? 'text-black' : 'text-gray-200'}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: flippedCards.includes(index) ? 1 : 0, x: flippedCards.includes(index) ? 0 : -10 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <div className={`w-2 h-2 ${bgColor === 'white' ? 'bg-gray-700' : 'bg-red-400'} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: flippedCards.includes(index) ? 1 : 0, y: flippedCards.includes(index) ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {service.url ? (
                        <a 
                          href={service.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${bgColor === 'white' ? 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black border-gray-400/30' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-red-500/30'} text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border inline-block`}
                        >
                          Voir le projet
                        </a>
                      ) : (
                        <button className={`${bgColor === 'white' ? 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black border-gray-400/30' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-red-500/30'} text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border`}>
                          En savoir plus
                        </button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ServiceComponent