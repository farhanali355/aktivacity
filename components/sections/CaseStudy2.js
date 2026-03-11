'use client'
import Link from "next/link"
import { useState } from 'react'

export default function CaseStudy2() {
    const [isTab, setIsTab] = useState(1)

    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <section className="case-study-section pt-space pb-space position-relative">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                Case Study
                            </div>
                            <h2 className="stitle">
                                Our Resent <span className="fw-400">Case Study</span>
                            </h2>
                        </div>
                        <Link href="/study-grid" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            VIEW ALL PORTFOLIO
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="onhover-tabbing-wrap">
                        <div className="row align-items-center g-xxl-10 g-xl-8 g-5">
                            <div className="col-lg-4">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className={isTab === 1 ? "tab-pane fade show active" : "tab-pane fade"} >
                                        <div className="tcase-thumb">
                                            <img src="/assets/img/case/tcase1.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="tcase-thumb">
                                            <img src="/assets/img/case/tcase2.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="tcase-thumb">
                                            <img src="/assets/img/case/tcase1.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className={isTab === 4 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="tcase-thumb">
                                            <img src="/assets/img/case/tcase2.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist" data-toggle="tab-hover">
                                    <div className={`nav-link px-0 pb-xxl-10 pb-xl-8 pb-lg-6 pb-4 ${isTab === 1 ? "active" : ""}`}
                                        onMouseOver={() => handleTab(1)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Development
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Where Vision Meets Technology
                                            </h4>
                                        </div>
                                        <Link href="/study-details" className="right-info d-flex align-items-center gap-4">
                                            VIEW portfolio
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 2 ? "active" : ""}`}
                                        onMouseOver={() => handleTab(2)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Development
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Studio Navigating The Digital Wave
                                            </h4>
                                        </div>
                                        <Link href="/study-details" className="right-info d-flex align-items-center gap-4">
                                            VIEW portfolio
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 3 ? "active" : ""}`}
                                        onMouseOver={() => handleTab(3)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Development
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Smart Design, Smarter Solutions
                                            </h4>
                                        </div>
                                        <Link href="/study-details" className="right-info d-flex align-items-center gap-4">
                                            VIEW portfolio
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === 4 ? "active" : ""}`}
                                        onMouseOver={() => handleTab(4)}>
                                        <div className="info-left">
                                            <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                                                Development
                                            </span>
                                            <h4 className="white-clr text-start">
                                                Software Development
                                            </h4>
                                        </div>
                                        <Link href="/study-details" className="right-info d-flex align-items-center gap-4">
                                            VIEW portfolio
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
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
