

import { urlForImage } from "@/sanity/lib/image"

export default function Product1({ data }) {
    return (
        <>

            <section className="about-product pt-space">
                <div className="container">
                    <div className="row g-xxl-7 g-5">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img src={data?.image ? urlForImage(data.image).url() : "/assets/img/element/about.png"} alt="img" className="w-100" />
                            </div>
                            <div className="about-product-thumb w-100 mt-4" data-aos="zoom-in" data-aos-duration={2100}>
                                <img src="/assets/img/element/image2.jpg" alt="Decorative image" className="w-100 rounded-4" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content ps-xxl-10">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                        {data?.tagline || 'WHY CHOOSE US'}
                                    </div>
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={1600} dangerouslySetInnerHTML={{ __html: data?.heading || 'Beyond Services: AI-First Creative <br><span class="theme-clr" style="font-style: normal;">& Growth Execution</span>' }} />
                                    <div className="new-content-wrapper mb-xxl-9 mb-xl-7 mb-xl-6 mb-6">
                                        <p className="white-clr mb-4 fs-5 fw-medium" style={{ lineHeight: '1.7', opacity: '0.9' }} data-aos="fade-up" data-aos-duration={1700}>
                                            Moving beyond traditional agency services, we combine strategy with modern, AI-first technology and efficient workflows. With our hybrid team of engineers and artists, we bring everything under one roof, so you don’t have to juggle multiple vendors.
                                        </p>

                                        <div className="result-panel p-4 p-xl-5 mb-4 rounded-4" style={{ background: 'rgba(233, 254, 73, 0.08)', border: '1px solid rgba(233, 254, 73, 0.18)' }} data-aos="fade-up" data-aos-duration={1900}>
                                            <h5 className="theme-clr mb-3 fs-5 fw-semibold" style={{ letterSpacing: '1px' }}>THE RESULT?</h5>
                                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-start gap-3 white-clr fs-6 opacity-75">
                                                    <i className="fas fa-check-circle theme-clr mt-1"></i>
                                                    <span>Your team moves faster, with fewer bottlenecks and clearer direction.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-3 white-clr fs-6 opacity-75">
                                                    <i className="fas fa-check-circle theme-clr mt-1"></i>
                                                    <span>From design to development to marketing, everything works together seamlessly.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-3 white-clr fs-6 opacity-75">
                                                    <i className="fas fa-check-circle theme-clr mt-1"></i>
                                                    <span>Your brand stays consistent, execution stays sharp, and growth stays optimized.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="white-clr mb-0 fs-6 opacity-75" style={{ lineHeight: '1.75' }} data-aos="fade-up" data-aos-duration={2100}>
                                            We go beyond traditional agency models by combining AI, creativity, and technology into one streamlined workflow. By rethinking how digital work is planned and executed, we help your team move faster, reduce back-and-forth, and maintain strong brand consistency across every channel. Acting as an extension of your business, we deliver high-quality design, development, and marketing that not only looks good but performs, scales, and drives measurable growth.
                                        </p>
                                    </div>
                                    {/* <div className="discover-dating" data-aos="fade-up" data-aos-duration={2200}>
                                        <div className="allyear d-flex align-items-center justify-content-between mb-xxl-4 mb-xl-3">
                                            <h5 className="fw-medium theme-clr">
                                                2019
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2021
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2023
                                            </h5>
                                        </div>
                                        <div className="allyear-content d-flex justify-content-between">
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    Website of the day
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    National design contest
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    Apps of the day
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
