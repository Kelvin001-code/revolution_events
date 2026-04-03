import { useEffect } from 'react'

function Portfolio() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.portfolio .reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    reveals.forEach(el => observer.observe(el))
  }, [])

  const projects = [
    { cat: 'projection', name: 'International Concert Stage', tag: 'Projection Mapping', bg: 'wg-bg1' },
    { cat: 'vfx', name: 'Productlaunch VFX', tag: 'Visual Effects', bg: 'wg-bg2' },
    { cat: 'fireworks', name: 'Stadium Fireworks Display', tag: 'Fireworks', bg: 'wg-bg3' },
    { cat: 'fireworks', name: 'Indoor Pyro Show', tag: 'Fireworks', bg: 'wg-bg4' },
    { cat: 'led', name: 'Corporate Keynote Event', tag: 'LED Display', bg: 'wg-bg5' },
    { cat: 'marquee', name: 'Luxuary Gala Tent', tag: 'Marquee', bg: 'wg-bg6' },
    { cat: 'vfx', name: 'Building Light Art Show', tag: 'Visual Effects', bg: 'wg-bg7' },
    { cat: 'marquee', name: 'Stadium Festival Night', tag: 'Marquee', bg: 'wg-bg8' }
  ]

  return (
    <section className="portfolio" id="portfolio">
      <span className="sec-bg-num">03</span>
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">Our Work</div>
          <h2 className="sec-title">Portfolio</h2>
          <div className="sec-divider"></div>
        </div>

        <div className="work-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="wg-item reveal"
              data-cat={project.cat}
            >
              <div className={`wg-bg ${project.bg}`}></div>
              <div className="wg-overlay">
                <span className="wg-tag">{project.tag}</span>
                <span className="wg-name">{project.name}</span>
              </div>
              <div className="wg-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
