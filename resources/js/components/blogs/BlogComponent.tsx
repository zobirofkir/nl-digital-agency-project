import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight, FaRobot, FaCode, FaMobile, FaRocket } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
import AnimatedCircleComponent from '../slider/AnimatedCircleComponent'

interface Blog {
  id: number
  title: string
  excerpt: string
  featured_image: string
  author: string
  date: string
  category: string
  slug: string
}

interface BlogComponentProps {
  bgColor?: 'black' | 'white'
  textColor?: 'white' | 'black'
  blogs?: Blog[]
}

const BlogComponent = ({ bgColor = 'black', textColor = 'white', blogs = [] }: BlogComponentProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [apiBlogs, setApiBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (blogs.length === 0) {
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          setApiBlogs(data.data || [])
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [blogs])

  const blogPosts = blogs.length > 0 
    ? blogs.map(blog => ({
        ...blog,
        image: (typeof blog.featured_image === 'string' && blog.featured_image) || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
        icon: FaRobot,
        readTime: '5 min'
      }))
    : apiBlogs.map(blog => ({
        ...blog,
        image: (typeof blog.featured_image === 'string' && blog.featured_image) || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
        icon: FaRobot,
        readTime: '5 min'
      }))

  return (
    <section className={`relative ${bgColor === 'black' ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-4 overflow-hidden`}>
      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-red-500/30 to-red-600/10 backdrop-blur-sm"
            style={{
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-20, 30, -15, 25, -20],
              x: [-10, 20, -5, 15, -10],
              scale: [0.7, 1.2, 0.8, 1.1, 0.7],
              opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Animated Circles */}
      <AnimatedCircleComponent 
        position="left-center" 
        className="absolute left-8 top-1/3 transform -translate-y-1/2 z-10" 
        size="medium"
      />
      <AnimatedCircleComponent 
        position="top-right" 
        className="absolute right-8 top-1/4 transform -translate-y-1/2 z-10" 
        size="small"
      />

      <div className="container mx-auto relative z-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-red-400 text-lg font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights & Innovation
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-red-500">Blog</span>{' '}
            <span className={textColor === 'white' ? 'text-white' : 'text-black'}>Technologique</span>
          </motion.h1>
          <motion.p 
            className={`text-xl ${textColor === 'white' ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Découvrez les dernières tendances et innovations dans le monde du développement digital
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className={`text-xl ${textColor === 'white' ? 'text-white' : 'text-black'}`}>Loading blogs...</div>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link href={`/blogs/${post.slug || post.id}`} key={post.id}>
              <motion.article
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(post.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-red-500/20 shadow-2xl"
                animate={{
                  borderColor: hoveredCard === post.id ? 'rgba(239, 68, 68, 0.5)' : 'rgba(239, 68, 68, 0.2)',
                  boxShadow: hoveredCard === post.id 
                    ? '0 25px 50px -12px rgba(239, 68, 68, 0.3)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                      src={`storage/${post.featured_image}` || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === post.id ? 1.1 : 1,
                      filter: hoveredCard === post.id 
                        ? 'brightness(1.1) saturate(1.2)' 
                        : 'brightness(0.9) saturate(1)'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <post.icon className="text-xs" />
                    {post.category}
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === post.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <motion.div 
                    className="flex items-center gap-4 text-gray-400 text-sm mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex items-center gap-1">
                      <FaUser className="text-xs" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {post.date}
                    </div>
                    <div className="text-red-400 font-medium">
                      {post.readTime}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {post.title}
                  </motion.h3>

                  {/* Excerpt */}
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    {post.excerpt}
                  </motion.p>

                  {/* Read More Button */}
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    <motion.button 
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 font-medium text-sm transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Lire l'article
                      <motion.div
                        animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Animated Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-red-500/0 pointer-events-none"
                  animate={{
                    borderColor: hoveredCard === post.id ? 'rgba(239, 68, 68, 0.6)' : 'rgba(239, 68, 68, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              </motion.article>
            </Link>
          ))}
        </div>
        )}

        {/* Load More Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-red-500/30 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Charger plus d'articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogComponent