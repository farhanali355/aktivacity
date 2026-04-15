"use client"
import React from 'react'

const items = [
    {
        name: "Ahmed K.",
        location: "Fintech Founder, Lahore",
        clientImg: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "Aktivacity transformed our vision into a high-performing SaaS platform with AI-driven marketing that tripled our user base. True full-service tech & digital agency partners!"
    },
    {
        name: "Sara M.",
        location: "Edtech CEO, Karachi",
        clientImg: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "From UI/UX design to explainer videos, their end-to-end solutions delivered investor-ready results. Highly recommend this Software Development Company in Pakistan."
    },
    {
        name: "Aisha N.",
        location: "Founder, HealthTech Pakistan",
        clientImg: "https://randomuser.me/api/portraits/women/52.jpg",
        quote: "Working with Aktivacity as our technology and growth partner turned a complex product launch into a smooth, data-driven journey. Their full-stack team delivered fast, polished results."
    },
    {
        name: "Bilal S.",
        location: "COO, RetailTech Dubai",
        clientImg: "https://randomuser.me/api/portraits/men/43.jpg",
        quote: "Their integrated strategy combined development, branding, and digital ads into one system, helping us scale and retain customers with confidence."
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
            <div className="carousel-container position-relative py-5">
                <div className="testimonial-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div className="overflow-hidden">
                        <div className="track d-flex" style={{
                            width: `${(extendedItems.length / visible) * 100}%`,
                            transform: `translateX(${(index * -100) / extendedItems.length}%)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
                        }}>
                            {extendedItems.map((item, i) => (
                                <div key={i} className="slide-item mt-5 px-3" style={{ width: `${100 / extendedItems.length}%` }}>
                                    <div className="testimonial-card p-xxl-10 p-xl-8 p-6 h-100 position-relative d-flex flex-column">
                                        <div className="d-flex align-items-center justify-content-between mb-8">
                                            <div className="client-avatar-wrap" style={{ width: '64px', height: '64px' }}>
                                                <img src={item.clientImg} alt="Client" className="rounded-circle border border-2 border-theme w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="stars d-flex gap-1">
                                                {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star theme-clr fs-6" />)}
                                            </div>
                                        </div>

                                        <p className="pra-clr fs-5 mb-10 lh-base opacity-75 italic-italic">
                                            “{item.quote}”
                                        </p>

                                        <div className="mt-auto">
                                            <h4 className="white-clr mb-1 fw-bold fs-5">{item.name}</h4>
                                            <p className="theme-clr mb-0 fw-bold text-uppercase ls-1 fs-xs">{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="nav-controls d-flex justify-content-center gap-4 mt-12">
                     <button aria-label="Previous" className="nav-btn-alt prev" onClick={prev}>
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button aria-label="Next" className="nav-btn-alt next" onClick={next}>
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
            </div>

            <style jsx>{`
        .testimonial-carousel-outer { width: 100%; margin: 0 auto; }
        .carousel-container { padding: 0; }
        .overflow-hidden { overflow: hidden; }
        .track { will-change: transform; display: flex; flex-wrap: nowrap; }
        .slide-item { box-sizing: border-box; flex: 0 0 auto; }
        .testimonial-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 40px;
            transition: all 0.4s ease;
            min-height: 420px;
            position: relative;
        }
        .testimonial-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(233, 254, 73, 0.3);
            transform: translateY(-10px);
        }
        .border-theme { border-color: #e9fe49 !important; }
        .italic-italic { font-style: normal; }
        .ls-1 { letter-spacing: 1px; }
        .fs-xs { font-size: 0.8rem; }
        
        .nav-btn-alt {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.1);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .nav-btn-alt:hover {
            background: #e9fe49;
            color: #000;
            border-color: #e9fe49;
        }

        @media (max-width: 991px) { 
            .testimonial-card { min-height: 350px; border-radius: 30px; }
        }
      `}</style>
        </div>
    )
}
