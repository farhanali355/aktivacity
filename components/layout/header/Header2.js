import Link from "next/link"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header
                className={`header-section cmn-fixed py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}
                style={{
                    backgroundColor: scroll ? "#000000" : "transparent",
                    zIndex: 9999,
                    transition: 'all 0.4s ease',
                    border: 'none'
                }}
            >
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            {/* Match Header1 layout: simple left logo, center menu, right actions */}
                            <div className="d-flex align-items-center justify-content-between">
                                {/* Logo - Left */}
                                <Link href="/" className="brand-logo d-flex align-items-center gap-2">
                                    <img
                                        className="navbar-logo"
                                        src="/assets/img/element/download.png"
                                        alt="Aktivacity Logo"
                                        style={{ height: '75px', width: 'auto' }}
                                    />
                                    <img
                                        className="navbar-text-logo"
                                        src="/assets/img/logo/logo.png"
                                        alt="Aktivacity Text Logo"
                                        style={{ height: '28px', width: 'auto' }}
                                    />
                                </Link>

                                {/* Desktop Menu - Center */}
                                <div className="navbar-toggle-item d-none d-lg-block">
                                    <Menu />
                                </div>

                                {/* Right Side: Phone & Toggles */}
                                <div className="d-flex align-items-center gap-3">
                                    <Link href="#" className="d-none d-xl-flex align-items-center header-ph gap-2">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_6577_1298)">
                                                <path d="M21.2438 18.1073L17.7431 14.6066C17.0144 13.8779 15.8329 13.8771 15.1034 14.6066L14.0839 15.6261C11.7543 14.2035 9.79723 12.2464 8.37459 9.91682L9.49247 8.79899C10.2202 8.07121 10.2202 6.88701 9.49242 6.15923L5.9917 2.65851C5.26504 1.93194 4.08525 1.92519 3.34978 2.66071L1.14994 4.87766C0.0974045 5.76145 -0.272814 7.21251 0.207186 8.58777C2.67028 15.6461 8.35472 21.3305 15.413 23.7936C16.7409 24.2569 18.1046 23.9104 18.9717 23.0171C18.9842 23.006 18.9964 22.9946 19.0084 22.9826L21.2438 20.7471C21.9716 20.0193 21.9716 18.8352 21.2438 18.1073ZM20.1287 19.6319L17.9437 21.8168C17.9171 21.839 17.8919 21.863 17.8681 21.8888C17.4082 22.3887 16.6684 22.5613 15.9327 22.3044C9.32433 19.9984 4.00237 14.6764 1.69631 8.06802C1.43226 7.31141 1.62276 6.52752 2.18165 6.07091C2.20289 6.05357 2.22323 6.0351 2.24255 6.01565L4.46719 3.77366C4.49403 3.74672 4.52593 3.72536 4.56106 3.71081C4.5962 3.69626 4.63386 3.6888 4.67189 3.68887C4.7167 3.68887 4.80281 3.69984 4.87659 3.77366L8.37722 7.27438C8.43142 7.32871 8.46186 7.40231 8.46187 7.47905C8.46188 7.55579 8.43145 7.6294 8.37726 7.68374L6.82837 9.23263C6.70656 9.35442 6.62798 9.51274 6.60464 9.68339C6.58129 9.85405 6.61447 10.0277 6.69909 10.1777C8.37983 13.1574 10.8433 15.6209 13.8231 17.3016C13.9731 17.3862 14.1467 17.4194 14.3173 17.3961C14.488 17.3727 14.6463 17.2942 14.7681 17.1724L16.2187 15.7218C16.273 15.6676 16.3466 15.6371 16.4233 15.6371C16.5001 15.6371 16.5737 15.6676 16.628 15.7218L20.1287 19.2225C20.1829 19.2769 20.2133 19.3505 20.2133 19.4272C20.2133 19.504 20.1829 19.5776 20.1287 19.6319ZM12.6048 6.15604C12.1693 6.15604 11.8162 6.5091 11.8162 6.94462C11.8162 7.38013 12.1692 7.73319 12.6048 7.73319C14.6244 7.73319 16.2675 9.37631 16.2675 11.396C16.2675 11.8315 16.6206 12.1845 17.0561 12.1845C17.4916 12.1845 17.8447 11.8315 17.8447 11.396C17.8447 8.50668 15.4941 6.15604 12.6048 6.15604Z" fill="white" />
                                                <path d="M12.7779 3C12.3483 3 12 3.34828 12 3.7779C12 4.20752 12.3482 4.5558 12.7779 4.5558C16.4537 4.5558 19.4442 7.54629 19.4442 11.2221C19.4442 11.6517 19.7925 12 20.2221 12C20.6517 12 21 11.6517 21 11.2221C21 6.68844 17.3116 3 12.7779 3Z" fill="white" />
                                                <path d="M20.7128 3.28719C18.593 1.1674 15.7745 0 12.7767 0C12.3477 0 12 0.347735 12 0.776679C12 1.20562 12.3477 1.55336 12.7767 1.55336C18.1087 1.55336 22.4466 5.89127 22.4466 11.2233C22.4466 11.6523 22.7944 12 23.2233 12C23.6523 12 24 11.6523 24 11.2233C24 8.22542 22.8326 5.40702 20.7128 3.28719Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6577_1298">
                                                    <rect width={24} height={24} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="stext ms-2">
                                            0210320438
                                        </span>
                                    </Link>

                                    <div className="d-flex align-items-center gap-3 ms-2">
                                        <div className="d-none d-lg-flex remove-click remove-clickbg-adding d-center m-auto rounded-circle" onClick={handleSidebar} style={{ background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                                            <i className="fas fa-bars text-white" />
                                        </div>
                                        <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
