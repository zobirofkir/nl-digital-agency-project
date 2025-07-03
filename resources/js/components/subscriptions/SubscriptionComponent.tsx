import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface SubscriptionComponentProps {
  bgColor?: 'black' | 'white'
  textColor?: 'white' | 'black'
}

const SubscriptionComponent = ({ bgColor = 'black', textColor = 'white' }: SubscriptionComponentProps) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className={`${bgColor === 'black' ? 'bg-black' : 'bg-white'} py-20 px-4`}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className={textColor === 'white' ? 'text-white' : 'text-black'}>Restez</span>{' '}
            <span className="text-red-500">informé</span>
          </h2>
          <p className={`${textColor === 'white' ? 'text-white/80' : 'text-black/80'} text-lg md:text-xl mb-12 max-w-2xl mx-auto`}>
            Abonnez-vous à notre newsletter pour recevoir les dernières{' '}
            <span className="text-red-500 font-semibold">actualités</span> et{' '}
            <span className="text-red-500 font-semibold">conseils</span> en développement web
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="relative">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className={`w-full px-6 py-4 pr-32 ${bgColor === 'black' ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-600'} border-2 rounded-full focus:border-red-500 focus:outline-none transition-all duration-300`}
                required
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? '✓' : 'S\'abonner'}
              </motion.button>
            </motion.div>
          </form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-green-400 font-medium"
            >
              Merci pour votre abonnement !
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-8 ${textColor === 'white' ? 'text-white/60' : 'text-black/60'} text-sm`}
        >
          Pas de spam, désabonnement possible à tout moment
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              style={{
                left: `${20 + (i * 15) % 60}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SubscriptionComponent