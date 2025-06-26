import React from 'react'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projets', href: '/project' },
  { name: 'Blogs', href: '/blog' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const NavLinksComponent = ({ onClickLink }: { onClickLink: () => void }) => (
  <>
    {navLinks.map(link => (
      <a
        key={link.name}
        href={link.href}
        className="flex items-center text-black font-md hover:text-gray-700 transition-colors duration-200 group"
        onClick={onClickLink}
      >
        {link.name}
      </a>
    ))}
  </>
)

export default NavLinksComponent
