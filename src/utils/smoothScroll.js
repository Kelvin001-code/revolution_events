export function smoothScroll(e, selector) {
  e.preventDefault()
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
