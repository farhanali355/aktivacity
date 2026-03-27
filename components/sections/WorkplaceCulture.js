'use client'
import Link from 'next/link';

export default function WorkplaceCulture() {
    return (
        <>
            <section className="workplace-culture pt-space pb-space bg2-clr overflow-hidden">
                <div className="container">
                    <div className="row g-xxl-10 g-5 align-items-center">
                        {/* Image Column */}
                        <div className="col-lg-6" data-aos="zoom-in-right" data-aos-duration={1500}>
                            <div className="culture-img-wrapper position-relative p-3 rounded-5" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <div className="rounded-5 overflow-hidden shadow-lg" style={{ height: '450px' }}>
                                    <img src="/assets/img/about/about_creative_workspace.png" alt="Aktivacity Workplace Culture" className="img-fluid w-100 h-100 object-fit-cover transition-all" />
                                    {/* Overlay Gradient */}
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6))' }}></div>
                                </div>
                                {/* Floating Badges */}
                                <div className="position-absolute bottom-0 start-0 m-4 p-4 rounded-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', borderLeft: '3px solid #E3FF04' }}>
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <i className="fas fa-microchip theme-clr"></i>
                                        <span className="white-clr fw-bold">Daily AI Workshops</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fas fa-users-viewfinder theme-clr"></i>
                                        <span className="white-clr fw-bold">Creative Sprints</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1500}>
                            <div className="pricing-title">
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                    CULTURE
                                </div>
                                <h2 className="stitle mb-xxl-8 mb-xl-7 mb-lg-6 mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: '1.1' }}>
                                    More Than a <strong style={{ color: '#E3FF04', fontWeight: 600 }}>Workplace</strong>
                                </h2>
                                <p className="white-clr opacity-75 fs-5 mb-xxl-8 mb-xl-7 mb-lg-6 mb-5" style={{ lineHeight: '1.8' }}>
                                    The atmosphere at Aktivacity thrives on the dynamic collaboration of engineers, strategists and designers&apos; ideas and energy. We value ongoing growth and focus on daily development in AI-focused workshops, creative sprints, and creating an energetic environment that is favorable for personal development and professional advancement.
                                </p>
                                
                                <div className="culture-stats-row d-flex flex-wrap gap-xxl-8 gap-xl-6 gap-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <h4 className="theme-clr mb-0 fw-bold fs-2">AI</h4>
                                        <span className="white-clr opacity-50">Focused Growth</span>
                                    </div>
                                    <div className="vr white-clr opacity-25 d-none d-sm-block"></div>
                                    <div className="d-flex align-items-center gap-3">
                                        <h4 className="theme-clr mb-0 fw-bold fs-2">Energy</h4>
                                        <span className="white-clr opacity-50">High-Impact Results</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bridge Section */}
            <section className="bridge-section pt-xxl-15 pt-xl-12 pt-lg-10 pt-9 pb-0 bg1-clr text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="bridge-content mb-xxl-10 mb-xl-8 mb-6">
                                <h2 className="stitle mb-5">
                                    The Minds Behind <strong style={{ color: '#E3FF04', fontWeight: 600 }}>The Magic</strong>
                                </h2>
                                <p className="white-clr opacity-75 fs-4 mb-xxl-10 mb-xl-8 mb-7 mx-auto" style={{ maxWidth: '800px' }}>
                                    A cross-functional team of engineers, designers, AI specialists, and strategists working together to turn ideas into scalable solutions.
                                </p>
                                
                                <div className="leadership-cta-box d-inline-flex flex-wrap align-items-center justify-content-center gap-xxl-8 gap-4 py-2 px-xxl-10 px-xl-8 px-5 rounded-pill" 
                                     style={{ 
                                         background: 'rgba(255, 255, 255, 0.03)', 
                                         border: '1px solid rgba(255, 255, 255, 0.08)',
                                         backdropFilter: 'blur(5px)',
                                         minWidth: 'min(90%, 500px)'
                                     }}>
                                    <span className="white-clr fs-6 opacity-75">Want to talk to our leadership?</span>
                                    <Link href="/contact" className="radius-btn d-inline-flex radius100 py-2 px-4 theme-border theme-clr gap-3 style-2 transition-all">
                                        Get in Touch
                                        <span className="rot60 d-inline-block">
                                            <i className="fas fa-arrow-up theme-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
