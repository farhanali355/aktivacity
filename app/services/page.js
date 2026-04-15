'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Faq1 from "@/components/sections/Faq1"

export default function Service() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [activeAccordion, setActiveAccordion] = useState(0)

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

    const services = [
        {
            id: '01',
            title: "Development Services",
            tagline: "Scalable Digital Foundations.",
            desc: "Scalable web, mobile, and SaaS solutions built for performance, automation, and long-term growth.",
            subCapabilities: [
                { title: "Web Development Services", href: "/services/web-development-services" },
                { title: "Software Development", href: "/services/software-development" },
                { title: "Mobile App Development", href: "/404" },
                { title: "SaaS Development", href: "/404" }
            ],
            page: "/services/web-development-services",
            tags: ["Next.js 14", "React Native", "Cloud Ops"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: '02',
            title: "Digital Marketing (SEO & PPC)",
            tagline: "Growth Engineering at Scale.",
            desc: "Search, paid media, and growth strategies designed to increase visibility, generate leads, and maximize ROI.",
            subCapabilities: [
                { title: "SEO Optimization", href: "/services/seo-services" },
                { title: "Digital Marketing", href: "/services/digital-marketing-services" },
                { title: "Social Media Marketing", href: "/404" },
                { title: "Paid Ads (PPC)", href: "/404" },
                { title: "Content Marketing", href: "/404" }
            ],
            page: "/services/digital-marketing-services",
            tags: ["SEO/SEM", "Performance", "Conversion"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
        },
        {
            id: '03',
            title: "AI Services",
            tagline: "The Future of Storytelling.",
            desc: "AI-driven solutions that enhance content creation, automate workflows, and improve decision-making.",
            subCapabilities: [
                { title: "Ai Strategy & Marketing", href: "/services/ai-strategy-marketing" },
                { title: "Ai Automation", href: "/services/ai-automation-services" },
                { title: "Ai Film Making & Video Production", href: "/services/ai-film-making-video-production" },
                { title: "Motion Graphics", href: "/404" },
                { title: "3D Animation", href: "/404" }
            ],
            tags: ["UE5", "GenAI", "Virtual Prod"],
            image: "https://www.channelpronetwork.com/wp-content/uploads/2024/09/New-AI-services.jpg"
        },
        {
            id: '04',
            title: "Design & Branding",
            tagline: "Visual Identity Systems.",
            desc: "Creative design and brand systems that improve user experience, strengthen identity, and increase conversions.",
            subCapabilities: [
                { title: "Graphic Design & Branding", href: "/services/graphic-design-branding" },
                { title: "Logo & Visual Identity", href: "/404" },
                { title: "UI/UX Design", href: "/services/ui-ux-design" },
                { title: "Brand Strategy", href: "/404" }
            ],
            tags: ["Visual Strategy", "Figma", "Design Ops"],
            image: "https://5.imimg.com/data5/SELLER/Default/2024/12/475690892/EW/EI/LJ/140006600/logo-branding-design-services.jpg"
        }
    ]

    const stats = [
        { label: "AI Projects Delivered", val: "100+", icon: "fa-robot" },
        { label: "Clients Served Globally", val: "50+", icon: "fa-globe" },
        { label: "Years of AI Experience", val: "5+", icon: "fa-calendar-check" },
        { label: "Client Satisfaction Rate", val: "95%+", icon: "fa-heart" }
    ]

    const industries = [
        { name: "Enterprises", desc: "Scalable solutions built for complex systems and long-term growth.", icon: "fa-building" },
        { name: "E-commerce", desc: "Performance-driven strategies to increase sales, conversions, and retention.", icon: "fa-shopping-cart" },
        { name: "Small Businesses", desc: "Smart, cost-effective solutions designed to accelerate growth and visibility.", icon: "fa-store" },
        { name: "Creators & Personal Brands", desc: "Creative systems to build audience, influence, and monetization.", icon: "fa-clapperboard" }
    ]

    const stack = [
        { name: "Node.js", logo: "/assets/img/web-app/nodejs.png" },
        { name: "Python", logo: "/assets/img/web-app/python.png" },
        { name: "React", logo: "/assets/img/web-app/react-native.png" },
        { name: "Shopify", logo: "/assets/img/web-app/shopify-logo.png" },
        { name: "WordPress", logo: "/assets/img/web-app/wordpress-logo.png" },
        { name: "Flutter", logo: "/assets/img/web-app/flutter.png" },
        { name: "Laravel", logo: "/assets/img/web-app/laravel.png" },
        { name: "Analytics", logo: "/assets/img/seo-page/google-analytics-icon.png" },
        { name: "Ahrefs", logo: "/assets/img/seo-page/ahrefs-icon.png" },
        { name: "Semrush", logo: "/assets/img/seo-page/semrush-icon.png" }
    ]

    return (
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="AI & Digital Services <br/> For Growth & Scale" breadcrumbLabel="SERVICES" breadcrumbSubTitle="Integrated solutions designed to support every stage of your digital growth journey.">
            <div className="massive-service-container bg-black overflow-hidden font-inter">

                {/* --- HERO V3 RELOADED --- */}
                <section className="hero-v3-cinematic position-relative" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="massive-parallax-text" style={{ transform: `translateX(${scrollProgress * -30}%)` }}>
                        CAPABILITIES
                    </div>

                    <div className="container position-relative z-index-2">
                        <div className="row align-items-center">
                            <div className="col-lg-7" data-aos="fade-right">
                                <div className="capsule-badge d-inline-flex align-items-center mb-8 rounded-pill py-2 px-5">
                                    <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">Built for Speed, Scale & Performance</span>
                                </div>
                                <h2 className="white-clr display-2 fw-black mb-10 leading-tight">
                                    High-Performance <br />
                                    Digital Systems for Growth
                                </h2>
                                <p className="white-clr opacity-50 fs-4 mb-15 tracking-tight" style={{ maxWidth: '650px' }}>
                                    Built to eliminate complexity, this system connects development, marketing, AI, and design into one streamlined workflow. The result is faster execution, stronger consistency, and digital experiences that are designed to perform, scale, and deliver measurable business outcomes.
                                </p>

                            </div>
                            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="300">
                                <div className="hero-visual-wrap position-relative">
                                    <img src="/assets/img/web-app/web-app-hero-image.png" alt="Hero Visual" className="img-fluid floating-hero-img" />
                                    <div className="hero-glow-back"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* --- ASYMMETRICAL SHOWCASE (Full Experience) --- */}
                <section className="showcase-v3-extended" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="container">
                        <div className="section-head mb-3" data-aos="fade-up">
                            <div className="capsule-badge d-inline-flex align-items-center mb-6 rounded-pill py-2 px-5">
                                <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">Everything You Need to Build & Grow</span>
                            </div>
                            <h2 className="display-2 white-clr fw-black">Our Core Services</h2>
                        </div>

                        {services.map((item, idx) => (
                            <div key={item.id} className={`mt-10 showcase-unit row align-items-center ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`} style={{ marginBottom: '80px', marginTop: '40px' }}>
                                <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-right">
                                    <h3 className="white-clr display-6 fw-bold mb-6 leading-none text-nowrap">{item.title}</h3>
                                    <p className="white-clr opacity-50 fs-5 mb-10 leading-relaxed" style={{ maxWidth: '95%' }}>{item.desc}</p>

                                    <div className="sub-capabilities-wrap d-flex flex-column gap-3">
                                        {item.subCapabilities.map((sub, sIdx) => {
                                            return (
                                                <div key={sIdx} className="sub-capability-item d-flex align-items-center gap-3">
                                                    <span className="dot theme-clr d-inline-flex align-items-center" style={{ fontSize: '6px' }}>
                                                        <i className="fas fa-circle" />
                                                    </span>
                                                    <Link href={sub.href} onMouseEnter={(e) => e.target.style.color = '#e9fe49'} onMouseLeave={(e) => e.target.style.color = ''} className="white-clr opacity-75 small fw-medium tracking-wide hover-text-white" style={{ textDecoration: 'none' }}>
                                                        {sub.title}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="col-lg-7" data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}>
                                    <div className="unit-visual-premium position-relative">
                                        <div className="shape-behind-image"></div>
                                        <div className="image-wrap rounded-5 overflow-hidden shadow-2xl">
                                            <img src={item.image.startsWith('http') ? item.image : `/assets/img/service/${item.image}`} alt={item.title} className="img-fluid w-100 service-item-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- RESULTS BRIDGE --- */}
                <section className="results-bridge position-relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="massive-parallax-text" style={{ 
                        transform: `translateX(${(scrollProgress - 0.3) * -40}%)`,
                        top: '50%',
                        fontSize: '25vw',
                        opacity: 0.02
                    }}>
                        RESULTS
                    </div>
                    <div className="container position-relative z-index-2 text-center">
                        <div className="section-head mb-0" data-aos="fade-up">
                            <div className="capsule-badge d-inline-flex align-items-center mb-6 rounded-pill py-2 px-5">
                                <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">PERFORMANCE DRIVEN</span>
                            </div>
                            <h2 className="display-2 white-clr fw-black mb-6">Built for Measurable Results</h2>
                            <p className="white-clr opacity-50 fs-5 mx-auto leading-relaxed" style={{ maxWidth: '800px' }}>
                                Real outcomes across development, marketing, and AI-focused on performance, reliability, and scalable growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- METRIC NEXUS (Counters) --- */}
                <section className="metric-nexus bg-dark-v1 position-relative" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="container">
                        <div className="row g-10">
                            {stats.map((s, i) => (
                                <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={i * 100}>
                                    <div className="metric-box p-10 border-start border-theme border-opacity-20 hover-border-opacity-100 transition-all">
                                        <i className={`fas ${s.icon} theme-clr fs-1 mb-6`}></i>
                                        <h2 className="white-clr display-5 fw-black mb-2">{s.val}</h2>
                                        <p className="white-clr opacity-50 small fw-bold tracking-metric text-uppercase">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- GLOBAL SCALE (Infinite Marquee) --- */}
                <section className="global-scale-marquee border-y border-secondary border-opacity-10 bg-dark-v1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="marquee-wrap d-flex align-items-center gap-10">
                        {Array(6).fill(stack).flat().map((item, i) => (
                            <div key={i} className="marquee-item d-flex align-items-center gap-6" style={{ padding: '0 30px' }}>
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    style={{
                                        height: '50px',
                                        width: 'auto',
                                        objectFit: 'contain',
                                        filter: 'grayscale(0%)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="tech-logo"
                                />
                                <span className="dot theme-clr"></span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- INDUSTY SPECIALIZATION (Glass Cards) --- */}
                <section className="industry-deep position-relative" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="cyber-pattern-abs"></div>
                    <div className="container position-relative z-index-2">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5" data-aos="fade-right">
                                <div className="capsule-badge d-inline-flex align-items-center mb-6 rounded-pill py-2">
                                    <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">SPECIALIZATIONS</span>
                                </div>
                                <h2 className="display-4 white-clr fw-black mt-6 mb-10 leading-tight">Services Built for <br /> High-Growth Industries</h2>
                                <p className="white-clr opacity-50 fs-5 mb-0">Every industry has different challenges, goals, and growth paths. Our services are adapted to match your business model helping you scale efficiently, improve performance, and stay competitive in a rapidly evolving digital landscape.</p>
                            </div>
                            <div className="col-lg-7">
                                <div className="row g-5">
                                    {industries.map((ind, i) => (
                                        <div key={i} className="col-md-6" data-aos="fade-left" data-aos-delay={i * 150}>
                                            <div className="industry-card px-8 py-10 rounded-4 glass-card-massive border border-white border-opacity-5 hover-border-theme transition-all h-100">
                                                <i className={`fas ${ind.icon} theme-clr fs-1 mb-8 d-block`}></i>
                                                <h3 className="white-clr mb-4 fs-4 fw-bold">{ind.name}</h3>
                                                <p className="white-clr opacity-50 small mb-0">{ind.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- HOW WE WORK --- */}
                <section className="protocol-path bg-dark-v1" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="container">
                        <div className="section-head mb-20 text-center" data-aos="fade-up">
                            <div className="capsule-badge d-inline-flex align-items-center mb-6 rounded-pill py-2 px-5">
                                <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">Simple, Scalable Process</span>
                            </div>
                            <h2 className="display-2 white-clr fw-black mb-6">How We Work</h2>
                            <p className="white-clr opacity-50 fs-5 mx-auto leading-relaxed" style={{ maxWidth: '800px' }}>
                                Every project follows a clear process that aligns strategy, execution, and performance. This ensures faster delivery, better collaboration, and outcomes that are built to scale.
                            </p>
                        </div>
                        <div className="row g-0">
                            {[
                                { step: "01. Discover", title: "Understand your goals, users, and business challenges." },
                                { step: "02. Plan", title: "Define strategy, roadmap, and execution priorities." },
                                { step: "03. Build & Execute", title: "Design, develop, and launch with cross-functional execution." },
                                { step: "04. Optimize & Scale", title: "Improve performance through data, iteration, and automation." }
                            ].map((p, i) => (
                                <div key={i} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="path-node p-10 border-end border-secondary border-opacity-10 h-100 hover-bg-theme-opacity">
                                        <h4 className="white-clr mb-3">{p.step}</h4>
                                        <p className="white-clr opacity-50 small mb-0">{p.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CaseStudy1 />
                <Testimonial1 />
                <Faq1 />


                {/* --- FINAL PROTOCOL (The Call) --- */}
                <section className="final-protocol-cta d-flex align-items-center position-relative bg-black" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
                    <div className="massive-bg-text-cta" style={{ transform: `scale(${1 + scrollProgress})` }}></div>
                    <div className="container position-relative z-index-2 text-center">
                        <div className="cta-content-inner p-20" data-aos="zoom-out">
                            <div className="capsule-badge d-inline-flex align-items-center mb-8 rounded-pill py-2 px-5">
                                <span className="theme-clr fw-bold tracking-widest tiny text-uppercase border border-grey-100 rounded-pill py-1 px-3">READY TO INITIATE?</span>
                            </div>
                            <h2 className="display-1 white-clr fw-black mb-15 mt-2" style={{ lineHeight: '1.2' }}>Your Next High-Performance <br /> Asset Starts Here.</h2>
                            <div className="d-flex justify-content-center">
                                <Link
                                    href="/contact"
                                    className="cinematic-cta-btn"
                                    style={{
                                        border: "2px solid white",  // Sirf ek value width ke liye
                                        borderRadius: "100px",
                                        padding: "10px 10px",
                                        letterSpacing: "1px",
                                        width: "250px"
                                    }}
                                >
                                    <span className="white-clr fw-bold">CONNECT TO LAB</span>
                                    <span className="rot60 d-inline-block theme-clr ms-2">
                                        <i className="fas fa-arrow-up" />
                                    </span>
                                    <div className="btn-glow-pulse"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

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
                    
                    /* HERO V3 RELOADED */
                    .hero-v3-cinematic { overflow: hidden; }
                    .hero-v3-cinematic h1 span { font-size: inherit !important; }
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
                    .static-pulse { width: 10px; height: 10px; background: #e9fe49; border-radius: 50%; box-shadow: 0 0 20px #e9fe49; }
                    
                    .magnetic-btn-massive {
                        position: relative;
                        padding: 30px 70px;
                        background: #e9fe49;
                        color: #000;
                        font-weight: 950;
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        letter-spacing: 3px;
                        border-radius: 4px;
                        display: inline-block;
                        transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                    .magnetic-btn-massive:hover { transform: scale(1.05); }
                    .btn-glow {
                        position: absolute; inset: -10px;
                        background: radial-gradient(circle, rgba(233, 254, 73, 0.4), transparent 70%);
                        filter: blur(15px); opacity: 0; transition: 0.4s;
                    }
                    .magnetic-btn-massive:hover .btn-glow { opacity: 1; }


                    /* METRIC NEXUS */
                    .metric-box { transition: 0.5s; }
                    .metric-box:hover { border-color: rgba(233, 254, 73, 1) !important; background: rgba(233, 254, 73, 0.02); }

                    /* SHOWCASE EXTENDED */
                    .unit-visual { min-height: 500px; display: flex; align-items: center; justify-content: center; background: #0a0a0a; border: 1px solid rgba(255, 255, 255, 0.05); }
                    .unit-label-abs { position: absolute; top: -20px; right: -20px; font-size: 12rem; font-weight: 950; opacity: 0.05; -webkit-text-stroke: 1px #fff; color: transparent; }
                    .unit-overlay { position: absolute; inset: 0; background: linear-gradient(45deg, #000 0%, transparent 60%); opacity: 0.6; }
                    .transition-1s { transition: 1s cubic-bezier(0.19, 1, 0.22, 1); }
                    .showcase-unit:hover .transition-1s { transform: scale(1.1) rotate(1deg); }
                    .massive-tag { padding: 10px 20px; background: #0a0a0a; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 4px; color: #e9fe49; font-size: 12px; font-weight: 900; -webkit-letter-spacing: 2px; -moz-letter-spacing: 2px; -ms-letter-spacing: 2px; letter-spacing: 2px; }
                    .hover-line-btn { position: relative; padding-bottom: 2px; font-weight: 900; color: #e9fe49; text-transform: uppercase; letter-spacing: 2px; }
                    .outline-pill-btn {
                        border: 1px solid rgba(233, 254, 73, 0.3);
                        padding: 12px 30px;
                        border-radius: 100px;
                        display: inline-flex;
                        align-items: center;
                        transition: all 0.4s ease;
                        font-size: 0.8rem;
                    }
                    .outline-pill-btn:hover {
                        border-color: #e9fe49;
                        background: rgba(233, 254, 73, 0.05);
                        padding-left: 35px;
                        padding-right: 25px;
                    }
                    .hover-line-btn::after { display: none; }

                    /* GLOBAL MARQUEE */
                    .marquee-wrap { animation: marquee 30s linear infinite; white-space: nowrap; }
                    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                    .marquee-item .dot { width: 10px; height: 10px; border-radius: 50%; }

                    /* INDUSTRY GLASS */
                    .glass-card-massive { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(25px); transition: 0.5s; }
                    .glass-card-massive:hover { background: rgba(255, 255, 255, 0.05); transform: translateY(-10px); }
                    .hover-border-theme:hover { border-color: #e9fe49 !important; }

                    /* PROTOCOL PATH */
                    .path-node { transition: 0.5s; }
                    .hover-bg-theme-opacity:hover { background: rgba(233, 254, 73, 0.05); }

                    /* PRICING V3 */
                    .pricing-module { background: #0a0a0a; border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.5s; }
                    .module-focused { border: 2px solid #e9fe49 !important; transform: scale(1.05); box-shadow: 0 30px 100px rgba(0,0,0,0.8); }
                    .grain-texture { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.03; pointer-events: none; }
                    .hover-scale-up:hover { transform: scale(1.02); }

                    /* FINAL CTA */
                    .cinematic-cta-btn {
                        display: inline-flex; 
                        align-items: center; 
                        gap: 12px;
                        background: transparent;
                        border: 2px solid white !important;
                        border-radius: 100px !important;
                        text-decoration: none !important;
                        position: relative;
                        padding: 12px 30px;
                        transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                        overflow: visible;
                        z-index: 5;
                    }
                    .cinematic-cta-btn:hover {
                        background: rgba(233, 254, 73, 0.1);
                        box-shadow: 0 0 40px rgba(233, 254, 73, 0.3);
                    }
                    .rot60 { transform: rotate(45deg); transition: 0.3s; }
                    .cinematic-cta-btn:hover .rot60 { transform: rotate(45deg) translate(5px, -5px); }

                    .btn-glow-pulse {
                        position: absolute; 
                        inset: -10px;
                        background: radial-gradient(circle, rgba(233, 254, 73, 0.5), transparent 70%);
                        filter: blur(20px);
                        opacity: 0.8;
                        animation: pulse-glow 2s infinite;
                        z-index: -1;
                        pointer-events: none;
                        border-radius: 100px;
                    }
                    @keyframes pulse-glow {
                        0% { transform: scale(0.8); opacity: 0.4; }
                        50% { transform: scale(1.2); opacity: 0.9; }
                        100% { transform: scale(0.8); opacity: 0.4; }
                    }

                    .massive-bg-text-cta { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30vw; font-weight: 950; color: rgba(255, 255, 255, 0.01); -webkit-text-stroke: 1px rgba(255, 255, 255, 0.02); z-index: 1; pointer-events: none; transition: 0.1s; }
                    
                    /* NEW STYLES FOR PREMIUM LAYOUT */
                    .capsule-badge {
                        border: 1.5px solid rgba(255, 255, 255, 0.2);
                        background: rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(5px);
                    }
                    .floating-hero-img {
                        animation: floatHero 6s ease-in-out infinite;
                        filter: drop-shadow(0 0 30px rgba(233, 254, 73, 0.2));
                    }
                    @keyframes floatHero {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                    .hero-glow-back {
                        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        width: 120%; height: 120%;
                        background: radial-gradient(circle, rgba(233, 254, 73, 0.05) 0%, transparent 70%);
                        z-index: -1;
                    }
                    .service-tag-box {
                        transition: all 0.3s ease;
                        cursor: default;
                    }
                    .service-tag-box:hover {
                        border-color: rgba(233, 254, 73, 0.5) !important;
                        background: rgba(233, 254, 73, 0.05) !important;
                    }
                    .unit-visual-premium {
                        padding: 20px;
                    }
                    .shape-behind-image {
                        position: absolute;
                        top: 10%; right: -5%;
                        width: 300px; height: 300px;
                        background: #e9fe49;
                        border-radius: 50%;
                        opacity: 0.1;
                        filter: blur(80px);
                        z-index: -1;
                    }
                    .image-wrap {
                        height: 550px;
                        width: 100%;
                    }
                    .service-item-img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                    .unit-visual-premium:hover .service-item-img {
                        transform: scale(1.05);
                    }
                    .explore-depth-btn {
                        transition: all 0.3s ease;
                        border-bottom: 2px solid transparent;
                        padding-bottom: 4px;
                    }
                    .explore-depth-btn:hover {
                        border-bottom-color: #e9fe49;
                        padding-left: 5px;
                    }
                    .sub-capability-item {
                        transition: all 0.3s ease;
                        padding: 2px 0;
                    }
                    .sub-capability-item:hover {
                        padding-left: 8px;
                    }

                    /* THE FINAL HOVER FIX - Force yellow on all link states */
                    .massive-service-container a, 
                    .massive-service-container a span {
                        transition: all 0.3s ease !important;
                    }
                    .sub-capability-item { cursor: pointer; }
                    .massive-service-container a:hover,
                    .massive-service-container a:hover h3,
                    .massive-service-container a:hover span,
                    .sub-capability-item:hover .hover-target,
                    .sub-capability-item:hover a,
                    .sub-capability-item a:hover {
                        color: #e9fe49 !important;
                        opacity: 1 !important;
                        text-decoration: none !important;
                    }
                    
                    .sub-capability-item a, 
                    .sub-capability-item a:visited,
                    .sub-capability-item a:active {
                        color: #ffffff !important;
                        opacity: 0.75;
                        text-decoration: none !important;
                        transition: 0.3s;
                    }
                    
                    .sub-capability-item .dot {
                        transition: all 0.3s ease;
                        color: #e9fe49 !important;
                    }
                    .sub-capability-item:hover .dot {
                        transform: scale(1.3);
                        text-shadow: 0 0 10px rgba(233, 254, 73, 0.6);
                    }
                    .protocol-path h2 span {
                        font-size: inherit !important;
                        letter-spacing: inherit !important;
                    }
                    
                    @media (max-width: 991px) {
                        .display-1 { font-size: 3.5rem; }
                        .module-focused { transform: scale(1); }
                        .massive-parallax-text { display: none; }
                        .final-protocol-cta .display-1 { font-size: 3rem; }
                    .py-30, .py-20, .py-15 { padding: 100px 0 120px 0 !important; }
                `}</style>
            </div>
        </Layout>
    )
}