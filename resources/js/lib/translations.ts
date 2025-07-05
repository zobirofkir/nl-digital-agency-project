export const translations = {
  fr: {
    // Header
    header: {
      openNavigation: 'Ouvrir la navigation',
      closeNavigation: 'Fermer la navigation',
      logoAlt: 'Logo'
    },
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      projects: 'Projets',
      blog: 'Blog',
      contact: 'Contact'
    },
    // About section
    about: {
      founder: 'Fondatrice & CEO, NL Marketing Digital',
      description: 'Nous transformons vos idées en <span class="text-red-400 font-semibold">succès digitaux</span> grâce à des stratégies innovantes. Notre équipe passionnée vous accompagne dans votre <span class="text-red-400">transformation digitale</span> pour atteindre vos objectifs.',
      quote: '"Ensemble, construisons un avenir numérique prospère."',
      services: 'Nos Services',
      quickContact: 'Contact Rapide',
      discoverMore: 'Découvrir Plus',
      watchVideo: 'Regarder Vidéo',
      stats: {
        projects: 'Projets',
        satisfaction: 'Satisfaction',
        years: 'Années'
      }
    },
    // Services
    services: {
      webDesign: 'Web Design',
      seo: 'SEO',
      marketing: 'Marketing',
      branding: 'Branding'
    },
    // Contact
    contact: {
      email: 'contact@nl-digitalagency.com',
      location: 'Fés, Maroc'
    },
    // Slider
    slider: {
      badge: 'NL MARKETING DIGITAL',
      title1: 'Idées',
      title2: 'Digitales',
      title3: 'Réussies',
      description: 'Stratégies digitales sur mesure pour amplifier votre marque et maximiser vos résultats.',
      quote: 'Excellence digitale, résultats mesurables.',
      ceoName: '- Naoual Lebbar, CEO',
      startButton: 'Démarrer',
      learnMoreButton: 'En Savoir Plus'
    },
    // Common
    common: {
      readMore: 'Lire Plus',
      viewAll: 'Voir Tout',
      getStarted: 'Commencer',
      learnMore: 'En Savoir Plus'
    }
  },
  en: {
    // Header
    header: {
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      logoAlt: 'Logo'
    },
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact'
    },
    // About section
    about: {
      founder: 'Founder & CEO, NL Digital Marketing',
      description: 'We transform your ideas into <span class="text-red-400 font-semibold">digital success</span> through innovative strategies. Our passionate team accompanies you in your <span class="text-red-400">digital transformation</span> to achieve your goals.',
      quote: '"Together, let\'s build a prosperous digital future."',
      services: 'Our Services',
      quickContact: 'Quick Contact',
      discoverMore: 'Discover More',
      watchVideo: 'Watch Video',
      stats: {
        projects: 'Projects',
        satisfaction: 'Satisfaction',
        years: 'Years'
      }
    },
    // Services
    services: {
      webDesign: 'Web Design',
      seo: 'SEO',
      marketing: 'Marketing',
      branding: 'Branding'
    },
    // Contact
    contact: {
      email: 'contact@nl-digitalagency.com',
      location: 'Fez, Morocco'
    },
    // Slider
    slider: {
      badge: 'NL DIGITAL MARKETING',
      title1: 'Digital',
      title2: 'Ideas',
      title3: 'Success',
      description: 'Tailored digital strategies to amplify your brand and maximize your results.',
      quote: 'Digital excellence, measurable results.',
      ceoName: '- Naoual Lebbar, CEO',
      startButton: 'Get Started',
      learnMoreButton: 'Learn More'
    },
    // Common
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    }
  }
}

export type TranslationKey = keyof typeof translations.fr