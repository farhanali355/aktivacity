
import Link from "next/link"

export default function Hero2() {
    return (
        <>

            <section className="hero-section-version2 position-relative">
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-between">
                        <div className="col-lg-8 col-md-7">
                            <div className="hero-v2-content">
                                <h1 className="mb-xxl-14 mb-xl-9 mb-lg-7 mb-6" data-aos="zoom-in" data-aos-duration={1500}>
                                    Digital <span className="regular">Solution</span>
                                    <span className="d-block">
                                        For Software
                                    </span>
                                </h1>
                                <div className="d-flex align-items-center gap-xxl-4 gap-3 mb-xxl-14 mb-xl-9 mb-lg-8 mb-6" data-aos="zoom-in-up" data-aos-duration={1600}>
                                    <div className="customer-review-active">
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar1.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar2.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar3.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar4.png" alt="img" />
                                        </Link>
                                    </div>
                                    <span className="customer-active">
                                        15k+ Active Customer
                                    </span>
                                </div>
                                <div className="d-flex flex-lg-nowrap flex-wrap align-items-center gap-xxl-7 gap-xl-5 gap-4" data-aos="zoom-in-up" data-aos-duration={1700}>
                                    <img src="/assets/img/banner/hero-ringle.png" alt="img" />
                                    <div className="ringle-content">
                                        <p className="white-clr mb-xxl-5 mb-xl-4 mb-3">
                                            Bring to the table win-win survival strategies to ensure proactive domination.
                                            At the end of the day, going forward, a
                                            new normal
                                        </p>
                                        <Link href="/about" className="explore-more d-inline-flex align-items-center gap-1">
                                            Explore More
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="hero-v2-thumb">
                                <img src="/assets/img/banner/hero-v2-thumb.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="hero-v2-element" />
                <img src="/assets/img/element/arrow-cmn.png" alt="img" className="hero-v2-arrow" />
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
