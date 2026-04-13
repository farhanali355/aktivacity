
import Link from "next/link"

export default function Blog3() {
    return (
        <>

            <section className="home-blog-version1 bg1-clr pt-space pb-space">
                <div className="container zindex position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                BLOG &amp; News
                            </div>
                            <h2 className="stitle">
                                Check Our <span className="fw-400">Company</span>
                                <span className="d-block fw-semibold">
                                    Inside Story
                                </span>
                            </h2>
                        </div>
                        <Link href="/blog-grid" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View all Artcile
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/blogv3-big.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <h5 className="mb-xxl-7 mb-xl-5 mb-4">
                                        <Link href="/blog-details" className="white-clr">
                                            non sit libero viverrid mollies Non ligula incident cangue porta attention
                                            simply
                                        </Link>
                                    </h5>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-content-wrapperv3 ps-xxl-15 pt-md-0 pt-5">
                                <div className="blog-v3-inner bb-border pb-xxl-6 pb-5">
                                    <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                                        <Link href="/blog-details" className="white-clr">
                                            non sit libero viverrid mollies Non ligula incident cangue porta attention
                                            simply
                                        </Link>
                                    </h5>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <Link href="/blog-details" className="blog-hover">
                                        <img src="/assets/img/blog/blog-hover1.png" alt="img" />
                                    </Link>
                                </div>
                                <div className="blog-v3-inner bb-border pb-xxl-6 pb-5 pt-xxl-6 pt-5">
                                    <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                                        <Link href="/blog-details" className="white-clr">
                                            Pellentesque dignissim malesuada varius et semper
                                            semper rutrum ad risus felis eros.
                                        </Link>
                                    </h5>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <Link href="/blog-details" className="blog-hover">
                                        <img src="/assets/img/blog/blog-hover2.png" alt="img" />
                                    </Link>
                                </div>
                                <div className="blog-v3-inner pt-xxl-6 pt-5">
                                    <h5 className="mb-xxl-7 mb-xl-5 mb-5">
                                        <Link href="/blog-details" className="white-clr">
                                            non sit libero viverra mollis Non ligula tincidunt
                                            congue porta attention simply
                                        </Link>
                                    </h5>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <Link href="/blog-details" className="blog-hover">
                                        <img src="/assets/img/blog/blog-hover3.png" alt="img" />
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
