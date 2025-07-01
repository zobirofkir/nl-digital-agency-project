import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCircleComponent from '../slider/AnimatedCircleComponent'

const ProjectComponent = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      title: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    },
    {
      title: 'Corporate Website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      title: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      title: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop'
    }
  ]

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Animated Red Bubbles */}
      <motion.div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-red-500/40 to-red-600/20 backdrop-blur-sm"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i % 5) * 18}%`,
              filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.3))'
            }}
            animate={{
              y: [-30, 40, -20, 30, -30],
              x: [-15, 25, -10, 20, -15],
              scale: [0.8, 1.3, 0.9, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
              rotate: [0, 180, 90, 270, 0]
            }}
            transition={{
              duration: 8 + (i % 3) * 2,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.4
            }}
          />
        ))}
      </motion.div>

      {/* Floating Bubble Clusters */}
      <motion.div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`cluster-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20 + i * 2, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }
            }}
          >
            {[...Array(3)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-3 h-3 bg-red-500/30 rounded-full"
                style={{
                  left: `${j * 15}px`,
                  top: `${j * 8}px`,
                  filter: 'blur(0.5px) drop-shadow(0 0 4px rgba(239, 68, 68, 0.4))'
                }}
                animate={{
                  scale: [0.6, 1.4, 0.8, 1.2, 0.6],
                  opacity: [0.4, 1, 0.6, 0.9, 0.4]
                }}
                transition={{
                  duration: 3 + j,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: j * 0.3
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Circles */}
      <AnimatedCircleComponent 
        position="left-center" 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10" 
        size="medium"
      />
      <AnimatedCircleComponent 
        position="top-right" 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10" 
        size="medium"
      />

      <div className="container mx-auto relative z-20">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-red-500">Distinguez-vous</span>{' '}
            <span className="text-white whitespace-nowrap">dès maintenant grâce à nos services !</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 3 Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    style={{
                      filter: 'drop-shadow(0 8px 16px rgba(239, 68, 68, 0.4))'
                    }}
                    whileHover={{
                      scale: 1.1,
                      filter: 'drop-shadow(0 12px 24px rgba(239, 68, 68, 0.6)) brightness(1.1)'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 Cards Centered */}
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {projects.slice(3, 5).map((project, index) => (
                <motion.div
                  key={index + 3}
                  className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(239, 68, 68, 0.4))'
                      }}
                      whileHover={{
                        scale: 1.1,
                        filter: 'drop-shadow(0 12px 24px rgba(239, 68, 68, 0.6)) brightness(1.1)'
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectComponent