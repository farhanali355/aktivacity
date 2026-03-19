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
            <ul className="custom-nav d-lg-flex d-grid align-items-center gap-xxl-8 gap-xl-6 gap-lg-4 gap-md-2 gap-2 pt-lg-0 pt-5">
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
                        <Link href="/services" className='linkss'><span>Services</span></Link>
                    </button>

                    {/* Mega Menu Content */}
                    {/* Mega Menu Content */}
                    <div className="mega-menu-content p-xxl-12 p-xl-10 p-lg-8">
                        <div className="container-fluid">
                            <div className="row g-6">
                                {[
                                    {
                                        category: "Development",
                                        links: [
                                            { title: "Web Development Services", href: "/services/web-development-services" },
                                            { title: "Software Development", href: "/services/software-development" },
                                            { title: "Mobile App Development", href: "/services" },
                                            { title: "SaaS Development", href: "/services" }
                                        ]
                                    },
                                    {
                                        category: "Digital Marketing",
                                        links: [
                                            { title: "SEO Optimization", href: "/services/seo-services" },
                                            { title: "Social Media Marketing", href: "/services" },
                                            { title: "Paid Ads (PPC)", href: "/services" },
                                            { title: "Content Marketing", href: "/services" }
                                        ]
                                    },
                                    {
                                        category: "AI Film Production",
                                        links: [
                                            { title: "AI Video Generation", href: "/services" },
                                            { title: "Video Editing & Post", href: "/services" },
                                            { title: "Motion Graphics", href: "/services" },
                                            { title: "3D Animation", href: "/services" }
                                        ]
                                    },
                                    {
                                        category: "Brand Design",
                                        links: [
                                            { title: "Logo & Visual Identity", href: "/services" },
                                            { title: "UI/UX Design", href: "/services/ui-ux-design" },
                                            { title: "Brand Strategy", href: "/services" },
                                            { title: "Packaging Design", href: "/services" }
                                        ]
                                    }
                                ].map((col, idx) => (
                                    <div key={idx} className="col-lg-3">
                                        <div className="mega-column" style={{ animationDelay: `${idx * 0.1}s` }}>
                                            <h5 className="category-title mb-6 fw-bold text-uppercase ls-1">{col.category}</h5>
                                            <div className="mega-links-grid d-flex flex-column gap-3">
                                                {col.links.map((item, lIdx) => (
                                                    <Link href={item.href} key={lIdx} className="mega-menu-link d-flex align-items-center gap-2 py-1">
                                                        <span className="dot-small" />
                                                        <span className="link-text">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                .mega-menu-parent:hover .mega-column {
                    animation: fadeInUp 0.5s ease forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .mega-column {
                    opacity: 0;
                }
                .mega-menu-content {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%) translateY(20px);
                    width: 1150px;
                    background: #e9fe49;
                    border-radius: 40px;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                                transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                                visibility 0.4s ease;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
                    z-index: 1000;
                    margin-top: 10px;
                }
                .mega-menu-content * {
                    color: #000 !important;
                }
                .category-title {
                    font-size: 1.1rem;
                    color: #000 !important;
                    border-bottom: 2px solid rgba(0,0,0,0.1);
                    padding-bottom: 15px;
                    display: inline-block;
                    width: 100%;
                    transition: border-color 0.3s ease;
                }
                .mega-column:hover .category-title {
                    border-color: rgba(0,0,0,0.3);
                }
                .mega-menu-link {
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .mega-menu-link:hover {
                   transform: translateX(12px);
                }
                .mega-menu-link .dot-small {
                    width: 6px;
                    height: 6px;
                    background: #000 !important;
                    border-radius: 50%;
                    opacity: 0.1;
                    transition: all 0.3s ease;
                }
                .mega-menu-link:hover .dot-small {
                    opacity: 1;
                    transform: scale(1.5);
                    background: #000 !important;
                }
                .mega-menu-link .link-text {
                    font-size: 1rem;
                    font-weight: 500;
                    opacity: 0.7;
                    transition: opacity 0.3s ease;
                }
                .mega-menu-link:hover .link-text {
                    opacity: 1;
                }
                .ls-1 { letter-spacing: 1px; }
                
                @media (max-width: 1250px) {
                    .mega-menu-content {
                        width: 950px;
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
                    .mega-column { margin-bottom: 30px; }
                    .mega-menu-link { color: #fff !important; }
                    .mega-menu-link .dot-small { background: #e9fe49 !important; opacity: 1; }
                    .category-title { color: #e9fe49 !important; border-bottom-color: rgba(255,255,255,0.1); }
                }
            `}</style>
        </>
    )
}

