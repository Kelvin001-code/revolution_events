import { useEffect, useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const reveals = document.querySelectorAll('.contact .reveal')
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('.form-submit')
    btn.textContent = 'Sending...'
    btn.disabled = true
    setTimeout(() => {
      setSubmitted(true)
      btn.textContent = '✓ Enquiry Sent!'
      btn.style.background = 'linear-gradient(135deg, #1a8a3a, #0d5c26)'
      setTimeout(() => {
        btn.textContent = 'Send Enquiry →'
        btn.style.background = ''
        btn.disabled = false
        setSubmitted(false)
        e.target.reset()
      }, 3000)
    }, 1200)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <div className="eyebrow-tag">Get In Touch</div>
            <h2 className="ci-title">
              Let's Create <span>Magic</span>
            </h2>
            <p>
              Ready to make your event extraordinary? Contact us today for a 
              free consultation and quote. Our team is ready to bring your 
              vision to life.
            </p>
            
            <div className="ci-details">
              <div className="cid-item">
                <div className="cid-icon">📍</div>
                <div>
                  <span className="cid-lbl">Address</span>
                  <span className="cid-val">Dar es Salaam, Tanzania</span>
                </div>
              </div>
              <div className="cid-item">
                <div className="cid-icon">📞</div>
                <div>
                  <span className="cid-lbl">Phone</span>
                  <span className="cid-val">+255 700 000 000</span>
                </div>
              </div>
              <div className="cid-item">
                <div className="cid-icon">✉️</div>
                <div>
                  <span className="cid-lbl">Email</span>
                  <span className="cid-val">info@revolutionevents.co.tz</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cf-box reveal-right">
            <div className="cf-header">
              <div className="eyebrow-tag">Send Enquiry</div>
              <h3>Request a <span>Quote</span></h3>
            </div>
            
            <form id="quoteForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <label>Service</label>
                  <select>
                    <option value="">Select Service</option>
                    <option value="fireworks">Fireworks & Pyrotechnics</option>
                    <option value="led">LED Screens</option>
                    <option value="projection">Projection Mapping</option>
                    <option value="vfx">Visual Effects</option>
                    <option value="marquee">Marquee Hire</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your event..."></textarea>
              </div>
              <button type="submit" className="form-submit">Send Enquiry →</button>
              <p className="form-note">We'll get back to you within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
