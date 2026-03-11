
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

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-version01-section pt-20 pb-space position-relative">
                <div className="container">
                    <div className="section-title text-center mb-xxl-15 mb-xl-10 mb-8" data-aos="fade-up" data-aos-duration="1000">
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                            TESTIMONIALS
                        </div>
                        <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4 text-white">
                            What Our Clients <span className="theme-clr">Say About Us</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-11">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                    non odio porttitor, convallis erat sit amet,
                                                    facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,
                                                    ipsum ac fringilla.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Daniel Smith
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Senior engineer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                    non odio porttitor, convallis erat sit amet,
                                                    facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,
                                                    ipsum ac fringilla.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Daniel Smith
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Senior engineer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </section>
        </>
    )
}
