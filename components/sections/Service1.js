'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { urlForImage } from "@/sanity/lib/image"

const categoryMapping = {
    "Development Services": [
        { title: "Web Development Services", href: "/services/web-development-services" },
        { title: "Software Development", href: "/services/software-development" }
    ],
    "Digital Marketing (SEO & PPC)": [
        { title: "Digital Marketing Services", href: "/services/digital-marketing-services" },
        { title: "SEO Services", href: "/services/seo-services" }
    ],
    "AI Services (AI Videos, Filmmaking & Consulting)": [
        { title: "Ai Strategy & Marketing", href: "/services/ai-strategy-marketing" },
        { title: "Ai Film Making & Video Production", href: "/services/ai-film-making-video-production" },
        { title: "AI Automation", href: "/services/ai-automation-services" }
    ],
    "Designs & Branding": [
        { title: "Graphic Design & Branding", href: "/services/graphic-design-branding" },
        { title: "UI/UX Design", href: "/services/ui-ux-design" }
    ]
}

const Service1 = ({ data }) => {
    const [activeCard, setActiveCard] = useState(null)

    const serviceData = data?.servicesList || [
        {
            _key: 1,
            title: "Development Services",
            description: "Custom web, mobile, and SaaS development built for scalability, performance, and automation.",
            image: null,
        },
        {
            _key: 2,
            title: "Digital Marketing (SEO & PPC)",
            description: "SEO, PPC, and social strategies focused on increasing visibility, generating leads, and maximizing ROI.",
            image: '/assets/img/element/marketing.jpg',
        },
        {
            _key: 3,
            title: "AI Services (AI Videos, Filmmaking & Consulting)",
            description: "AI-driven video production, filmmaking, and consulting to improve storytelling, efficiency, and decision-making.",
            image: '/assets/img/element/film.jpg',
        },
        {
            _key: 4,
            title: "Designs & Branding",
            description: "UI/UX, graphic design, and branding that build strong identities, enhance user experience, and increase conversions.",
            image: '/assets/img/element/design.jpg',
        }
    ]

    const toggleCard = (idx) => {
        setActiveCard(prev => prev === idx ? null : idx)
    }

    return (
        <section className="service-section bg-black text-center position-relative" style={{ padding: '160px 0' }}>
            <div className="container">
                <div className="section-title mb-5" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="stitle text-white mb-3" dangerouslySetInnerHTML={{ __html: data?.tagline || 'Our Integrated <span class="theme-clr" style="font-style: normal;">Creative Tech Stack & Services</span>' }} />
                    <p className="text-white opacity-75 mx-auto fs-5" style={{ maxWidth: '800px' }}>
                        {data?.description || 'Bringing AI, digital marketing, development, and design into one streamlined system—built to help businesses execute faster, stay consistent, and achieve measurable growth.'}
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {serviceData.map((service, idx) => {
                        const isOpen = activeCard === idx
                        const subServices = categoryMapping[service.title] || []

                        return (
                            <div key={service._key || idx} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                                <div className={`service-card position-relative overflow-hidden rounded-4 border border-secondary border-opacity-25 ${isOpen ? 'card-active' : ''}`}>

                                    {/* Background Image */}
                                    <div className="img-wrapper w-100 h-100">
                                        <img
                                            src={service.image && service.image.asset ? urlForImage(service.image).url() : (service.image || '/assets/img/element/development.jpg')}
                                            alt={service.title}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                    </div>

                                    {/* Static Content - always visible */}
                                    <div className="overlay-content position-absolute bottom-0 start-0 w-100 p-4 text-start d-flex flex-column justify-content-end">
                                        <h3 className="text-white mb-2 fw-bold fs-3">{service.title}</h3>
                                        <p className="text-white opacity-75 mb-3 small">{service.description}</p>
                                        <button
                                            className="explore-btn btn rounded-pill align-self-start py-2 px-4 fw-semibold"
                                            onClick={() => toggleCard(idx)}
                                        >
                                            Explore More
                                        </button>
                                    </div>

                                    {/* Sliding Links Panel */}
                                    <div className={`slide-panel position-absolute start-0 w-100 ${isOpen ? 'slide-open' : ''}`}>
                                        <div className="slide-panel-inner p-4 text-start d-flex flex-column h-100">
                                            <p className="slide-label mb-3">Our {service.title} Services</p>
                                            <div className="flex-grow-1">
                                                {subServices.map((s, i) => (
                                                    <Link key={i} href={s.href} className="slide-link d-flex align-items-center gap-3">
                                                        <span className="slide-dot" />
                                                        <span>{s.title}</span>
                                                        <i className="fas fa-arrow-right ms-auto slide-arrow" />
                                                    </Link>
                                                ))}
                                            </div>
                                            {/* Close button inside the panel */}
                                            <button
                                                className="explore-btn btn rounded-pill align-self-start py-2 px-4 fw-semibold mt-3"
                                                onClick={() => toggleCard(idx)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-5" data-aos="fade-up" data-aos-duration="1400">
                    <Link
                        href="/services"
                        className="btn btn-outline-theme rounded-pill py-3 px-5 fw-bold fs-5 text-uppercase theme-border theme-clr bg-transparent"
                    >
                        View All Services
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .slide-panel {
                    bottom: 0;
                    height: 0;
                    overflow: hidden;
                    background: linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(10,10,10,0.95) 100%);
                    transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    border-top: 1px solid transparent;
                    z-index: 5;
                }
                .slide-panel.slide-open {
                    height: 100%;
                    border-top-color: rgba(233, 254, 73, 0.3);
                }
                .slide-label {
                    color: #e9fe49;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .slide-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 16px;
                    border-radius: 12px;
                    text-decoration: none;
                    color: rgba(255,255,255,0.85);
                    font-weight: 500;
                    font-size: 0.95rem;
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                    margin-bottom: 8px;
                    background: rgba(255,255,255,0.03);
                }
                .slide-link:hover {
                    background: rgba(233,254,73,0.08);
                    border-color: rgba(233,254,73,0.3);
                    color: #e9fe49;
                    transform: translateX(8px);
                }
                .slide-dot {
                    width: 7px;
                    height: 7px;
                    min-width: 7px;
                    background: #e9fe49;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                }
                .slide-link:hover .slide-dot {
                    transform: scale(1.5);
                    box-shadow: 0 0 6px #e9fe49;
                }
                .slide-arrow {
                    font-size: 11px;
                    color: #e9fe49;
                    opacity: 0.4;
                    transition: all 0.3s ease;
                }
                .slide-link:hover .slide-arrow {
                    opacity: 1;
                    transform: translateX(4px);
                }
                .explore-btn {
                    position: relative;
                    z-index: 10;
                    background-color: #e9fe49 !important;
                    color: black !important;
                    border: 1px solid #e9fe49 !important;
                    transition: all 0.4s ease !important;
                }
                .service-card:hover .explore-btn,
                .card-active .explore-btn {
                    background-color: transparent !important;
                    color: #e9fe49 !important;
                }
            `}</style>
        </section>
    )
}

export default Service1
