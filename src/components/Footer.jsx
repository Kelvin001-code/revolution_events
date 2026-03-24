function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="ft-grid">
            <div className="ft-brand">
              <a href="#hero" className="nav-logo">
                <img src="/logo1.png" alt="Revolution Events" className="nav-logo-img" />
              </a>
              <p>
                Tanzania's premier event specialists. Creating unforgettable moments 
                with world-class fireworks, projection mapping, LED screens, and visual effects.
              </p>
              <div className="ft-socials">
                <a href="#" className="ft-social">f</a>
                <a href="#" className="ft-social">in</a>
                <a href="#" className="ft-social">ig</a>
                <a href="#" className="ft-social">yt</a>
              </div>
            </div>

            <div className="ft-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Fireworks</a></li>
                <li><a href="#services">LED Screens</a></li>
                <li><a href="#services">Projection Mapping</a></li>
                <li><a href="#services">Visual Effects</a></li>
                <li><a href="#services">Marquee Hire</a></li>
              </ul>
            </div>

            <div className="ft-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="ft-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+255700000000">+255 700 000 000</a></li>
                <li><a href="mailto:info@revolutionevents.co.tz">info@revolutionevents.co.tz</a></li>
                <li><a href="#">Dar es Salaam, Tanzania</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="fb-inner">
            <p>© {currentYear} <span>Revolution Events Ltd</span>. All rights reserved.</p>
            <ul className="fb-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
