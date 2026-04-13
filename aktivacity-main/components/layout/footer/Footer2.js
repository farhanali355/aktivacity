import Link from "next/link"

export default function Footer2() {
    return (
        <>

            <footer className="footer-version-two bg2-clr">
                <div className="footer-topversion-two pt-20 pb-20">
                    <div className="container">
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-between">
                            <div className="col-xxl-6 col-xl-6 col-lg-7">
                                <div className="footer-widget">
                                    <div className="footer-lets-title mb-xxl-20 mb-xl-15 mb-lg-10 mb-8">
                                        <span className="fdisplay-title d-flex gap-2 align-items-center mb-xxl-10 mb-xl-8 mb-lg-6 mb-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            Let’s <span className="talk" data-aos="zoom-in-up" data-aos-duration={1800}>talk!</span>
                                        </span>
                                        <p className="pra-clr" data-aos="zoom-in" data-aos-duration={1800}>
                                            Bring to the table win-win survival strategies to ensure proactive domination. At
                                            the end of the day, going forward, a
                                            new normal that has evolved
                                        </p>
                                    </div>
                                    <div className="d-flex footer-widger-inner align-items-center">
                                        <div className="box">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Quick Links
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_43042)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_43042" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                                <li>
                                                    <Link href="/about" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        About Xstar
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Our Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-grid" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Our Blogs
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
                                        <div className="box2">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Contact Us
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_43)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_43" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="#E3FF04" />
                                                            <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <p className="pra-clr mb-xxl-7 mb-xl-6 mb-6" data-aos="zoom-in" data-aos-duration={1400}>
                                                4517 Washington. mg Manchester, Kentucky 39495
                                            </p>
                                            <span className="d-block" data-aos="zoom-in" data-aos-duration={1600}>
                                                <span className="fw-bold white-clr mb-xxl-3 mb-2 d-block">
                                                    Phone Call:
                                                </span>
                                                <span className="pra-clr">
                                                    208-6666-0112, 308-5555-0113
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-5">
                                <form action="#" className="common-form">
                                    <div className="row g-xxl-8 g-xl-7 g-6">
                                        <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="name">Your
                                                    Name*</label>
                                                <input id="name" type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="emails">Your
                                                    Email*</label>
                                                <input id="emails" type="text" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label htmlFor="mess" className="fw-medium white mb-xxl-5 mb-xl-4 mb-3">Your
                                                    Message*</label>
                                                <textarea name="write" id="mess" rows={5} placeholder="Write Message" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <button type="submit" className="getin-touch d-flex align-items-center justify-content-center gap-3 white-clr p-xxl-4 p-xl-3 p-lg-2 p-2 w-100 text-semibold">
                                                    <span className="icons">
                                                        <i className="fas fa-arrow-up theme-clr" />
                                                    </span>
                                                    Get In Touch
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-version-two bg1-clr px-xxl-6 px-6 py-xxl-6 py-xl-6 py-6">
                    <div className="container">
                        <div className="d-md-flex gap-md-0 gap-4 d-grid align-items-center justify-content-md-between justify-content-center">
                            <p className="pra-clr">
                                © All Copyright {new Date().getFullYear()} by <Link href="/" className="theme-clr">ferifv</Link>
                            </p>
                            <Link href="/" className="footer-logov1 m-md-0 m-auto">
                                <img src="/assets/img/logo/logo.png" alt="img" />
                            </Link>
                            <Link href="/#" className="pra-clr">
                                Terms &amp; Conditions Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
