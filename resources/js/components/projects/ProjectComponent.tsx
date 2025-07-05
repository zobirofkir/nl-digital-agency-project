import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedCircleComponent from '../slider/AnimatedCircleComponent'
import axios from 'axios'
import useTranslation from '@/hooks/useTranslation'

interface ProjectComponentProps {
  bgColor?: 'black' | 'white'
  textColor?: 'white' | 'black'
}

interface Project {
  id: number
  title: string
  image: string | null
  description: string
  author: string
  created_at: string
}

const ProjectComponent = ({ bgColor = 'black', textColor = 'white' }: ProjectComponentProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { t } = useTranslation()

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/projects')
        if (response.data.success) {
          setProjects(response.data.data)
        } else {
          setError('Failed to load projects')
        }
      } catch (err) {
        setError('Failed to load projects')
        console.error('Error fetching projects:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const defaultImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'

  return (
    <>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <section className={`relative ${bgColor === 'black' ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-4 overflow-hidden`}>
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
            <span className="text-red-500">{t('projectsComponent.title').split(' ')[0]}</span>{' '}
            <span className={textColor === 'white' ? 'text-white' : 'text-black'}>{t('projectsComponent.title').split(' ').slice(1).join(' ')}</span>
          </h2>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className={`${textColor === 'white' ? 'text-white' : 'text-black'} text-lg`}>{error}</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="max-w-7xl mx-auto">
            {/* First Row - 3 Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {projects.slice(0, 3).map((project, index) => {
                const isFlipped = flippedCards.includes(index)
                return (
                  <motion.div
                    key={project.id}
                    className="relative h-64 cursor-pointer perspective-1000"
                    onClick={() => toggleFlip(index)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative w-full h-full preserve-3d"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {/* Front Face */}
                      <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                        <motion.img
                          src={project.image || defaultImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          style={{
                            filter: 'drop-shadow(0 12px 20px rgba(139, 0, 0, 0.7)) drop-shadow(0 4px 8px rgba(220, 38, 38, 0.5))'
                          }}
                          whileHover={{
                            scale: 1.05,
                            filter: 'drop-shadow(0 16px 32px rgba(139, 0, 0, 0.8)) drop-shadow(0 8px 16px rgba(220, 38, 38, 0.7)) brightness(1.1)'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Back Face */}
                      <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 transform rotateY-180">
                        <h3 className="text-white text-xl font-bold text-center leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm text-center">
                          By {project.author}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Second Row - 2 Cards */}
            {projects.length > 3 && (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {projects.slice(3, 5).map((project, index) => {
                  const actualIndex = index + 3
                  const isFlipped = flippedCards.includes(actualIndex)
                  return (
                    <motion.div
                      key={project.id}
                      className="relative h-64 cursor-pointer perspective-1000"
                      onClick={() => toggleFlip(actualIndex)}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: actualIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative w-full h-full preserve-3d"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {/* Front Face */}
                        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                          <motion.img
                            src={project.image || defaultImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            style={{
                              filter: 'drop-shadow(0 12px 20px rgba(139, 0, 0, 0.7)) drop-shadow(0 4px 8px rgba(220, 38, 38, 0.5))'
                            }}
                            whileHover={{
                              scale: 1.05,
                              filter: 'drop-shadow(0 16px 32px rgba(139, 0, 0, 0.8)) drop-shadow(0 8px 16px rgba(220, 38, 38, 0.7)) brightness(1.1)'
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        
                        {/* Back Face */}
                        <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 transform rotateY-180">
                          <h3 className="text-white text-xl font-bold text-center leading-tight mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm text-center">
                            By {project.author}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </div>
        )}

        {/* No Projects State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <p className={`${textColor === 'white' ? 'text-white' : 'text-black'} text-lg`}>
              {t('projectsComponent.noProjects')}
            </p>
          </div>
        )}
      </div>
    </section>
    </>
  )
}

export default ProjectComponent