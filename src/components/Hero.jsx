import { useEffect, useRef } from 'react'

function Hero() {
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

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-glow g1"></div>
        <div className="hero-glow g2"></div>
        <div className="hero-glow g3"></div>
        <div className="hero-grid-lines"></div>
        <div className="hero-diagonal d1"></div>
        <div className="hero-diagonal d2"></div>
        <div className="hero-diagonal d3"></div>
      </div>
      <canvas id="particles-canvas" ref={canvasRef}></canvas>
      
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          Revolution Events
          <span className="eyebrow-line"></span>
        </div>
        <h1 className="hero-title">
          <span className="ht-red">RE</span>
          <span className="ht-outline">VOLUTION</span>
          <span className="ht-white">EVENTS</span>
        </h1>
        <div className="hero-rule">
          <span className="hr-dash"></span>
          <span className="hr-text">Est. 2003</span>
          <span className="hr-dash"></span>
        </div>
        <p className="hero-tagline">
          Transforming visions into unforgettable experiences. World-class fireworks, 
          projection mapping, LED screens, and visual effects across Tanzania.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Get a Quote</a>
          <a href="#portfolio" className="btn-ghost">View Our Work</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hs-item">
          <span className="hs-num">20+</span>
          <span className="hs-lbl">Years Experience</span>
        </div>
        <div className="hs-item">
          <span className="hs-num">500+</span>
          <span className="hs-lbl">Events Delivered</span>
        </div>
        <div className="hs-item">
          <span className="hs-num">#1</span>
          <span className="hs-lbl">In Tanzania</span>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span className="hsc-text">Scroll</span>
        <span className="hsc-line"></span>
      </div>
    </section>
  )
}

export default Hero
