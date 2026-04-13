
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

export default function Testimonial2() {
    return (
        <>

            <section className="testimonial-version02-section pb-space position-relative">
                <div className="container position-relative">
                    <div className="row g-6">
                        <div className="col-lg-5">
                            <div className="testimonial-thumbv02 w-100 position-relative" data-aos="zoom-in" data-aos-duration={1400} data-aos-delay={50}>
                                <img src="/assets/img/testimonial/testimonialv2.png" alt="img" className="w-100" />
                                <span className="arrow-element">
                                    <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem">
                                            <div className="content ms-xl-15">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="ratting-area d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                    </div>
                                                    <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                        <svg width={53} height={38} viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M45.5 22.5V22H45H37.5C33.6394 22 30.5 18.8606 30.5 15V7.5C30.5 3.63942 33.6394 0.5 37.5 0.5H45C48.8606 0.5 52 3.63942 52 7.5V11.25V15V23.4375C52 30.9309 45.9309 37 38.4375 37H37.5C35.7019 37 34.25 35.5481 34.25 33.75C34.25 31.9519 35.7019 30.5 37.5 30.5H38.4375C42.3347 30.5 45.5 27.3347 45.5 23.4375V22.5ZM15.5 22.5V22H15H7.5C3.63942 22 0.5 18.8606 0.5 15V7.5C0.5 3.63942 3.63942 0.5 7.5 0.5H15C18.8606 0.5 22 3.63942 22 7.5V11.25V15V23.4375C22 30.9309 15.9309 37 8.4375 37H7.5C5.70192 37 4.25 35.5481 4.25 33.75C4.25 31.9519 5.70192 30.5 7.5 30.5H8.4375C12.3347 30.5 15.5 27.3347 15.5 23.4375V22.5Z" stroke="#E3FF04" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="pra-clr mb-xxl-8 mb-xl-6 mb-lg-5 mb-4">
                                                    Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque
                                                    sagittis, massa ac luctus facilisis, dui diam egestas
                                                    sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin
                                                    mollis, ligula mollis tempus condimentum, urna
                                                    mauris pretium tellus, eu.
                                                </p>
                                                <div className="vector d-md-block d-none mb-xxl-5 mb-4 w-100">
                                                    <img src="/assets/img/element/testi-v2-element.png" alt="img" className="w-100" />
                                                </div>
                                                <div className="d-flex align-items-center gap-xxl-3 gap-2">
                                                    <div className="savannah">
                                                        <img src="/assets/img/testimonial/nguyen.png" alt="img" />
                                                    </div>
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem">
                                            <div className="content ms-xl-15">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="ratting-area d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                        <i className="fa-solid fa-star theme-clr" />
                                                    </div>
                                                    <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                        <svg width={53} height={38} viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M45.5 22.5V22H45H37.5C33.6394 22 30.5 18.8606 30.5 15V7.5C30.5 3.63942 33.6394 0.5 37.5 0.5H45C48.8606 0.5 52 3.63942 52 7.5V11.25V15V23.4375C52 30.9309 45.9309 37 38.4375 37H37.5C35.7019 37 34.25 35.5481 34.25 33.75C34.25 31.9519 35.7019 30.5 37.5 30.5H38.4375C42.3347 30.5 45.5 27.3347 45.5 23.4375V22.5ZM15.5 22.5V22H15H7.5C3.63942 22 0.5 18.8606 0.5 15V7.5C0.5 3.63942 3.63942 0.5 7.5 0.5H15C18.8606 0.5 22 3.63942 22 7.5V11.25V15V23.4375C22 30.9309 15.9309 37 8.4375 37H7.5C5.70192 37 4.25 35.5481 4.25 33.75C4.25 31.9519 5.70192 30.5 7.5 30.5H8.4375C12.3347 30.5 15.5 27.3347 15.5 23.4375V22.5Z" stroke="#E3FF04" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="pra-clr mb-xxl-8 mb-xl-6 mb-lg-5 mb-4">
                                                    Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque
                                                    sagittis, massa ac luctus facilisis, dui diam egestas
                                                    sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin
                                                    mollis, ligula mollis tempus condimentum, urna
                                                    mauris pretium tellus, eu.
                                                </p>
                                                <div className="vector d-md-block d-none mb-xxl-5 mb-4 w-100">
                                                    <img src="/assets/img/element/testi-v2-element.png" alt="img" className="w-100" />
                                                </div>
                                                <div className="d-flex align-items-center gap-xxl-3 gap-2">
                                                    <div className="savannah">
                                                        <img src="/assets/img/testimonial/nguyen.png" alt="img" />
                                                    </div>
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
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                        <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                            <i className="fa-solid fa-angle-left" />
                        </button>
                        <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                            <i className="fa-solid fa-angle-right" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
