'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import ShowcaseSlider from '@/components/elements/ShowcaseSlider'
import ChooseCarousel from '@/components/elements/ChooseCarousel'
import TestimonialCarousel from '@/components/elements/TestimonialCarousel'
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

export const dynamic = 'force-dynamic'

export default function DynamicServicePage({ params }) {
    const [pageData, setPageData] = useState(null)
    const [activeDeliv, setActiveDeliv] = useState(0)
    const [openFaq, setOpenFaq] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(
                `*[_type == "serviceWebApp" && slug.current == $slug][0]`,
                { slug: params.slug },
                { next: { revalidate: 0 } }
            )
            setPageData(data)
        }
        fetchData()
    }, [params.slug])

    if (!pageData) return <div className="text-center py-20 bg-black white-clr">Loading...</div>

    const {
        hero,
        marqueeLogos,
        whySection,
        deliverablesSection,
        ctaBanner,
        processSection,
        faqSection,
        finalConversion
    } = pageData

    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                {/* Hero Section */}
                <section className="services-hero-section d-flex align-items-center overflow-hidden">
                    <div className="premium-grid" />
                    <div className="container-fluid px-lg-5 position-relative z-1">
                        <div className="hero-main-box">
                            <div className="noise-texture" />
                            <div className="box-blur-blob blob-1" />
                            <div className="box-blur-blob blob-2" />
                            <div className="container ps-lg-10">
                                <div className="row align-items-center g-xxl-10 g-5 position-relative z-1">
                                    <div className="col-lg-7">
                                        <div className="services-hero-content text-start">
                                            <div className="hero-badge mb-4 d-inline-block">
                                                <span className="text-uppercase fw-bold ls-2">{hero?.badge || 'Innovation & Growth'}</span>
                                            </div>
                                            <h1 className="black-clr mb-xxl-8 mb-xl-6 mb-5 display-3 fw-bold">
                                               {hero?.title || 'Service Title'}
                                            </h1>
                                            <h4 className="black-clr mb-xxl-6 mb-xl-5 mb-4 fw-medium opacity-75">
                                              {hero?.subheading || 'Service Subheading'}
                                            </h4>
                                            <p className="black-clr mb-xxl-10 mb-xl-8 mb-6 fs-5 opacity-75">
                                                {hero?.description || 'Service Description'}
                                            </p>
                                            <div className="hero-cta-form">
                                                <div className="d-flex flex-sm-row flex-column gap-3">
                                                    <Link href={hero?.buttonLink || "/contact"} className="hero-box-btn py-3 px-xxl-10 px-6 fw-bold whitespace-nowrap text-decoration-none d-inline-block text-center">
                                                        {hero?.buttonText || 'Book a Free Consultation'}
                                                        <span className="rot60 d-inline-block ms-2">
                                                            <i className="fas fa-arrow-up" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="services-hero-thumb position-relative text-center">
                                            <img src="/assets/img/web-app/web-app-hero-image.png" alt="Service Hero" className="img-fluid floating-img" />
                                            <div className="tech-tag tag-react">React</div>
                                            <div className="tech-tag tag-node">Node.js</div>
                                            <div className="tech-tag tag-ios">iOS/Android</div>
                                            <div className="tech-tag tag-aws">AWS</div>
                                            <div className="img-glow-effect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brand-marquee-section pt-xxl-20 pb-xxl-30 pt-xl-15 pb-xl-20 pt-10 pb-15 ">
                    <div className="container mb-xxl-12 mb-10">
                        <div className="text-center">
                            <h6 className="white-clr text-uppercase fw-bold letter-spacing-2">Built With the Best Tools in the Industry</h6>
                        </div>
                    </div>
                    <div className="marquee-box mx-auto">
                        <div className="marquee-wrapper d-flex flex-column">
                            <div className="marquee-row marquee-right">
                                <div className="marquee-content">
                                    {(marqueeLogos?.length > 0 ? marqueeLogos : []).concat(marqueeLogos || []).map((img, i) => (
                                        <div className="marquee-item" key={`m-${i}`}>
                                            <img src={urlForImage(img).url()} alt="Brand Logo" />
                                        </div>
                                    ))}
                                    {(!marqueeLogos || marqueeLogos.length === 0) && [1,2,3,4,5,6].map(i => (
                                         <div className="marquee-item" key={`def-${i}`}>
                                            <img src={`/assets/img/web-app/nodejs.png`} alt="Demo Logo" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-section py-xxl-20 mt-10 py-15 bg-black-2 overflow-hidden">
                    <div className="container">
                        <div className="row g-xxl-15 g-xl-12 g-10 align-items-center mt-10">
                            <div className="col-lg-6">
                                <div className="section-title text-start mb-xxl-12 mb-10">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                        {whySection?.tagline || 'The Problem We Solve'}
                                    </div>
                                    <h2 className="white-clr display-5 fw-bold mb-6">
                                      {whySection?.heading || 'The Challenges We Solve'}
                                    </h2>
                                </div>
                                <div className="problem-cards-wrap d-flex flex-column gap-4">
                                    {(whySection?.cards || []).map((card, idx) => (
                                        <div key={idx} className="problem-card p-xxl-6 p-xl-5 p-4 rounded-4">
                                            <div className="d-flex align-items-start gap-4">
                                                <div className="card-icon">
                                                    <i className={`${card.iconClass || 'fas fa-bolt'} theme-clr fs-3`} />
                                                </div>
                                                <div className="card-text">
                                                    <h5 className="white-clr mb-2 fw-bold">{card.title}</h5>
                                                    <p className="pra-clr mb-0 small">{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="why-image-wrapper position-relative">
                                    <div className="image-hover-effect rounded-4 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Consultation" className="img-fluid w-100 h-100 object-fit-cover" />
                                        <div className="image-overlay-glow" />
                                    </div>
                                    <div className="experience-badge position-absolute bottom-0 start-0 mb-n5 ms-n5 p-xxl-5 p-4 bg-theme rounded-4 d-none d-md-block shadow-lg">
                                        <h3 className="black-clr fw-bold mb-0 text-nowrap fs-4">Expert Digital Solutions</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="deliverables-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="grid-overlay" />
                    <div className="container position-relative z-1 mt-20">
                        <div className="row g-xxl-15 g-xl-12 g-10">
                            <div className="col-lg-5">
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                    {deliverablesSection?.tagline || 'Our Expertise'}
                                </div>
                                <h2 className="white-clr display-4 fw-bold mb-6 lh-sm">
                                    {deliverablesSection?.heading || 'Our Main Services'}
                                </h2>
                                <div className="divider-line w-25 bg-theme mb-6" style={{ height: '4px' }} />
                                <p className="pra-clr fs-5">
                                    {deliverablesSection?.description || 'We deliver competitive advantages.'}
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <div className="deliverables-list">
                                    {(deliverablesSection?.list || []).map((item, index) => (
                                        <div key={index}
                                            className={`deliverable-item py-xxl-6 py-5 border-bottom border-secondary border-opacity-25 transition-all ${activeDeliv === index ? 'active' : ''}`}
                                            onClick={() => setActiveDeliv(activeDeliv === index ? null : index)}
                                        >
                                            <div className="d-flex justify-content-between align-items-center mb-0 item-header">
                                                <h4 className={`white-clr mb-0 fw-medium transition-all ${activeDeliv === index ? 'theme-clr' : ''}`}>{item.title}</h4>
                                                <div className={`item-arrow transition-all ${activeDeliv === index ? 'rotate-icon' : ''}`}>
                                                    <i className="fas fa-arrow-right theme-clr fs-4" />
                                                </div>
                                            </div>
                                            <div className={`deliverable-body overflow-hidden transition-all ${activeDeliv === index ? 'show py-4' : ''}`}>
                                                <p className="pra-clr fs-6 mt-4 mb-2 pe-xxl-15 pe-lg-10">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-banner-section py-xxl-15 py-12 bg-black overflow-hidden ">
                    <div className="container mt-10">
                        <div className="cta-capsule-wrapper position-relative p-xxl-6 p-xl-5 p-lg-4 p-4 rounded-pill d-flex align-items-center justify-content-between flex-wrap gap-4">
                            <div className="cta-particles" />
                            <div className="d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3 z-1">
                                <div className="cta-logo-wrap bg-transparent d-flex align-items-center justify-content-center">
                                    <img src="/assets/img/element/download.png" alt="Aktiva Logo" style={{ width: '85px', height: '85px', objectFit: 'contain' }} />
                                </div>
                                <h3 className="white-clr mb-0 fs-5 fw-medium text-center text-sm-start">
                                    {ctaBanner?.text || 'Ready to Build a High-Performing Digital Platform?'}
                                </h3>
                            </div>
                            <Link href={ctaBanner?.buttonLink || "/contact"} className="cta-btn radius100 py-2 px-xxl-8 px-5 border border-theme bg-transparent white-clr fw-bold text-uppercase z-1 d-flex align-items-center gap-3 fs-6">
                                {ctaBanner?.buttonText || 'Get a Free Strategy Call'}
                                <span className="rot60 d-inline-block transition-all">
                                    <i className="fas fa-arrow-up theme-clr" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="process-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="grid-overlay" />
                    <div className="container position-relative z-1 mt-10">
                        <div className="row g-4 align-items-stretch">
                            <div className="col-lg-4 mb-4">
                                <div className="section-title h-100 d-flex flex-column justify-content-center pe-lg-15">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-5">
                                        {processSection?.tagline || 'Our Process'}
                                    </div>
                                    <h2 className="white-clr display-3 fw-bold mb-8 lh-1" style={{fontSize:"37px"}}>
                                        {processSection?.heading || 'Our Development Process'}
                                    </h2>
                                    <p className="pra-clr fs-6 lh-base opacity-75">
                                        {processSection?.description || 'A structured approach for your business needs.'}
                                    </p>
                                </div>
                            </div>
                            {(processSection?.steps || []).map((item, index) => (
                                <div key={index} className="col-lg-4 mb-4">
                                    <div className="process-card p-xxl-8 p-xl-6 p-5 h-100">
                                        <div className="d-flex align-items-center justify-content-between mb-5">
                                            <span className="step-num theme-clr fw-bold fs-4">{item.stepNumber}</span>
                                            <div className="card-icon">
                                                <i className="fas fa-microchip theme-clr opacity-25 fs-2" />
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-5 fw-bold">{item.title}</h4>
                                        <ul className="list-unstyled d-flex flex-column gap-3">
                                            {(item.points || []).map((pt, pIdx) => (
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
                </section>

                <section className="why-choose-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="grid-overlay" />
                    <div className="container position-relative z-1 mt-20">
                        <div className="text-center mb-xxl-15 mb-xl-12 mb-10">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                                Our Edge
                            </div>
                            <h2 className="white-clr display-4 fw-bold mb-0">Why Choose Aktivacity</h2>
                        </div>
                        <ChooseCarousel />
                    </div>
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
                                        {faqSection?.heading || 'What Our Clients Say'}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <TestimonialCarousel />
                    </div>
                </section>

                <section className="faq-section py-xxl-20 py-15 bg-black position-relative overflow-hidden">
                    <div className="container mt-20">
                        <div className="row g-xxl-15 g-xl-12 g-10">
                            <div className="col-lg-4">
                                <div className="connect-card p-xxl-10 p-xl-8 p-6 position-relative overflow-hidden">
                                    <div className="d-flex align-items-center gap-4 mb-8">
                                        <div className="profile-img-wrap">
                                            {faqSection?.expertImage ? (
                                                <img src={urlForImage(faqSection.expertImage).url()} alt="Expert" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                            ) : (
                                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Expert" className="rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                            )}
                                        </div>
                                        <div className="profile-info">
                                            <h4 className="white-clr mb-1 fw-bold">{faqSection?.expertName || 'Expert Name'}</h4>
                                            <p className="theme-clr fs-xs mb-0 fw-medium">{faqSection?.expertRole || 'Expert Role'}</p>
                                        </div>
                                    </div>
                                    <p className="pra-clr fs-5 mb-10 lh-base opacity-75">
                                        {faqSection?.expertText || '“Have more questions? Feel free to connect.”'}
                                    </p>
                                    <a href={faqSection?.linkedinUrl || "#"} className="linkedin-btn py-3 px-6 rounded-pill bg-white d-flex align-items-center justify-content-between transition-all text-decoration-none">
                                        <span className="black-clr fw-bold text-uppercase ls-1 fs-xs">Connect on LinkedIn</span>
                                        <div className="icon-circle bg-theme rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', backgroundColor: '#0077B5' }}>
                                            <i className="fab fa-linkedin-in white-clr fs-xs" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h2 className="white-clr display-3 fw-bold mb-12">{faqSection?.heading || 'FAQs'}</h2>
                                <div className="faq-wrapper d-flex flex-column gap-6">
                                    {(faqSection?.faqs || []).map((item, index) => (
                                        <div key={index} className="faq-item">
                                            <div
                                                className="faq-header py-6 d-flex align-items-center justify-content-between cursor-pointer border-bottom border-white-opacity transition-all hover-theme"
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            >
                                                <h4 className="white-clr mb-0 fw-bold fs-5">{item.question}</h4>
                                                <div className={`plus-icon transition-all ${openFaq === index ? 'rotate-45 theme-clr' : 'white-clr'}`}>
                                                    <i className="fas fa-plus" />
                                                </div>
                                            </div>
                                            <div className={`faq-body transition-all overflow-hidden ${openFaq === index ? 'max-h-500 py-6' : 'max-h-0'}`}>
                                                <p className="pra-clr fs-6 mb-0 lh-lg opacity-75">{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-conversion-section py-xxl-25 py-20 bg-black position-relative overflow-hidden">
                    <div className="atmospheric-glow" />
                    <div className="container position-relative z-1">
                        <div className="conversion-card mx-auto p-xxl-15 p-xl-12 p-8 text-center">
                            <h2 className="display-2 fw-black black-clr mb-8">{finalConversion?.heading || "Let's Build It"}</h2>
                            <p className="black-clr fs-4 opacity-75 mb-12 max-w-700 mx-auto">
                                {finalConversion?.description || "High-performance services that convert."}
                            </p>
                            <Link href="/contact" className="book-call-btn d-inline-flex align-items-center gap-4 py-4 px-10 rounded-pill bg-theme text-black fw-bold text-uppercase ls-2 text-decoration-none mx-auto">
                                {finalConversion?.buttonText || 'BOOK A CALL'}
                                <div className="calendar-icon-wrap d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                                    <i className="far fa-calendar-alt" style={{ color: '#000' }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>

            <style jsx global>{`
                .services-hero-section { padding-top: 140px; padding-bottom: 60px; background: #000; }
                .hero-main-box { background: #e9fe49; border-radius: 40px; padding: 70px 0; box-shadow: 0 30px 100px rgba(233, 254, 73, 0.15); border: 1px solid rgba(0, 0, 0, 0.05); margin: 0 auto; width: 92%; max-width: 1500px; position: relative; overflow: hidden; }
                .noise-texture { position: absolute; inset: 0; background-image: url("https://grainy-gradients.vercel.app/noise.svg"); opacity: 0.1; pointer-events: none; z-index: 1; }
                .black-clr { color: #000 !important; }
                .hero-badge { background: rgba(0, 0, 0, 0.05); padding: 8px 18px; border-radius: 100px; border: 1px solid rgba(0, 0, 0, 0.08); }
                .hero-box-btn { background: #000; color: #fff !important; border-radius: 100px; transition: 0.4s; }
                .floating-img { animation: float 6s ease-in-out infinite; }
                @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
                .tech-tag { position: absolute; background: #fff; padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 700; color: #000; box-shadow: 0 8px 20px rgba(0,0,0,0.1); z-index: 3; }
                .tag-react { top: 15%; left: -5%; } .tag-node { top: 5%; right: 5%; } .tag-ios { bottom: 25%; left: -10%; } .tag-aws { bottom: 10%; right: 0%; }
                .img-glow-effect { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%); filter: blur(50px); z-index: 1; }
                .box-blur-blob { position: absolute; width: 300px; height: 300px; background: rgba(255, 255, 255, 0.3); filter: blur(80px); border-radius: 50%; z-index: 0; }
                .blob-1 { top: -100px; right: -100px; } .blob-2 { bottom: -100px; left: -100px; background: rgba(0,0,0,0.03); }
                .rot60 { transform: rotate(45deg); }
                
                .brand-marquee-section { background: #000; }
                .marquee-box { overflow: hidden; position: relative; width: 100%; }
                .marquee-row { display: flex; overflow: hidden; height: 90px; }
                .marquee-content { display: flex; width: max-content; animation: scrollRight 60s linear infinite; }
                .marquee-item { width: 150px; padding: 0 40px; display: flex; align-items: center; }
                .marquee-item img { width: 100%; object-fit: contain; }
                @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

                .problem-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.4s; }
                .problem-card:hover { transform: translateX(10px); background: rgba(255, 255, 255, 0.05); }
                
                .process-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; transition: 0.4s; }
                .process-card:hover { transform: translateY(-10px); border-color: #e9fe49; }
                
                .connect-card { background: rgba(255, 255, 255, 0.02); border: 1px solid #e9fe49; border-radius: 40px; }
                .conversion-card { background: #fff; border-radius: 40px; }
                .bg-theme { background-color: #e9fe49; }
                .atmospheric-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 100%; height: 100%; background: radial-gradient(ellipse at center, rgba(233, 254, 73, 0.1) 0%, transparent 60%); pointer-events: none; z-index: 0; }
            `}</style>
        </>
    )
}
