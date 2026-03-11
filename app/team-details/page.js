

'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaInstagram } from "react-icons/fa";

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
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 14,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
}
export default function TeamDetails() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Team Details">
                <section className="team-details pt-space pb-space">
                    <div className="container">
                        <div className="team-details-box cmn-border d-lg-flex d-grid justify-content-lg-start justify-content-center align-items-center gap-xxl-7 gap-xl-4 gap-lg-3 p-xxl-7 p-xl-5 p-lg-4 p-3 mb-xxl-15 mb-xl-10 mb-8" data-aos="zoom-in" data-aos-duration={2000}>
                            <div className="thumb text-lg-start text-center mb-4 w-lg-auto w-100" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <img src="/assets/img/element/sibghat-bhai.jpeg" alt="img" className="w-lg-auto w-100" />
                            </div>
                            <div className="content text-lg-start text-center">
                                <h4 className="white-clr mb-xxl-4 mb-xl-3 mb-2">
                                    Sibghat Shaikh
                                </h4>
                                <span className="pra-clr">
                                    CEO ( Chief Executive Officer )
                                </span>
                                <p className="pra-clr mt-xxl-4 mt-xl-3 mt-2">
                                    Sibghat Shaikh is the visionary CEO of Aktivacity, an innovative IT company shaping the future of digital technology. With a passion for creativity and cutting-edge solutions, he leads teams to deliver excellence in web, app, and software development.
                                </p>
                                <ul className="leslie-info d-flex justify-content-lg-start justify-content-center flex-wrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-md-4 gap-3 bb-border bt-border py-xxl-5 py-xl-4 py-lg-3 py-2 my-xxl-8 my-xl-7 my-lg-6 my-5">
                                    <li className="pra-clr">
                                        Experience: 10 Years
                                    </li>
                                    <li className="pra-clr">
                                        Phone: +97 155 1744 370
                                    </li>
                                    <li className="pra-clr">
                                        Email: info@exmple.com
                                    </li>
                                </ul>
                                <ul className="common-social justify-content-lg-start d-flex justify-content-center align-items-center gap-2">
                                    <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                        <Link href="https://www.facebook.com/share/19obMxoAVf/?mibextid=wwXIfr" className="d-center">
                                            <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                    <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6308_282244">
                                                        <rect width={10} height={16} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                        <Link href="https://x.com/sibghat382?s=21" className="d-center">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                        <Link href="https://www.linkedin.com/in/sibghatshaikh/" className="d-center">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8">
                                                    <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                </g>
                                            </svg>
                                        </Link>
                                    </li>
                                    {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                        <Link href="/#" className="d-center">
                                            <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="case-study-detials-inner">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Professional Info
                            </h4>
                            <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 bb-border pb-xxl-13 pb-xl-10 pb-8 ">
                                <p className="pra-clr challenge-pra1" data-aos="zoom-in-left" data-aos-duration={1400}>
                                    Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum
                                    vehicula facilisis In pulvinar
                                    imperdiet venenatis Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                    per inceptos himenaeos. Donec eu
                                    pulvinar lorem.
                                    <span className="pra-clr mt-xxl-7 mt-xl-4 mt-3 d-block">
                                        Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar imperdiet venenatis.
                                        Class
                                        aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam
                                        vestibulum ligula quis nisl feugiat.
                                    </span>
                                </p>
                                <div className="result-progress-wrap w-100">
                                    <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                        <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                            <span className="conssub">
                                                Branding Design
                                            </span>
                                            <span className="cons">86%</span>
                                        </div>
                                        <div className="progress-solving">
                                            <div className="progress-bar" />
                                        </div>
                                    </div>
                                    <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                        <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                            <span className="conssub">
                                                Business
                                            </span>
                                            <span className="cons">96%</span>
                                        </div>
                                        <div className="progress-solving">
                                            <div className="progress-bar" />
                                        </div>
                                    </div>
                                    <div className="progres-item">
                                        <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                            <span className="conssub">
                                                Web Design
                                            </span>
                                            <span className="cons">90%</span>
                                        </div>
                                        <div className="progress-solving">
                                            <div className="progress-bar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <h3 className="related-title white-clr">
                               OUR TEAM
                            </h3>
                            <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60 mt-xxl-15 mt-xl-10 mt-9 mb-xxl-15 mb-xl-10 mb-9">
                                <button className="cmn-prev cmn-border d-center">
                                    <i className="fas fa-chevron-left" />
                                </button>
                                <button className="cmn-next cmn-border d-center">
                                    <i className="fas fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                        <div className="swiper team-slidewrap">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/summaya-3.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }}
                                            />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-uppercase white-clr d-block mb-2">
                                                    Senior Executive Human Resources
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                    SUMMAYA HIDAYAT
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2811">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/summaya-hidayat-6a2828315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/yousif.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }}
                                            />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    Project Management
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                        YOUSIF ALI KHAN DHAREJO
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://www.facebook.com/share/1ETXs9kdjc/?mibextid=wwXIfr" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/dharejo_here?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/yousif-ali-dharejo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img
                                                src="/assets/img/team/sooraj.jpeg"
                                                alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }}
                                            />

                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                     Sales Specialist
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                        SOORAJ CHHAVRIA
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://facebook.com/sun4rt" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://instagram.com/sun4rt" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/sun4rt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/farhan-3.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }} />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    Full Stack Developer
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                        FARHAN ALI
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://www.facebook.com/share/1CHwcL4SrF/?mibextid=wwXIfr" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/maybe_farhan.11?igsh=d2FwdTR2bDlvY3l3&utm_source=qr" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/farhan-ali-084a45323/" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                                 
                                  <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/ammar.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }} />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    Accounts Executive
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                 SYED AMMAR ALI
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href=" https://www.facebook.com/share/1G3m9ibzc8/" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/_ehteshamrafi_?igsh=cXA0cWJhZHY5d2R4" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/ehteshamrafi/" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               





                               
                                <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/iqbal-2.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }} />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    SEO Specialist
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                        MUHAMMAD IQBAL RAZA
                                                    {/* </Link>      */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://www.facebook.com/miraza606" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/miraza606/" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>

                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/miraza606" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                   <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/faizan.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }}

                                            />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    Business Development Executive
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                        MUHAMMAD FAIZAN SHEIKH
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://www.facebook.com/share/16cETK5Uug/" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2855">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/xfayzy?igsh=MWl4bWJobjRuMG4xZA==" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/faizan-sheikh-6080b122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="team-common-item">
                                        <div className="thumb position-relative overflow-hidden w-100">
                                            <img src="/assets/img/team/ahtisham-2.jpeg" alt="img"
                                                style={{ width: "400px", height: "512px", objectFit: "cover" }} />
                                            <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                                                <span className="text-capitalize white-clr d-block mb-2">
                                                    Business Development Executive
                                                </span>
                                                <h5>
                                                    {/* <Link href="/team-details" className="htheme white-clr"> */}
                                                    EHTESHAM RAFI
                                                    {/* </Link> */}
                                                </h5>
                                            </div>
                                            <ul className="common-social d-grid align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href=" https://www.facebook.com/share/1G3m9ibzc8/" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_2877">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://www.instagram.com/_ehteshamrafi_?igsh=cXA0cWJhZHY5d2R4" className="d-center">
                                                        <FaInstagram size={16} color="white" />
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/in/ehteshamrafi/" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                {/* <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="/#" className="d-center">
                                                        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                               
                               
                            </Swiper>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}