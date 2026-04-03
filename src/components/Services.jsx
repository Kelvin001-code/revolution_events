import { useEffect } from 'react'

function Services() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.services .reveal')
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

  const services = [
    {
      type: 'fireworks',
      wide: true,
      num: '01',
      title: 'Fireworks & Pyrotechnics',
      desc: 'Spectacular aerial and ground displays for weddings, corporate events, and celebrations. ISO certified safety standards.',
      image: '/fireworks & pyrotechnics.jpg'
    },
    {
      type: 'led',
      num: '02',
      title: 'High-definition LED Screens',
      desc: 'High-resolution indoor and outdoor LED walls for impactful presentations and visual displays.',
      image: '/high-definition LED screens.jpg'
    },
    {
      type: 'projection',
      num: '03',
      title: 'Projection Mapping',
      desc: 'Transform any surface into a dynamic canvas with cutting-edge 3D projection technology.',
      image: '/projection mapping.jpg'
    },
    {
      type: 'vfx',
      num: '04',
      title: 'Visual Effects',
      desc: 'Fog, confetti, lasers, and special effects that create memorable moments.',
      image: '/visual effects.jpg'
    },
    {
      type: 'marquee',
      num: '05',
      title: 'Marquee & Tent Hire',
      desc: 'Elegant marquees and tents for outdoor events, providing shelter with style.',
      specs: true,
      image: '/marquee & tent hire.png'
    }
  ]

  return (
    <section className="services" id="services">
      <span className="sec-bg-num">02</span>
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">What We Do</div>
          <h2 className="sec-title">Our <span>Services</span></h2>
          <div className="sec-divider"></div>
          <p className="sec-desc">
            Comprehensive event solutions tailored to bring your vision to life.
          </p>
        </div>

        <div className="services-mosaic">
          {services.map((svc, idx) => (
            <div key={idx} className={`svc-card ${svc.wide ? 'svc-wide' : ''} svc-${svc.type} reveal`}>
              <div
                className="svc-bg"
                style={{
                  backgroundImage: `url(${encodeURI(svc.image)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <span className="svc-num">{svc.num}</span>
              <div className="svc-body">
                <div className="svc-icon">
                  <img src={encodeURI(svc.image)} alt={svc.title} />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <a href="#contact" className="svc-link">
                  Enquire <span>→</span>
                </a>
              </div>
              <div className="svc-bar"></div>
            </div>
          ))}
        </div>

        <div className="marquee-specs reveal">
          <div className="ms-header">
            <h3>Marquee <span>Specs</span></h3>
          </div>
          <table className="specs-table">
            <thead>
              <tr>
                <th>Width</th>
                <th>Length Range</th>
                <th>Material</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Width">20m</td>
                <td data-label="Length Range">5m - 50m</td>
                <td data-label="Material">Clear / White</td>
                <td data-label="Best For">Large banquets, festivals, weddings</td>
              </tr>
              <tr>
                <td data-label="Width">10m</td>
                <td data-label="Length Range">33m</td>
                <td data-label="Material">Clear / White</td>
                <td data-label="Best For">Corporate events, product launches</td>
              </tr>
              <tr>
                <td data-label="Width">5m</td>
                <td data-label="Length Range">5m</td>
                <td data-label="Material">Clear / White</td>
                <td data-label="Best For">Intimate gatherings, VIP areas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Services
