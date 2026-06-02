'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Faq1 from "@/components/sections/Faq1"
import ContactCTA from "@/components/sections/ContactCTA"
import { urlForImage } from "@/sanity/lib/image"

export default function ServicesClient({ pageData, fallbackServices, fallbackStats, fallbackIndustries, fallbackStack }) {
    const [scrollProgress, setScrollProgress] = useState(0)
    const pageBuilder = pageData?.pageBuilder || []

    useEffect(() => {
        AOS.init({ duration: 1200, once: false, easing: 'ease-out-back' })

        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight
            const currentScroll = window.scrollY
            setScrollProgress(currentScroll / totalScroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const renderBlocks = () => {
        return pageBuilder.map((block, index) => {
            switch (block._type) {
                case 'serviceHeroBlock':
                    return <ServiceHero key={index} data={block} scrollProgress={scrollProgress} />
                case 'serviceListBlock':
                    return <ServiceList key={index} data={block} />
                case 'resultsBridgeBlock':
                    return <ResultsBridge key={index} data={block} scrollProgress={scrollProgress} />
                case 'statsBlock':
                    return <StatsBox key={index} data={block} />
                case 'marqueeBlock':
                    return <LogoMarquee key={index} data={block} />
                case 'industryListBlock':
                    return <IndustrySpecialization key={index} data={block} />
                case 'stepsBlock':
                    return <HowWeWork key={index} data={block} />
                case 'caseStudyBlock':
                    return <CaseStudy1 key={index} />
                case 'testimonialBlock':
                    return <Testimonial1 key={index} />
                case 'faqBlock':
                    return <Faq1 key={index} data={block} />
                case 'contactCtaBlock':
                    return <ContactCTA key={index} data={block} />
                default:
                    return null
            }
        })
    }

    return (
        <Layout 
            headerStyle={2} 
            footerStyle={3} 
            breadcrumbTitle={pageData?.breadcrumb?.title || "AI & Digital Services <br/> For Growth & Scale"}
            breadcrumbLabel={pageData?.breadcrumb?.label || "SERVICES"} 
            breadcrumbSubTitle={pageData?.breadcrumb?.subtitle || "Integrated solutions designed to support every stage of your digital growth journey."}
        >
            <div className="massive-service-container bg-black overflow-hidden font-inter">
                {pageBuilder.length > 0 ? (
                    renderBlocks()
                ) : (
                    // Fallback to original hardcoded content
                    <>
                        <ServiceHero scrollProgress={scrollProgress} />
                        <ServiceList services={fallbackServices} />
                        <ResultsBridge scrollProgress={scrollProgress} />
                        <StatsBox stats={fallbackStats} />
                        <LogoMarquee stack={fallbackStack} />
                        <IndustrySpecialization industries={fallbackIndustries} />
                        <HowWeWork />
                        <CaseStudy1 />
                        <Testimonial1 />
                        <Faq1 />
                        <FinalCTA scrollProgress={scrollProgress} />
                    </>
                )}
            </div>
            {/* Inline Styles from original page.js */}
            <style jsx>{`
                .massive-service-container { background: #000; color: #fff; overflow-x: hidden; }
                .bg-dark-v1 { background: #070707 !important; }
                .theme-clr { color: #e9fe49 !important; }
                .bg-theme { background: #e9fe49 !important; }
                .border-theme { border-color: #e9fe49 !important; }
                .fw-black { font-weight: 950; }
                .tracking-metric { letter-spacing: 0.15em; }
                .tracking-widest { letter-spacing: 0.4em; }
                .leading-tight { line-height: 1.1; }
                .leading-none { line-height: 1; }
                .leading-relaxed { line-height: 1.6; }
                .z-index-2 { z-index: 2; position: relative; }
                .tiny { font-size: 10px; }
                
                .massive-parallax-text {
                    position: absolute;
                    top: 50%; left: 0;
                    font-size: 35vw;
                    font-weight: 950;
                    color: rgba(255, 255, 255, 0.01);
                    -webkit-text-stroke: 1px rgba(233, 254, 73, 0.03);
                    white-space: nowrap;
                    pointer-events: none;
                    z-index: 1;
                }
                .hero-visual-wrap .floating-hero-img {
                    animation: floatHero 6s ease-in-out infinite;
                }
                @keyframes floatHero {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .marquee-wrap { animation: marquee 30s linear infinite; white-space: nowrap; }
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .btn-glow-pulse {
                    position: absolute; inset: -10px;
                    background: radial-gradient(circle, rgba(233, 254, 73, 0.5), transparent 70%);
                    filter: blur(20px); opacity: 0.8; animation: pulse-glow 2s infinite; z-index: -1; pointer-events: none; border-radius: 100px;
                }
                @keyframes pulse-glow { 0% { transform: scale(0.8); opacity: 0.4; } 50% { transform: scale(1.2); opacity: 0.9; } 100% { transform: scale(0.8); opacity: 0.4; } }
            `}</style>
        </Layout>
    )
}

// Sub-components for sections
function ServiceHero({ data, scrollProgress }) {
    return (
        <section className="hero-v3-cinematic position-relative" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
            <div className="massive-parallax-text" style={{ transform: `translateX(${scrollProgress * -30}%)` }}>
                {data?.parallaxText || "CAPABILITIES"}
            </div>
            <div className="container position-relative z-index-2">
                <div className="row align-items-center">
                    <div className="col-lg-7" data-aos="fade-right">
                        <div className="capsule-badge d-inline-flex align-items-center mb-8 rounded-pill py-2 px-5" style={{ border: '1.5px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(5px)' }}>
                            <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3" style={{ fontSize: '10px', letterSpacing: '0.4em' }}>
                                {data?.badgeText || "Built for Speed, Scale & Performance"}
                            </span>
                        </div>
                        <h2 className="white-clr display-2 fw-black mb-10 leading-tight" style={{ fontWeight: 950, lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: data?.heading || "High-Performance <br /> Digital Systems for Growth" }} />
                        <p className="white-clr opacity-50 fs-4 mb-15 tracking-tight" style={{ maxWidth: '650px' }}>
                            {data?.description || "Built to eliminate complexity, this system connects development, marketing, AI, and design into one streamlined workflow."}
                        </p>
                    </div>
                    <div className="col-lg-5" data-aos="fade-left" data-aos-delay="300">
                        <div className="hero-visual-wrap position-relative">
                            <img src={data?.image ? urlForImage(data.image).url() : "/assets/img/web-app/web-app-hero-image.png"} alt="Hero Visual" className="img-fluid floating-hero-img" style={{ filter: 'drop-shadow(0 0 30px rgba(233, 254, 73, 0.2))' }} />
                            <div className="hero-glow-back" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(233, 254, 73, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceList({ data, services }) {
    const list = data?.services || services || []
    return (
        <section className="showcase-v3-extended" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
            <div className="container">
                <div className="section-head mb-3" data-aos="fade-up">
                    <h2 className="display-2 white-clr fw-black" style={{ fontWeight: 950 }}>{data?.heading || "Our Core Services"}</h2>
                </div>
                {list.map((item, idx) => (
                    <div key={idx} className={`mt-10 showcase-unit row align-items-center ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`} style={{ marginBottom: '80px' }}>
                        <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-right">
                            <h3 className="white-clr display-6 fw-bold mb-6 leading-none">{item.title}</h3>
                            <p className="white-clr opacity-50 fs-5 mb-10 leading-relaxed">{item.description || item.desc}</p>
                            <div className="sub-capabilities-wrap d-flex flex-column gap-3">
                                {(item.subCapabilities || []).map((sub, sIdx) => (
                                    <div key={sIdx} className="sub-capability-item d-flex align-items-center gap-3" style={{ transition: 'all 0.3s ease' }}>
                                        <i className="fas fa-circle theme-clr" style={{ fontSize: '6px' }} />
                                        <Link href={sub.href || "#"} className="white-clr opacity-75 small fw-medium hover-text-theme" style={{ textDecoration: 'none' }}>
                                            {sub.title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="fade-left">
                            <div className="unit-visual-premium position-relative p-4">
                                <div className="shape-behind-image" style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', background: '#e9fe49', borderRadius: '50%', opacity: 0.1, filter: 'blur(80px)', zIndex: -1 }}></div>
                                <div className="image-wrap rounded-5 overflow-hidden shadow-2xl" style={{ height: '550px' }}>
                                    <img src={item.image ? (item.image.asset ? urlForImage(item.image).url() : item.image) : "/assets/img/service/default.jpg"} alt={item.title} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function ResultsBridge({ data, scrollProgress }) {
    return (
        <section className="results-bridge position-relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="massive-parallax-text" style={{ transform: `translateX(${(scrollProgress - 0.3) * -40}%)`, top: '50%', fontSize: '25vw', opacity: 0.02 }}>
                {data?.parallaxText || "RESULTS"}
            </div>
            <div className="container text-center position-relative z-index-2">
                <h2 className="display-2 white-clr fw-black mb-6">{data?.heading || "Built for Measurable Results"}</h2>
                <p className="white-clr opacity-50 fs-5 mx-auto" style={{ maxWidth: '800px' }}>{data?.description || "Real outcomes across development, marketing, and AI-focused on performance."}</p>
            </div>
        </section>
    )
}

function StatsBox({ data, stats }) {
    const list = data?.stats || stats || []
    return (
        <section className="metric-nexus bg-dark-v1 py-20">
            <div className="container">
                <div className="row g-10">
                    {list.map((s, i) => (
                        <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in">
                            <div className="metric-box p-10 border-start border-theme border-opacity-20 hover-border-opacity-100 transition-all">
                                <i className={`fas ${s.icon} theme-clr fs-1 mb-6`}></i>
                                <h2 className="white-clr display-5 fw-black mb-2">{s.val || s.value}</h2>
                                <p className="white-clr opacity-50 small fw-bold tracking-metric text-uppercase">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function LogoMarquee({ data, stack }) {
    const list = data?.logos || stack || []
    return (
        <section className="global-scale-marquee py-10 bg-dark-v1">
            <div className="marquee-wrap d-flex align-items-center gap-10">
                {Array(6).fill(list).flat().map((item, i) => (
                    <div key={i} className="marquee-item d-flex align-items-center gap-6" style={{ padding: '0 30px' }}>
                        <img src={item.image ? (item.image.asset ? urlForImage(item.image).url() : item.logo) : (item.image || item.logo)} alt={item.name} style={{ height: '50px', objectFit: 'contain' }} />
                        <span className="dot theme-clr"></span>
                    </div>
                ))}
            </div>
        </section>
    )
}

function IndustrySpecialization({ data, industries }) {
    const list = data?.industries || industries || []
    return (
        <section className="industry-deep py-20">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <h2 className="display-4 white-clr fw-black mb-10" dangerouslySetInnerHTML={{ __html: data?.heading || "Services Built for <br /> High-Growth Industries" }} />
                        <p className="white-clr opacity-50 fs-5">{data?.description || "Every industry has different challenges. Our services are adapted to match your business model."}</p>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-5">
                            {list.map((ind, i) => (
                                <div key={i} className="col-md-6" data-aos="fade-left">
                                    <div className="industry-card px-8 py-10 rounded-4 border border-white border-opacity-5 hover-border-theme transition-all h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(25px)' }}>
                                        <i className={`fas ${ind.icon} theme-clr fs-1 mb-8 d-block`}></i>
                                        <h3 className="white-clr mb-4 fs-4 fw-bold">{ind.name}</h3>
                                        <p className="white-clr opacity-50 small mb-0">{ind.desc || ind.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HowWeWork({ data }) {
    const list = data?.steps || [
        { stepNumber: "01. Discover", title: "Understand your goals, users, and business challenges." },
        { stepNumber: "02. Plan", title: "Define strategy, roadmap, and execution priorities." },
        { stepNumber: "03. Build & Execute", title: "Design, develop, and launch with cross-functional execution." },
        { stepNumber: "04. Optimize & Scale", title: "Improve performance through data, iteration, and automation." }
    ]
    return (
        <section className="protocol-path bg-dark-v1 py-20">
            <div className="container text-center">
                <h2 className="display-2 white-clr fw-black mb-6">{data?.heading || "How We Work"}</h2>
                <div className="row g-0 mt-20">
                    {list.map((p, i) => (
                        <div key={i} className="col-lg-3 col-md-6" data-aos="fade-up">
                            <div className="path-node p-10 border-end border-secondary border-opacity-10 h-100 hover-bg-theme-opacity" style={{ transition: '0.5s' }}>
                                <h4 className="white-clr mb-3">{p.stepNumber}</h4>
                                <p className="white-clr opacity-50 small mb-0">{p.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FinalCTA({ scrollProgress }) {
    return (
        <section className="final-protocol-cta d-flex align-items-center position-relative bg-black" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
            <div className="container position-relative z-index-2 text-center">
                <h2 className="display-1 white-clr fw-black mb-15 mt-2">Your Next High-Performance <br /> Asset Starts Here.</h2>
                <div className="d-flex justify-content-center">
                    <Link href="/contact" className="cinematic-cta-btn" style={{ border: "2px solid white", borderRadius: "100px", padding: "10px 10px", width: "250px", textDecoration: 'none', position: 'relative' }}>
                        <span className="white-clr fw-bold">CONNECT TO LAB</span>
                        <div className="btn-glow-pulse"></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
