
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import Link from "next/link"
import BackToTop from '../elements/BackToTop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from './Breadcrumb'
import Search from "./Search"
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, breadcrumbSubTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
    }
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!isSidebar)
    }
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => {
        setSearch(!isSearch)
    }

    useEffect(() => {
        AOS.init({
            disable: true
        })

        const handleScroll = () => {
            setScroll(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <><div id="toper" />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} isSearch={isSearch} handleSearch={handleSearch} /> : null}

            <Search isSearch={isSearch} handleSearch={handleSearch} />

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbSubTitle={breadcrumbSubTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null}

            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

            <BackToTop target="#toper" />
            <FloatingQuoteButton onClick={() => setIsModalOpen(true)} />
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

function FloatingQuoteButton({ onClick }) {
    const [scrolled, setScrolled] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show button after 200px scroll
            setScrolled(window.scrollY > 200)
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const btnStyle = {
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: scrolled ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(100%)',
        background: '#e9fe49',
        color: '#000',
        padding: isHovered ? '20px 15px 20px 10px' : '20px 10px',
        borderRadius: '12px 0 0 12px',
        zIndex: 9999999,
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontWeight: '900',
        fontSize: '0.8rem',
        letterSpacing: '2px',
        textDecoration: 'none',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        textAlign: 'center'
    }

    const textStyle = {
        display: 'inline-block',
        transform: 'rotate(180deg)',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        color: '#000'
    }

    return (
        <button 
            onClick={onClick}
            style={btnStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={textStyle}>Get A Quote!</span>
        </button>
    )
}

function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div className="quote-modal-overlay" onClick={onClose}>
            <div className="quote-modal-content" onClick={e => e.stopPropagation()}>
                <button className="quote-modal-close" onClick={onClose}>&times;</button>
                <div className="quote-modal-header">
                    <h3>Get A Quote</h3>
                    <p>Ready to start your project? Let's talk.</p>
                </div>
                <form className="quote-modal-form" onSubmit={(e) => { 
                    e.preventDefault(); 
                    const name = e.target[0].value;
                    const email = e.target[1].value;
                    const message = e.target[2].value;
                    
                    if (!name || !email || !message) {
                        toast.error('Oho! Bhai, saari fields fill krna zaroori hain. 😊');
                        return;
                    }
                    
                    toast.success('Zabardast! Aapki inquiry mil gayi ha. Hum jald raabta krain gay. 🚀'); 
                    onClose(); 
                }}>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell us about your project" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Inquiry</button>
                </form>
            </div>
            <style jsx>{`
                .quote-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000000;
                    padding: 20px;
                }
                .quote-modal-content {
                    background: #fff;
                    width: 100%;
                    max-width: 500px;
                    border-radius: 30px;
                    padding: 40px;
                    position: relative;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
                    color: #000;
                }
                .quote-modal-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 32px;
                    cursor: pointer;
                    color: #888;
                }
                .quote-modal-header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .quote-modal-header h3 {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 5px;
                    color: #000;
                }
                .quote-modal-header p {
                    color: #666;
                    font-size: 0.9rem;
                }
                .quote-modal-form .form-group {
                    margin-bottom: 20px;
                }
                .quote-modal-form input, 
                .quote-modal-form textarea {
                    width: 100%;
                    padding: 15px 20px;
                    border: 1px solid #eee;
                    border-radius: 12px;
                    font-size: 1rem;
                    background: #f9f9f9;
                    outline: none;
                    transition: 0.3s;
                    color: #000 !important;
                }
                .quote-modal-form input:focus, 
                .quote-modal-form textarea:focus {
                    border-color: #7b2ff7;
                    background: #fff;
                    box-shadow: 0 0 0 4px rgba(123, 47, 247, 0.1);
                }
                .submit-btn {
                    width: 100%;
                    padding: 16px;
                    background: #e9fe49;
                    color: #000;
                    border: none;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .submit-btn:hover {
                    background: #d4e83f;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(233, 254, 73, 0.3);
                }
            `}</style>
        </div>
    )
}
