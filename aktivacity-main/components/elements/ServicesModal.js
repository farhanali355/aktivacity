'use client'
import React from 'react'
import Link from 'next/link'

const ServicesModal = ({ isOpen, onClose, category, services }) => {
    if (!isOpen) return null

    return (
        <div className="services-modal-overlay d-flex align-items-center justify-content-center">
            <div className="services-modal-content p-4 p-md-5 rounded-4 shadow-lg position-relative border border-secondary border-opacity-25 animate-pop">
                <button 
                    onClick={onClose}
                    className="close-btn position-absolute top-0 end-0 m-3 btn btn-transparent text-white fs-4"
                >
                    &times;
                </button>
                
                <h2 className="modal-title mb-4 text-theme fw-bold text-uppercase">{category}</h2>
                <p className="modal-subtitle mb-4 text-white opacity-75">Select a specialized service to explore further:</p>
                
                <div className="services-grid d-flex flex-column gap-3">
                    {services.map((service, index) => (
                        <Link 
                            key={index} 
                            href={service.href}
                            className="service-modal-link d-flex align-items-center gap-3 p-3 rounded-3 transition-all"
                            onClick={onClose}
                        >
                            <span className="dot-theme" />
                            <span className="fw-medium text-white">{service.title}</span>
                            <i className="fas fa-chevron-right ms-auto opacity-50 small" />
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .services-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(10px);
                    z-index: 10000;
                    padding: 20px;
                }
                .services-modal-content {
                    background: #111;
                    max-width: 500px;
                    width: 100%;
                }
                .animate-pop {
                    animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                @keyframes popIn {
                    from { opacity: 0; transform: scale(0.9) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .text-theme {
                    color: #e9fe49;
                }
                .service-modal-link {
                    background: rgba(255, 255, 255, 0.05);
                    text-decoration: none;
                    border: 1px solid transparent;
                }
                .service-modal-link:hover {
                    background: rgba(233, 254, 73, 0.1);
                    border-color: rgba(233, 254, 73, 0.3);
                    transform: translateX(10px);
                }
                .dot-theme {
                    width: 8px;
                    height: 8px;
                    background: #e9fe49;
                    border-radius: 50%;
                }
                .close-btn:hover {
                    color: #e9fe49 !important;
                    transform: rotate(90deg);
                    transition: all 0.3s;
                }
            `}</style>
        </div>
    )
}

export default ServicesModal
