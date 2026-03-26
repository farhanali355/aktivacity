'use client';
import { useEffect, useRef } from "react";

export default function Hero1({ data }) {
    const videoRef = useRef(null);

    useEffect(() => {
        // Video play ensure karta hoon
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <>
            <section className="hero-section-simple">
                {/* Background Video */}
                <div className="video-background">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="background-video"
                    >
                        <source src="/bg.mp4" type="video/mp4" />
                        <img src="/assets/img/fallback-bg.jpg" alt="Background" />
                    </video>
                    <div className="video-overlay"></div>
                </div>

                {/* Hero Content */}
                <div className="container hero-content-wrapper h-100 d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="hero-content">
                        <h1 className="hero-title mb-xxl-4 mb-4 " style={{ fontSize: "40px" }} dangerouslySetInnerHTML={{ __html: data?.title || '<span class="theme-clr" style="font-size: inherit; line-height: inherit;">AI-Powered</span> Creative Tech <br /> & Digital Agency' }} />
                        <p className="hero-subtitle  text-white mb-xxl-5 mb-5 mx-auto" style={{ maxWidth: '800px', fontSize: '1rem' }}>
                            {data?.subtitle || 'We combine AI, creativity, and technology to help brands grow, scale, and stay ahead in a competitive market.'}                        </p>
                        <div className="d-flex justify-content-center mt-4" style={{ marginTop: '10px' }}>
                            <a href={data?.buttonLink || "/contact"} className="animated-btn">
                                <span>{data?.buttonText || "Book Free Consultation"}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SVG Filter for Blob Effect */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
            </svg>

            <style jsx>{`
                .hero-section-simple {
                    height: 100vh;
                    overflow: hidden;
                    position: relative;
                }

                .video-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .background-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .video-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 2;
                }

                .hero-content-wrapper {
                    position: relative;
                    z-index: 10;
                    padding-top: 55vh; /* Increased from 25vh */
                }

                .hero-title {
                    font-size: 4rem;
                    font-weight: 700;
                    line-height: 1.2;
                    color: white;
                }

                @media (max-width: 991px) {
                    .hero-title {
                        font-size: 3rem;
                    }
                }

                @media (max-width: 575px) {
                    .hero-title {
                        font-size: 2.2rem;
                    }
                    .hero-subtitle {
                        font-size: 1rem !important;
                    }
                }

                /* Animated Button Styles */
                .animated-btn {
                    position: relative;
                    padding: 8px 20px; /* Further reduced from 12px 28px */
                    display: inline-flex;
                    align-items: center;
                    gap: 10px; /* Slightly reduced gap */
                    text-decoration: none;
                    color: #e9fe49;
                    font-size: 12px; /* Further reduced from 14px */
                    font-weight: 700;
                    text-transform: uppercase;
                    border: 2px solid #e9fe49;
                    border-radius: 50px;
                    overflow: hidden;
                    transition: color 0.4s ease;
                    z-index: 1;
                    background: transparent;
                }

                .animated-btn span, 
                .animated-btn .btn-arrow {
                    position: relative;
                    z-index: 2;
                }

                .animated-btn .btn-arrow {
                    transition: transform 0.4s ease;
                }

                .animated-btn:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #e9fe49;
                    transform: translateX(-101%);
                    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
                    z-index: 1;
                }

                .animated-btn:hover,
                .animated-btn:hover span {
                    color: #000 !important;
                }

                .animated-btn:hover .btn-arrow {
                    color: #000 !important;
                    transform: rotate(45deg);
                }

                .animated-btn:hover:before {
                    transform: translateX(0);
                }


            `}</style>
        </>
    )
}