
import Link from "next/link"

export default function Offer2() {
    return (
        <>

            <section className="offer-sectionv04 pt-space pb-space position-relative">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                                What <span className="fw-400">We Can Do for</span>
                                <span className="d-block fw-bold">
                                    Our Clients
                                </span>
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            view all service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={800} data-aos-delay={500}>
                            <div className="offer-item d-md-grid d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-9 p-xl-5 p-4">
                                <div className="icon-area d-flex justify-content-between mb-md-0 mb-4">
                                    <img src="/assets/img/element/offer1.png" alt="img" />
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-4 mb-xl-4 mb-3">
                                        <Link href="/contact">product Design</Link>
                                    </h5>
                                    <p className="pra-clr mb-xxl-5 mb-xl-4 mb-3">
                                        Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis
                                        consectetur sed eu neque. Curabitur
                                        fermentum eu dolor ac
                                    </p>
                                    <Link href="/contact" className="btn-hover white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
                            <div className="offer-item d-md-grid d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-9 p-xl-5 p-4">
                                <div className="icon-area d-flex justify-content-between mb-md-0 mb-4">
                                    <img src="/assets/img/element/offer2.png" alt="img" />
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        02
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-4 mb-xl-4 mb-3">
                                        <Link href="/contact">UI/UX design</Link>
                                    </h5>
                                    <p className="pra-clr mb-xxl-5 mb-xl-4 mb-3">
                                        Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis
                                        consectetur sed eu
                                        neque. Curabitur
                                        fermentum eu dolor ac
                                    </p>
                                    <Link href="/contact" className="btn-hover white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
                            <div className="offer-item d-md-grid d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-9 p-xl-5 p-4">
                                <div className="icon-area d-flex justify-content-between mb-md-0 mb-4">
                                    <img src="/assets/img/element/offer3.png" alt="img" />
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        03
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-4 mb-xl-4 mb-3">
                                        <Link href="/contact">Branding Design</Link>
                                    </h5>
                                    <p className="pra-clr mb-xxl-5 mb-xl-4 mb-3">
                                        Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis
                                        consectetur sed eu
                                        neque. Curabitur
                                        fermentum eu dolor ac
                                    </p>
                                    <Link href="/contact" className="btn-hover white-clr d-flex gap-4">
                                        Explore More
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
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
