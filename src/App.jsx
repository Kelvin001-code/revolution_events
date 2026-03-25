import { useState, useEffect, useRef } from 'react'
import './styles/index.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    }
  }, [loading])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (e, target) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={loading ? '' : 'hidden'}>
        <div className="loader-inner">
          <div className="loader-logo">
            <img src="/logo3.png" alt="Revolution Events" width="90" height="90" style={{objectFit:'contain',filter:'drop-shadow(0 0 20px rgba(208,16,32,0.6))'}}/>
          </div>
          <div className="loader-bar"><div className="loader-fill"></div></div>
          <div className="loader-text">REVOLUTION EVENTS</div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="nav-logo" onClick={(e) => scrollTo(e, '#home')}>
          <img src="/logo2.png" alt="Revolution Events" className="nav-logo-img"/>
        </a>
        <ul className="nav-links">
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#home')}>Home</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#about')}>About</a></li>
          <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#services')}>Services</a></li>
          <li><a href="#work" className={`nav-link ${activeSection === 'work' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#work')}>Portfolio</a></li>
          <li><a href="#clients" className={`nav-link ${activeSection === 'clients' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#clients')}>Clients</a></li>
          <li><a href="#contact" className="nav-cta" onClick={(e) => scrollTo(e, '#contact')}>Get a Quote</a></li>
        </ul>
        <button className={`nav-burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <ul>
          <li><a href="#home" className="mm-link" onClick={(e) => {scrollTo(e, '#home'); closeMenu()}}>Home</a></li>
          <li><a href="#about" className="mm-link" onClick={(e) => {scrollTo(e, '#about'); closeMenu()}}>About</a></li>
          <li><a href="#services" className="mm-link" onClick={(e) => {scrollTo(e, '#services'); closeMenu()}}>Services</a></li>
          <li><a href="#work" className="mm-link" onClick={(e) => {scrollTo(e, '#work'); closeMenu()}}>Portfolio</a></li>
          <li><a href="#clients" className="mm-link" onClick={(e) => {scrollTo(e, '#clients'); closeMenu()}}>Clients</a></li>
          <li><a href="#contact" className="mm-link" onClick={(e) => {scrollTo(e, '#contact'); closeMenu()}}>Get a Quote</a></li>
        </ul>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-glow g1"></div>
          <div className="hero-glow g2"></div>
          <div className="hero-glow g3"></div>
          <div className="hero-grid-lines"></div>
          <div className="hero-diagonal d1"></div>
          <div className="hero-diagonal d2"></div>
          <div className="hero-diagonal d3"></div>
        </div>
        <canvas id="particles-canvas"></canvas>
        
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            Tanzania's Premier Event Specialists
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title">
            <span className="ht-red">REVOL</span><span className="ht-outline">UTION</span><br/>
            <span className="ht-white">EVENTS</span>
          </h1>
          <div className="hero-rule">
            <span className="hr-dash"></span>
            <span className="hr-text">Excellence · Innovation · Perfection</span>
            <span className="hr-dash"></span>
          </div>
          <p className="hero-tagline">Over 20 years engineering unforgettable experiences — from grand fireworks to breathtaking projection mapping, live concerts to luxury corporate galas across Tanzania and beyond.</p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary" onClick={(e) => scrollTo(e, '#services')}>Explore Services</a>
            <a href="#work" className="btn-ghost" onClick={(e) => scrollTo(e, '#work')}>View Our Work</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hs-item"><span className="hs-num">20+</span><span className="hs-lbl">Years Experience</span></div>
          <div className="hs-item"><span className="hs-num">500+</span><span className="hs-lbl">Events Executed</span></div>
          <div className="hs-item"><span className="hs-num">#1</span><span className="hs-lbl">In Tanzania</span></div>
          <div className="hs-item"><span className="hs-num">5</span><span className="hs-lbl">Core Specialisms</span></div>
          <div className="hs-item"><span className="hs-num">50m</span><span className="hs-lbl">Largest Marquee</span></div>
        </div>

        <a href="#about" className="hero-scroll-cue" onClick={(e) => scrollTo(e, '#about')}>
          <span className="hsc-line"></span>
          <span className="hsc-text">Scroll</span>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <span className="sec-bg-num">02</span>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-left">
              <div className="av-corner tl"></div>
              <div className="av-corner br"></div>
              <div className="av-frame">
                <div className="av-art">
                  <img src="/logo1.png" alt="Revolution Events Logo" />
                </div>
              </div>
              <div className="av-badge">
                <span className="avb-num">20+</span>
                <span className="avb-txt">Years of<br/>Excellence</span>
              </div>
              <div className="av-tag">
                <span className="pulse-dot"></span>
                Est. 2000 · Dar es Salaam
              </div>
            </div>

            <div className="about-text reveal-right">
              <div className="eyebrow-tag">About Revolution</div>
              <h2 className="about-title">WE CREATE<br/><span>MEMORIES</span><br/>THAT LAST</h2>
              <p>
                <strong>Revolution Events Ltd</strong> is a passionate, experienced and perfection-driven organization headquartered in Dar es Salaam, Tanzania. With over two decades of industry leadership, we have redefined what's possible in live event production across East Africa.
              </p>
              <p>
                From corporate soires and international celebrity concerts to product launches and grand stadium festivals — our pioneering innovative spirit sets us apart and keeps us at the top of our industry.
              </p>
              <p>
                We focus on delivering <strong>top-notch visual experiences</strong> partnered with friendly, on-time and on-budget service. Big or small, we can handle it all.
              </p>
              <div className="about-pillars">
                <div className="pillar"><div className="pillar-icon">1</div><div className="pillar-content"><h4>Precision Planning</h4><p>Meticulous timelines, logistics and risk-free execution.</p></div></div>
                <div className="pillar"><div className="pillar-icon">2</div><div className="pillar-content"><h4>Pyro Specialists</h4><p>Certified pyrotechnic design with full safety compliance.</p></div></div>
                <div className="pillar"><div className="pillar-icon">3</div><div className="pillar-content"><h4>Visual Innovation</h4><p>Cutting-edge LED, projection and set design techniques.</p></div></div>
                <div className="pillar"><div className="pillar-icon">4</div><div className="pillar-content"><h4>On-Time Delivery</h4><p>Proven track record for milestone-driven event production.</p></div></div>
                <div className="pillar"><div className="pillar-icon">5</div><div className="pillar-content"><h4>Industry Leaders</h4><p>Trusted by major brands and global organizations.</p></div></div>
                <div className="pillar"><div className="pillar-icon">6</div><div className="pillar-content"><h4>Tanzania's #1</h4><p>Pioneer in large-scale and premium event experiences.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <span className="sec-bg-num" style={{left: '40px'}}>03</span>
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-tag">What We Do</div>
            <h2 className="sec-title">OUR <span>SPECIALISMS</span></h2>
            <div className="sec-divider"></div>
            <p className="sec-desc">Five world-class disciplines that define Tanzania's most spectacular events.</p>
          </div>
        </div>

        <div className="services-mosaic reveal">
          <div className="svc-card svc-fireworks">
            <div className="svc-bg"></div>
            <div className="svc-num">01</div>
            <div className="svc-body">
              <div className="svc-icon">🎆</div>
              <h3>FIREWORKS &amp;<br/>PYROTECHNICS</h3>
              <p>Tanzania's #1 pyrotechnics provider for over a decade. From grand outdoor displays to intimate indoor sequenced shows — every spark is precision-engineered.</p>
              <a href="#contact" className="svc-link" onClick={(e) => scrollTo(e, '#contact')}>Enquire <span>→</span></a>
            </div>
            <div className="svc-bar"></div>
          </div>

          <div className="svc-card svc-led">
            <div className="svc-bg"></div>
            <div className="svc-num">02</div>
            <div className="svc-body">
              <div className="svc-icon">📺</div>
              <h3>HIGH-DEFINITION<br/>LED SCREENS</h3>
              <p>The largest inventory of High-Definition P2 LED panels in Tanzania. Crystal-clear visuals at any scale, indoors or outdoors.</p>
              <a href="#contact" className="svc-link" onClick={(e) => scrollTo(e, '#contact')}>Enquire <span>→</span></a>
            </div>
            <div className="svc-bar"></div>
          </div>

          <div className="svc-card svc-projection svc-wide">
            <div className="svc-bg"></div>
            <div className="svc-num">03</div>
            <div className="svc-body">
              <div className="svc-icon">🎥</div>
              <h3>PROJECTION<br/>MAPPING</h3>
              <p>The first company to bring projection mapping to Tanzania. Transform buildings, pools, cars, keynote walls, and even cakes into living canvases of light and motion.</p>
              <a href="#contact" className="svc-link" onClick={(e) => scrollTo(e, '#contact')}>Enquire <span>→</span></a>
            </div>
            <div className="svc-bar"></div>
          </div>

          <div className="svc-card svc-vfx svc-wide">
            <div className="svc-bg"></div>
            <div className="svc-num">04</div>
            <div className="svc-body">
              <div className="svc-icon">✨</div>
              <h3>VISUAL<br/>EFFECTS</h3>
              <p>Flame throwers, CO₂ thrusters, indoor-safe pyros, smoke machines, bubble machines, snow machines, soft mist makers — the full theatrical arsenal.</p>
              <a href="#contact" className="svc-link" onClick={(e) => scrollTo(e, '#contact')}>Enquire <span>→</span></a>
            </div>
            <div className="svc-bar"></div>
          </div>

          <div className="svc-card svc-marquee">
            <div className="svc-bg"></div>
            <div className="svc-num">05</div>
            <div className="svc-body">
              <div className="svc-icon">⛺</div>
              <h3>MARQUEE &amp;<br/>TENT HIRE</h3>
              <p>Largest marquee coverage in Tanzania — up to 50m × 20m. Clear or white, for intimate gatherings to stadium-scale events.</p>
              <a href="#contact" className="svc-link" onClick={(e) => scrollTo(e, '#contact')}>Enquire <span>→</span></a>
            </div>
            <div className="svc-bar"></div>
          </div>
        </div>

        <div className="container">
          <div className="marquee-specs reveal">
            <div className="ms-header">
              <div className="sec-tag" style={{justifyContent:'flex-start'}}>Marquee Dimensions</div>
              <h3>TENT &amp; MARQUEE <span>FORMATS</span></h3>
            </div>
            <table className="specs-table">
              <thead>
                <tr><th>Width</th><th>Length Range</th><th>Material</th><th>Best For</th></tr>
              </thead>
              <tbody>
                <tr><td>20m</td><td>5m – 50m</td><td>Clear / White</td><td>Large banquets, festivals, weddings</td></tr>
                <tr><td>10m</td><td>33m</td><td>Clear / White</td><td>Corporate events, product launches</td></tr>
                <tr><td>5m</td><td>5m</td><td>Clear / White</td><td>Intimate gatherings, VIP areas</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-tag">How We Work</div>
            <h2 className="sec-title">OUR <span>PROCESS</span></h2>
            <div className="sec-divider"></div>
          </div>
          <div className="process-track reveal">
            <div className="pt-line"></div>
            <div className="process-steps">
              <div className="ps-step">
                <div className="ps-dot"><span>01</span></div>
                <h4>CONSULTATION</h4>
                <p>We begin by understanding your vision, goals, venue, and budget to set the foundation for a flawless event.</p>
              </div>
              <div className="ps-step">
                <div className="ps-dot"><span>02</span></div>
                <h4>CONCEPT DESIGN</h4>
                <p>Our creative team crafts immersive event concepts with 3D visuals, storyboards, and detailed technical proposals.</p>
              </div>
              <div className="ps-step">
                <div className="ps-dot"><span>03</span></div>
                <h4>PRODUCTION</h4>
                <p>Expert crews execute every technical element with precision — staging, pyros, LED screens, projection mapping and more.</p>
              </div>
              <div className="ps-step">
                <div className="ps-dot"><span>04</span></div>
                <h4>DELIVERY</h4>
                <p>We deliver an extraordinary, on-time, on-budget experience that exceeds expectations and leaves lasting impressions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="portfolio">
        <span className="sec-bg-num" style={{right: '40px'}}>04</span>
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-tag">Past Work</div>
            <h2 className="sec-title">OUR <span>PORTFOLIO</span></h2>
            <div className="sec-divider"></div>
            <p className="sec-desc">Landmark moments brought to life across Tanzania and beyond.</p>
          </div>
          <div className="work-filters reveal">
            <button className="wf-btn active" data-filter="all">All Events</button>
            <button className="wf-btn" data-filter="corporate">Corporate</button>
            <button className="wf-btn" data-filter="concert">Concerts</button>
            <button className="wf-btn" data-filter="launch">Launches</button>
            <button className="wf-btn" data-filter="festival">Festivals</button>
          </div>
        </div>

        <div className="work-grid reveal">
          <div className="wg-item wg-tall" data-cat="festival">
            <div className="wg-bg wg-bg1"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Pyrotechnics</span>
              <span className="wg-name">STADIUM FIREWORKS DISPLAY</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item" data-cat="concert">
            <div className="wg-bg wg-bg2"></div>
            <div className="wg-overlay">
              <span className="wg-tag">LED Production</span>
              <span className="wg-name">INTERNATIONAL CONCERT STAGE</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item wg-tall" data-cat="launch">
            <div className="wg-bg wg-bg3"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Projection Mapping</span>
              <span className="wg-name">BUILDING LIGHT ART SHOW</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item" data-cat="corporate">
            <div className="wg-bg wg-bg4"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Visual Effects</span>
              <span className="wg-name">PRODUCT LAUNCH VFX</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item wg-wide" data-cat="corporate">
            <div className="wg-bg wg-bg5"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Corporate</span>
              <span className="wg-name">CORPORATE KEYNOTE EVENT</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item" data-cat="festival">
            <div className="wg-bg wg-bg6"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Marquee</span>
              <span className="wg-name">LUXURY GALA TENT</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item" data-cat="concert">
            <div className="wg-bg wg-bg7"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Pyrotechnics</span>
              <span className="wg-name">INDOOR PYRO SHOW</span>
            </div>
            <div className="wg-border"></div>
          </div>
          <div className="wg-item wg-wide" data-cat="festival">
            <div className="wg-bg wg-bg8"></div>
            <div className="wg-overlay">
              <span className="wg-tag">Festival</span>
              <span className="wg-name">STADIUM FESTIVAL NIGHT</span>
            </div>
            <div className="wg-border"></div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="clients">
        <span className="sec-bg-num" style={{left: '40px'}}>05</span>
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-tag">Our Clientele</div>
            <h2 className="sec-title">TRUSTED BY THE <span>BEST</span></h2>
            <div className="sec-divider"></div>
            <p className="sec-desc">Tanzania's leading brands and international organisations trust Revolution Events to deliver the extraordinary.</p>
          </div>
        </div>

        <div className="clients-ticker-wrap">
          <div className="clients-ticker">
            <div className="ct-track" id="tickerTrack">
              {['VODACOM','AIRTEL','TIGO','TTCL','SMILE','STANBIC BANK','NMB BANK','ABSA','STANDARD CHARTERED','CRDB BANK','DTB','JOHNNIE WALKER','HENNESSY','MOËT & CHANDON','BACARDÍ','BUDWEISER','CASTLE LITE','COCA-COLA','PEPSI','AZAM MEDIA','DSTV','WASAFI MEDIA','MERCEDES-BENZ','CAT','AIR TANZANIA','UNITED NATIONS','TED'].map((name, i) => (
                <div key={i} className="ct-item"><span>{name}</span><small>{['Telecom','Telecom','Telecom','Telecom','Finance','Finance','Finance','Finance','Finance','Lifestyle','Lifestyle','Lifestyle','Lifestyle','FMCG','FMCG','Media','Media','Media','Automotive','Industrial','Aviation','International','Global'][i % 23]}</small></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="clients-grid reveal">
            {['VODACOM','AIRTEL','TIGO','NMB BANK','ABSA','CRDB BANK','STANBIC','DTB','JOHNNIE WALKER','HENNESSY','COCA-COLA','PEPSI','MERCEDES-BENZ','AIR TANZANIA','UNITED NATIONS','DSTV','AZAM MEDIA','TED'].map((name, i) => (
              <div key={i} className="cg-item"><span>{name}</span><small>{['Telecom','Telecom','Telecom','Finance','Finance','Finance','Finance','Finance','Lifestyle','Lifestyle','FMCG','FMCG','Automotive','Aviation','International','Media','Media','Global'][i]}</small></div>
            ))}
          </div>
          <div className="clients-badge reveal">
            <span className="pulse-dot"></span>
            Tanzania's Most Trusted Event Company
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="testi-bg-glow"></div>
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-tag">What They Say</div>
            <h2 className="sec-title">CLIENT <span>VOICES</span></h2>
            <div className="sec-divider"></div>
          </div>
          <div className="testi-grid reveal">
            <div className="testi-card">
              <div className="tc-quote">"</div>
              <div className="tc-stars">★★★★★</div>
              <p>"Revolution Events transformed our product launch into something we'll never forget. The projection mapping was absolutely jaw-dropping — nothing short of world-class."</p>
              <div className="tc-author">
                <div className="tc-avatar">A</div>
                <div>
                  <strong>Amara Osei</strong>
                  <span>Marketing Director · Vodacom Tanzania</span>
                </div>
              </div>
            </div>
            <div className="testi-card testi-featured">
              <div className="tc-quote">"</div>
              <div className="tc-stars">★★★★★</div>
              <p>"The fireworks display for our New Year gala was breathtaking. Every detail was handled with precision and professionalism. Revolution Events are truly in a class of their own."</p>
              <div className="tc-author">
                <div className="tc-avatar">S</div>
                <div>
                  <strong>Salma Hassan</strong>
                  <span>Event Manager · Serena Hotels</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="tc-quote">"</div>
              <div className="tc-stars">★★★★★</div>
              <p>"From the LED staging to the pyrotechnics, they delivered on every promise — on time and on budget. The audience reaction said it all. Simply spectacular!"</p>
              <div className="tc-author">
                <div className="tc-avatar">J</div>
                <div>
                  <strong>James Kibira</strong>
                  <span>CEO · AZAM Events Division</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <span className="sec-bg-num" style={{right: '40px'}}>06</span>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal-left">
              <div className="eyebrow-tag">Get In Touch</div>
              <h2 className="ci-title">LET'S<br/>CREATE<br/><span>MAGIC</span></h2>
              <p>Ready to make your next event extraordinary? Our team is standing by to bring your vision to life. From consultation to execution, we handle every detail.</p>
              <div className="ci-details">
                <div className="cid-item">
                  <div className="cid-icon">📍</div>
                  <div>
                    <span className="cid-lbl">Location</span>
                    <span className="cid-val">P.O Box 5315, Dar es Salaam, Tanzania</span>
                  </div>
                </div>
                <div className="cid-item">
                  <div className="cid-icon">📞</div>
                  <div>
                    <span className="cid-lbl">Phone</span>
                    <span className="cid-val">+255 762 76 11 32<br/>+255 784 62 44 34 · +255 752 00 70 94</span>
                  </div>
                </div>
                <div className="cid-item">
                  <div className="cid-icon">✉️</div>
                  <div>
                    <span className="cid-lbl">Email</span>
                    <span className="cid-val">admin@revolution.co.tz</span>
                  </div>
                </div>
                <div className="cid-item">
                  <div className="cid-icon">🌐</div>
                  <div>
                    <span className="cid-lbl">Website</span>
                    <span className="cid-val">www.revolution.co.tz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form reveal-right">
              <div className="cf-box">
                <div className="cf-header">
                  <div className="sec-tag" style={{justifyContent:'flex-start'}}>Request a Quote</div>
                  <h3>TELL US ABOUT<br/><span>YOUR EVENT</span></h3>
                </div>
                <form id="quoteForm" onSubmit={(e) => {
                  e.preventDefault()
                  const btn = e.target.querySelector('.form-submit')
                  btn.textContent = 'Sending...'
                  btn.disabled = true
                  setTimeout(() => {
                    btn.textContent = '✓ Enquiry Sent!'
                    btn.style.background = 'linear-gradient(135deg, #1a8a3a, #0d5c26)'
                    setTimeout(() => {
                      btn.textContent = 'Send Enquiry →'
                      btn.style.background = ''
                      btn.disabled = false
                      e.target.reset()
                    }, 3000)
                  }, 1200)
                }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="Jackson" required/>
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="William" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@company.com" required/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+255 000 000 000"/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Event Type</label>
                      <select required>
                        <option value="">Select Event Type</option>
                        <option>Corporate Event</option>
                        <option>Concert / Live Show</option>
                        <option>Product Launch</option>
                        <option>Wedding</option>
                        <option>Festival / Stadium Event</option>
                        <option>Private Gala</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Service Needed</label>
                      <select>
                        <option value="">Select Service</option>
                        <option>Fireworks &amp; Pyrotechnics</option>
                        <option>HD LED Screens</option>
                        <option>Projection Mapping</option>
                        <option>Visual Effects</option>
                        <option>Marquee &amp; Tent Hire</option>
                        <option>Full Event Package</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Event Date</label>
                    <input type="date"/>
                  </div>
                  <div className="form-group">
                    <label>Message / Details</label>
                    <textarea placeholder="Tell us about your event vision, venue, estimated guests, and any special requirements..." rows="4"></textarea>
                  </div>
                  <button type="submit" className="form-submit">Send Enquiry →</button>
                  <p className="form-note">We respond within 24 hours. Your information is kept confidential.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="ft-grid">
              <div className="ft-brand">
                <a href="#home" style={{marginBottom:'20px',display:'inline-block'}} onClick={(e) => scrollTo(e, '#home')}>
                  <img src="/logo2.png" alt="Revolution Events" height="52" style={{display:'block',filter:'drop-shadow(0 0 8px rgba(208,16,32,0.4))',maxHeight:'52px',width:'auto'}}/>
                </a>
                <p>Tanzania's premier event production company — pioneering pyrotechnics, projection mapping, LED screens, visual effects, and luxury marquee hire since 2000.</p>
                <div className="ft-socials">
                  <a href="#" className="ft-social" aria-label="Twitter/X">𝕏</a>
                  <a href="#" className="ft-social" aria-label="LinkedIn">in</a>
                  <a href="#" className="ft-social" aria-label="Facebook">f</a>
                  <a href="#" className="ft-social" aria-label="YouTube">▶</a>
                  <a href="#" className="ft-social" aria-label="Instagram">◎</a>
                </div>
              </div>
              <div className="ft-col">
                <h4>SERVICES</h4>
                <ul>
                  <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Fireworks &amp; Pyrotechnics</a></li>
                  <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>HD LED Screens</a></li>
                  <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Projection Mapping</a></li>
                  <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Visual Effects</a></li>
                  <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Marquee Hire</a></li>
                </ul>
              </div>
              <div className="ft-col">
                <h4>COMPANY</h4>
                <ul>
                  <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a></li>
                  <li><a href="#work" onClick={(e) => scrollTo(e, '#work')}>Portfolio</a></li>
                  <li><a href="#clients" onClick={(e) => scrollTo(e, '#clients')}>Our Clients</a></li>
                  <li><a href="#process" onClick={(e) => scrollTo(e, '#process')}>Our Process</a></li>
                  <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
                </ul>
              </div>
              <div className="ft-col">
                <h4>CONTACT</h4>
                <ul>
                  <li><a href="tel:+255762761132">+255 762 76 11 32</a></li>
                  <li><a href="tel:+255784624434">+255 784 62 44 34</a></li>
                  <li><a href="tel:+255752007094">+255 752 00 70 94</a></li>
                  <li><a href="mailto:admin@revolution.co.tz">admin@revolution.co.tz</a></li>
                  <li><a href="http://www.revolution.co.tz">www.revolution.co.tz</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="fb-inner">
              <p>© 2025 <span>Revolution Events Ltd</span>. All rights reserved. Dar es Salaam, Tanzania.</p>
              <ul className="fb-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fab-group">
        <button
          className="fab"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault()
            const home = document.querySelector('#home')
            if (home) home.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          ↑
        </button>
        <a
          href="#contact"
          className="fab fab-note"
          aria-label="Tell us about your event"
          onClick={(e) => scrollTo(e, '#contact')}
        >
          ✉
        </a>
      </div>

      {/* Particle Canvas Script */}
      <ParticlesCanvas />
    </>
  )
}

function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.3
      }
    }

    for (let i = 0; i < 60; i++) {
      const p = createParticle()
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(208,16,32,${p.opacity})`
        ctx.fill()
        p.y -= p.speed
        p.x += p.drift
        p.opacity -= 0.001
        if (p.y < -10 || p.opacity <= 0) particles[i] = createParticle()
      })
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return <canvas id="particles-canvas" ref={canvasRef}></canvas>
}

export default App