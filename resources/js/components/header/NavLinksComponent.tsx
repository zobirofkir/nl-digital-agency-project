import React from 'react'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/#abouts' },
  { name: 'Services', href: '/services' },
  { name: 'Projets', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contacts' },
]

const NavLinksComponent = ({ onClickLink, textColor = 'black' }: { onClickLink: () => void; textColor?: 'black' | 'white' }) => (
  <>
    {navLinks.map(link => (
      <a
        key={link.name}
        href={link.href}
        className={`flex items-center text-${textColor} font-md hover:text-gray-700 transition-colors duration-200 group`}
        onClick={onClickLink}
      >
        {link.name}
      </a>
    ))}
  </>
)

export default NavLinksComponent
