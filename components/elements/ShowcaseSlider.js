"use client"
import React from 'react'

const slides = [
  {
    category: 'E-Commerce Platform',
    title: 'Karachi E-commerce Powerhouse: Scaling to Market Dominance',
    bullets: [
      'Challenge: 7s load times + 42% bounce rate',
      'Solution: Custom website development + website performance optimization',
      'Result: 2.1s load time, 82% conversion lift, 3.4x ROAS'
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop'
  },
  {
    category: 'SaaS Development',
    title: 'Pakistan SaaS Dashboard: Revolutionizing Internal Workflows',
    bullets: [
      'Challenge: Manual processes + poor mobile experience',
      'Solution: Web application development + mobile app development',
      'Result: 67% productivity gain, 95% mobile adoption'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  }
]

export default function ShowcaseSlider() {
  const [index, setIndex] = React.useState(0)
  const touchStartX = React.useRef(null)

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) { if (dx < 0) next(); else prev() }
    touchStartX.current = null
  }

  return (
    <div className="spotlight-card position-relative overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} role="region" aria-label="Showcase carousel">
      {slides.map((s, i) => (
        <div key={i} className={`slide-item ${i === index ? 'active' : 'inactive'}`} aria-hidden={i !== index}>
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6 p-xxl-15 p-xl-12 p-lg-10 p-6 d-flex flex-column justify-content-center bg-white-opacity" style={{ minHeight: '600px' }}>
              <div className="d-flex align-items-center gap-3 mb-6">
                <span className="category-tag text-uppercase fw-bold ls-2 fs-xs theme-clr">{s.category}</span>
                <div className="line theme-bg" style={{ width: '40px', height: '1px' }} />
              </div>
              <h3 className="white-clr display-6 fw-bold mb-6 lh-sm">{s.title}</h3>
              <div className="stars-wrap d-flex gap-1 mb-8">{[1, 2, 3, 4, 5].map(n => <i key={n} className="fas fa-star theme-clr fs-5" />)}</div>
              <div className="impact-points">
                {s.bullets.map((b, idx) => (
                  <div key={idx} className="d-flex gap-4 mb-4">
                    <div className="point-icon theme-bg rounded-circle flex-shrink-0 mt-1" style={{ width: '8px', height: '8px' }} />
                    <p className="pra-clr fs-5 mb-0">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 position-relative" style={{ minHeight: '600px' }}>
              <div className="mockup-bg h-100 w-100" style={{ backgroundImage: `url("${s.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay-gradient" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button aria-label="Previous slide" className="nav-btn prev-btn" onClick={prev}>‹</button>
      <button aria-label="Next slide" className="nav-btn next-btn" onClick={next}>›</button>

      <div className="dots d-flex gap-2 mt-4 justify-content-center">
        {slides.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i + 1}`} className={`dot-btn ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
        ))}
      </div>

      <style jsx>{`
        .slide-item { position: absolute; inset: 0; opacity: 0; transform: translateX(20px); transition: all 0.45s ease; }
        .slide-item.active { opacity: 1; transform: translateX(0); position: relative; }
        .slide-item.inactive { pointer-events: none; }
        .overlay-gradient {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%; /* Wider gradient for smoother transition */
            height: 100%;
            background: linear-gradient(to right, #030303 0%, transparent 100%);
            z-index: 1;
        }
        .mockup-bg {
            position: relative;
            z-index: 0;
            background-color: #030303;
        }
        .bg-white-opacity {
            background-color: #030303 !important; /* Force solid dark background for transition */
        }
        .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); z-index: 20; width:44px; height:44px; border-radius:50%; background: rgba(0,0,0,0.5); color: #e9fe49; border:none; display:flex; align-items:center; justify-content:center; font-size:1.4rem; cursor:pointer; }
        .prev-btn { left: 12px; }
        .next-btn { right: 12px; }
        .dots { position: relative; z-index: 30; }
        .dot-btn { width: 10px; height:10px; border-radius:50%; background: rgba(233,254,73,0.25); border:none; }
        .dot-btn.active { background: #e9fe49; }
        @media (max-width: 991px) { 
            .slide-item { position: relative; opacity: 1; transform: none; } 
            .prev-btn, .next-btn { display: none; } 
            .overlay-gradient {
                width: 100%;
                height: 40%;
                background: linear-gradient(to bottom, #030303 0%, transparent 100%);
            }
        }
      `}</style>
    </div>
  )
}
