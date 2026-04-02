
import Link from "next/link"

export default function CaseStudy3() {
    return (
        <>

            <section className="case-study-sectionv3 position-relative mt-50">
                <div className="container">
                    <div className="pricing-title text-center mb-xxl-15 mb-10">
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                            Case Study
                        </div>
                        <h2 className="stitle">
                            Check Our <span className="fw-400">Company Inside</span> Story
                        </h2>
                    </div>
                </div>
                <div className="case-study-v3wrap">
                    <div className="case-studyv3-item position-relative" style={{ background: 'url(assets/img/case/ncase1.png) no-repeat center center', backgroundSize: 'cover' }} data-aos="fade-up" data-aos-duration={1400}>
                        <div className="container">
                            <div className="box position-relative d-flex align-items-center justify-content-between pb-xxl-9 pb-xl-6 pb-4">
                                <div className="content">
                                    <span className="radius-btn text-capitalize cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        Development
                                    </span>
                                    <h4>
                                        <Link href="/#" className="white-clr">
                                            Website For Agency
                                        </Link>
                                    </h4>
                                </div>
                                <Link href="/#" className="case-btn radius100 d-center">
                                    <span className="rot60">
                                        <i className="fa-solid fa-arrow-up" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="case-studyv3-item position-relative" style={{ background: 'url(assets/img/case/ncase2.png) no-repeat center center', backgroundSize: 'cover' }} data-aos="fade-up" data-aos-duration={1600}>
                        <div className="container">
                            <div className="box position-relative d-flex align-items-center justify-content-between pb-xxl-9 pb-xl-6 pb-4">
                                <div className="content">
                                    <span className="radius-btn text-capitalize cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        creative
                                    </span>
                                    <h4>
                                        <Link href="/#" className="white-clr">
                                            Marketing Strategy
                                        </Link>
                                    </h4>
                                </div>
                                <Link href="/#" className="case-btn radius100 d-center">
                                    <span className="rot60">
                                        <i className="fa-solid fa-arrow-up" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="case-studyv3-item position-relative" style={{ background: 'url(assets/img/case/ncase3.png) no-repeat center center', backgroundSize: 'cover' }} data-aos="fade-up" data-aos-duration={1800}>
                        <div className="container">
                            <div className="box position-relative d-flex align-items-center justify-content-between pb-xxl-9 pb-xl-6 pb-4">
                                <div className="content">
                                    <span className="radius-btn text-capitalize cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        Design
                                    </span>
                                    <h4>
                                        <Link href="/#" className="white-clr">
                                            Unique Product Design
                                        </Link>
                                    </h4>
                                </div>
                                <Link href="/#" className="case-btn radius100 d-center">
                                    <span className="rot60">
                                        <i className="fa-solid fa-arrow-up" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
