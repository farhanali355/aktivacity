

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

export default function Protfolio1() {
    return (
        <>

            <section className="protfolio-solution pb-space">
                <div className="container">
                    <div className="swiper protfolio-solutionwrap">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/banner/solution1.png" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Amazing Design
                                                <span className="d-block">
                                                    and Solutions
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/banner/solution1.png" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Amazing Design
                                                <span className="d-block">
                                                    and Solutions
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/banner/solution1.png" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Amazing Design
                                                <span className="d-block">
                                                    and Solutions
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/banner/solution1.png" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Amazing Design
                                                <span className="d-block">
                                                    and Solutions
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
        </>
    )
}
