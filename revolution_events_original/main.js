/* ── LOADER ─────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

/* ── NAVBAR SCROLL ──────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  updateActiveNav();
});

/* ── MOBILE MENU ────────────────────────────────────────────── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── ACTIVE NAV ─────────────────────────────────────────────── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}

/* ── PARTICLES CANVAS ───────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      drift: (Math.random() - 0.5) * 0.3
    };
  }

  for (let i = 0; i < 60; i++) {
    const p = createParticle();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(208,16,32,${p.opacity})`;
      ctx.fill();
      p.y -= p.speed;
      p.x += p.drift;
      p.opacity -= 0.001;
      if (p.y < -10 || p.opacity <= 0) particles[i] = createParticle();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const isHash = target === '#1';
    if (isHash) { el.textContent = '#1'; return; }
    el.textContent = Math.floor(eased * parseInt(target)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.hs-num').forEach(el => {
        const txt = el.textContent;
        if (txt === '#1') return;
        const num = parseInt(txt);
        const suffix = txt.replace(/[0-9]/g, '');
        animateCounter(el, num, suffix);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

/* ── PORTFOLIO FILTER ───────────────────────────────────────── */
document.querySelectorAll('.wf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.wf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.wg-item').forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ── TICKER DUPLICATE ───────────────────────────────────────── */
(function duplicateTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const clone = track.innerHTML;
  track.innerHTML += clone;
})();

/* ── CONTACT FORM ───────────────────────────────────────────── */
document.getElementById('quoteForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Enquiry Sent!';
    btn.style.background = 'linear-gradient(135deg, #1a8a3a, #0d5c26)';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry →';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 1200);
});

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
