import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header
                className={`header-section cmn-fixed transition-all duration-500 ${scroll ? "header-fixed shrink-navbar" : "bg-transparent py-1"}`}
                style={{
                    backgroundColor: scroll ? "#000000" : "transparent",
                    zIndex: 9999,
                    transition: 'all 0.4s ease',
                    minHeight: scroll ? '80px' : '100px',
                    display: 'flex',
                    alignItems: 'center',
                    border: 'none'
                }}
            >
                <div className="container-fluid">
                    <div className="main-navbar">
                        <nav className="navbar-custom w-100">
                            <div className="d-flex align-items-center justify-content-between" style={{ marginRight: '50px' }}>
                                {/* Logo - Left */}
                                <Link href="/" className="brand-logo d-flex align-items-center ">
                                    <img
                                        className="navbar-logo"
                                        src="/assets/img/logo/aktivacity.png"
                                        alt="Aktivacity Logo"
                                        style={{ height: '150px', width: 'auto', marginTop: '-25px', marginBottom: '-25px' }}
                                    />
                                </Link>

                                {/* Desktop Menu - Center */}
                                <div className="navbar-toggle-item d-none d-lg-block" style={{ marginLeft: '-50px' }}>
                                    <Menu />
                                </div>

                                {/* Right Side: CTA & Toggle */}
                                <div className="d-flex align-items-center ">
                                    {/* Desktop CTA */}
                                    <div className="d-none d-lg-flex">
                                        <Link href="/contact" className="d-flex align-items-center gap-2 touch-btn cmn-btn">
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                            Get In Touch
                                        </Link>
                                    </div>

                                    {/* Mobile Toggle Button */}
                                    <button
                                        className={`navbar-toggle-btn d-lg-none ${isMobileMenu ? "open" : ""}`}
                                        type="button"
                                        onClick={handleSidebar}
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Dropdown - Only if strictly needed and styled correctly. 
                                Since user complained about "nichy wala navbar", I am NOT rendering an inline menu here 
                                to avoid breaking the layout. The 'handleMobileMenu' likely triggers a Sidebar or Overlay 
                                elsewhere in Layout.js. 
                            */}
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
