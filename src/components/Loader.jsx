export default function Loader({ hidden }) {
  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-inner">
        <div className="loader-logo">
          <img src="/logo3.png" alt="Revolution Events" width="90" height="90"
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(208,16,32,0.6))' }} />
        </div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
        <div className="loader-text">REVOLUTION EVENTS</div>
      </div>
    </div>
  )
}
