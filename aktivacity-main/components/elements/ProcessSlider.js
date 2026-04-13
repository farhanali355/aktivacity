"use client"
import React from 'react'

const items = [
    {
        step: "01",
        title: "Local Market Insight",
        points: ["Audience Behavior", "Trend Analysis", "Competitive Landscape", "Localized Logic"]
    },
    {
        step: "02",
        title: "Strategic Blueprint",
        points: ["Tool Selection", "UI/UX Mapping", "Database Scaling", "Security Audit"]
    },
    {
        step: "03",
        title: "Agile Engineering",
        points: ["Rapid Iterations", "CI/CD Pipeline", "Weekly Demos", "Feature Control"]
    },
    {
        step: "04",
        title: "Precision QA",
        points: ["Load Testing", "Cross-Device Sync", "UX Refinement", "Bug Squashing"]
    }
]

export default function ProcessSlider() {
    const [index, setIndex] = React.useState(0)
    const touchStartX = React.useRef(null)

    const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
    const next = () => setIndex(i => (i + 1) % items.length)

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 50) {
            if (dx < 0) next()
            else prev()
        }
        touchStartX.current = null
    }

    return (
        <div className="process-slider-wrap position-relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button aria-label="Previous slide" onClick={prev} className="nav-btn prev-btn">‹</button>
            <button aria-label="Next slide" onClick={next} className="nav-btn next-btn">›</button>

            <div className="slide-inner">
                {items.map((item, i) => (
                    <div key={i} className={`slide-item ${i === index ? 'active' : 'inactive'}`} aria-hidden={i !== index}>
                        <div className="process-card p-xxl-8 p-xl-6 p-5 h-100">
                            <div className="d-flex align-items-center justify-content-between mb-5">
                                <span className="step-num theme-clr fw-bold fs-4">{item.step}</span>
                                <div className="card-icon">
                                    <i className="fas fa-microchip theme-clr opacity-25 fs-2" />
                                </div>
                            </div>
                            <h4 className="white-clr mb-5 fw-bold">{item.title}</h4>
                            <ul className="list-unstyled d-flex flex-column gap-3">
                                {item.points.map((pt, pIdx) => (
                                    <li key={pIdx} className="d-flex align-items-center gap-3">
                                        <span className="dot bg-theme rounded-circle opacity-50" style={{ width: '5px', height: '5px' }} />
                                        <span className="pra-clr fs-xs">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dots d-flex gap-2 mt-4">
                {items.map((_, i) => (
                    <button key={i} aria-label={`Go to slide ${i+1}`} className={`dot-btn ${i===index? 'active' : ''}`} onClick={() => setIndex(i)} />
                ))}
            </div>

            <style jsx>{`
                .process-slider-wrap { padding: 10px 0; }
                .slide-inner { position: relative; min-height: 220px; }
                .slide-item { position: absolute; inset: 0; opacity: 0; transform: translateX(20px); transition: all 0.45s ease; }
                .slide-item.active { opacity: 1; transform: translateX(0); position: relative; }
                .slide-item.inactive { pointer-events: none; }
                .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); z-index: 20; width: 44px; height: 44px; border-radius: 50%; background: rgba(0,0,0,0.5); color: #e9fe49; border: none; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; cursor: pointer; }
                .prev-btn { left: -22px; }
                .next-btn { right: -22px; }
                .dots { justify-content: flex-start; }
                .dot-btn { width: 10px; height: 10px; border-radius: 50%; background: rgba(233,254,73,0.25); border: none; }
                .dot-btn.active { background: #e9fe49; }
            `}</style>
        </div>
    )
}
