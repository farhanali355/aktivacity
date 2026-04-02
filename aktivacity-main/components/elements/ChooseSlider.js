"use client"
import React from 'react'

const slides = [
  {
    title: "AI-Enhanced Creative Process",
    desc: "Our team leverages state-of-the-art AI tools to accelerate design cycles while maintaining artisanal quality and surgical precision."
  },
  {
    title: "Multisensory Digital Experiences",
    desc: "Beyond just visuals, we craft interfaces that evoke emotional responses through micro-interactions, motion, and intuitive flow."
  },
  {
    title: "Deep Tech & Architecture Audits",
    desc: "We dissect your existing infrastructure to identify bottlenecks and transformation opportunities, ensuring your tech isn't a liability."
  },
  {
    title: "Data-Backed Growth Strategies",
    desc: "Every design decision is rooted in solid data, focusing on measurable performance metrics and actual conversion results."
  }
]

export default function ChooseSlider(){
  const [index, setIndex] = React.useState(0)
  const touchStart = React.useRef(null)

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev() }
    touchStart.current = null
  }

  return (
    <div className="choose-slider position-relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-roledescription="carousel">
      <div className="slides-wrapper">
        {slides.map((s, i) => (
          <div key={i} className={`choose-slide ${i===index ? 'active' : 'inactive'}`} aria-hidden={i!==index}>
            <div className="choose-card p-xxl-8 p-xl-6 p-5 h-100 position-relative">
              <h4 className="white-clr mb-5 fw-bold lh-sm">{s.title}</h4>
              <p className="pra-clr fs-xs lh-lg opacity-75">{s.desc}</p>
              <div className="plus-icon-wrap position-absolute bottom-0 end-0 m-xxl-8 m-xl-6 m-5">
                <div className="plus-btn bg-white rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus black-clr fs-xs" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button aria-label="Previous" className="nav-btn prev" onClick={prev}>‹</button>
      <button aria-label="Next" className="nav-btn next" onClick={next}>›</button>

      <div className="dots d-flex gap-2 mt-4 justify-content-center">
        {slides.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i+1}`} className={`dot ${i===index ? 'active' : ''}`} onClick={() => setIndex(i)} />
        ))}
      </div>

      <style jsx>{`
        .choose-slider { position: relative; }
        .slides-wrapper { position: relative; min-height: 320px; }
        .choose-slide { position: absolute; inset: 0; opacity: 0; transform: translateY(20px); transition: all 0.45s ease; }
        .choose-slide.active { opacity: 1; transform: translateY(0); position: relative; }
        .choose-slide.inactive { pointer-events: none; }
        .choose-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 32px; }
        .plus-btn { width: 36px; height:36px; }
        .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); z-index: 20; width:40px; height:40px; border-radius:50%; background: rgba(0,0,0,0.45); color:#e9fe49; border:none; display:flex; align-items:center; justify-content:center; font-size:1.2rem; cursor:pointer; }
        .nav-btn.prev { left: 8px; }
        .nav-btn.next { right: 8px; }
        .dots { position: relative; z-index: 30; }
        .dot { width:10px; height:10px; border-radius:50%; background: rgba(233,254,73,0.2); border:none; }
        .dot.active { background: #e9fe49; }
        @media (max-width: 991px) { .nav-btn { display: none; } .slides-wrapper { min-height: auto; } .choose-slide { position: relative; opacity: 1; transform: none; } }
      `}</style>
    </div>
  )
}
