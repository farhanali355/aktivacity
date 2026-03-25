'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import AiUseCasesSlider from '@/components/elements/AiUseCasesSlider'
import AiFilmChooseCarousel from '@/components/elements/AiFilmChooseCarousel'
import AiFilmTestimonial from '@/components/elements/AiFilmTestimonial'

export default function AiFilmProduction() {
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

    const filmUseCases = [
        {
            category: 'Commercials',
            title: 'Dynamic Brand Commercials',
            desc: 'Create visually stunning high-end commercials with AI-generated environments and seamless cinematic transitions.',
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop'
        },
        {
            category: 'E-commerce',
            title: 'Hyper-Realistic Product Demos',
            desc: 'Showcase products in any environment or lighting without physical studio setups using AI-powered rendering.',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop'
        },
        {
            category: 'Ads',
            title: 'High-Conversion Social Hooks',
            desc: 'Generate multiple variations of video hooks and ads to test performance and increase engagement on social platforms.',
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop'
        },
        {
            category: 'Training',
            title: 'Automated Educational Videos',
            desc: 'Scale your onboarding and training materials into high-quality videos using AI avatars and automated script-to-video tools.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop'
        },
        {
            category: 'VFX',
            title: 'Advanced Cinematic VFX',
            desc: 'Incorporate Hollywood-level visual effects and background replacements into your videos using cost-efficient AI tools.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop'
        }
    ];

    const deliverables = [
        {
            title: "AI Brand Films & Commercials",
            desc: "We create cinematic brand films and commercials using generative AI video production. By combining AI technology with storytelling, we produce visually stunning ads and campaigns that resonate with your target audience and drive conversions."
        },
        {
            title: "AI Animated Video Services",
            desc: "Our AI animated video services include 2D/3D animations for explainers, product demos, and storytelling. With AI-powered tools, we deliver high-quality animation at scale, creating engaging content that educates and entertains."
        },
        {
            title: "AI Video Production & Editing",
            desc: "From script to final cut, our AI video production & editing service combines AI-generated footage with professional editing, color grading, and sound. This process ensures cinematic quality and creative freedom while maintaining efficiency."
        },
        {
            title: "AI Video Post-Production & VFX",
            desc: "Enhance your existing footage with AI-powered post-production services. We use AI for footage cleanup, motion graphics, and visual effects to elevate your content and achieve a polished, cinematic look that fits your brand’s vision."
        },
        {
            title: "Reference-Driven AI Video Creation",
            desc: "Our reference-driven AI video creation ensures brand consistency throughout your videos. By integrating your style frames, logos, and creative references, we deliver visuals that perfectly align with your brand identity across all campaigns."
        },
        {
            title: "AI Training & Educational Video",
            desc: "Scale your training content effortlessly with AI-powered video production. We specialize in creating onboarding, compliance, and product training videos at scale, all without the need for costly studio shoots."
        },
        {
            title: "Hybrid (Live-Action + AI) Filmmaking",
            desc: "We offer hybrid filmmaking that combines live-action with AI-generated environments and characters. This blend of real footage and AI provides the best of both worlds, creating unique, immersive visuals that cannot be achieved with traditional methods."
        },
        {
            title: "Creative Direction for AI Films",
            desc: "We provide expert creative direction for your AI films, ensuring that the story, script, and visual strategy align perfectly. Our goal is to ensure AI supports your narrative while maintaining the artistic and cinematic integrity of your project."
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
                                                AI Filmmaking Services for Cinematic Brand Stories
                                            </h1>
                                            <h4 className="black-clr mb-xxl-6 mb-xl-5 mb-4 fw-medium opacity-75">
                                                Transform ideas into stunning visuals with AI-powered video, animation and filmmaking.
                                            </h4>
                                            <p className="black-clr mb-xxl-10 mb-xl-8 mb-6 fs-5 opacity-75">
                                                Synaryverse, an AI filmmaking agency in Karachi, combines AI-powered video creation with cinematic storytelling. We bring your ideas to life faster and more affordably, delivering stunning, brand-aligned results. From AI animation to full-scale production, we create high-conversion content that drives engagement and boosts visibility.</p>
                                            <div className="hero-cta-form">
                                                <Link href="/contact" className="hero-box-btn py-3 px-xxl-8 px-6 fw-bold whitespace-nowrap d-inline-flex align-items-center text-decoration-none">
                                                    Request AI Video Strategy Call
                                                    <span className="rot60 d-inline-block ms-3">
                                                        <i className="fas fa-arrow-up" />
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
                                        Why Your Brand Needs AI Video Now
                                    </h2>
                                    <p className="pra-clr fs-5 mb-0">
                                        Optimized Box Content with One-Line Descriptions
                                    </p>
                                </div>

                                <div className="problem-cards-wrap d-flex flex-column gap-4">
                                    {/* Card 1 */}
                                    <div className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                        <div className="d-flex align-items-start gap-4">
                                            <div className="card-icon">
                                                <i className="fas fa-robot theme-clr fs-3" />
                                            </div>
                                            <div className="card-text">
                                                <h5 className="white-clr mb-2 fw-bold">Faster Production</h5>
                                                <p className="pra-clr mb-0 small">
                                                    AI video production accelerates creative testing and reduces delays, delivering content 3x faster than traditional shoots.
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
                                                <h5 className="white-clr mb-2 fw-bold">Budget-Friendly Creativity</h5>
                                                <p className="pra-clr mb-0 small">
                                                    AI filmmaking reduces costs by enabling multiple locations and advanced VFX without stretching your budget.
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
                                                <h5 className="white-clr mb-2 fw-bold">Scale Content Effortlessly</h5>
                                                <p className="pra-clr mb-0 small">
                                                    Easily scale your video content, from ads to explainers, without the need for frequent studio bookings.
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
                                                <h5 className="white-clr mb-2 fw-bold">Custom, High-Impact Visuals</h5>
                                                <p className="pra-clr mb-0 small">
                                                    AI-powered video creation produces unique, bold visuals that set your brand apart from stock footage.
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
                                        <h3 className="black-clr fw-bold mb-0 text-nowrap fs-4">Unlock Faster AI Video Solutions</h3>
                                    </div>
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
                                    Our AI Filmmaking & Video Services                           </h2>
                                <div className="divider-line w-25 bg-theme mb-6" style={{ height: '4px' }} />
                                <p className="pra-clr fs-5">
                                    We combine cinematic storytelling with advanced generative AI tools to produce high-impact video content that elevates your brand and drives results.
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
                                    Ready to Create Your AI Brand Film?                             </h3>
                            </div>

                            <a href="/contact" className="cta-btn radius100 py-2 px-xxl-8 px-5 border border-theme bg-transparent white-clr fw-bold text-uppercase d-flex align-items-center gap-3 fs-6" style={{ position: 'relative', zIndex: 10 }}>
                                Request AI Video Strategy
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
                                        Our AI Filmmaking & Video Production Process
                                    </h2>
                                    <p className="pra-clr fs-6 lh-base opacity-75" >
                                        We follow a structured, collaborative process that combines AI technology with human creativity, ensuring that your video project is executed efficiently, creatively, and aligned with your brand goals.                                   </p>
                                </div>
                            </div>

                            {/* Steps */}
                            {[
                                {
                                    step: "01",
                                    title: "Discover & Develop the Story",
                                    points: ["We start by analyzing your brand and understanding your campaign objectives. Through audience insights and reference gathering, we create a comprehensive map for your project, ensuring a solid foundation for creative direction."]
                                },
                                {
                                    step: "02",
                                    title: "Script, Storyboard & Visual Plan",
                                    points: ["Our team develops professional scripts, detailed scene planning, and mood boards that act as references for the AI generation process, ensuring that your vision is brought to life with precision and consistency."]
                                },
                                {
                                    step: "03",
                                    title: "AI Scene Generation & Production",
                                    points: [" Using generative AI, we create stunning scenes, characters, and VFX that blend seamlessly with live-action footage or stock footage, enhancing your project with visual depth and creativity."]
                                },
                                {
                                    step: "04",
                                    title: "Editing, VFX & Delivery",
                                    points: ["Our experts perform cinematic editing, color grading, and premium sound design, ensuring that the final product is polished, platform-optimized, and ready for immediate deployment across digital channels."]
                                },
                                {
                                    step: "05",
                                    title: "Final Review & Optimization",
                                    points: ["We offer a final review of your project to ensure it aligns with your vision and brand identity. Continuous optimization is done based on feedback, ensuring that the video delivers optimal performance and impact."]
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
                                AI Filmmaking Use Cases
                            </h2>
                        </div>

                        <AiUseCasesSlider slides={filmUseCases} />
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
                            <h2 className="white-clr display-5 fw-bold mb-0 mx-auto" style={{ maxWidth: '900px' }}>
                                Why Choose Synaryverse as Your AI Filmmaking Agency
                            </h2>
                        </div>

                        <AiFilmChooseCarousel />
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
                        <AiFilmTestimonial />
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
                                <h2 className="white-clr display-3 fw-bold mb-12">AI Filmmaking FAQs</h2>

                                <div className="faq-wrapper d-flex flex-column gap-6">
                                    {[
                                        {
                                            q: "What videos can an AI video production company create?",
                                            a: "We create cinematic brand films, performance ads, animated explainers, training videos, and social content, all fully production-ready."
                                        },
                                        {
                                            q: "How does AI filmmaking differ from traditional production?",
                                            a: " AI compresses pre-production and VFX timelines, while human expertise handles storytelling, editing, and final finishing for quality results."
                                        },
                                        {
                                            q: "Will AI videos look fake or off-brand?",
                                            a: "Reference-driven AI ensures videos align with your brand style and guidelines, delivering cinematic, on-brand consistency."
                                        },
                                        {
                                            q: "Can you mix live-action with AI animation?",
                                            a: " Yes! We use a hybrid model that blends real footage with AI-generated environments, characters, and even transitions."
                                        },
                                        {
                                            q: "How long does an AI video project take?",
                                            a: "Brand films/ads: 2-4 weeks Explainers: 1-2 weeks Training series: 3-5 weeks"
                                        },
                                        {
                                            q: "Is AI video production more affordable?",
                                            a: " Yes! AI video production provides a 50-70% cost reduction compared to traditional shoots, while maintaining equal or better cinematic quality."
                                        },
                                        {
                                            q: "What about usage rights and brand safety?",
                                            a: "We provide full commercial rights, brand watermark protection, compliance review, and human final approval to ensure your video is safe and secure."
                                        },
                                        {
                                            q: "How many ad/social variations can you provide?",
                                            a: "We deliver 10-25 variations per master creative for platform-specific performance testing and optimization."
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
                            <h2 className="display-2 fw-black black-clr mb-8">Ready to Bring Your Vision to Life with AI Video?</h2>
                            <p className="black-clr fs-4 opacity-75 mb-12 max-w-700 mx-auto">
                                Transform your ideas into stunning, high-conversion videos with our AI-powered filmmaking services. Whether it's a brand film, explainer, or training video, we deliver cinematic quality faster and more affordably. Let's make your next project a success.                       </p>

                            <button onClick={() => setModalOpen(true)} className="book-call-btn d-inline-flex align-items-center gap-4 py-4 px-10 rounded-pill bg-theme text-black fw-bold text-uppercase ls-2">
                                Book Your Free AI Video Strategy Call
                                <div className="calendar-icon-wrap d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                                    <i className="far fa-calendar-alt" style={{ color: '#000' }} />
                                </div>
                            </button>
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
                            transition: all 0.4s ease;
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
                                border-color: #e9fe49 !important;
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
