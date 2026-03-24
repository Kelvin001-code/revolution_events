import { useEffect } from 'react'

function Clients() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.clients .reveal')
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

  const tickerItems = [
    { name: 'TANZANIA TOURISM', desc: 'Partner' },
    { name: 'UNDP', desc: 'Client' },
    { name: 'WORLD BANK', desc: 'Vendor' },
    { name: 'SAFARICOM', desc: 'Partner' },
    { name: 'MTN', desc: 'Client' },
    { name: 'VODACOM', desc: 'Partner' },
    { name: 'AIR TANZANA', desc: 'Vendor' },
    { name: 'NMB BANK', desc: 'Client' }
  ]

  const gridItems = [
    { name: 'CRDB', desc: 'Bank' },
    { name: 'NMB', desc: 'Bank' },
    { name: 'STANBIC', desc: 'Bank' },
    { name: 'DIASPORA', desc: 'Telecom' },
    { name: 'ZAIN', desc: 'Telecom' },
    { name: 'TTCL', desc: 'Telecom' }
  ]

  const duplicatedTicker = [...tickerItems, ...tickerItems]

  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="section-header reveal">
          <div className="sec-tag">Trusted By</div>
          <h2 className="sec-title">Our <span>Clients</span></h2>
          <div className="sec-divider"></div>
        </div>

        <div className="clients-ticker-wrap reveal">
          <div className="clients-ticker">
            <div className="ct-track" id="tickerTrack">
              {duplicatedTicker.map((item, idx) => (
                <div key={idx} className="ct-item">
                  <span>{item.name}</span>
                  <small>{item.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="clients-grid reveal">
          {gridItems.map((item, idx) => (
            <div key={idx} className="cg-item">
              <span>{item.name}</span>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>

        <div className="clients-badge reveal">
          <span>•</span> And Many More
        </div>
      </div>
    </section>
  )
}

export default Clients
