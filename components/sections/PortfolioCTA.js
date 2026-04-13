"use client"
import React from 'react'
import Link from 'next/link'

export default function PortfolioCTA() {
    return (
        <section className="portfolio-conversion-section py-xxl-25 py-20 bg-black position-relative overflow-hidden">
            {/* Atmospheric Glow */}
            <div className="portfolio-atmospheric-glow" />

            <div className="container position-relative z-1">
                {/* THE CARD */}
                <div className="portfolio-conversion-card mx-auto p-xxl-15 p-xl-12 p-8 text-center" data-aos="zoom-in" data-aos-duration="1200">
                    <h2 className="display-2 fw-black black-clr mb-8">Have a project in mind?</h2>
                    <p className="black-clr fs-4 opacity-75 mb-12 max-w-700 mx-auto">
                      Let's turn your ideas into scalable, high-performing digital solutions.
                    </p>

                    <button 
                        onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openQuoteModal')); }} 
                        className="portfolio-book-call-btn d-inline-flex text-decoration-none border-0 align-items-center gap-4 py-3 px-8 rounded-pill text-black fw-bold text-uppercase ls-2"
                    >
                        <span style={{ paddingTop: '2px', paddingLeft: '10px', color: 'black' }}>Start your journey</span>
                        <div className="calendar-icon-wrap d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '45px', height: '45px' }}>
                            <i className="far fa-calendar-alt" style={{ color: '#000', fontSize: '1.2rem' }} />
                        </div>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .portfolio-conversion-section {
                    background: radial-gradient(circle at top, rgba(233, 254, 73, 0.15) 0%, #030303 70%);
                }
                .portfolio-atmospheric-glow {
                    position: absolute;
                    top: 0; left: 50%;
                    transform: translateX(-50%);
                    width: 100%; height: 100%;
                    background: radial-gradient(ellipse at center, rgba(233, 254, 73, 0.1) 0%, transparent 60%);
                    z-index: 0;
                    pointer-events: none;
                }
                .portfolio-conversion-card {
                    background: #fff;
                    width: 100%;
                    max-width: 1100px;
                    border-radius: 40px;
                    position: relative;
                    z-index: 1;
                    box-shadow: 0 50px 100px rgba(0,0,0,0.4);
                }
                .black-clr { color: #000 !important; }
                
                :global(.portfolio-book-call-btn) {
                    background-color: #E3FF04 !important;
                    color: #000 !important;
                    border: none;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 40px rgba(227, 255, 4, 0.6) !important;
                }
                :global(.portfolio-book-call-btn:hover) {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 15px 50px rgba(227, 255, 4, 0.8) !important;
                }
                .max-w-700 { max-width: 700px; }
                .ls-2 { letter-spacing: 2px; }
                
                @media (max-width: 991px) {
                    .portfolio-conversion-card { border-radius: 30px; padding: 40px 20px !important; }
                    .display-2 { font-size: 2.5rem; }
                }
            `}</style>
        </section>
    )
}
