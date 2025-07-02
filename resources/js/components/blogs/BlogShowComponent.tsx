import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowLeft, FaRobot, FaCode, FaMobile, FaRocket, FaShare, FaHeart } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
import AnimatedCircleComponent from '../slider/AnimatedCircleComponent'

const BlogShowComponent = ({ id }: { id: string }) => {

  const blogPosts = [
    {
      id: 1,
      title: 'L\'avenir du développement web avec l\'IA',
      excerpt: 'Découvrez comment l\'intelligence artificielle révolutionne le développement web et transforme notre façon de créer des applications.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      author: 'Tech Team',
      date: '15 Jan 2024',
      category: 'IA & Tech',
      icon: FaRobot,
      readTime: '5 min',
      content: `
        <p>L'intelligence artificielle transforme radicalement le paysage du développement web. Cette révolution technologique ouvre de nouvelles possibilités créatives et optimise les processus de développement.</p>
        
        <h2>Les outils IA pour les développeurs</h2>
        <p>Les assistants de code alimentés par l'IA comme GitHub Copilot et ChatGPT révolutionnent la façon dont nous écrivons du code. Ces outils permettent d'accélérer le développement tout en maintenant la qualité.</p>
        
        <h2>Automatisation des tâches répétitives</h2>
        <p>L'IA excelle dans l'automatisation des tâches répétitives : génération de tests, optimisation de code, et même la création de documentation technique.</p>
        
        <h2>L'avenir du développement</h2>
        <p>Nous nous dirigeons vers un avenir où l'IA sera un partenaire indispensable du développeur, augmentant la créativité plutôt que de la remplacer.</p>
      `
    },
    {
      id: 2,
      title: 'Design System : La clé d\'une interface cohérente',
      excerpt: 'Apprenez à créer et maintenir un design system efficace pour garantir la cohérence de vos interfaces utilisateur.',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=500&fit=crop',
      author: 'Design Team',
      date: '12 Jan 2024',
      category: 'Design',
      icon: FaCode,
      readTime: '7 min',
      content: `
        <p>Un design system est bien plus qu'une simple bibliothèque de composants. C'est un écosystème complet qui garantit la cohérence et l'efficacité de vos interfaces.</p>
        
        <h2>Les fondamentaux d'un design system</h2>
        <p>Couleurs, typographie, espacements et composants forment les piliers d'un design system robuste. Chaque élément doit être documenté et réutilisable.</p>
        
        <h2>Mise en place et gouvernance</h2>
        <p>La réussite d'un design system repose sur une gouvernance claire et l'adoption par toutes les équipes. La documentation vivante est essentielle.</p>
      `
    }
  ]

  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) return <div>Article non trouvé</div>

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
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
            <span className="text-red-400 text-sm font-medium">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <FaUser />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              {post.date}
            </div>
            <div className="text-red-400 font-medium">
              {post.readTime}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHeart />
              J'aime
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors"
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
            className="text-gray-300 leading-relaxed space-y-6"
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
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold">{post.author}</h4>
                <p className="text-gray-400 text-sm">Équipe de développement</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button 
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