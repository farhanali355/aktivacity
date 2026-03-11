
import Link from "next/link"

export default function Hero3() {
    return (
        <>

            <section className="hero-section-version2 hero-section-version3 position-relative">
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-between">
                        <div className="col-lg-8 col-md-7">
                            <div className="hero-v3-content">
                                <h1 className="mb-xxl-14 mb-xl-9 mb-lg-7 mb-md-5 mb-5 text-md-start text-center" data-aos="zoom-in" data-aos-duration={1500}>
                                    <span className="d-flex justify-content-md-start justify-content-center align-items-center" data-aos="zoom-in-left" data-aos-duration={1400} data-aos-delay={5}>
                                        Driven By <span className="italic theme-clr">Quality</span>
                                    </span>
                                    <span className="d-flex justify-content-md-start justify-content-center align-items-center gap-xxl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        <svg width={72} height={72} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M52.3915 33.7021V65.566H72V0H6.43404V19.6085H38.2979L0 57.9064L14.0936 72L52.3915 33.7021Z" fill="#E3FF04" />
                                        </svg>
                                        <span className="italic">
                                            &amp;&nbsp;Dedicated to
                                        </span>
                                    </span>
                                    <span className="d-block" data-aos="zoom-in-right" data-aos-duration={1800}>
                                        Solutions
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="hero-v3-thumb d-md-block d-none">
                                <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="text-md-start text-center d-md-flex d-grid align-items-center justify-content-md-between justify-content-center mt-xxl-20 mt-xl-15 mt-lg-10 mt-md-0 mt-0">
                        <div className="about-sponsor">
                            <div className="brand d-flex gap-4 align-items-center mb-xxl-8 mb-xl-7 mb-lg-5 mb-4" data-aos="zoom-in-up" data-aos-duration={1600} data-aos-delay={5}>
                                <h6>
                                    1k + Brands Trust Us
                                </h6>
                                <span className="brand-border d-xl-block d-none">
                                </span>
                            </div>
                            <div className="sponsor-inner d-flex align-items-center gap-xxl-13 gap-xl-10 gap-lg-8 gap-md-6 gap-5 mb-xxl-10 mb-xl-7 mb-lg-6 mb-6" data-aos="zoom-in-up" data-aos-duration={1700} data-aos-delay={6}>
                                <Link href="/">
                                    <img src="/assets/img/client/c1.png" alt="img" />
                                </Link>
                                <Link href="/">
                                    <img src="/assets/img/client/c2.png" alt="img" />
                                </Link>
                                <Link href="/">
                                    <img src="/assets/img/client/c3.png" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="ringle-content" data-aos="zoom-in-up" data-aos-duration={1800} data-aos-delay={7}>
                            <p className="white-clr mb-xxl-5 mb-xl-3 mb-lg-3 mb-md-2 mb-1">
                                Bring to the table win-win survival strategies to ensure proactive domination.
                                At the end of the day, going forward, a
                                new normal
                            </p>
                            <Link href="/about" className="explore-more d-inline-flex align-items-center gap-2">
                                Explore More
                                <span className="rot60">
                                    <i className="fas fa-arrow-up" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="hero-v2-element" />
                {/* Element */}
                {/* Social */}
                <div className="spilit-socail d-flex align-items-center gap-xxl-16 gap-xl-10 gap-5">
                    <Link href="/#">
                        FaceBook
                    </Link>
                    <Link href="/#">
                        Twitter
                    </Link>
                    <Link href="/#">
                        Instagram
                    </Link>
                </div>
                {/* Social */}
            </section>
        </>
    )
}
