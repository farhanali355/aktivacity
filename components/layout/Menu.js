'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
    const [isAccordion, setIsAccordion] = useState(0)
    const cursorRef = useRef(null)

    useEffect(() => {
        const links = document.querySelectorAll('.hover-this')
        const cursor = cursorRef.current

        const animateIt = function (e) {
            const span = this.querySelector('span')
            if (!span) return

            const { clientX: mouseX, clientY: mouseY } = e
            const rect = this.getBoundingClientRect()
            const x = mouseX - rect.left
            const y = mouseY - rect.top

            const { width, height } = rect
            const move = 25
            const xMove = (x / width) * (move * 2) - move
            const yMove = (y / height) * (move * 2) - move

            span.style.transform = `translate(${xMove}px, ${yMove}px) scale(1.1)`
            if (e.type === 'mouseleave') span.style.transform = ''
        }

        const editCursor = (e) => {
            if (!cursor) return
            const { clientX: x, clientY: y } = e
            cursor.style.left = x + 'px'
            cursor.style.top = y + 'px'
        }

        links.forEach(b => b.addEventListener('mousemove', animateIt))
        links.forEach(b => b.addEventListener('mouseleave', animateIt))
        window.addEventListener('mousemove', editCursor)

        return () => {
            links.forEach(b => b.removeEventListener('mousemove', animateIt))
            links.forEach(b => b.removeEventListener('mouseleave', animateIt))
            window.removeEventListener('mousemove', editCursor)
        }
    }, [])

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            {/* <ul className="menu">
                <li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="/#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`item ${checkCurrentMenuItem("/")}`}>
                            <Link href="//">Home 1</Link>
                        </li>
                        <li className={`item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="//home-02">Home 2</Link>
                        </li>
                    </ul>
                </li>
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="//about">about</Link>
                </li>
            </ul> */}
            <ul className="custom-nav d-lg-flex d-grid align-items-center gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                {/* <li className="menu-item position-relative"> */}
                <li className="menu-item hover-this">
                    <Link href="/" className='linkss'><span>Home</span></Link>
                </li>
                {/* <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/" className="fw_500 white-clr">Home Version-1</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index2" className="fw_500 white-clr">Home Version-2</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index3" className="fw_500 white-clr">Home Version-3</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index4" className="fw_500 white-clr">Home Version-4</Link>
                        </li>
                    </ul> */}
                {/* </li> */}
                {/* <li className="menu-item position-relative"> */}
                <li className="menu-item hover-this">
                    <Link href="/about" className='linkss'><span>About</span></Link>
                </li>

                {/* <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/about" className="fw_500 white-clr">About</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/pricing" className="fw_500 white-clr">Pricing Plan</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/team" className="fw_500 white-clr">Team Grid</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/team-details" className="fw_500 white-clr">Team Details</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/faq" className="fw_500 white-clr">Faqs</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/contact" className="fw_500 white-clr">Contact</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/oops" className="fw_500 white-clr">Oops 404</Link>
                        </li>
                    </ul> */}
                {/* </li> */}
                {/* <li className="menu-item position-relative"> */}
                <li className="menu-item hover-this">
                    <Link href="/study-details" className='linkss'><span>Portfolio</span></Link>
                </li>
                {/* <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/study-grid" className="fw_500 white-clr">Case Study</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/study-details" className="fw_500 white-clr">Case Study Details</Link>
                        </li>
                    </ul> */}
                {/* </li> */}
                {/* <li className="menu-item position-relative"> */}
                <li className="menu-item mega-menu-parent position-relative">
                    <button className="mega-menu-trigger fw_500 white-clr cus-z1 no-arrow">
                        <Link href="/service" className='linkss'><span>Services</span></Link>
                    </button>

                    {/* Mega Menu Content */}
                    <div className="mega-menu-content p-xxl-10 p-xl-8 p-lg-6">
                        <div className="container-fluid">
                            <div className="row g-10 align-items-center">
                                {/* Left Column: Links */}
                                <div className="col-lg-6 border-end-custom">
                                    <div className="mega-links-grid d-flex flex-column gap-4">
                                        {[
                                            { title: "Web & App Development", link: "/web-app" },
                                            { title: "Digital Marketing", link: "/service" },
                                            { title: "Ai Film & Video Production", link: "/service" },
                                            { title: "Brand Design", link: "/service" }
                                        ].map((item, idx) => (
                                            <Link href={item.link} key={idx} className="mega-menu-link d-flex align-items-center justify-content-between py-2">
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="dot" />
                                                    <span className="link-text fw-bold">{item.title}</span>
                                                </div>
                                                <span className="arrow">
                                                    <i className="fas fa-chevron-right" />
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Info & Logos */}
                                <div className="col-lg-6 d-none d-lg-block">
                                    <div className="mega-info-section text-start ps-lg-5">
                                        <h3 className="black-clr fw-bold mb-6 mega-title">5-Star Rated,<br />Works with Global Giants</h3>
                                        <div className="mega-logo-grid">
                                            {[
                                                'https://cdn.worldvectorlogo.com/logos/google-2.svg',
                                                'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
                                                'https://cdn.worldvectorlogo.com/logos/apple-11.svg',
                                                'https://cdn.worldvectorlogo.com/logos/amazon-2.svg'
                                            ].map((logo, i) => (
                                                <div className="mega-logo-item" key={i}>
                                                    <img src={logo} alt="Partner" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="menu-item hover-this">
                    <Link href="/contact" className='linkss'><span>Contact Us</span></Link>
                </li>
                <div className="custom-cursor" ref={cursorRef}></div>
            </ul>

            <style jsx>{`
                /* Force hide ALL pseudo-elements in navbar to prevent vertical lines */
                :global(.custom-nav *::before),
                :global(.custom-nav *::after),
                :global(.custom-nav button::after),
                :global(.custom-nav button::before) {
                    display: none !important;
                    content: none !important;
                }

                .hover-this {
                    padding: 0;
                    margin: 0;
                }

                .linkss {
                    text-decoration: none !important;
                    display: inline-block;
                    color: #fff !important;
                    font-weight: 500;
                    text-transform: uppercase;
                    padding: 10px 20px;
                }

                .linkss span {
                    display: inline-block;
                    pointer-events: none;
                    transition: transform 0.1s linear;
                }

                .custom-cursor {
                    pointer-events: none;
                    position: fixed;
                    padding: 8px;
                    background-color: #fff; /* Changed to white to match common magnetic cursor style */
                    border-radius: 50%;
                    mix-blend-mode: difference;
                    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease;
                    z-index: 99999;
                    transform: translate(-50%, -50%) scale(1);
                    left: -100px;
                    top: -100px;
                    opacity: 0; /* Hidden by default */
                }

                .custom-nav:hover .custom-cursor {
                    opacity: 1; /* Only visible on navbar hover */
                }

                .hover-this:hover ~ .custom-cursor {
                     transform: translate(-50%, -50%) scale(8); /* Large scaling as per user reference */
                }
                
                /* Magnetic Scaling Effect */
                .hover-this:hover .linkss span {
                    transform: scale(1.1); /* Subtle scale up of text */
                }

                .mega-menu-parent {
                    position: static !important;
                }
                .mega-menu-trigger {
                    background: transparent;
                    border: none;
                    padding: 0;
                }
                .mega-menu-parent:hover .mega-menu-content {
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: translateX(-50%) translateY(0) !important;
                    pointer-events: auto !important;
                }
                .mega-menu-content {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%) translateY(20px);
                    width: 1000px;
                    background: #e9fe49;
                    border-radius: 30px;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
                    z-index: 1000;
                    margin-top: 10px;
                }
                .mega-menu-content * {
                    color: #000 !important;
                }
                .mega-menu-link {
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .mega-menu-link:hover {
                   transform: translateX(10px);
                }
                .mega-menu-link .dot {
                    width: 12px;
                    height: 12px;
                    background: #000 !important;
                    border-radius: 50%;
                }
                .mega-menu-link .link-text {
                    font-size: 1.25rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .mega-menu-link .arrow {
                    font-size: 1.1rem;
                    opacity: 1 !important;
                }
                .border-end-custom {
                    border-right: 1px solid rgba(0, 0, 0, 0.1);
                }
                .mega-title {
                    font-size: 2.2rem;
                    line-height: 1.1;
                    text-transform: none;
                }
                .mega-logo-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-top: 40px;
                }
                .mega-logo-item {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0,0,0,0.03);
                    border-radius: 15px;
                    padding: 15px;
                }
                .mega-logo-item img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: brightness(0) !important;
                }
                
                @media (max-width: 1200px) {
                    .mega-menu-content {
                        width: 700px;
                    }
                }
                @media (max-width: 991px) {
                    .mega-menu-content {
                        position: relative;
                        top: 0;
                        left: 0;
                        transform: none;
                        width: 100%;
                        background: transparent;
                        box-shadow: none;
                        padding: 20px !important;
                        opacity: 1;
                        visibility: visible;
                    }
                    .mega-menu-link { color: #fff !important; }
                    .mega-menu-link .dot { background: #e9fe49; }
                    .mega-title { display: none; }
                    .border-end-custom { border-right: none; }
                }
            `}</style>
        </>
    )
}

