import Link from "next/link"
import { FaInstagram } from "react-icons/fa";


export default function Footer3() {
    return (
        <>

            <footer className="footer-version-three bg1-clr">
                <div className="container">
                    <div className="footer-topversion-one pb-20">
                        <div className="footer-v3-titlewrap d-flex align-items-center gap-xxl-15 gap-xl-10 gap-md-8 gap-sm-5 gap-3 pb-xxl-15 pb-xl-10 pb-8">
                            <span className="footer-v3-title" data-aos="zoom-in-right" data-aos-duration={1800}>
                                Let’s talk!
                            </span>
                            <Link href="/contact">
                                <img src="/assets/img/element/download.png" alt="arrow" data-aos="zoom-in" data-aos-duration={2000} className="lets-talk-logo" />
                            </Link>
                        </div>
                        <div className="container">
                            <div className="footer-topversion-one pt-20 pb-20">
                                <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <div className="footer-widget">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                About Us
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                                Aktivacity is a forward-thinking IT company specializing in software development, web & mobile app solutions, and digital transformation. With a passion for innovation and excellence, we empower businesses to grow smarter and faster through cutting-edge technology and creative design. Our team is committed to delivering quality, reliability, and future-ready digital experiences.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                        <div className="footer-widget">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Quick Links
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                                <li>
                                                    <Link href="/" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/study-details" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Portfolio
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/team-details" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Our Team
                                                    </Link>
                                                </li> */}
                                                <li>
                                                    <Link href="/service" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <div className="footer-widget">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Services
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                                <li>
                                                    <Link href="/services/web-development-services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Web App Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/seo-services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Digital Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        AI Film & Video Production
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Brand Design
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="footer-widget">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Newsletter
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4306)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_4306" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                                Sign up to seargin weekly newsletter to get the latest updates.
                                            </p>
                                            <form action="#" className="foote-formv1 d-flex align-items-center justify-content-between mb-8" data-aos="zoom-in-down" data-aos-duration={1200}>
                                                <input type="email" placeholder="Enter Email Address" />
                                                <button type="submit" className="themebg d-center rounded-1">
                                                    <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_6308_51)">
                                                            <path d="M24.177 2.42216C24.294 1.87753 23.7601 1.4183 23.2392 1.61705L0.645685 10.242C0.512852 10.2927 0.398516 10.3825 0.317763 10.4995C0.23701 10.6165 0.193635 10.7553 0.193361 10.8975C0.193087 11.0397 0.235926 11.1786 0.316228 11.2959C0.396529 11.4133 0.510518 11.5035 0.643154 11.5547L6.99011 14.006V21.7269C6.9901 21.8851 7.04344 22.0387 7.14153 22.1628C7.23961 22.287 7.3767 22.3744 7.53062 22.411C7.68454 22.4476 7.84631 22.4312 7.98976 22.3645C8.13322 22.2977 8.24997 22.1846 8.32116 22.0433L10.9462 16.8342L17.3522 21.5884C17.7419 21.8776 18.302 21.6936 18.4438 21.2289C24.425 1.61859 24.1664 2.47143 24.177 2.42216ZM18.5999 4.8933L7.59357 12.7316L2.85793 10.9027L18.5999 4.8933ZM8.39634 13.8863L17.9901 7.05398C9.7348 15.7628 10.166 15.3044 10.13 15.3529C10.0765 15.4248 10.223 15.1444 8.39634 18.7692V13.8863ZM17.3896 19.8649L11.7508 15.6802L21.9465 4.92423L17.3896 19.8649Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6308_51">
                                                                <rect width={24} height={24} fill="white" transform="translate(0.193359)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </form>
                                            <ul className="common-social d-flex align-items-center gap-2">
                                                <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                    <Link href="https://www.facebook.com/share/1AJRGVWCLc/?mibextid=wwXIfr" className="d-center">
                                                        <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6308_28">
                                                                    <rect width={10} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                    <Link href="https://x.com/aktivacity" className="d-center">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link href="https://www.linkedin.com/company/aktivacity/" className="d-center">
                                                        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.8">
                                                                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                    <Link href="https://www.tiktok.com/@aktivacity?_t=ZS-90YJD1zzVfL&_r=1" className="d-center">
                                                        <svg
                                                            width={18}
                                                            height={18}
                                                            viewBox="0 0 24 24"
                                                            fill="white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M21 8.5C19.56 8.5 18.23 8.03 17.12 7.24V15.5C17.12 19.08 14.2 22 10.62 22C7.04 22 4.12 19.08 4.12 15.5C4.12 12.54 6.16 10.02 8.94 9.21V11.5C7.71 12.15 6.87 13.4 6.87 14.87C6.87 16.93 8.56 18.62 10.62 18.62C12.68 18.62 14.37 16.93 14.37 14.87V2H17.12C17.12 3.64 18.48 5 20.12 5H21V8.5Z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                                    <Link
                                                        href="https://www.instagram.com/aktivacity/"
                                                        className="d-center"
                                                        target="_blank"
                                                    >
                                                        <FaInstagram size={18} color="white" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-1 py-xl-1 py-1 mb-xxl-5 mb-lg-4 mb-sm-3 mb-2" data-aos="zoom-in-up" data-aos-duration={1600}>
                                <Link href="/" className="brand-logo">
                                    <img className="footer-logo" src="/assets/img/logo/aktivacity.png" alt="Aktivacity" style={{ height: '150px', width: '250px' }} />
                                </Link>
                                
                                <p className="pra-clr">
                                    © All Copyright {new Date().getFullYear()} by <Link href="/"><img src="/assets/img/logo/logo.png" alt="Aktivacity" style={{ height: '18px', marginLeft: '5px', verticalAlign: 'middle' }} /></Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}
