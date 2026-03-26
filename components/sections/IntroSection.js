import Link from "next/link";

export default function IntroSection({ data }) {
    return (
        <section className="intro-section bg-black position-relative overflow-hidden" style={{ padding: '150px 0' }}>
            {/* Decorative Elements */}
            <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.1 }}></div>

            <div className="container position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                                {data?.tagline || 'WHO WE ARE'}
                            </div>
                            <h2 className="stitle mb-4 text-white">
                                {data?.heading || 'Your AI-Powered Digital Growth Partner'}
                            </h2>
                            <p className="text-white fs-4 mb-5 opacity-75 fw-light">
                                {data?.subheading || 'Tired of juggling multiple vendors for your digital needs?'}
                            </p>
                            <div className="intro-content">
                                {data?.descriptionBox ? (
                                    <p className="text-white fs-5 mb-0" style={{ lineHeight: '1.8', whiteSpace: 'pre-line' }}>{data.descriptionBox}</p>
                                ) : (
                                    <p className="text-white fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                                        As a leading <span className="theme-clr fw-bold">IT Company in Pakistan</span> and <span className="theme-clr fw-bold">Full Service Design & Development Agency</span>,
                                        we offer a <span className="text-decoration-underline text-white">unified strategy</span> that blends AI, technology, and creative storytelling.
                                        We deliver <strong>integrated solutions</strong> and drive <strong>digital transformation</strong> for <strong>measurable business growth</strong>.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
