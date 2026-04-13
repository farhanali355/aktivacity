import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function About2() {
    return (
        <>

            <section className="about-product about-section-version3 pb-20">
                <div className="container position-relative">
                    <div className="row gy-lg-0 gy-7 justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-version3-thumb w-100" data-aos="zoom-in-down" data-aos-duration={2000}>
                                <img src="/assets/img/testimonial/testimonialv2.png" alt="img" className="w-100" />
                                <span className="arrow-element">
                                    <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                </span>
                                <VideoPopup style={1}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-v3">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                        ABOUT COMPANY
                                    </div>
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={1600}>
                                        We are digital creative
                                        <span className="regular d-block">
                                            agency in London
                                        </span>
                                    </h2>
                                    <p className="white-clr mb-xxl-10 mb-xl-8 mb-6">
                                        Bring to the table win-win survival strategies to ensure proactive domination. At
                                        the end of the day, going forward, a
                                        new normal that has evolved from generation on the runway heading towards a
                                        streamlined cloud.
                                    </p>
                                    <div className="global-counting mb-xxl-10 mb-xl-8 mb-6 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <div className="counting-item">
                                            <h6>
                                                <CounterUp count={12} time={3} />
                                                <span>+</span>
                                            </h6>
                                            <span className="pra-clr">
                                                years of experience
                                            </span>
                                        </div>
                                        <div className="counting-item">
                                            <h6>
                                                <CounterUp count={25} time={3} />
                                                <span>K+</span>
                                            </h6>
                                            <span className="pra-clr">
                                                completed projects
                                            </span>
                                        </div>
                                        <div className="counting-item">
                                            <h6>
                                                <CounterUp count={120} time={3} />
                                                <span>+</span>
                                            </h6>
                                            <span className="pra-clr">
                                                Team members
                                            </span>
                                        </div>
                                    </div>
                                    <Link href="/about" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                                        Explore More
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
    )
}
