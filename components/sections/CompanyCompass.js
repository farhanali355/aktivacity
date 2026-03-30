'use client'

export default function CompanyCompass() {
    const coreValues = [
        {
            title: "Innovation First",
            desc: "Constantly exploring AI and new technologies to stay ahead",
            icon: "fas fa-microchip"
        },
        {
            title: "True Partnership",
            desc: "Working as an extension of your team, not just a service provider",
            icon: "fas fa-handshake"
        },
        {
            title: "Data + Creativity",
            desc: "Decisions backed by insights, executed with creativity",
            icon: "fas fa-chart-line"
        },
        {
            title: "Integrity & Impact",
            desc: "Focused on results that create real value, with transparency at every step",
            icon: "fas fa-shield-alt"
        }
    ];

    return (
        <section className="company-compass pt-space pb-space bg1-clr">
            <div className="container">
                {/* Header */}
                <div className="row justify-content-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-9">
                    <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                OUR COMPASS
                            </div>
                            <h2 className="stitle">
                                What <strong style={{ color: '#E3FF04', fontWeight: 600 }}>Drives</strong> Us
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Row */}
                <div className="row g-xxl-8 g-4 mb-xxl-15 mb-xl-12 mb-lg-10 mb-9">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1200}>
                        <div className="vision-mission-card p-xxl-10 p-xl-8 p-lg-6 p-5 h-100 rounded-5 transition-all" 
                             style={{ 
                                 background: 'rgba(255, 255, 255, 0.03)', 
                                 border: '1px solid rgba(255, 255, 255, 0.07)',
                                 boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                             }}>
                            <div className="d-flex align-items-center gap-4 mb-4">
                                <div className="icon-box d-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(227,255,4,0.1)', color: '#E3FF04' }}>
                                    <i className="fas fa-eye fs-4"></i>
                                </div>
                                <h3 className="white-clr m-0" style={{ fontSize: '2rem' }}>Our Vision</h3>
                            </div>
                            <p className="white-clr opacity-75 fs-5" style={{ lineHeight: '1.8' }}>
                                To transform brands in a way that they can lead and dominate the industry with full potential by leveraging technology, innovation, human-connection, and the digital landscape.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1200}>
                        <div className="vision-mission-card p-xxl-10 p-xl-8 p-lg-6 p-5 h-100 rounded-5 transition-all" 
                             style={{ 
                                 background: 'rgba(227, 255, 4, 0.02)', 
                                 border: '1px solid rgba(227, 255, 4, 0.1)',
                                 boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                             }}>
                            <div className="d-flex align-items-center gap-4 mb-4">
                                <div className="icon-box d-center rounded-circle" style={{ width: '60px', height: '60px', background: '#E3FF04', color: '#000' }}>
                                    <i className="fas fa-rocket fs-4"></i>
                                </div>
                                <h3 className="white-clr m-0" style={{ fontSize: '2rem' }}>Our Mission</h3>
                            </div>
                            <p className="white-clr opacity-75 fs-5" style={{ lineHeight: '1.8' }}>
                                To provide digital solutions that include AI innovation and cutting-edge technology that fuels the sustainable growth for our clients.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values Section Title */}
                <div className="row mb-xxl-10 mb-xl-8 mb-5 mt-xxl-15">
                    <div className="col-12" data-aos="fade-up">
                        <h4 className="theme-clr text-uppercase ls-2 fw-bold mb-0">Core Values</h4>
                    </div>
                </div>

                {/* Core Values Grid */}
                <div className="row g-xxl-7 g-4">
                    {coreValues.map((value, index) => (
                        <div key={index} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={index * 150}>
                            <div className="value-card p-xxl-8 p-xl-6 p-5 rounded-4 h-100 transition-all border border-secondary border-opacity-10 shadow-sm"
                                 style={{ 
                                     background: 'rgba(255, 255, 255, 0.02)',
                                     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.background = 'rgba(227, 255, 4, 0.05)';
                                     e.currentTarget.style.borderColor = 'rgba(227, 255, 4, 0.3)';
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                     e.currentTarget.style.transform = 'translateY(0)';
                                 }}
                            >
                                <div className="mb-4 d-inline-block p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                                    <i className={`${value.icon} theme-clr fs-3`}></i>
                                </div>
                                <h5 className="white-clr mb-3 fs-3">{value.title}</h5>
                                <p className="white-clr opacity-50 mb-0 ls-1" style={{ fontSize: '1rem' }}>
                                    {value.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
