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

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="About Aktivacity" breadcrumbSubTitle="Built to Redefine How Brands Grow with AI, Creativity & Technology">
                <div>
                    <section className="pt-space pb-space section-bg">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-5 mb-5 mb-lg-0">
                                    <div className="row g-4 position-relative z-index-1 align-items-center">
                                        {/* Left Column of Collage */}
                                        <div className="col-6 d-flex flex-column gap-4" data-aos="zoom-in-right" data-aos-duration={1500}>
                                            <div className="about-image-collage rounded-5 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '400px' }}>
                                                <img src="/assets/img/about/about_team_strategy.png" alt="Aktivacity Team Strategy" className="img-fluid w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="about-image-collage rounded-5 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '350px' }}>
                                                <img src="/assets/img/about/about_creative_workspace.png" alt="Creative Workspace" className="img-fluid w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        {/* Right Column of Collage */}
                                        <div className="col-6 d-flex flex-column gap-4 mt-sm-5 pt-sm-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                            <div className="about-image-collage rounded-5 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '240px' }}>
                                                <img src="/assets/img/about/about_ai_tech.png" alt="Aktivacity AI Tech" className="img-fluid w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="about-image-collage rounded-5 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '260px' }}>
                                                <img src="/assets/img/about/about_data_analytics.png" alt="Data Analytics" className="img-fluid w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="about-image-collage rounded-5 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '300px' }}>
                                                <img src="/assets/img/about/about_digital_growth.png" alt="Aktivacity Digital Growth" className="img-fluid w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                ABOUT AKTIVACITY
                                            </div>
                                            <h2 className="stitle mb-xxl-8 mb-xl-7 mb-lg-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                                Our Story &amp; Purpose
                                            </h2>
                                            <div data-aos="zoom-in-up" data-aos-duration={1400} className="mb-xxl-8 mb-xl-8 mb-5">
                                                <p className="white-clr mb-4 fs-5 opacity-75">
                                                    In a fast-changing digital world, businesses often struggle to manage separate teams for technology, marketing, and design. Aktivacity was created to simplify that complexity.
                                                </p>
                                                <p className="white-clr mb-4 fs-5 opacity-75">
                                                    What started as a vision to connect creativity with advanced technology has evolved into a unified system where AI, strategy, and execution work together. The goal is simple—help businesses move faster, make smarter decisions, and achieve sustainable growth.
                                                </p>
                                                <p className="white-clr fs-5 opacity-75">
                                                    Today, Aktivacity supports startups, SMEs, and enterprises by delivering solutions that are built to scale, adapt, and perform in competitive markets.
                                                </p>
                                            </div>
                                            <div className="built-differently-box p-4 p-md-5 rounded-4 mt-5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }} data-aos="zoom-in-up" data-aos-duration={1800}>
                                                <h4 className="theme-clr mb-3 fs-3 fw-bold">Built Differently: AI-First, Execution-Focused</h4>
                                                <p className="white-clr opacity-75 mb-4 fs-6">
                                                    Traditional agencies focus on services. Aktivacity focuses on outcomes.<br/>Every project is approached with:
                                                </p>
                                                <ul className="list-unstyled mb-4">
                                                    <li className="d-flex align-items-center gap-3 mb-3 white-clr fs-5">
                                                        <i className="fas fa-check-circle theme-clr"></i>
                                                        AI-driven workflows
                                                    </li>
                                                    <li className="d-flex align-items-center gap-3 mb-3 white-clr fs-5">
                                                        <i className="fas fa-check-circle theme-clr"></i>
                                                        Data-backed decision making
                                                    </li>
                                                    <li className="d-flex align-items-center gap-3 white-clr fs-5">
                                                        <i className="fas fa-check-circle theme-clr"></i>
                                                        Cross-functional execution
                                                    </li>
                                                </ul>
                                                <p className="theme-clr m-0 fst-italic fw-medium">
                                                    <i className="fas fa-info-circle me-2"></i> This reduces delays, improves quality, and ensures consistency across every touchpoint from product to marketing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cmn About End */}
                    {/* Cmn Team stafs Start */}
                                        <section className="team-staft pt-space pb-space position-relative" style={{ backgroundImage: 'url(/assets/img/banner/hero-bg1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.85)' }}></div>
                        <div className="team-staft-slidewrap pb-space position-relative z-index-1">
                            <div className="digital-marketing mb-lg-0 mb-10">
                                <div className="comm">
                                    {[
                                        { num: "01", title: "Development Services", img: "development.jpg" },
                                        { num: "02", title: "Digital Marketing", img: "digital.webp" },
                                        { num: "03", title: "AI Services", img: "video.jpg" },
                                        { num: "04", title: "Designs & Branding", img: "branding.jpg" }
                                    ].map((item, idx) => (
                                        <div className="cmn-textslide d-grid position-relative" key={"s11"+idx}>
                                            <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                {item.num}
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            {item.title}
                                            <span className="digital-thumb">
                                                <img src={"/assets/img/element/" + item.img} alt="img" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="comm">
                                    {[
                                        { num: "01", title: "Development Services", img: "development.jpg" },
                                        { num: "02", title: "Digital Marketing", img: "digital.webp" },
                                        { num: "03", title: "AI Services", img: "video.jpg" },
                                        { num: "04", title: "Designs & Branding", img: "branding.jpg" }
                                    ].map((item, idx) => (
                                        <div className="cmn-textslide d-grid position-relative" key={"s12"+idx}>
                                            <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                {item.num}
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            {item.title}
                                            <span className="digital-thumb">
                                                <img src={"/assets/img/element/" + item.img} alt="img" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="digital-marketing text-slie-reverse">
                                <div className="comm">
                                    {[
                                        { num: "01", title: "Designs & Branding", img: "branding.jpg" },
                                        { num: "02", title: "AI Services", img: "video.jpg" },
                                        { num: "03", title: "Digital Marketing", img: "digital.webp" },
                                        { num: "04", title: "Development Services", img: "development.jpg" }
                                    ].map((item, idx) => (
                                        <div className="cmn-textslide d-grid position-relative" key={"s21"+idx}>
                                            <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                {item.num}
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            {item.title}
                                            <span className="digital-thumb">
                                                <img src={"/assets/img/element/" + item.img} alt="img" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="comm">
                                    {[
                                        { num: "01", title: "Designs & Branding", img: "branding.jpg" },
                                        { num: "02", title: "AI Services", img: "video.jpg" },
                                        { num: "03", title: "Digital Marketing", img: "digital.webp" },
                                        { num: "04", title: "Development Services", img: "development.jpg" }
                                    ].map((item, idx) => (
                                        <div className="cmn-textslide d-grid position-relative" key={"s22"+idx}>
                                            <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                {item.num}
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            {item.title}
                                            <span className="digital-thumb">
                                                <img src={"/assets/img/element/" + item.img} alt="img" />
                                            </span>
                                        </div>
                                    ))}
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
                                {[{
                                    name: "SUMMAYA HIDAYAT", role: "Senior Human Resources", img: "summaya-4.jpeg", fb: "https://www.facebook.com/", ig: "https://www.instagram.com/", in: "https://www.linkedin.com/in/summaya-hidayat-6a2828315"
                                }, {
                                    name: "YOUSIF ALI DHAREJO", role: "Project Management", img: "yousif-2.jpeg", fb: "https://www.facebook.com/share/1ETXs9kdjc/", ig: "https://www.instagram.com/dharejo_here", in: "https://www.linkedin.com/in/yousif-ali-dharejo"
                                }, {
                                    name: "SOORAJ CHHABRIA", role: "Sales Specialist", img: "sooraj-2.jpeg", fb: "https://facebook.com/sun4rt", ig: "https://instagram.com/sun4rt", in: "https://www.linkedin.com/in/sun4rt"
                                }, {
                                    name: "FARHAN ALI", role: "Full Stack Developer", img: "farhan-5.jpeg", fb: "https://www.facebook.com/share/1CHwcL4SrF/", ig: "https://www.instagram.com/maybe_farhan.11", in: "https://www.linkedin.com/in/farhan-ali-084a45323"
                                }, {
                                    name: "IQBAL RAZA", role: "SEO Specialist", img: "iqbal-3.jpeg", fb: "https://www.facebook.com/miraza606", ig: "https://www.instagram.com/miraza606/", in: "https://www.linkedin.com/in/miraza606"
                                }, {
                                    name: "FAIZAN SHAIKH", role: "Sales Specialist", img: "faizan-2.jpeg", fb: "https://www.facebook.com/share/16cETK5Uug/", ig: "https://www.instagram.com/xfayzy", in: "https://www.linkedin.com/in/faizan-sheikh-6080b122a"
                                }, {
                                    name: "EHTESHAM RAFI", role: "Sales Specialist", img: "ahtisham-3.jpeg", fb: "https://www.facebook.com/", ig: "https://www.instagram.com/_ehteshamrafi_", in: "https://www.linkedin.com/in/ehteshamrafi/"
                                }, {
                                    name: "MUHAMMAD FARHAT", role: "Graphic Designer", img: "ahtisham-3.jpeg", fb: "https://www.facebook.com/", ig: "https://www.instagram.com/", in: "https://www.linkedin.com/"
                                }].map((staff, idx) => (
                                    <Tilt options={toltOptions} key={idx} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400 + (idx % 4) * 200}>
                                        <div className="team-staf-item tilt bg2-clr text-center py-xxl-8 py-xl-6 py-5 px-xxl-7 px-xl-5 px-4 mb-4">
                                            <div className="thumb">
                                                <img src={`/assets/img/team/${staff.img}`} alt="img" />
                                            </div>
                                            <div className="content bb-border pb-xxl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">
                                                <h6 className="m-3 white-clr">
                                                    {staff.name}
                                                </h6>
                                                <span className="pra-clr">
                                                    {staff.role}
                                                </span>
                                            </div>
                                            <ul className="trans-social d-flex align-items-center justify-content-center gap-xxl-5 gap-xl-4 gap-3">
                                                <li>
                                                    <Link href={staff.fb}>
                                                        <svg width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0391 11.25L10.5859 7.65625H7.10938V5.3125C7.10938 4.29688 7.57812 3.35938 9.14062 3.35938H10.7422V0.273438C10.7422 0.273438 9.29688 0 7.92969 0C5.07812 0 3.20312 1.75781 3.20312 4.88281V7.65625H0V11.25H3.20312V20H7.10938V11.25H10.0391Z" fill="#454750" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={staff.ig}>
                                                        <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.7645 4.84375C7.90737 4.84375 5.63058 7.16518 5.63058 9.97768C5.63058 12.8348 7.90737 15.1116 10.7645 15.1116C13.577 15.1116 15.8984 12.8348 15.8984 9.97768C15.8984 7.16518 13.577 4.84375 10.7645 4.84375ZM10.7645 13.3259C8.93415 13.3259 7.41629 11.8527 7.41629 9.97768C7.41629 8.14732 8.88951 6.67411 10.7645 6.67411C12.5949 6.67411 14.0681 8.14732 14.0681 9.97768C14.0681 11.8527 12.5949 13.3259 10.7645 13.3259ZM17.2824 4.66518C17.2824 3.99554 16.7467 3.45982 16.077 3.45982C15.4074 3.45982 14.8717 3.99554 14.8717 4.66518C14.8717 5.33482 15.4074 5.87054 16.077 5.87054C16.7467 5.87054 17.2824 5.33482 17.2824 4.66518ZM20.6752 5.87054C20.5859 4.26339 20.2288 2.83482 19.0681 1.67411C17.9074 0.513393 16.4788 0.15625 14.8717 0.0669643C13.2199 -0.0223214 8.26451 -0.0223214 6.61272 0.0669643C5.00558 0.15625 3.62165 0.513393 2.41629 1.67411C1.25558 2.83482 0.898438 4.26339 0.809152 5.87054C0.719866 7.52232 0.719866 12.4777 0.809152 14.1295C0.898438 15.7366 1.25558 17.1205 2.41629 18.3259C3.62165 19.4866 5.00558 19.8438 6.61272 19.933C8.26451 20.0223 13.2199 20.0223 14.8717 19.933C16.4788 19.8438 17.9074 19.4866 19.0681 18.3259C20.2288 17.1205 20.5859 15.7366 20.6752 14.1295C20.7645 12.4777 20.7645 7.52232 20.6752 5.87054ZM18.5324 15.8705C18.2199 16.7634 17.5056 17.433 16.6574 17.7902C15.3181 18.3259 12.1931 18.192 10.7645 18.192C9.2913 18.192 6.16629 18.3259 4.87165 17.7902C3.97879 17.433 3.30915 16.7634 2.95201 15.8705C2.41629 14.5759 2.55022 11.4509 2.55022 9.97768C2.55022 8.54911 2.41629 5.42411 2.95201 4.08482C3.30915 3.23661 3.97879 2.56696 4.87165 2.20982C6.16629 1.67411 9.2913 1.80804 10.7645 1.80804C12.1931 1.80804 15.3181 1.67411 16.6574 2.20982C17.5056 2.52232 18.1752 3.23661 18.5324 4.08482C19.0681 5.42411 18.9342 8.54911 18.9342 9.97768C18.9342 11.4509 19.0681 14.5759 18.5324 15.8705Z" fill="#454750" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={staff.in}>
                                                        <svg width={21} height={21} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.22 8H4.77V24H0.22V8ZM8.45 8H12.84V10.2H12.9C13.5 9.07 15 7.86 17.25 7.86C21.36 7.86 22 10.55 22 14.25V24H17.45V15.23C17.45 13.1 17.4 10.47 14.56 10.47C11.67 10.47 11.26 12.73 11.26 15.08V24H6.7V8H8.45Z" fill="#454750" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tilt>
                                ))}
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