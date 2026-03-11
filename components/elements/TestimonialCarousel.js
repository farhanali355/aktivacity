"use client"
import React from 'react'

const items = [
    {
        score: "5.0",
        clientImg: "https://randomuser.me/api/portraits/men/32.jpg",
        tags: ["$20-80K", "Construction", "7 months"],
        quote: "Aktivacity is brilliant. We were impressed with their timely delivery, cost-effectiveness, and the people who knew exactly what they were doing!"
    },
    {
        score: "5.0",
        clientImg: "https://randomuser.me/api/portraits/women/44.jpg",
        tags: ["$50-200K", "Retail", "Ongoing"],
        quote: "Every expert we've worked with has been super friendly, knowledgeable, and passionate about creating our platform from the ground up."
    },
    {
        score: "5.0",
        clientImg: "https://randomuser.me/api/portraits/men/85.jpg",
        tags: ["$50-200K", "Real Estate", "Ongoing"],
        quote: "The Aktivacity team is highly professional, able to understand the client’s needs and deliver solutions that meet those needs perfectly."
    }
]

export default function TestimonialCarousel() {
    const extendedItems = [...items, ...items, ...items]
    const [index, setIndex] = React.useState(items.length)
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
        <div className="testimonial-carousel-outer">
            <div className="carousel-container position-relative py-5 ">
                <div className="testimonial-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div className="overflow-hidden ">
                        <div className="track d-flex" style={{
                            width: `${(extendedItems.length / visible) * 100}%`,
                            transform: `translateX(${(index * -100) / extendedItems.length}%)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
                        }}>
                            {extendedItems.map((item, i) => (
                                <div key={i} className="slide-item mt-5 px-3" style={{ width: `${100 / extendedItems.length}%` }}>
                                    <div className="testimonial-card p-xxl-10 p-xl-8 p-6 h-100 position-relative">
                                        <div className="d-flex align-items-center gap-4 mb-6">
                                            <div className="client-avatar-wrap" style={{ width: '60px', height: '60px' }}>
                                                <img src={item.clientImg} alt="Client" className="rounded-circle border border-white-opacity w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="d-flex flex-column gap-1">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="white-clr fs-4 fw-bold">{item.score}</span>
                                                    <div className="stars d-flex gap-1">
                                                        {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star theme-clr fs-xs" />)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="line border-top border-white-opacity mb-6" />

                                        <div className="d-flex flex-wrap gap-2 mb-8">
                                            {item.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="tag-pill py-1 px-3 fs-xs black-clr fw-bold rounded-pill" style={{ backgroundColor: '#e9fe49' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="pra-clr fs-5 mb-0 lh-base opacity-75">
                                            “{item.quote}”
                                        </p>
                                        <div className="corner-decor" />
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
        .testimonial-carousel-outer { width: 100%; margin: 0 auto; }
        .carousel-container { padding-left: 40px; padding-right: 40px; margin: -20px 0; }
        .overflow-hidden { overflow: hidden; }
        .track { will-change: transform; display: flex; flex-wrap: nowrap; }
        .slide-item { box-sizing: border-box; flex: 0 0 auto; }
        .testimonial-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 40px;
            transition: all 0.4s ease;
            min-height: 380px;
            position: relative;
        }
        .testimonial-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(233, 254, 73, 0.5);
            transform: translateY(-10px);
        }
        .corner-decor {
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 60px;
            background: linear-gradient(225deg, transparent 50%, rgba(255, 255, 255, 0.02) 50%);
            border-radius: 0 40px 0 0;
        }
        .border-white-opacity { border-color: rgba(255, 255, 255, 0.1) !important; }
        .nav-btn { 
            position: absolute; 
            top: 50%; 
            transform: translateY(-50%); 
            z-index: 20; 
            width: 50px; 
            height: 50px; 
            border-radius: 50%; 
            background: rgba(0, 0, 0, 0.7); 
            color: #e9fe49; 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 1rem; 
            cursor: pointer; 
            transition: all 0.3s ease;
        }
        .nav-btn:hover {
            background: #e9fe49;
            color: #000;
        }
        .nav-btn.prev { left: -15px; }
        .nav-btn.next { right: -15px; }
        .dot { 
            width: 8px; 
            height: 8px; 
            border-radius: 50%; 
            background: rgba(255, 255, 255, 0.2); 
            border: none; 
            transition: all 0.3s ease;
            padding: 0;
            cursor: pointer;
        }
        .dot.active { 
            background: #e9fe49; 
            width: 24px; 
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
