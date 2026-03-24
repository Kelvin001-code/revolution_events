import { useEffect } from 'react'

function Process() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.process .reveal')
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

  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your vision, requirements, and budget to understand your needs.' },
    { num: '02', title: 'Planning', desc: 'Our team creates a detailed proposal with creative concepts and technical specs.' },
    { num: '03', title: 'Execution', desc: 'We deliver and install all equipment, ensuring flawless execution.' },
    { num: '04', title: 'Support', desc: 'On-site technical support and post-event breakdown services.' }
  ]

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">How We Work</div>
          <h2 className="sec-title">Our <span>Process</span></h2>
          <div className="sec-divider"></div>
        </div>

        <div className="process-track">
          <div className="pt-line"></div>
          <div className="process-steps">
            {steps.map((step, idx) => (
              <div key={idx} className="ps-step reveal">
                <div className="ps-dot">
                  <span>{step.num}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
