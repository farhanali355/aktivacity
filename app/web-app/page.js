'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import ShowcaseSlider from '@/components/elements/ShowcaseSlider'
import ChooseCarousel from '@/components/elements/ChooseCarousel'
import TestimonialCarousel from '@/components/elements/TestimonialCarousel'

export default function WebApp() {
    const [activeDeliv, setActiveDeliv] = useState(0)
    const [openFaq, setOpenFaq] = useState(null);
    const [modalOpen, setModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleAccordion = (index) => {
        setActiveDeliv(activeDeliv === index ? null : index)
    }

    const deliverables = [
        {
            title: "Custom Website Development",
            desc: "Your website is your most powerful sales tool — and we build it to perform. We craft fully responsive, visually compelling websites tailored to your brand identity and business goals. Every layout is strategically designed with conversion in mind, guiding visitors through a seamless journey that turns clicks into customers."
        },
        {
            title: "Web Application Developmentt",
            desc: "From complex enterprise platforms to lightweight SaaS tools, we engineer web applications built to scale with your business. Our team develops robust backend systems with clean architecture, ensuring speed, security, and reliability at every layer. We integrate third-party APIs and microservices seamlessly, so your application works as one connected, high-performing ecosystem."
        },
        {
            title: "E-Commerce Website Development",
            desc: "We build online stores that are designed to sell — not just look good. Whether you need a powerful Shopify store, a fully custom e-commerce solution, or a multi-vendor marketplace, we deliver it with precision. Our builds include secure payment gateway integrations, optimized product pages, and streamlined checkout flows that reduce cart abandonment and maximize revenue."
        },
        {
            title: "Mobile App Development",
            desc: "We bring your idea to life across every device with native iOS and Android app development built for performance and user delight. Our mobile development process covers everything from architecture planning and UI design to launch and post-deployment support. Whether you need a standalone app or a cross-platform solution, we deliver smooth, fast, and intuitive experiences that users keep coming back to."
        },
        {
            title: "UI/UX Design",
            desc: "Great design is more than aesthetics — it's the difference between a user who stays and one who leaves. We begin every project with deep user research, crafting wireframes and interactive prototypes that map the ideal digital experience. Through continuous usability testing and iterative improvements, we ensure every touchpoint is intuitive, engaging, and aligned with your business objectives."
        },
        {
            title: "CMS Development",
            desc: "We build content management systems that give your team full control without the technical headaches. From custom-built CMS platforms and WordPress development to modern headless architectures powered by tools like Contentful or Sanity, we tailor the solution to your workflow. Our CMS builds are fast, flexible, and scalable — making it easy to publish, update, and manage your content as your business grows."
        }
    ]

    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                <section className="services-hero-section d-flex align-items-center overflow-hidden">
                    {/* Animated Grid Background */}
                    <div className="premium-grid" />

                    <div className="container-fluid px-lg-5 position-relative z-1">
                        <div className="hero-main-box">
                            {/* Noise Texture Overlay */}
                            <div className="noise-texture" />

                            {/* Decorative Background Elements */}
                            <div className="box-blur-blob blob-1" />
                            <div className="box-blur-blob blob-2" />

                            <div className="container ps-lg-10">
                                <div className="row align-items-center g-xxl-10 g-5 position-relative z-1">
                                    <div className="col-lg-7">
                                        <div className="services-hero-content text-start">
                                            <div className="hero-badge mb-4 d-inline-block">
                                                <span className="text-uppercase fw-bold ls-2">Innovation & Growth</span>
                                            </div>
                                            <h1 className="black-clr mb-xxl-8 mb-xl-6 mb-5 display-3 fw-bold">
                                               Web Development Services in Karachi
                                            </h1>
                                            <h4 className="black-clr mb-xxl-6 mb-xl-5 mb-4 fw-medium opacity-75">
                                              Your Trusted Partner for Custom Websites & Web Applications That Drive Real Business Growth
                                            </h4>
                                            <p className="black-clr mb-xxl-10 mb-xl-8 mb-6 fs-5 opacity-75">
 Aktivacity is a Karachi-based web development agency helping businesses across Pakistan build powerful digital experiences. We specialize in custom websites, web applications, e-commerce stores, and mobile apps — combining modern technology with strategic design to drive user engagement, expand your digital presence, and deliver measurable business growth. Partner with us and get a digital solution built to perform.                                            </p>
                                            <div className="hero-cta-form">
                                                <form className="d-flex flex-sm-row flex-column gap-3">
                                                    <button type="submit" className="hero-box-btn py-3 px-xxl-10 px-6 fw-bold whitespace-nowrap">
                                                        Book a Free Consultation
                                                        <span className="rot60 d-inline-block ms-2">
                                                            <i className="fas fa-arrow-up" />
                                                        </span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="services-hero-thumb position-relative text-center">
                                            <img src="/assets/img/web-app/web-app-hero-image.png" alt="Web & App Development" className="img-fluid floating-img" />
                                            {/* Tech Tags */}
                                            <div className="tech-tag tag-react">React</div>
                                            <div className="tech-tag tag-node">Node.js</div>
                                            <div className="tech-tag tag-ios">iOS/Android</div>
                                            <div className="tech-tag tag-aws">AWS</div>

                                            {/* Glow Effect behind image */}
                                            <div className="img-glow-effect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .services-hero-section {
                            padding-top: 140px; /* Space for fixed navbar */
                            padding-bottom: 60px;
                            background: #000; /* Dark background behind the yellow box */
                        }
                        .hero-main-box { 
                            background: #e9fe49; 
                            border-radius: 40px; 
                            padding: 70px 0; 
                            box-shadow: 0 30px 100px rgba(233, 254, 73, 0.15); 
                            border: 1px solid rgba(0, 0, 0, 0.05);
                            margin: 0 auto;
                            width: 92%;
                            max-width: 1500px;
                            position: relative;
                            overflow: hidden;
                        }
                        .noise-texture {
                            position: absolute;
                            inset: 0;
                            background-image: url("https://grainy-gradients.vercel.app/noise.svg");
                            opacity: 0.1;
                            pointer-events: none;
                            z-index: 1;
                        }
                        .black-clr { color: #000 !important; }
                        .hero-badge {
                            background: rgba(0, 0, 0, 0.05);
                            padding: 8px 18px;
                            border-radius: 100px;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                        }
                        .hero-badge span {
                            font-size: 0.8rem;
                            letter-spacing: 2px;
                            color: #000;
                        }
                        .high-perf-tag {
                            font-size: inherit;
                            font-weight: inherit;
                            color: #000;
                            background: none;
                            border: none;
                            padding: 0;
                            margin-left: 0;
                            display: inline-block;
                        }
                        .hero-box-btn {
                            background: #000;
                            color: #fff;
                            border: none;
                            border-radius: 100px;
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            position: relative;
                            overflow: hidden;
                            z-index: 2;
                        }
                        .hero-box-btn:hover {
                            transform: translateY(-5px) scale(1.03);
                            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
                        }
                        .floating-img {
                            animation: float 6s ease-in-out infinite;
                            max-width: 100%;
                            height: auto;
                            position: relative;
                            z-index: 2;
                        }
                        .tech-tag {
                            position: absolute;
                            background: rgba(255, 255, 255, 0.95);
                            padding: 6px 14px;
                            border-radius: 10px;
                            font-size: 0.75rem;
                            font-weight: 700;
                            color: #000;
                            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                            z-index: 3;
                            animation: floatTag 4s ease-in-out infinite alternate;
                        }
                        .tag-react { top: 15%; left: -5%; }
                        .tag-node { top: 5%; right: 5%; }
                        .tag-ios { bottom: 25%; left: -10%; }
                        .tag-aws { bottom: 10%; right: 0%; }

                        @keyframes floatTag {
                            from { transform: translateY(0px) rotate(-2deg); }
                            to { transform: translateY(-12px) rotate(2deg); }
                        }
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-18px); }
                            100% { transform: translateY(0px); }
                        }
                        .img-glow-effect {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 100%;
                            height: 100%;
                            background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
                            filter: blur(50px);
                            z-index: 1;
                        }
                        .box-blur-blob {
                            position: absolute;
                            width: 300px;
                            height: 300px;
                            background: rgba(255, 255, 255, 0.3);
                            filter: blur(80px);
                            border-radius: 50%;
                            z-index: 0;
                        }
                        .blob-1 { top: -100px; right: -100px; }
                        .blob-2 { bottom: -100px; left: -100px; background: rgba(0,0,0,0.03); }
                        .ls-2 { letter-spacing: 2px; }
                        .rot60 { transform: rotate(45deg); }

                        @media (max-width: 1200px) {
                            .hero-main-box { width: 95%; padding: 60px 0; }
                            .tech-tag { padding: 4px 10px; font-size: 0.7rem; }
                        }
                        @media (max-width: 991px) {
                            .hero-main-box { 
                                width: 100%; 
                                border-radius: 30px; 
                                padding: 50px 20px;
                            }
                            .display-3 { font-size: 2.2rem; }
                            .hero-badge { margin-bottom: 15px; }
                            .floating-img { margin-top: 30px; }
                            .tech-tag { display: none; }
                            .services-hero-section { padding-top: 120px; }
                        }
                    `}</style>
                </section>

                <section className="brand-marquee-section pt-xxl-20 pb-xxl-30 pt-xl-15 pb-xl-20 pt-10 pb-15 ">
                    <div className="container mb-xxl-12 mb-10">
                        <div className="text-center">
                            <h6 className="white-clr text-uppercase fw-bold letter-spacing-2">Built With the Best Tools in the Industry</h6>
                        </div>
                    </div>

                    <div className="marquee-box mx-auto">
                        <div className="marquee-wrapper d-flex flex-column">
                            {/* Single row of brand logos */}
                            <div className="marquee-row marquee-right">
                                <div className="marquee-content">
                                    {[
                                        '/assets/img/web-app/flutter.png',
                                        '/assets/img/web-app/kotlin.png',
                                        '/assets/img/web-app/laravel.png',
                                        '/assets/img/web-app/nodejs.png',
                                        '/assets/img/web-app/python.png',
                                        '/assets/img/web-app/react-native.png',
                                        '/assets/img/web-app/shopify-logo.png',
                                        '/assets/img/web-app/swift.png',
                                        '/assets/img/web-app/webflow.png',
                                        '/assets/img/web-app/wordpress-logo.png'
                                    ].concat([
                                        '/assets/img/web-app/flutter.png',
                                        '/assets/img/web-app/kotlin.png',
                                        '/assets/img/web-app/laravel.png',
                                        '/assets/img/web-app/nodejs.png',
                                        '/assets/img/web-app/python.png',
                                        '/assets/img/web-app/react-native.png',
                                        '/assets/img/web-app/shopify-logo.png',
                                        '/assets/img/web-app/swift.png',
                                        '/assets/img/web-app/webflow.png',
                                        '/assets/img/web-app/wordpress-logo.png'
                                    ]).map((src, i) => (
                                        <div className="marquee-item" key={`r1-${i}`}>
                                            <img src={src} alt="Brand Logo" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .brand-marquee-section {
                            /* Section ke top aur bottom ka space equal */
                            padding-top: 60px !important;
                            padding-bottom: 60px !important;
                        }
                        .letter-spacing-2 { letter-spacing: 2px; }
                        .marquee-box {
                            max-width: 70%;
                            /* Heading aur icons ke beech + icons ke neeche equal spacing */
                            padding: 25px 0 25px;
                            overflow: hidden;
                            position: relative;
                        }
                        .marquee-box::before, .marquee-box::after 
                            content: "";
                            position: absolute;
                            top: 0;
                            width: 150px;
                            height: 100%;
                            z-index: 2;
                            pointer-events: none;
                        }
                        .marquee-box::before {
                            left: 0;
                            background: linear-gradient(to right, #030303 20%, transparent 100%);
                        }
                        .marquee-box::after {
                            right: 0;
                            background: linear-gradient(to left, #030303 20%, transparent 100%);
                        }
                        .marquee-wrapper {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        .marquee-row {
                            display: flex;
                            overflow: hidden;
                            width: 100%;
                            height: 90px;
                            position: relative;
                        }
                        .marquee-content {
                            display: flex;
                            width: max-content;
                            flex-shrink: 0;
                            height: 100%;
                            align-items: center;
                        }
                        .marquee-item {
                            flex: 0 0 auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 150px;
                            height: 60px;
                            padding: 0 40px; /* Spacing between items */
                        }
                        .marquee-item img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                            opacity: 1;
                            transition: all 0.4s ease;
                        }
                        .marquee-item img:hover {
                            opacity: 1;
                            transform: scale(1.1);
                        }
                        
                        .marquee-left .marquee-content {
                            animation: scrollLeft 60s linear infinite;
                        }
                        .marquee-right .marquee-content {
                            animation: scrollRight 60s linear infinite;
                        }
                        
                        .marquee-wrapper:hover .marquee-content {
                            animation-play-state: paused;
                        }

                        @keyframes scrollLeft {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes scrollRight {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }

                        @media (max-width: 1400px) {
                            .marquee-box { max-width: 85%; }
                        }

                        @media (max-width: 991px) {
                            .marquee-box { max-width: 95%; border-radius: 20px; padding: 40px 0; }
                            .marquee-row { height: 80px; }
                            .marquee-item { width: 100px; height: 40px; }
                            .marquee-content { gap: 40px; }
                            @keyframes scrollLeft {
                                from { transform: translateX(0); }
                                to { transform: translateX(calc(-100% - 60px)); }
                            }
                            @keyframes scrollRight {
                                from { transform: translateX(calc(-100% - 60px)); }
                                to { transform: translateX(0); }
                            }
                        }
                    `}</style>
                </section>
                <section className="why-section py-xxl-20 mt-10 py-15 bg-black-2 overflow-hidden">
                    <div className="container">
                        <div className="row g-xxl-15 g-xl-12 g-10 align-items-center mt-10">
                            {/* Left Column: Content + Cards */}
                            <div className="col-lg-6">
                                <div className="section-title text-start mb-xxl-12 mb-10">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                        The Problem We Solve
                                    </div>
                                    <h2 className="white-clr display-5 fw-bold mb-6">
                                      The Web & App Challenges We Solve
                                    </h2>
                                    {/* <p className="pra-clr fs-5 mb-0">
                                        Most businesses fail not because of their idea, but because their technology can't keep up with their growth.
                                    </p> */}
                                </div>

                                <div className="problem-cards-wrap d-flex flex-column gap-4">
                                    {/* Card 1 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-bolt-slash theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Outdated or Slow Websites</h5>
                                                <p className="pra-clr mb-0 small">
                                                    Poor performance drives 67% of users away within 3 seconds.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-user-minus theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Low Engagement & Conversions</h5>
                                                <p className="pra-clr mb-0 small">
                                                    Bad UI/UX design limits business growth and revenue.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-mobile-screen-button theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Lack of Mobile Optimization</h5>
                                                <p className="pra-clr mb-0 small">
                                                    58% of traffic abandons non-responsive platforms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-layer-group theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Scalability Issues</h5>
                                                <p className="pra-clr mb-0 small">
                                                    Web systems fail as traffic increases without proper architecture.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: High-Impact Image */}
                            <div className="col-lg-6">
                                <div className="why-image-wrapper position-relative">
                                    <div className="image-hover-effect rounded-4 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                                            alt="Professional Tech Consultation"
                                            className="img-fluid w-100 h-100 object-fit-cover"
                                        />
                                        <div className="image-overlay-glow" />
                                    </div>
                                    {/* Decorative Elements */}
                                    {/* Decorative Elements removed as per user request */}
                                    <div className="experience-badge position-absolute bottom-0 start-0 mb-n5 ms-n5 p-xxl-5 p-4 bg-theme rounded-4 d-none d-md-block shadow-lg">
                                        <h3 className="black-clr fw-bold mb-0 text-nowrap fs-4">No Website, No Business Growth</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .why-section {
                            background: #050505;
                            position: relative;
                            /* Top padding aur thora kam kiya */
                            padding-top: 30px !important;
                        }
                        .problem-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            transition: all 0.4s ease;
                            /* Removed min-height to fix excessive bottom spacing */
                        }
                        .problem-card:hover, .problem-card.active {
                            background: rgba(255, 255, 255, 0.05);
                            border-color: rgba(233, 254, 73, 0.2);
                            transform: translateX(10px);
                        }
                        .bg-theme { background-color: #e9fe49; }
                        .black-clr { color: #000; }
                        .why-image-wrapper {
                            padding: 0;
                        }
                        .image-hover-effect {
                            height: 600px;
                            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                            border: 1px solid rgba(255,255,255,0.1);
                        }
                        .image-hover-effect img {
                            transition: transform 0.8s ease;
                        }
                        .why-image-wrapper:hover .image-hover-effect img {
                            transform: scale(1.05);
                        }
                        .image-overlay-glow {
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(45deg, rgba(233, 254, 73, 0.1), transparent);
                            pointer-events: none;
                        }
                        .decor-box {
                            width: 100px;
                            height: 100px;
                            border: 2px solid #e9fe49;
                            border-radius: 20px;
                            opacity: 0.2;
                            animation: rotate 10s linear infinite;
                        }
                        @keyframes rotate {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        .italic { font-style: italic; }
                        .bg-black-2 { background-color: #080808; }

                        @media (max-width: 991px) {
                            .image-hover-effect { height: 400px; margin-top: 50px; }
                            .problem-card:hover, .problem-card.active { transform: translateY(-5px); }
                        }
                    `}</style>
                </section>
                <section className="deliverables-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    {/* Grid Background */}
                    <div className="grid-overlay" />

                    <div className="container position-relative z-1 mt-20">
                        <div className="row g-xxl-15 g-xl-12 g-10">
                            {/* Left Column: Heading */}
                            <div className="col-lg-5">
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                    Our Expertise
                                </div>
                                <h2 className="white-clr display-4 fw-bold mb-6 lh-sm">
Our Web & App Development Services                                </h2>
                                <div className="divider-line w-25 bg-theme mb-6" style={{ height: '4px' }} />
                                <p className="pra-clr fs-5">
                                    We don't just build products; we deliver competitive advantages. Every line of code is an investment in your market dominance.
                                </p>
                            </div>

                            {/* Right Column: Interactive List */}
                            <div className="col-lg-7">
                                <div className="deliverables-list">
                                    {deliverables.map((item, index) => (
                                        <div key={index}
                                            className={`deliverable-item py-xxl-6 py-5 border-bottom border-secondary border-opacity-25 transition-all ${activeDeliv === index ? 'active' : ''}`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div className="d-flex justify-content-between align-items-center mb-0 item-header">
                                                <h4 className={`white-clr mb-0 fw-medium transition-all ${activeDeliv === index ? 'theme-clr' : ''}`}>{item.title}</h4>
                                                <div className={`item-arrow transition-all ${activeDeliv === index ? 'rotate-icon' : ''}`}>
                                                    <i className="fas fa-arrow-right theme-clr fs-4" />
                                                </div>
                                            </div>
                                            <div className={`deliverable-body overflow-hidden transition-all ${activeDeliv === index ? 'show' : ''}`}>
                                                <p className="pra-clr fs-6 mt-4 mb-2 pe-xxl-15 pe-lg-10">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .deliverables-section {
                            background-color: #030303;
                            min-height: 80vh;
                            display: flex;
                            align-items: center;
                        }
                        .grid-overlay {
                            position: absolute;
                            inset: 0;
                            background-image: 
                                linear-gradient(rgba(233, 254, 73, 0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(233, 254, 73, 0.03) 1px, transparent 1px);
                            background-size: 50px 50px;
                            pointer-events: none;
                        }
                        .deliverable-item {
                            cursor: pointer;
                        }
                        .deliverable-item.active {
                            padding-left: 20px !important;
                            border-bottom-color: rgba(233, 254, 73, 0.5) !important;
                            background: linear-gradient(90deg, rgba(233, 254, 73, 0.05), transparent);
                        }
                        .deliverable-body {
                            max-height: 0;
                            opacity: 0;
                            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                        .deliverable-body.show {
                            max-height: 200px;
                            opacity: 1;
                        }
                        .rotate-icon {
                            transform: rotate(-45deg);
                        }
                        .item-arrow {
                            transition: all 0.4s ease;
                        }
                        .item-header h4 {
                            transition: all 0.4s ease;
                        }
                        .bg-theme { background-color: #e9fe49; }
                        .italic { font-style: italic; }
                        
                        @media (max-width: 991px) {
                            .grid-overlay { background-size: 30px 30px; }
                            .deliverable-body.show { max-height: 300px; }
                        }
                    `}</style>
                </section>
                <section className="cta-banner-section py-xxl-15 py-12 bg-black overflow-hidden ">
                    <div className="container mt-10">
                        <div className="cta-capsule-wrapper position-relative p-xxl-6 p-xl-5 p-lg-4 p-4 rounded-pill d-flex align-items-center justify-content-between flex-wrap gap-4">
                            {/* Animated Background Dots */}
                            <div className="cta-particles" />

                            <div className="d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3 z-1">
                                <div className="cta-logo-wrap bg-transparent d-flex align-items-center justify-content-center">
                                    <img src="/assets/img/element/download.png" alt="Aktiva Logo" style={{ width: '85px', height: '85px', objectFit: 'contain' }} />
                                </div>
                                <h3 className="white-clr mb-0 fs-5 fw-medium text-center text-sm-start">
Ready to Build a High-Performing Digital Platform?                                  </h3>
                            </div>

                            <Link href="/contact" className="cta-btn radius100 py-2 px-xxl-8 px-5 border border-theme bg-transparent white-clr fw-bold text-uppercase z-1 d-flex align-items-center gap-3 fs-6">
Get a Free Strategy Call
                                <span className="rot60 d-inline-block transition-all">
                                    <i className="fas fa-arrow-up theme-clr" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <style jsx>{`
                        .cta-banner-section {
                            padding-top: 40px !important;
                            padding-bottom: 40px !important;
                        }

                        .cta-capsule-wrapper {
                            background: rgba(10, 10, 10, 0.8);
                            border: 1px solid rgba(233, 254, 73, 0.2);
                            box-shadow: 0 0 40px rgba(233, 254, 73, 0.03);
                            overflow: hidden;
                            backdrop-filter: blur(10px);
                        }
                        .cta-particles {
                            position: absolute;
                            inset: 0;
                            background-image: 
                                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 1px),
                                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 1px, transparent 1px),
                                radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px);
                            background-size: 100px 100px;
                            animation: floatParticles 30s linear infinite;
                        }
                        @keyframes floatParticles {
                            from { background-position: 0 0; }
                            to { background-position: 100px 100px; }
                        }
                        .border-theme { border-color: #e9fe49 !important; }
                        .cta-btn {
                            text-decoration: none;
                            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                        .cta-btn :global(.theme-clr) {
                            transition: color 0.4s ease;
                        }
                        .cta-btn:hover {
                            background-color: #e9fe49 !important;
                            color: #000 !important;
                            transform: translateY(-2px);
                        }
                        .cta-btn:hover :global(.theme-clr) {
                            color: #000 !important;
                        }
                        .cta-logo-wrap {
                            width: 60px;
                            height: 60px;
                        }
                        .italic { font-style: italic; }
                        .rot60 { transform: rotate(45deg); transition: transform 0.4s ease; }
                        .cta-btn:hover .rot60 { transform: rotate(45deg) translateX(5px); }
                        
                        @media (max-width: 991px) {
                            .cta-capsule-wrapper { 
                                border-radius: 30px !important; 
                                text-align: center;
                                justify-content: center;
                                padding: 25px 20px !important;
                            }
                            .cta-logo-wrap { width: 50px; height: 50px; }
                        }
                    `}</style>
                </section>
                <section className="process-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="grid-overlay" />
                    <div className="container position-relative z-1 mt-10">
                        <div className="row g-4 align-items-stretch">
                            {/* Heading Item */}
                            <div className="col-lg-4 mb-4">
                                <div className="section-title h-100 d-flex flex-column justify-content-center pe-lg-15">
                                    <div className="d-flex align-items-center gap-3 mb-5">
                                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-0">
                                            Our Process
                                        </div>
                                    </div>
                                    <h2 className="white-clr display-3 fw-bold mb-8 lh-1" style={{fontSize:"37px"}}>
                                        Our Streamlined Development Process
                                    </h2>
                                    <p className="pra-clr fs-6 lh-base opacity-75" >
This structured approach eliminates bottlenecks, accelerates launch timelines, and guarantees scalable solutions that evolve with your Karachi business needs.                                    </p>
                                </div>
                            </div>

                            {/* Steps */}
                            {[
                                {
                                    step: "01",
                                    title: "Requirements Analysis",
                                    points: ["We conduct thorough business goals and user needs analysis tailored specifically for the Karachi market."]
                                },
                                {
                                    step: "02",
                                    title: "UI/UX Prototyping",
                                    points: ["We create conversion-focused designs with mobile-first wireframes for optimal user engagement."]
                                },
                                {
                                    step: "03",
                                    title: "Agile Development",
                                    points: ["We build web applications and cross-platform mobile apps using proven agile methodologies."]
                                },
                                {
                                    step: "04",
                                    title: "Testing & Quality Assurance",
                                    points: ["We perform comprehensive performance testing and ensure device compatibility across platforms."]
                                },
                                {
                                    step: "05",
                                    title: "Deployment & Maintenance",
                                    points: ["We handle secure cloud deployment with ongoing optimization and maintenance support."]
                                }
                            ].map((item, index) => (
                                <div key={index} className="col-lg-4 mb-4">
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
                                                    <span className="pra-clr fs-xs">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
                        .process-section {
                            background-color: #030303;
                            padding-top: 100px;
                            padding-bottom: 100px;
                        }
                        .process-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            border-radius: 24px;
                            transition: all 0.4s ease;
                        }
                        .process-card:hover {
                            background: rgba(233, 254, 73, 0.02);
                            border-color: rgba(233, 254, 73, 0.3);
                            transform: translateY(-10px);
                            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                        }
                        .step-num {
                            font-family: 'Montserrat', sans-serif;
                            letter-spacing: -1px;
                        }
                        .fs-xs { font-size: 0.85rem; }
                        .ls-2 { letter-spacing: 2px; }
                        .bg-theme { background-color: #e9fe49; }
                        .section-pill {
                            display: inline-block;
                            padding: 8px 22px;
                            border-radius: 40px;
                            border: 1px solid rgba(233,254,73,0.45);
                            color: #e9fe49;
                            background: transparent;
                            font-weight: 700;
                            letter-spacing: 2px;
                        }
                        @media (max-width: 991px) {
                            .section-pill { padding: 6px 16px; font-size: 0.75rem; }
                        }
                        .grid-overlay {
                            position: absolute;
                            inset: 0;
                            background-image: 
                                linear-gradient(rgba(233, 254, 73, 0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(233, 254, 73, 0.03) 1px, transparent 1px);
                            background-size: 50px 50px;
                            pointer-events: none;
                        }
                        
                        @media (max-width: 991px) {
                            .process-card { min-width: 100%; }
                            .grid-overlay { background-size: 30px 30px; }
                        }
                    `}</style>
                </section>
                <section className="portfolio-spotlight-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="container mt-20">
                        <div className="text-center mb-xxl-15 mb-xl-12 mb-10">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                Case Studies
                            </div>
                            <h2 className="white-clr display-4 fw-bold mb-0 text-uppercase ls-2">
                                Real <span className="theme-clr" style={{ fontSize: 'inherit' }}>Digital Results</span>
                            </h2>
                        </div>

                        <ShowcaseSlider />
                    </div>

                    <style jsx>{`
                        .portfolio-spotlight-section {
                            background-color: #030303;
                        }
                        .spotlight-card {
                            background: rgba(255, 255, 255, 0.03);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-radius: 60px;
                            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
                        }
                        .bg-white-opacity {
                            background: rgba(255, 255, 255, 0.01);
                        }
                        .category-tag {
                            font-family: 'Montserrat', sans-serif;
                        }
                        .theme-bg { background-color: #e9fe49; }
                        .overlay-gradient {
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(90deg, #030303 0%, transparent 20%);
                        }
                        .italic { font-style: italic; }
                        
                        @media (max-width: 991px) {
                            .spotlight-card { 
                                border-radius: 30px; 
                                margin: 0 10px;
                            }
                            .overlay-gradient {
                                background: linear-gradient(0deg, #030303 0%, transparent 40%);
                            }
                            .min-vh-50 { min-height: 400px; }
                        }
                    `}</style>
                </section>
                <section className="why-choose-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="grid-overlay" />
                    <div className="container position-relative z-1 mt-20">
                        <div className="text-center mb-xxl-15 mb-xl-12 mb-10">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                Our Edge
                            </div>
                            <h2 className="white-clr display-4 fw-bold mb-0">
                                Why Choose Aktivacity
                            </h2>
                        </div>

                        <ChooseCarousel />
                    </div>

                    <style jsx>{`
                        .why-choose-section {
                            background-color: #030303;
                        }
                        .choose-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            border-radius: 32px;
                            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                            padding-bottom: 80px !important;
                        }
                        .choose-card:hover {
                            background: rgba(233, 254, 73, 0.03);
                            border-color: rgba(233, 254, 73, 0.3);
                            transform: translateY(-8px);
                        }
                        .plus-btn {
                            width: 32px;
                            height: 32px;
                            transition: all 0.4s ease;
                        }
                        .choose-card:hover .plus-btn {
                            background-color: #e9fe49;
                            transform: rotate(90deg);
                        }
                        .fs-xs { font-size: 0.9rem; }
                        @media (max-width: 991px) {
                            .choose-card { border-radius: 24px; }
                        }
                    `}</style>
                </section>
                <section className="testimonials-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="container mt-20">
                        <div className="row align-items-center mb-xxl-15 mb-xl-12 mb-10">
                            <div className="col-lg-12">
                                <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-6">
                                    <div className="review-badge d-inline-flex align-items-center gap-3 py-2 px-4 border border-white-opacity rounded-pill">
                                        <div className="stars d-flex gap-1">
                                            {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star theme-clr fs-xs" />)}
                                        </div>
                                        <div className="line bg-white-opacity" style={{ width: '1px', height: '15px' }} />
                                        <span className="white-clr fs-xs fw-bold ls-1 text-uppercase">100+ Reviews</span>
                                    </div>
                                    <h2 className="white-clr display-5 fw-bold mb-0 text-lg-end lh-sm max-w-700">
What Our Clients Say                                    </h2>
                                </div>
                            </div>
                        </div>
                        <TestimonialCarousel />
                    </div>

                    <style jsx>{`
                        .testimonials-section {
                            background-color: #030303;
                        }
                        .border-white-opacity { border-color: rgba(255, 255, 255, 0.1) !important; }
                        .bg-white-opacity { background: rgba(255, 255, 255, 0.05); }
                        .bg-white-opacity-hover:hover { background: rgba(255, 255, 255, 0.1); }
                        
                        .max-w-700 { max-width: 700px; }
                        
                        .testimonial-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            border-radius: 40px;
                            transition: all 0.4s ease;
                        }
                        .testimonial-card:hover {
                            background: rgba(255, 255, 255, 0.03);
                            border-color: rgba(233, 254, 73, 0.3);
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

                        @media (max-width: 991px) {
                            .testimonial-card { border-radius: 30px; }
                            .max-w-700 { max-width: 100%; }
                        }
                    `}</style>
                </section>
                <section className="faq-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="container mt-20">
                        <div className="row g-xxl-15 g-xl-12 g-10">
                            {/* Left: Connect Card */}
                            <div className="col-lg-4">
                                <div className="connect-card p-xxl-10 p-xl-8 p-6 position-relative overflow-hidden">
                                    <div className="d-flex align-items-center gap-4 mb-8">
                                        <div className="profile-img-wrap">
                                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Expert" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="profile-info">
                                            <h4 className="white-clr mb-1 fw-bold">Zain Ahmed</h4>
                                            <p className="theme-clr fs-xs mb-0 fw-medium">Founder @ Aktivacity</p>
                                        </div>
                                    </div>
                                    <p className="pra-clr fs-5 mb-10 lh-base opacity-75">
                                        “Have more questions or just curious about future possibilities? Feel free to connect with me on LinkedIn.”
                                    </p>
                                    <a href="#" className="linkedin-btn py-3 px-6 rounded-pill bg-white d-flex align-items-center justify-content-between transition-all">
                                        <span className="black-clr fw-bold text-uppercase ls-1 fs-xs">Connect on LinkedIn</span>
                                        <div className="icon-circle bg-theme rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', backgroundColor: '#0077B5' }}>
                                            <i className="fab fa-linkedin-in white-clr fs-xs" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Right: FAQ Accordion */}
                            <div className="col-lg-8">
                                <h2 className="white-clr display-3 fw-bold mb-12">Web & App Development FAQs</h2>

                                <div className="faq-wrapper d-flex flex-column gap-6">
                                    {[
                                        {
                                            q: "How long does web development take in Pakistan?",
                                            a: "The timeline for web development depends on the complexity and scope of your project. A simple business or portfolio website typically takes 4 to 6 weeks from design to launch. Custom web applications and SaaS platforms require 3 to 6 months, covering architecture, development, testing, and deployment. Mobile app development — both iOS and Android — generally takes 12 to 20 weeks. At our Karachi-based agency, we share a clear project timeline before work begins so you always know exactly where your project stands."
                                        },
                                        {
                                            q: "Do you build mobile-friendly websites in Pakistan?",
                                            a: "Yes — every website we develop is fully mobile-friendly by default. We follow a mobile-first development approach, meaning your site is designed and optimized for smartphones before scaling up to desktop. All our builds include responsive web design that adapts seamlessly across all screen sizes and devices. We also integrate Progressive Web App (PWA) capabilities, allowing your website to function like a native app — fast, offline-capable, and installable — giving Pakistani users the best possible experience on any device."
                                        },
                                        {
                                            q: "Do you offer web development services across Pakistan?",
                                            a: "Yes — while our headquarters is based in Karachi, we actively serve clients across all major cities including Lahore, Islamabad, and Faisalabad. Our remote delivery model means geography is never a barrier — we work with businesses from every corner of Pakistan through streamlined digital collaboration, regular video calls, and project management tools that keep communication clear and efficient. Whether you're a startup in Islamabad or an enterprise in Lahore, we deliver the same quality of service."
                                        },
                                        {
                                            q: "Can you develop custom web applications for my business?",
                                            a: "Absolutely. We specialize in building fully custom web applications tailored to your specific business processes and goals. Our team develops scalable backend systems using modern frameworks, with clean code architecture built to handle growth. We handle complex third-party API integrations — payment gateways, CRMs, ERPs, and more — to make your application work as one connected platform. All our web applications are deployed on cloud infrastructure, ensuring high availability, security, and performance for businesses operating in Pakistan and beyond."
                                        },
                                        {
                                            q: "Do you provide ongoing support after website launch?",
                                            a: "Yes — our relationship doesn't end at launch. We offer comprehensive monthly maintenance packages that include regular security updates, bug fixes, and software upgrades to keep your website protected and up to date. Our team also provides continuous performance monitoring, ensuring fast load times and a smooth user experience at all times. Whether you need minor content updates or major feature additions down the road, our support plans are flexible and designed to grow with your business needs."
                                        },
                                        {
                                            q: "How much does web development cost in Pakistan?",
                                            a: "Web development costs in Pakistan vary based on project type and complexity. A basic business website typically ranges from PKR 50,000 to PKR 150,000. A custom web application or e-commerce store can range from PKR 200,000 to PKR 800,000 or more, depending on features and integrations. Mobile app development is generally priced between PKR 300,000 and PKR 1,500,000 for a fully custom native app. We provide detailed proposals with transparent pricing after understanding your specific requirements — no hidden charges, no surprises."
                                        },
                                        {
                                            q: "Which is the best web development company in Karachi, Pakistan?",
                                            a: "The best web development company for your business is one that combines technical expertise, industry experience, and a deep understanding of the Pakistani market. Our Karachi-based agency offers end-to-end web and app development services — from custom website design and e-commerce development to mobile apps and CMS solutions. We have delivered projects for businesses across retail, real estate, healthcare, and e-commerce sectors throughout Pakistan, with a proven track record of on-time delivery and measurable results."
                                        },
                                        {
                                            q: "Should I choose WordPress or a custom website for my business in Pakistan?",
                                            a: "Both are valid options — the right choice depends on your business needs and budget. WordPress is ideal for blogs, small business websites, and content-heavy platforms. It is cost-effective, easy to manage, and has a large ecosystem of plugins. A custom-built website is the better choice when you need unique functionality, complex integrations, high performance, or a scalable web application that WordPress cannot accommodate. For most small to medium businesses in Pakistan, we recommend starting with WordPress and migrating to a custom solution as your business grows."
                                        },
                                        {
                                            q: "What is the difference between a website and a web application?",
                                            a: "A website is primarily informational — it presents your brand, services, and content to visitors, like a digital brochure or blog. A web application is interactive and functional — it allows users to log in, manage data, process transactions, and perform complex tasks, like an online store, booking system, or project management tool. In Pakistan, many growing businesses start with a website and later invest in a custom web application as their operations scale. Our team develops both, and we help you determine which solution best fits your current and future business needs."
                                        },
                                        {
                                            q: "Do I need a mobile app or is a website enough for my business in Pakistan?",
                                            a: "For most Pakistani businesses, a well-optimized, mobile-first website is the strongest starting point. It covers the majority of your audience across all devices without the added cost of app development. However, a dedicated mobile app becomes valuable when you need push notifications, offline functionality, loyalty programs, or a highly personalized user experience — common in e-commerce, food delivery, health, and fintech sectors. The best approach depends on your audience behavior, business model, and growth stage. We consult with you to recommend the right solution — whether that's a PWA, a native app, or both."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="faq-item">
                                            <div
                                                className="faq-header py-6 d-flex align-items-center justify-content-between cursor-pointer border-bottom border-white-opacity transition-all hover-theme"
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            >
                                                <h4 className="white-clr mb-0 fw-bold fs-5">{item.q}</h4>
                                                <div className={`plus-icon transition-all ${openFaq === index ? 'rotate-45 theme-clr' : 'white-clr'}`}>
                                                    <i className="fas fa-plus" />
                                                </div>
                                            </div>
                                            <div className={`faq-body transition-all overflow-hidden ${openFaq === index ? 'max-h-500 py-6' : 'max-h-0'}`}>
                                                <p className="pra-clr fs-6 mb-0 lh-lg opacity-75">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .faq-section {
                            background-color: #030303;
                        }
                        .connect-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid #e9fe49;
                            border-radius: 40px;
                            border-top-right-radius: 100px;
                        }
                        .linkedin-btn:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                        }
                        .border-white-opacity { border-color: rgba(255, 255, 255, 0.1) !important; }
                        .hover-theme:hover .white-clr { color: #e9fe49 !important; }
                        
                        .faq-body {
                            transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s ease;
                        }
                        .max-h-0 { max-height: 0; }
                        .max-h-500 { max-height: 500px; }
                        .rotate-45 { transform: rotate(45deg); }
                        .rotate-45 i { color: #e9fe49; }
                        
                        .cursor-pointer { cursor: pointer; }
                        .bg-theme { background-color: #e9fe49; }
                        
                        @media (max-width: 991px) {
                            .display-3 { font-size: 3rem; }
                            .connect-card { margin-bottom: 50px; }
                            .white-clr.fs-5 { font-size: 1.1rem !important; }
                        }
                    `}</style>
                </section>
                <section className="final-conversion-section py-xxl-25 py-20 bg-black position-relative overflow-hidden">
                    {/* Atmospheric Glow */}
                    <div className="atmospheric-glow" />

                    <div className="container position-relative z-1">
                        {/* THE CARD */}
                        <div className="conversion-card mx-auto p-xxl-15 p-xl-12 p-8 text-center">
                            <h2 className="display-2 fw-black black-clr mb-8">Let's Build Your Digital Platform</h2>
                            <p className="black-clr fs-4 opacity-75 mb-12 max-w-700 mx-auto">
Stop losing customers to slow, outdated websites. Web development agency in Karachi delivers high-performance web development services in Karachi that convert visitors into revenue.                            </p>

                            <button onClick={() => setModalOpen(true)} className="book-call-btn d-inline-flex align-items-center gap-4 py-4 px-10 rounded-pill bg-theme text-black fw-bold text-uppercase ls-2">
                                BOOK A CALL
                                <div className="calendar-icon-wrap d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                                    <i className="far fa-calendar-alt" style={{ color: '#000' }} />
                                </div>
                            </button>
                        </div>

                        {/* SOCIAL PROOF LOGOS */}
                        <div className="social-proof-wrap mt-20">
                            <p className="text-center text-uppercase fw-bold mb-10" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', letterSpacing: '3px' }}>
                                Verified &amp; Listed On Leading Platforms
                            </p>
                            <div className="row g-10 justify-content-center align-items-center">
                                {[
                                    { label: "Clutch", icon: "/assets/img/icons/clutch-icon.png" },
                                    { label: "Upwork", icon: "/assets/img/icons/upwork-icon.png" },
                                    { label: "Trustpilot", icon: "/assets/img/icons/trustpilot.png" },
                                    { label: "Google", icon: "/assets/img/icons/google-ads.png" }
                                ].map((badge, idx) => (
                                    <div key={idx} className="col-lg-3 col-md-6 text-center badge-item">
                                        <div className="badge-icon-box opacity-50 grayscale-filter d-flex align-items-center justify-content-center" style={{ height: '60px' }}>
                                            <img src={badge.icon} alt={badge.label} style={{ height: '40px', width: 'auto', maxWidth: '150px' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .final-conversion-section {
                            background: radial-gradient(circle at top, rgba(233, 254, 73, 0.15) 0%, #030303 70%);
                        }
                        .atmospheric-glow {
                            position: absolute;
                            top: 0; left: 50%;
                            transform: translateX(-50%);
                            width: 100%; height: 100%;
                            background: radial-gradient(ellipse at center, rgba(233, 254, 73, 0.1) 0%, transparent 60%);
                            z-index: 0;
                            pointer-events: none;
                        }
                        .conversion-card {
                            background: #fff;
                            width: 100%;
                            max-width: 1100px;
                            border-radius: 40px;
                            position: relative;
                            z-index: 1;
                            box-shadow: 0 50px 100px rgba(0,0,0,0.4);
                        }
                        .black-clr { color: #000 !important; }
                        .bg-theme { background-color: #e9fe49; }
                        .book-call-btn {
                            background-color: #e9fe49;
                            color: #000 !important;
                            border: none;
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            box-shadow: 0 15px 30px rgba(233, 254, 73, 0.3);
                        }
                        .book-call-btn:hover {
                            transform: translateY(-8px) scale(1.05);
                            box-shadow: 0 20px 40px rgba(233, 254, 73, 0.5);
                        }
                        .max-w-700 { max-width: 700px; }
                        .ls-2 { letter-spacing: 2px; }
                        
                        .badge-item { padding: 20px; }
                        .badge-icon-box { transition: 0.4s; }
                        .badge-item:hover .badge-icon-box { opacity: 1; filter: grayscale(0); }
                        .fs-xxs { font-size: 0.65rem; }
                        .fs-xs { font-size: 0.85rem; }
                        .ls-1 { letter-spacing: 1px; }

                        @media (max-width: 991px) {
                            .conversion-card { border-radius: 30px; padding: 40px 20px !important; }
                            .display-2 { font-size: 2.5rem; }
                            .social-proof-wrap { margin-top: 60px; }
                        }
                    `}</style>
                </section>

                {/* STICKY CTA */}
                <div className={`sticky-cta-wrap transition-all ${scrolled ? 'visible' : ''}`}>
                    <button onClick={() => setModalOpen(true)} className="sticky-cta-btn d-flex align-items-center gap-3 py-3 px-6 rounded-pill bg-theme shadow-lg">
                        <span className="black-clr fw-black text-uppercase ls-1 small">Start Project</span>
                        <div className="icon-pulse">
                            <i className="fas fa-comment-alt black-clr" />
                        </div>
                    </button>

                    <style jsx>{`
                        .sticky-cta-wrap {
                            position: fixed;
                            bottom: 40px;
                            right: 40px;
                            z-index: 9999;
                            opacity: 0;
                            transform: translateY(20px);
                            pointer-events: none;
                            transition: all 0.4s ease;
                        }
                        .sticky-cta-wrap.visible {
                            opacity: 1;
                            transform: translateY(0);
                            pointer-events: auto;
                        }
                        .sticky-cta-btn {
                            border: none;
                            transition: all 0.4s ease;
                        }
                        .sticky-cta-btn:hover {
                            transform: scale(1.1) translateY(-5px);
                            box-shadow: 0 20px 40px rgba(233, 254, 73, 0.3);
                        }
                        .icon-pulse {
                            animation: pulse-icon 2s infinite;
                        }
                        @keyframes pulse-icon {
                            0% { transform: scale(1); }
                            50% { transform: scale(1.2); }
                            100% { transform: scale(1); }
                        }
                        @media (max-width: 575px) {
                            .cta-banner-section {
                                padding-top: 20px !important;
                                padding-bottom: 20px !important;
                            }

                            .cta-capsule-wrapper { 
                                border-radius: 30px !important; 
                                text-align: center;
                                justify-content: center;
                                padding: 18px 20px !important;
                            }
                        }
                    `}</style></div>
                {modalOpen && (
                    <div className="custom-modal-overlay d-flex align-items-center justify-content-center p-4">
                        <div className="modal-content-box bg-white rounded-5 p-xxl-12 p-8 position-relative overflow-hidden">
                            <button onClick={() => setModalOpen(false)} className="close-modal-btn position-absolute top-0 end-0 m-6 border-0 bg-transparent">
                                <i className="fas fa-times fs-4 opacity-50 grey-clr" />
                            </button>

                            <div className="text-center mb-10">
                                <h3 className="black-clr fw-black mb-2">Kickstart Your Vision</h3>
                                <p className="black-clr opacity-50 small">Fill in the details below and we'll be in touch within 24 hours.</p>
                            </div>

                            <form className="row g-4 d-flex flex-column align-items-center">
                                <div className="col-12">
                                    <input type="text" className="modal-input w-100 p-4 border rounded-3" placeholder="Your Name" />
                                </div>
                                <div className="col-12">
                                    <input type="email" className="modal-input w-100 p-4 border rounded-3" placeholder="Email Address" />
                                </div>
                                <div className="col-12">
                                    <textarea className="modal-input w-100 p-4 border rounded-3" rows="4" placeholder="Briefly describe your project"></textarea>
                                </div>
                                <div className="col-12 mt-6">
                                    <button onClick={(e) => { e.preventDefault(); setModalOpen(false); alert('Inquiry sent! (Demo)'); }} className="w-100 py-4 bg-theme black-clr fw-bold rounded-pill border-0 transition-all font-uppercase ls-1">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>

                        <style jsx>{`
                            .custom-modal-overlay {
                                position: fixed;
                                inset: 0;
                                background: rgba(0,0,0,0.9);
                                backdrop-filter: blur(10px);
                                z-index: 10000;
                            }
                            .modal-content-box {
                                width: 100%;
                                max-width: 550px;
                                box-shadow: 0 40px 100px rgba(0,0,0,0.5);
                            }
                            .modal-input {
                                background: #f8f8f8;
                                color: #000;
                                font-size: 0.95rem;
                                border: 1px solid rgba(0,0,0,0.05) !important;
                                transition: 0.3s;
                            }
                            .modal-input:focus {
                                outline: none;
                                border-color: #2d2b86 !important;
                                background: #fff;
                            }
                            .bg-theme { background-color: #e9fe49; }
                            .black-clr { color: #000; }
                        `}</style>
                    </div>
                )}
            </Layout>
        </>
    )
}
