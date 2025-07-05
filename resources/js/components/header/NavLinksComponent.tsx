import React from 'react'
import useTranslation from '@/hooks/useTranslation'

const navLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/abouts' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.blog', href: '/blogs' },
  { key: 'nav.contact', href: '/contacts' },
]

const NavLinksComponent = ({ onClickLink, textColor = 'black' }: { onClickLink: () => void; textColor?: 'black' | 'white' }) => {
  const { t } = useTranslation()
  
  return (
    <>
      {navLinks.map(link => (
        <a
          key={link.key}
          href={link.href}
          className={`flex items-center text-${textColor} font-md hover:text-gray-700 transition-colors duration-200 group`}
          onClick={onClickLink}
        >
          {t(link.key)}
        </a>
      ))}
    </>
  )
}

export default NavLinksComponent
