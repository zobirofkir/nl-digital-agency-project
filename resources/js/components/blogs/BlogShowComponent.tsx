import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowLeft, FaRobot, FaCode, FaMobile, FaRocket, FaShare, FaHeart } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
import AnimatedCircleComponent from '../slider/AnimatedCircleComponent'

interface BlogShowComponentProps {
  blog: {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    featured_image?: string
    author: string
    date: string
    category: string
    meta_title?: string
    meta_description?: string
    published_at: string
  }
  bgColor?: 'black' | 'white'
  textColor?: 'white' | 'black'
}

const BlogShowComponent = ({ blog, bgColor = 'black', textColor = 'white' }: BlogShowComponentProps) => {
  if (!blog) return <div>Article non trouvé</div>

  const post = {
    ...blog,
    image: blog.featured_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    icon: FaRobot,
    readTime: blog.content ? Math.ceil(blog.content.split(' ').length / 200) + ' min' : '5 min'
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleFollow = () => {
    window.open('https://twitter.com/intent/follow?screen_name=yourhandle', '_blank')
  }

  return (
    <section className={`relative ${bgColor === 'black' ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-4 overflow-hidden`}>
      {/* Animated Background */}
      <motion.div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10"
            style={{
              width: `${8 + (i % 3) * 6}px`,
              height: `${8 + (i % 3) * 6}px`,
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 20, -10],
              x: [-8, 15, -5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      <AnimatedCircleComponent 
        position="left-center" 
        className="absolute left-8 top-1/4 z-10" 
        size="small"
      />

      <div className="container mx-auto max-w-4xl relative z-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
          >
            <FaArrowLeft />
            Retour aux articles
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <post.icon className="text-red-400" />
            <span className="text-red-400 text-sm font-medium">{blog.category}</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} mb-6 leading-tight`}>
            {post.title}
          </h1>
          
          <div className={`flex items-center gap-6 ${textColor === 'white' ? 'text-gray-400' : 'text-gray-600'} text-sm mb-8`}>
            <div className="flex items-center gap-2">
              <FaUser />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              {blog.date}
            </div>
            <div className="text-red-400 font-medium">
              {post.readTime}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              onClick={handleShare}
              className={`flex items-center gap-2 ${bgColor === 'black' ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} px-4 py-2 rounded-lg transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShare />
              Partager
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-invert prose-red max-w-none"
        >
          <div 
            className={`${textColor === 'white' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6`}
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          />
        </motion.div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-16 pt-8 border-t ${bgColor === 'black' ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {blog.author.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className={`${textColor === 'white' ? 'text-white' : 'text-black'} font-semibold`}>{blog.author}</h4>
                <p className={`${textColor === 'white' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Équipe de développement</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button 
                onClick={handleFollow}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suivre
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogShowComponent