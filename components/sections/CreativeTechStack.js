'use client'
import { useState } from 'react';

export default function CreativeTechStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const techStack = [
        {
            title: "Development",
            content: "Scalable platforms and custom solutions built for performance and automation.",
            img: "/assets/img/element/development.jpg",
            imgPos: { top: '-110px', left: '20%' }
        },
        {
            title: "Digital Marketing",
            content: "SEO, PPC, and growth strategies focused on visibility, leads, and revenue.",
            img: "/assets/img/element/digital.webp",
            imgPos: { top: '-90px', left: '60%' }
        },
        {
            title: "Design & Branding",
            content: "User-focused design and brand systems that improve experience and conversion.",
            img: "/assets/img/element/branding.jpg",
            imgPos: { top: '-120px', left: '45%' }
        },
        {
            title: "AI Services",
            content: "AI-powered content, video production, and consulting to enhance creativity and efficiency.",
            img: "/assets/img/element/video.jpg",
            imgPos: { top: '-100px', left: '10%' }
        }
    ];

    return (
        <section className="creative-tech-stack pt-space pb-space bg2-clr position-relative z-index-1" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center center',
            overflow: 'hidden'
        }}>
            {/* Subtle glow effect behind */}
            <div className="position-absolute top-50 start-0 translate-middle-y" style={{ width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(227,255,4,0.03) 0%, rgba(0,0,0,0) 70%)', zIndex: -1, borderRadius: '50%' }}></div>
            
            <div className="container position-relative z-index-1" style={{ padding: '2rem 0' }}>
                <div className="row g-5 align-items-center">
                    {/* Left Column - Heading */}
                    <div className="col-lg-5 pe-lg-5" data-aos="fade-right" data-aos-duration={1500}>
                        <div className="pricing-title pe-xl-5">
                            <h2 className="stitle mb-4" style={{ 
                                fontWeight: 400, 
                                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', 
                                lineHeight: '1.2',
                                letterSpacing: '-1px'
                            }}>
                                Our <strong style={{ color: '#E3FF04', fontWeight: 600 }}>Creative</strong><br className="d-none d-lg-block" />
                                Tech Stack
                            </h2>
                            <p className="white-clr fs-5 opacity-75 pe-md-4 pe-0 mt-4" style={{ lineHeight: '1.8' }}>
                                A connected system designed to support every stage of business growth:
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="col-lg-7 ps-lg-5" data-aos="fade-left" data-aos-duration={1500}>
                        <div className="tech-stack-accordion mt-lg-0 mt-5 position-relative">
                            {techStack.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="accordion-item transition-all mb-4 position-relative" 
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{ 
                                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                                        paddingBottom: '1.8rem',
                                        paddingTop: index !== 0 ? '1rem' : '0',
                                        zIndex: hoveredIndex === index ? 10 : 1
                                    }}
                                >
                                    {/* Floating Hover Image */}
                                    <div 
                                        className="hover-image-container position-absolute pointer-events-none d-none d-md-block"
                                        style={{
                                            width: '280px',
                                            height: '160px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            top: item.imgPos.top,
                                            left: item.imgPos.left,
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            transform: hoveredIndex === index ? 'scale(1) translateY(0) rotate(2deg)' : 'scale(0.8) translateY(30px) rotate(0deg)',
                                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                                            zIndex: 20,
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                            border: 'none' // Removed border as requested
                                        }}
                                    >
                                        <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))' }}></div>
                                        <img src={item.img} alt={item.title} className="w-100 h-100 object-fit-cover transition-all" style={{ transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)' }} />
                                    </div>

                                    <h3 
                                        className="accordion-header d-flex justify-content-between align-items-center mb-0"
                                        onClick={() => toggleAccordion(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span 
                                            className="fw-normal" 
                                            style={{ 
                                                fontSize: '2rem', // Made a bit bigger
                                                transition: 'all 0.4s ease',
                                                color: activeIndex === index || hoveredIndex === index ? '#E3FF04' : '#fff',
                                                letterSpacing: '0.5px',
                                                transform: hoveredIndex === index ? 'translateX(15px)' : 'translateX(0)'
                                            }}
                                        >
                                            {item.title}
                                        </span>
                                        <button 
                                            className="btn rounded-circle d-center" 
                                            style={{ 
                                                width: '50px', 
                                                height: '50px', 
                                                background: activeIndex === index ? '#E3FF04' : 'transparent', 
                                                color: activeIndex === index ? '#000' : 'rgba(255,255,255,0.4)', 
                                                border: activeIndex === index ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                                transition: 'all 0.4s ease',
                                                boxShadow: activeIndex === index ? '0 0 25px rgba(227,255,4,0.3)' : 'none'
                                            }}
                                            aria-label={activeIndex === index ? "Collapse" : "Expand"}
                                        >
                                            <i className={`fas fa-arrow-${activeIndex === index ? 'up' : 'down'}`} style={{ fontSize: '18px' }}></i>
                                        </button>
                                    </h3>
                                    
                                    <div 
                                        className="accordion-collapse overflow-hidden"
                                        style={{ 
                                            maxHeight: activeIndex === index ? '200px' : '0px', 
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            opacity: activeIndex === index ? '1' : '0'
                                        }}
                                    >
                                        <div className={`mt-4 ${activeIndex === index ? 'd-block' : 'd-none'}`}>
                                            <p className="white-clr opacity-75 mb-0 fs-5 ps-4" style={{ 
                                                borderLeft: '2px solid #E3FF04', 
                                                lineHeight: '1.8',
                                            }}>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
