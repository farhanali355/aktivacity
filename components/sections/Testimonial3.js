

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 20,
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
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
    },
}

export default function Testimonial3() {
    return (
        <>

            <section className="testimonial-version02-section pb-space position-relative">
                <div className="container position-relative">
                    <div className="swiper testimonial-version03 position-relative">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-1.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Kathryn Murphy
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Marketing Coordinator
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is
                                            porta pretium metus aliquam eget maecenas porta
                                            is nunc viverra Aenean.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-3.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Leslie Alexander
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Web Designer
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is
                                            porta pretium metus aliquam eget maecenas porta
                                            is nunc viverra Aenean.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Savannah Nguyen
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Nursing Assistant
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is
                                            porta pretium metus aliquam eget maecenas porta
                                            is nunc viverra Aenean.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/testimonial/vector01.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            <div className="savannah">
                                                <img src="/assets/img/testimonial/testiv3-3.png" alt="img" />
                                            </div>
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    Leslie Alexander
                                                </h6>
                                                <span className="pra-clr mb-2 d-block">
                                                    Web Designer
                                                </span>
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                    <i className="fa-solid fa-star theme-clr" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4">
                                            Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is
                                            porta pretium metus aliquam eget maecenas porta
                                            is nunc viverra Aenean.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
