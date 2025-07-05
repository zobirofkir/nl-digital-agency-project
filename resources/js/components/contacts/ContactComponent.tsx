import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useTranslation from '@/hooks/useTranslation'

interface ContactComponentProps {
  bgColor?: 'black' | 'white'
  textColor?: 'white' | 'black'
}

const ContactComponent = ({ bgColor = 'black', textColor = 'white' }: ContactComponentProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className={`${bgColor === 'black' ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-4`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={textColor === 'white' ? 'text-white' : 'text-black'}>{t('contactComponent.title').split(' ')[0]}</span>{' '}
            <span className="text-red-500">{t('contactComponent.title').split(' ')[1]}</span>
          </h2>
          <p className={`${textColor === 'white' ? 'text-white/80' : 'text-black/80'} text-lg`}>{t('contactComponent.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className={`block ${textColor === 'white' ? 'text-white' : 'text-black'} mb-2 font-medium`}>{t('contactComponent.nameLabel')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${bgColor === 'black' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-lg focus:border-red-500 focus:outline-none transition-colors`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className={`block ${textColor === 'white' ? 'text-white' : 'text-black'} mb-2 font-medium`}>{t('contactComponent.emailLabel')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${bgColor === 'black' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-lg focus:border-red-500 focus:outline-none transition-colors`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className={`block ${textColor === 'white' ? 'text-white' : 'text-black'} mb-2 font-medium`}>{t('contactComponent.messageLabel')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 ${bgColor === 'black' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none`}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
{t('contactComponent.sendButton')}
              </motion.button>
            </form>
          </motion.div>

          {/* Map iframe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px]"
          >
            <motion.iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0966447684547!2d-7.589843!3d33.573109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sFés%2C%20Morocco!5e0!3m2!1sen!2sus!4v1635959385076!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className={`${textColor === 'white' ? 'text-white' : 'text-black'} font-bold text-xl mb-2`}>
                <span className="text-red-500">{t('contactComponent.phoneTitle')}</span>
              </h3>
              <p className={textColor === 'white' ? 'text-white/80' : 'text-black/80'}>{t('contactComponent.phoneNumber')}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className={`${textColor === 'white' ? 'text-white' : 'text-black'} font-bold text-xl mb-2`}>
                <span className="text-red-500">{t('contactComponent.emailTitle')}</span>
              </h3>
              <p className={textColor === 'white' ? 'text-white/80' : 'text-black/80'}>{t('contactComponent.emailAddress')}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className={`${textColor === 'white' ? 'text-white' : 'text-black'} font-bold text-xl mb-2`}>
                <span className="text-red-500">{t('contactComponent.addressTitle')}</span>
              </h3>
              <p className={textColor === 'white' ? 'text-white/80' : 'text-black/80'}>{t('contactComponent.addressText')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactComponent