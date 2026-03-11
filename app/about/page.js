'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Tilt } from 'react-tilt'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// import { FaLinkedin } from "react-icons/fa";
// import Link from "next/link";


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

const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}
export default function About() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="About Aktivacity">
                <div>
                    <section className="pt-space pb-space section-bg">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-14">
                                    <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                        <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                            <img src="/assets/img/element/download.png" alt="img" className="w-100" />
                                        </div>
                                        <div className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3" data-aos="zoom-in" data-aos-duration={1800}>
                                            <img src="/assets/img/about/about-s2.png" alt="img" className="w-100" />
                                        </div>
                                        {/*- About Arrow */}
                                        <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="about-tumb-arrow" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                ABOUT AKTIVACITY
                                            </div>
                                            <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                                <img src="/assets/img/element/arrow-right-storke.png" alt="img" data-aos="zoom-in-up" data-aos-duration={2000} />
                                                To Create Artistic &amp; Creative Design
                                            </h2>
                                            <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                                Bring to the table win-win survival strategies to ensure proactive domination. At
                                                the end of the day, going forward, a
                                                new normal that has evolved from generation on the runway heading towards a
                                                streamlined cloud.
                                            </p>
                                            <div className="result-progress-wrap" data-aos="zoom-in-up" data-aos-duration={1800}>
                                                <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Branding Design
                                                        </span>
                                                        <span className="cons">88%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                                <div className="progres-item">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Business
                                                        </span>
                                                        <span className="cons">96%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cmn About End */}
                    {/* Cmn Team stafs Start */}
                    <section className="team-staft pt-space pb-space">
                        <div className="team-staft-slidewrap pb-space">
                            <div className="digital-marketing mb-lg-0 mb-10">
                                <div className="comm">
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            01
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Web & App Development
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/development.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            02
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Digital Marketing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/digital.webp" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            03
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Ecommerce
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/ecom.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            04
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Advertising
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/advertising.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            01
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Web & App Development
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/development.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            02
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Digital Marketing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/digital.webp" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            03
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Ecommerce
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/ecom.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            04
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Advertising
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/advertising.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="digital-marketing text-slie-reverse">
                                <div className="comm">
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            01
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Branding
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/branding.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            02
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Designing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/designing.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            03
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Film Making
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/film.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            04
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Video Editing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/video.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="comm">

                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            01
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Branding
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/branding.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            02
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Designing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/designing.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            03
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Film Making
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/film.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="cmn-textslide d-grid position-relative">
                                        <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                            04
                                            <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </span>
                                        Video Editing
                                        <span className="digital-thumb">
                                            <img src="/assets/img/element/video.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        oUR experts
                                    </div>
                                    <h2 className="stitle">
                                        Meet our <span className="fw-400">creative</span> staff
                                    </h2>
                                </div>
                                {/* <Link href="/service-details" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                                    view all teams
                                    <span className="rot60 d-inline-block">
                                        <i className="fas fa-arrow-up theme-clr" />
                                    </span>
                                </Link> */}
                            </div>
                            <div className="row g-xxl-7 g-xl-5 g-4 justify-content-center">
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/summaya-4.jpeg" alt="img" id="staff-image" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                SUMMAYA HIDAYAT
                                            </h6>
                                            <span className="pra-clr">
                                                Senior  Human Resources
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                {/* <Link href="/#"> */}
                                                <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                </svg>
                                                {/* </Link> */}
                                            </li>
                                            <li>
                                                {/* <Link href="/#"> */}
                                                <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                </svg>
                                                {/* </Link> */}
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/summaya-hidayat-6a2828315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>


                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/yousif-2.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                YOUSIF ALI DHAREJO
                                            </h6>
                                            <span className="pra-clr">
                                                Project Management
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/share/1ETXs9kdjc/?mibextid=wwXIfr">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/dharejo_here?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/yousif-ali-dharejo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/sooraj-2.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                SOORAJ CHHABRIA                                            </h6>
                                            <span className="pra-clr">
                                                Sales Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://facebook.com/sun4rt">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://instagram.com/sun4rt">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/sun4rt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                {/* <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/ammar-2.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                SYED AMMAR ALI
                                            </h6>
                                            <span className="pra-clr">
                                                Account Executive
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/share/1Ls3UBYSs4/
                                                ">
                                                <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/syedammarali_?igsh=MWRmaGx2MWprc3R3bg==">
                                                <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="http://www.linkedin.com/in/syed-ammar-ali-94594b169">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt> */}
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/farhan-5.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                FARHAN ALI
                                            </h6>
                                            <span className="pra-clr">
                                                Full Stack Developer
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/share/1CHwcL4SrF/?mibextid=wwXIfr">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/maybe_farhan.11?igsh=d2FwdTR2bDlvY3l3&utm_source=qr">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/farhan-ali-084a45323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1600}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/iqbal-3.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                IQBAL RAZA
                                            </h6>
                                            <span className="pra-clr">
                                                SEO Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/miraza606">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/miraza606/">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/miraza606">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1800}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/faizan-2.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                FAIZAN SHAIKH
                                            </h6>
                                            <span className="pra-clr">
                                                Sales Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/share/16cETK5Uug/">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/xfayzy?igsh=MWl4bWJobjRuMG4xZA==">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/faizan-sheikh-6080b122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={2000}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/ahtisham-3.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                EHTESHAM RAFI
                                            </h6>
                                            <span className="pra-clr">
                                                Sales Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="https://www.facebook.com/share/1G3m9ibzc8/">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/_ehteshamrafi_?igsh=cXA0cWJhZHY5d2R4">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/ehteshamrafi/">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={2000}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/ahtisham-3.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                MUHAMMAD FARHAT
                                            </h6>
                                            <span className="pra-clr">
                                                Graphic Designer
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="/#">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>  <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={2000}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/ahtisham-3.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                EHTESHAM RAFI
                                            </h6>
                                            <span className="pra-clr">
                                                Sales Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="/#">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>  <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={2000}>
                                    <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4">
                                        <div className="thumb">
                                            <img src="/assets/img/team/ahtisham-3.jpeg" alt="img" />
                                        </div>
                                        <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                            <h6 className="m-3 white-clr">
                                                EHTESHAM RAFI
                                            </h6>
                                            <span className="pra-clr">
                                                Sales Specialist
                                            </span>
                                        </div>
                                        <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                            <li>
                                                <Link href="/#">
                                                    <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <svg
                                                        width={21}
                                                        height={21}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z"
                                                            fill="#454750"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                            </div>
                        </div>
                    </section>
                    {/* Cmn Team stafs End */}
                    {/* Testimonial version2 Start */}
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
                </div>

            </Layout>
        </>
    )
}