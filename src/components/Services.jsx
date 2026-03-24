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
      icon: '🎆',
      title: 'Fireworks & Pyrotechnics',
      desc: 'Spectacular aerial and ground displays for weddings, corporate events, and celebrations. ISO certified safety standards.'
    },
    {
      type: 'led',
      num: '02',
      icon: '📺',
      title: 'LED Screens',
      desc: 'High-resolution indoor and outdoor LED walls for impactful presentations and visual displays.'
    },
    {
      type: 'projection',
      num: '03',
      icon: '📽️',
      title: 'Projection Mapping',
      desc: 'Transform any surface into a dynamic canvas with cutting-edge 3D projection technology.'
    },
    {
      type: 'vfx',
      num: '04',
      icon: '✨',
      title: 'Visual Effects',
      desc: 'Fog, confetti, lasers, and special effects that create memorable moments.'
    },
    {
      type: 'marquee',
      num: '05',
      icon: '⛺',
      title: 'Marquee Hire',
      desc: 'Elegant marquees and tents for outdoor events, providing shelter with style.',
      specs: true
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
              <div className="svc-bg"></div>
              <span className="svc-num">{svc.num}</span>
              <div className="svc-body">
                <div className="svc-icon">{svc.icon}</div>
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
                <th>Type</th>
                <th>Capacity</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classic Marquee</td>
                <td>100-500 guests</td>
                <td>Clear span, climate controlled</td>
              </tr>
              <tr>
                <td>Pagoda Tent</td>
                <td>50-200 guests</td>
                <td>Asian style, elegant peaks</td>
              </tr>
              <tr>
                <td>Structure Tent</td>
                <td>200-1000 guests</td>
                <td>Clear walls, convertible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Services
