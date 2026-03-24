import { useEffect } from 'react'

function Testimonials() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.testimonials .reveal')
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

  const testimonials = [
    {
      text: "Revolution Events transformed our annual conference into an unforgettable experience. The LED screens and projection mapping were absolutely stunning.",
      name: "Sarah Johnson",
      role: "Marketing Director, Stanbic Bank",
      featured: true
    },
    {
      text: "Their fireworks display at our New Year's Eve celebration was world-class. Professional, safe, and breathtakingly beautiful.",
      name: "Michael Chen",
      role: "Events Manager, Tanzania Tourism",
      featured: false
    },
    {
      text: "The team exceeded all expectations. From planning to execution, everything was flawless. Highly recommended!",
      name: "Amina Mwinyi",
      role: "CEO, NMB Bank",
      featured: false
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-bg-glow"></div>
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">Testimonials</div>
          <h2 className="sec-title">Client <span>Feedback</span></h2>
          <div className="sec-divider"></div>
        </div>

        <div className="testi-grid">
          {testimonials.map((testi, idx) => (
            <div key={idx} className={`testi-card ${testi.featured ? 'testi-featured' : ''} reveal`}>
              <span className="tc-quote">"</span>
              <div className="tc-stars">★★★★★</div>
              <p>{testi.text}</p>
              <div className="tc-author">
                <div className="tc-avatar">{testi.name.charAt(0)}</div>
                <div>
                  <strong>{testi.name}</strong>
                  <span>{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
