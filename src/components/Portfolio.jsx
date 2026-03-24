import { useEffect, useState } from 'react'

function Portfolio() {
  const [filter, setFilter] = useState('all')

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
    { cat: 'fireworks', name: 'New Year Celebration', tag: 'Fireworks', bg: 'wg-bg1' },
    { cat: 'led', name: 'Corporate Conference', tag: 'LED Display', bg: 'wg-bg2' },
    { cat: 'projection', name: 'Product Launch', tag: 'Projection Mapping', bg: 'wg-bg3' },
    { cat: 'marquee', name: 'Wedding Reception', tag: 'Marquee', bg: 'wg-bg4' },
    { cat: 'vfx', name: 'Music Festival', tag: 'Visual Effects', bg: 'wg-bg5' },
    { cat: 'fireworks', name: 'Independence Day', tag: 'Fireworks', bg: 'wg-bg6' },
    { cat: 'led', name: 'Sports Event', tag: 'LED Display', bg: 'wg-bg7' },
    { cat: 'marquee', name: 'Gala Dinner', tag: 'Marquee', bg: 'wg-bg8' }
  ]

  const filters = ['all', 'fireworks', 'led', 'projection', 'marquee', 'vfx']

  return (
    <section className="portfolio" id="portfolio">
      <span className="sec-bg-num">03</span>
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">Our Work</div>
          <h2 className="sec-title">Portfolio</h2>
          <div className="sec-divider"></div>
        </div>

        <div className="work-filters reveal">
          {filters.map(f => (
            <button
              key={f}
              className={`wf-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`wg-item ${filter !== 'all' && project.cat !== filter ? 'hidden' : ''} reveal`}
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
