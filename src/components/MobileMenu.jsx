function MobileMenu({ open, onClose }) {
  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    onClose()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="mobileMenu" className={`mobile-menu ${open ? 'open' : ''}`}>
      <ul>
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              className="mm-link"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu
