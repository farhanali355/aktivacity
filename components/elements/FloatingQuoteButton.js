"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function FloatingQuoteButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 150px down
            if (window.scrollY > 150) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        // Check initial position
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <Link href="/contact" className={`floating-quote-btn ${isVisible ? 'show' : ''}`}>
            <span className="quote-text">Get A Quote!</span>
            <style jsx>{`
                .floating-quote-btn {
                    position: fixed;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%) translateX(100%);
                    background: #7b2ff7; 
                    color: #fff !important;
                    padding: 25px 15px;
                    border-radius: 16px 0 0 16px;
                    text-decoration: none !important;
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-weight: 700;
                    font-size: 1rem;
                    letter-spacing: 1.5px;
                    z-index: 999999;
                    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), background 0.3s ease;
                    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                .floating-quote-btn.show {
                    transform: translateY(-50%) translateX(0);
                }
                .floating-quote-btn:hover {
                    background: #6a25d9;
                    box-shadow: -15px 0 40px rgba(123, 47, 247, 0.5);
                    padding-right: 20px;
                }
                .quote-text {
                    display: inline-block;
                    transform: rotate(180deg);
                    white-space: nowrap;
                    text-transform: uppercase;
                }
                
                @media (max-width: 767px) {
                    .floating-quote-btn {
                        padding: 18px 10px;
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </Link>
    )
}
