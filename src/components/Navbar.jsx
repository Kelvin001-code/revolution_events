import { useState, useEffect } from 'react'
import { smoothScroll } from '../utils/smoothScroll'

export default function Navbar({ menuOpen, toggleMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#clients', label: 'Clients' },
  ]

  // Track active section
  const [active, setActive] = useState('#hero')
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = '#hero'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = '#' + s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={e => smoothScroll(e, '#hero')}>
        <img src="logo1.png" alt="Revolution Events" className="nav-logo-img" />
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}
              className={`nav-link${active === l.href ? ' active' : ''}`}
              onClick={e => smoothScroll(e, l.href)}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={e => smoothScroll(e, '#contact')}>Get a Quote</a>
        </li>
      </ul>

      <button className={`nav-burger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
