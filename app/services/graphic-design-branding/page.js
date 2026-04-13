'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import BrandingDesignUseCasesSlider from '@/components/elements/BrandingDesignUseCasesSlider'
import GraphicDesignChooseCarousel from '@/components/elements/GraphicDesignChooseCarousel'
import GraphicDesignTestimonialCarousel from '@/components/elements/GraphicDesignTestimonialCarousel'

export default function AiAutomation() {
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
            "title": "Logo Design & Brand Visuals",
            "desc": "Custom logo design, iconography, and brand systems that build a recognizable identity."
        },
        {
            "title": "Marketing & Social Media Graphics",
            "desc": "Scroll-stopping social media graphics, ad creatives, and digital design for campaigns and always-on content."
        },
        {
            "title": "Motion Graphics & Animated Visuals",
            "desc": "Engaging motion graphics and short animated assets for social, websites, and presentations."
        },
        {
            "title": "Print Design & Promotional Materials",
            "desc": "Brochures, flyers, posters, point-of-sale materials, and other print design supporting offline marketing."
        },
        {
            "title": "Packaging & Product Visuals",
            "desc": "Impactful packaging design and product presentation that enhances shelf and online presence."
        },
        {
            "title": "Presentation & Corporate Design",
            "desc": "Investor decks, sales presentations, company profiles, and internal communication design."
        },
        {
            "title": "Branding Services & Visual Identity Systems",
            "desc": "Strategic branding services, brand guidelines, and cohesive visual identity design across all assets."
        }

    ];
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
                                             Graphic Design & Branding Services in Karachi
                                            </h1>
                                            <h4 className="black-clr mb-xxl-6 mb-xl-5 mb-4 fw-medium opacity-75">
                                            Transform your brand’s identity with creative, high-impact design that engages and leaves an impression.
                                            </h4>
                                            <p className="black-clr mb-xxl-10 mb-xl-8 mb-6 fs-5 opacity-75">
                                            Aktivacity delivers professional graphic design services, creating visually compelling brand assets that enhance your visual identity, engage audiences, and support long-term business growth. Our strategic branding services and modern visual identity design ensure your brand stands out and thrives in a competitive market. </p>
                                            <div className="hero-cta-form">
                                                <Link href="/contact" className="hero-box-btn py-3 px-xxl-8 px-6 fw-bold whitespace-nowrap d-inline-flex align-items-center text-decoration-none">
                                                    Get a Free Design Consultation
                                                    <span className="rot60 d-inline-block ms-3">
                                                        <i className="fas fa-arrow-up"/>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="services-hero-thumb position-relative text-center">
                                            <img src="/assets/img/web-app/web-app-hero-image.png" alt="Web & App Development" className="img-fluid floating-img" />
                                            {/* Tech Tags */}
                                            <div className="tech-tag tag-react">Machine Learning</div>
                                            <div className="tech-tag tag-node">RPA</div>
                                            <div className="tech-tag tag-ios">System Integration</div>
                                            <div className="tech-tag tag-aws">AI Agents</div>

                                            {/* Glow Effect behind image */}
                                            <div className="img-glow-effect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        :global(.section-pill) {
                            display: inline-block;
                            padding: 8px 22px;
                            border-radius: 40px;
                            border: 1px solid rgba(233,254,73,0.45);
                            color: #e9fe49 !important;
                            background: transparent;
                            font-weight: 700;
                            letter-spacing: 2px;
                        }
                        .services-hero-section {
                            padding-top: 140px; /* Space for fixed navbar */
                            padding-bottom: 60px;
                            background: #000; /* Unified dark background */
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
                        :global(.hero-box-btn) {
                            background: #000 !important;
                            color: #fff !important;
                            border: none;
                            border-radius: 100px;
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            position: relative;
                            overflow: hidden;
                            z-index: 2;
                        }
                        :global(.hero-box-btn:hover) {
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

                {/* <section className="brand-marquee-section pt-xxl-20 pb-xxl-30 pt-xl-15 pb-xl-20 pt-10 pb-15 ">
                    <div className="container mb-xxl-12 mb-10">
                        <div className="text-center">
                            <h6 className="white-clr text-uppercase fw-bold letter-spacing-2">Built With the Best Tools in the Industry</h6>
                        </div>
                    </div>

                    <div className="marquee-box mx-auto">
                        <div className="marquee-wrapper d-flex flex-column">
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
                            padding-top: 60px !important;
                            padding-bottom: 60px !important;
                        }
                        .letter-spacing-2 { letter-spacing: 2px; }
                        .marquee-box {
                            max-width: 70%;
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
                            padding: 0 40px; 
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
                </section> */}
                <section className="why-section pt-xxl-20 pt-15 pb-xxl-10 pb-10 overflow-hidden">
                    <div className="container">
                        <div className="row g-xxl-15 g-xl-12 g-10 align-items-center">
                            {/* Left Column: Content + Cards */}
                            <div className="col-lg-6">
                                <div className="section-title text-start mb-xxl-12 mb-10">
                                    <div className="section-pill text-uppercase d-inline-flex align-items-center mb-4">
                                        The Problem We Solve
                                    </div>
                                    <h2 className="white-clr display-5 fw-bold mb-6">
                                        Why Brands Need Professional Graphic Design Services?
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
                                                <i className="fas fa-robot theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Weak Visual Identity</h5>
                                                <p className="pra-clr mb-0 small">
                                                 Brands struggle to stand out because their graphic design and visual identity don’t reflect their positioning or personality.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-unlink theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Inconsistent Brand Assets</h5>
                                                <p className="pra-clr mb-0 small">
                                                 Logos, colors, and typography look different across platforms, hurting visual consistency and professional perception.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-expand-arrows-alt theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Low Engagement Graphics</h5>
                                                <p className="pra-clr mb-0 small">
                                                Outdated or cluttered marketing graphics and social media graphics fail to capture attention or drive clicks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-hourglass-half theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Outdated Creative Materials</h5>
                                                <p className="pra-clr mb-0 small">
                                                Old presentations, brochures, and print design assets no longer match modern design standards or current brand direction.
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
                                    {/* <div className="experience-badge position-absolute bottom-0 start-0 mb-n5 ms-n5 p-xxl-5 p-4 bg-theme rounded-4 d-none d-md-block shadow-lg">
                                        <h3 className="black-clr fw-bold mb-0 text-nowrap fs-4">No Website, No Business Growth</h3>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .why-section {
                            background: #000;
                            position: relative;
                            padding-top: 60px !important;
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
                                <div className="section-pill text-uppercase d-inline-flex align-items-center mb-4">
                                    Our Expertise
                                </div>
                                <h2 className="white-clr display-4 fw-bold mb-6 lh-sm">
                                    Our Graphic Design Services                              </h2>
                                <div className="divider-line w-25 bg-theme mb-6" style={{ height: '4px' }} />
                                <p className="pra-clr fs-5">
                                   As a creative graphic design agency, we deliver end-to-end visuals for brands that need strategic, cohesive, and on-brand design across every touchpoint.
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
                <section className="cta-banner-section pb-xxl-15 pb-12 pt-xxl-20 pt-15 bg-black overflow-hidden ">
                    <div className="container mt-xxl-15 mt-10 mb-xxl-10 mb-5">
                        <div className="cta-capsule-wrapper position-relative p-xxl-6 p-xl-5 p-lg-4 p-4 rounded-pill d-flex align-items-center justify-content-between flex-wrap gap-4">
                            {/* Animated Background Dots */}
                            <div className="cta-particles" />

                            <div className="d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3 z-1">
                                <div className="cta-logo-wrap bg-transparent d-flex align-items-center justify-content-center">
                                    <img src="/assets/img/element/download.png" alt="Aktiva Logo" style={{ width: '85px', height: '85px', objectFit: 'contain' }} />
                                </div>
                                <h3 className="white-clr mb-0 fs-5 fw-medium text-center text-sm-start">
                                    Ready to Elevate Your Visual Presence?                            </h3>
                            </div>

                            <a href="/contact" className="cta-btn radius100 py-2 px-xxl-8 px-5 border border-theme bg-transparent white-clr fw-bold text-uppercase d-flex align-items-center gap-3 fs-6" style={{ position: 'relative', zIndex: 10 }}>
                                Start Your Design Project
                                <span className="rot60 d-inline-block transition-all">
                                    <i className="fas fa-arrow-up theme-clr" />
                                </span>
                            </a>
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
                            pointer-events: none;
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
                                        <div className="section-pill text-uppercase d-inline-flex align-items-center mb-0">
                                            Our Process
                                        </div>
                                    </div>
                                    <h2 className="white-clr display-3 fw-bold mb-8 lh-1" style={{ fontSize: "37px" }}>
                                        Our Creative Process
                                    </h2>
                                    <p className="pra-clr fs-6 lh-base opacity-75" >
                                        We follow a clear, collaborative process so every design decision supports your brand and business goals.                                   </p>
                                </div>
                            </div>

                            {/* Steps */}
                            {[
                                {
                                    step: "01",
                                    title: "Creative Consultation & Discovery",
                                    points: ["We understand your business, audience, competitors, and current visuals through a structured creative consultation."]
                                },
                                {
                                    step: "02",
                                    title: "Concept Development",
                                    points: ["We translate your strategy into moodboards, directions, and initial concepts aligned with your brand positioning and brand messaging."]
                                },
                                {
                                    step: "03",
                                    title: "Design Execution",
                                    points: ["We craft final graphic design assets, logos, layouts, marketing graphics, and more,  optimized for web, print, and social."]
                                },
                                {
                                    step: "04",
                                    title: "Revisions & Optimization",
                                    points: ["We refine based on feedback, ensuring visual consistency and performance across use cases."]
                                },
                                {
                                    step: "05",
                                    title: "Final Asset Delivery",
                                    points: ["You receive organized, production-ready files and brand guidelines for seamless ongoing use."]
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
                            <div className="section-pill text-uppercase d-inline-flex align-items-center mb-4">
                                Use Cases
                            </div>
                            <h2 className="white-clr display-4 fw-bold mb-0 text-uppercase ls-2">
                                Branding & Design Use Cases
                            </h2>
                            {/* <p className="mt-4 pra-clr fs-5 max-w-700 mx-auto">
                                We apply AI-powered automation across departments and industries, customizing use cases to your workflows.
                            </p> */}
                        </div>

                        <BrandingDesignUseCasesSlider />
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

                        <GraphicDesignChooseCarousel />
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
                                        What Our Clients Say
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <GraphicDesignTestimonialCarousel />
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
                                            <img src="/assets/img/team/sibghat.png" alt="Sibghat Shaikh" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="profile-info">
                                            <h4 className="white-clr mb-1 fw-bold">Sibghat Shaikh</h4>
                                            <p className="theme-clr fs-xs mb-0 fw-medium">CEO @ Aktivacity</p>
                                        </div>
                                    </div>
                                    <p className="pra-clr fs-5 mb-10 lh-base opacity-75">
                                        “Have a question or are you planning something new? Let’s connect and explore.”
                                    </p>
                                    <a href="https://www.linkedin.com/company/aktivacity/" className="linkedin-btn py-3 px-6 rounded-pill bg-white d-flex align-items-center justify-content-between transition-all">
                                        <span className="black-clr fw-bold text-uppercase ls-1 fs-xs">Connect on LinkedIn</span>
                                        <div className="icon-circle bg-theme rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', backgroundColor: '#0077B5' }}>
                                            <i className="fab fa-linkedin-in white-clr fs-xs" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Right: FAQ Accordion */}
                            <div className="col-lg-8">
                                <h2 className="white-clr display-3 fw-bold mb-12">Graphic Design Services FAQs</h2>

                                <div className="faq-wrapper d-flex flex-column gap-6">
                                    {[
                                        
                                            {
                                                "q": "What graphic design services do you offer?",
                                                "a": "We provide end-to-end graphic design services, including logo and visual identity design, marketing graphics, social media graphics, print design, packaging design, presentation design, and motion graphics."
                                            },
                                            {
                                                "q": "Do you provide branding services in Karachi?",
                                                "a": "Yes, we offer strategic branding services, including brand strategy and positioning, brand messaging, startup branding, and comprehensive brand guidelines."
                                            },
                                            {
                                                "q": "Can you design logos and brand identity systems?",
                                                "a": "Absolutely. We create custom logo design and complete brand systems that define colors, typography, usage rules, and visual styles for consistent application."
                                            },
                                            {
                                                "q": "Do you offer motion graphics design services?",
                                                "a": "Yes, we design motion graphics and animated visuals for social media, websites, presentations, and campaigns to enhance storytelling and engagement."
                                            },
                                            {
                                                "q": "How long does a graphic design project take?",
                                                "a": "Timelines depend on scope: logos and basic identity typically take 2–4 weeks, full branding systems 4–8 weeks, and ongoing marketing graphics can follow a weekly or monthly retainer schedule."
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
                            <h2 className="display-2 fw-black black-clr mb-8">Let’s Build Powerful Visual Assets</h2>
                            <p className="black-clr fs-4 opacity-75 mb-12 max-w-700 mx-auto">
                               If you’re ready to upgrade your brand visuals and stand out in a crowded market, Aktivacity can help you design consistent, high-impact creative that supports your growth.                           </p>

                            <button onClick={() => setModalOpen(true)} className="book-call-btn d-inline-flex align-items-center gap-4 py-4 px-10 rounded-pill bg-theme text-black fw-bold text-uppercase ls-2">
                                Talk to a Graphic Design Expert
                                <div className="calendar-icon-wrap d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                                    <i className="far fa-calendar-alt" style={{ color: '#000' }} />
                                </div>
                            </button>
                        </div>

                        {/* SOCIAL PROOF LOGOS */}
                        {/* <div className="social-proof-wrap mt-20">
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
                                        <div className="badge-icon-box d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                                            <img src={badge.icon} alt={badge.label} style={{ height: '50px', width: 'auto', maxWidth: '160px' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
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
