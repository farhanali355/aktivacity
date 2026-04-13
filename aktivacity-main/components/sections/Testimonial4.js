
'use client'
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
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}
export default function Testimonial4() {
    return (
        <>

            <section className="pt-space pb-space bg2-clr">
                <div className="container">
                    <div className="row g-md-5 g-6 align-items-end justify-content-between bb-border pb-xxl-15 pb-lg-10 pb-9 mb-xxl-15 mb-lg-10 mb-9">
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1500}>
                                        Testimonials
                                    </div>
                                    <h2 className="stitle" data-aos="zoom-in" data-aos-duration={1800}>
                                        Some Of Our <span className="fw-400">Respected</span> Happy Clients Say
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-right" data-aos-duration={1600}>
                            <div className="d-flex justify-content-md-end">
                                <div className="d-flex align-items-center gap-3">
                                    <ul className="customer-man d-flex align-items-center">
                                        <li>
                                            <img src="/assets/img/team/avatar1.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar2.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar3.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar4.png" alt="img" />
                                        </li>
                                    </ul>
                                    <div className="review-cont">
                                        <div className="d-flex align-items-center gap-2 mb-xl-2 mb-1">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-regular fa-star" />
                                        </div>
                                        <span className="texts">
                                            450+ reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center g-xxl-15 g-xl-8 g-lg-6 g-4">
                        <div className="col-lg-4">
                            <div className="testimonial-thumb-v2 w-100" data-aos="zoom-in" data-aos-duration={1800}>
                                <img src="/assets/img/testimonial/regulation-arrow.png" alt="img" className="w-100 h-100" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="swiper testimonial-wrapv2">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial-item2 bg1-clr p-xxl-15 p-xl-10 p-lg-6 p-sm-5 p-5">
                                            <svg width={60} height={43} viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 25.8H12.8571L4.28564 43H17.1428L25.7143 25.8V0H0V25.8Z" fill="#E3FF04" />
                                                <path d="M34.2852 0V25.8H47.1423L38.5708 43H51.4279L59.9994 25.8V0H34.2852Z" fill="#E3FF04" />
                                            </svg>
                                            <p className="pra-clr mt-xxl-10 mt-xl-8 mt-lg-7 mt-6 mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                                “Welcome to our digital agency We specialize in helping business most like
                                                yours
                                                succeed
                                                online. From website design and
                                                development to digital marketing agency”
                                            </p>
                                            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-3">
                                                    <img src="/assets/img/team/delors.png" alt="img" className="radius100" />
                                                    <div className="cont">
                                                        <div>
                                                            <h6 className="mb-2 white-clr">
                                                                Delores Olivo
                                                            </h6>
                                                            <span className="pra-clr">
                                                                Software Tester
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                                                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                                        <i className="fas fa-chevron-left" />
                                                    </button>
                                                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                                        <i className="fas fa-chevron-right" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item2 bg1-clr p-xxl-15 p-xl-10 p-lg-6 p-sm-5 p-5">
                                            <svg width={60} height={43} viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 25.8H12.8571L4.28564 43H17.1428L25.7143 25.8V0H0V25.8Z" fill="#E3FF04" />
                                                <path d="M34.2852 0V25.8H47.1423L38.5708 43H51.4279L59.9994 25.8V0H34.2852Z" fill="#E3FF04" />
                                            </svg>
                                            <p className="pra-clr mt-xxl-10 mt-xl-8 mt-lg-7 mt-6 mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                                “Welcome to our digital agency We specialize in helping business most like
                                                yours
                                                succeed
                                                online. From website design and
                                                development to digital marketing agency”
                                            </p>
                                            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-3">
                                                    <img src="/assets/img/team/delors.png" alt="img" className="radius100" />
                                                    <div className="cont">
                                                        <div>
                                                            <h6 className="mb-2 white-clr">
                                                                Delores Olivo
                                                            </h6>
                                                            <span className="pra-clr">
                                                                Software Tester
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                                                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                                        <i className="fas fa-chevron-left" />
                                                    </button>
                                                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                                        <i className="fas fa-chevron-right" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
