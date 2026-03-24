import { useEffect } from 'react'

function About() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.about .reveal, .about .reveal-left, .about .reveal-right')
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

  return (
    <section className="about" id="about">
      <span className="sec-bg-num">01</span>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal-left">
            <div className="av-corner tl"></div>
            <div className="av-corner br"></div>
            <div className="av-frame">
              <div className="av-art">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#D01020" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
            </div>
            <div className="av-badge">
              <span className="avb-num">20+</span>
              <span className="avb-txt">Years</span>
            </div>
            <div className="av-tag">
              <span className="pulse-dot"></span>
              Industry Leader
            </div>
          </div>
          
          <div className="about-text reveal-right">
            <div className="eyebrow-tag">About Revolution Events</div>
            <h2 className="about-title">
              Creating <span>Unforgettable</span> Moments
            </h2>
            <p>
              For over two decades, <strong>Revolution Events Ltd</strong> has been Tanzania's 
              leading provider of premium event solutions. From spectacular fireworks displays 
              to state-of-the-art projection mapping, we bring dreams to life.
            </p>
            <p>
              Our team of experts combines creativity with technical precision to deliver 
              events that exceed expectations. We take pride in our reputation as 
              <strong> Tanzania's #1 event specialists</strong>.
            </p>
            
            <div className="about-pillars">
              <div className="pillar">
                <span className="pi">🎆</span>
                <span>Pyrotechnics</span>
              </div>
              <div className="pillar">
                <span className="pi">📽️</span>
                <span>Projection</span>
              </div>
              <div className="pillar">
                <span className="pi">📺</span>
                <span>LED Screens</span>
              </div>
              <div className="pillar">
                <span className="pi">✨</span>
                <span>Visual Effects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
