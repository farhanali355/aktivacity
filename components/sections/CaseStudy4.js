'use client'
import Link from "next/link"
import { useState } from 'react'

export default function CaseStudy4() {
    const [isTab, setIsTab] = useState(1)

    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <section className="case-staft-section bg1-clr pt-space pb-space position-relative">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                oUR experts
                            </div>
                            <h2 className="stitle">
                                Meet our <span className="fw-400">creative</span> Staff
                            </h2>
                        </div>
                        <Link href="/team" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            VIEW ALL Teams
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="onhover-tabbing-wrap position-relative">
                        <div className="row justify-content-between align-items-center g-xxl-10 g-xl-8 g-5">
                            <div className="col-lg-4">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className={isTab === 1 ? "tab-pane fade show active" : "tab-pane fade"} >
                                        <div className="staf-thumb">
                                            <img src="/assets/img/blog/nstaf1.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >
                                        <div className="staf-thumb">
                                            <img src="/assets/img/blog/nstar5.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >
                                        <div className="staf-thumb">
                                            <img src="/assets/img/blog/nstar6.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 4 ? "tab-pane fade show active" : "tab-pane fade"} >
                                        <div className="staf-thumb">
                                            <img src="/assets/img/blog/nstar7.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist" data-toggle="tab-hover">
                                    <div className={`nav-link px-0 pb-xxl-10 pb-xl-8 pb-lg-6 pb-4 ${isTab === 1 ? "active" : ""}`} onMouseOver={() => handleTab(1)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Marketing manager
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Brooklyn Simmons
                                            </h4>
                                        </div>
                                        <div className="social-profile">
                                            <ul>
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                            <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 2 ? "active" : ""}`} onMouseOver={() => handleTab(2)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Software Developer
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Cameron Williamson
                                            </h4>
                                        </div>
                                        <div className="social-profile">
                                            <ul>
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                            <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 3 ? "active" : ""}`} onMouseOver={() => handleTab(3)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Project Manager
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Ronald Richards
                                            </h4>
                                        </div>
                                        <div className="social-profile">
                                            <ul>
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                            <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 4 ? "active" : ""}`} onMouseOver={() => handleTab(4)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                UI/UX Designer
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Marvin McKinney
                                            </h4>
                                        </div>
                                        <div className="social-profile">
                                            <ul>
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                            <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
