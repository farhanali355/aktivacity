"use client"
import React from 'react'

const items = [
  {
    title: "Experienced AI Automation Team",
    icon: "fas fa-map-marker-alt",
    desc: "We understand business workflows, tools, and systems, helping you implement automation that fits your operations."
  },
  {
    title: "Business-Focused Automation Strategy",
    icon: "fas fa-bullseye",
    desc: "Every solution is designed to reduce costs, save time, and improve performance based on clear business goals."
  },
  {
    title: "Secure & Scalable Architecture",
    icon: "fas fa-shield-alt",
    desc: "We build automation systems that are secure, scalable, and designed to grow with your business."
  },
  {
    title: "Seamless System Integration",
    icon: "fas fa-link",
    desc: "We integrate AI automation with your existing CRM, ERP, and tools for smooth and connected operations."
  },
  {
    title: "Continuous Optimization & Support",
    icon: "fas fa-chart-line",
    desc: "We monitor, improve, and evolve your automation systems as your business and data grow."
  }
]

export default function AiChooseCarousel() {
  // Create a looped array for seamless sliding
  const extendedItems = [...items, ...items, ...items]
  const [index, setIndex] = React.useState(items.length) // Start at the middle set
  const [visible, setVisible] = React.useState(3)
  const [isTransitioning, setIsTransitioning] = React.useState(true)
  const touchStart = React.useRef(null)

  React.useEffect(() => {
    const handle = () => {
      const w = window.innerWidth
      if (w >= 1100) setVisible(3)
      else if (w >= 768) setVisible(2)
      else setVisible(1)
    }
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  // Handle seamless loop jump
  React.useEffect(() => {
    if (index >= items.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false)
        setIndex(index - items.length)
      }, 600)
    } else if (index < items.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setIndex(index + items.length)
      }, 600)
    } else {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [index, items.length])

  const prev = () => {
    setIsTransitioning(true)
    setIndex(i => i - 1)
  }
  const next = () => {
    setIsTransitioning(true)
    setIndex(i => i + 1)
  }

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev() }
    touchStart.current = null
  }

  return (
    <div className="choose-carousel-outer">
      <div className="carousel-container position-relative">
        <div className="choose-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="overflow-hidden py-3">
            <div className="track d-flex" style={{
              width: `${(extendedItems.length / visible) * 100}%`,
              transform: `translateX(${(index * -100) / extendedItems.length}%)`,
              transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
            }}>
              {extendedItems.map((it, i) => (
                <div key={i} className="slide-item px-2" style={{ width: `${100 / extendedItems.length}%` }}>
                  <div className="choose-card p-xxl-8 p-xl-7 p-6 h-100 position-relative d-flex flex-column justify-content-center">
                    <h4 className="white-clr mb-5 fw-bold lh-sm display-6" style={{ fontSize: '1.75rem' }}>{it.title}</h4>
                    <p className="pra-clr opacity-75 mb-0 fs-5" style={{ lineHeight: '1.7' }}>
                      {it.desc}
                    </p>
                    <div className="plus-icon-wrap position-absolute bottom-0 end-0 m-xxl-7 m-xl-6 m-5">
                      <div className="plus-btn bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                        <i className="fas fa-plus black-clr" style={{ fontSize: '10px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button aria-label="Previous" className="nav-btn prev" onClick={prev}>
          <i className="fas fa-chevron-left" />
        </button>
        <button aria-label="Next" className="nav-btn next" onClick={next}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>

      <div className="dots d-flex gap-2 mt-5 justify-content-center">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === (index % items.length) ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setIndex(i + items.length);
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .choose-carousel-outer { padding: 0; width: 100%; margin: 0 auto; }
        .carousel-container { padding: 0 40px; }
        .overflow-hidden { overflow: hidden; margin: -1rem 0; }
        .track { will-change: transform; display: flex; flex-wrap: nowrap; }
        .slide-item { box-sizing: border-box; flex: 0 0 auto; }
        .choose-card { 
            background: rgba(255,255,255,0.02); 
            border: 1px solid rgba(255,255,255,0.05); 
            border-radius: 32px; 
            min-height: 380px; 
            padding-bottom: 80px !important;
            transition: all 0.4s ease;
        }
        .choose-card:hover {
            background: rgba(233, 254, 73, 0.05);
            border: 1px solid rgba(233, 254, 73, 0.4);
            transform: translateY(-8px);
        }
        .nav-btn { 
            position: absolute; 
            top: 50%; 
            transform: translateY(-50%); 
            z-index: 20; 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            background: rgba(0, 0, 0, 0.6); 
            color: #e9fe49; 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 0.8rem; 
            cursor: pointer; 
            transition: all 0.3s ease;
        }
        .nav-btn:hover {
            background: #e9fe49;
            color: #000;
        }
        .nav-btn.prev { left: -10px; }
        .nav-btn.next { right: -10px; }
        .dot { 
            width: 6px; 
            height: 6px; 
            border-radius: 50%; 
            background: rgba(255, 255, 255, 0.2); 
            border: none; 
            transition: all 0.3s ease;
            padding: 0;
            cursor: pointer;
        }
        .dot.active { 
            background: #e9fe49; 
            width: 18px; 
            border-radius: 10px;
        }
        @media (max-width: 991px) { 
            .nav-btn { display: none; } 
            .carousel-container { padding: 0; }
        }
      `}</style>
    </div>
  )
}
