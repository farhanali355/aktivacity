'use client'
import React, { useState } from 'react';

export default function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form Submitted", formData);
        alert("Thanks for contacting us! We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section className="contact-cta-section bg-black position-relative" style={{ padding: '160px 0' }}>
            <div className="container">
                <div className="row align-items-center justify-content-between g-5">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                        <div className="section-title text-start mb-5">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                                LET'S TALK
                            </div>
                            <h2 className="stitle text-white mb-4">
                                Ready to Build Something <span className="theme-clr">Extraordinary?</span>
                            </h2>
                            <p className="text-white opacity-75 fs-5">
                             Let's discuss your vision. Share your details, and our team will contact you to craft a personalized strategy for digital transformation.
                            </p>
                        </div>

                        <div className="contact-info mt-5">
                            <div className="d-flex align-items-center gap-4 mb-4">
                                <div className="icon-box rounded-circle d-flex align-items-center justify-content-center bg-dark-grey text-theme" style={{ width: '60px', height: '60px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <i className="fas fa-envelope fs-4 theme-clr"></i>
                                </div>
                                <div>
                                    <span className="d-block text-white opacity-50 mb-1">Email Us</span>
                                    <h5 className="text-white mb-0">hello@aktivacity.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5" data-aos="fade-left" data-aos-duration="1200">
                        <div className="contact-form-wrapper p-5 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="text-white mb-2 ps-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-white border-0 py-3"
                                        placeholder="Enter your name"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.2) !important', borderRadius: 0, paddingLeft: 0 }}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white mb-2 ps-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-white border-0 py-3"
                                        placeholder="Enter your email"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.2) !important', borderRadius: 0, paddingLeft: 0 }}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white mb-2 ps-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-white border-0 py-3"
                                        placeholder="Enter your phone number"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.2) !important', borderRadius: 0, paddingLeft: 0 }}
                                        required
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="text-white mb-2 ps-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-white border-0 py-3"
                                        placeholder="Tell us about your project"
                                        rows="3"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.2) !important', borderRadius: 0, paddingLeft: 0, resize: 'none' }}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="cmn-btn fw-bold w-100 py-3 rounded-pill bg-theme text-black border-0 d-flex align-items-center justify-content-center gap-2">
                                    Start Your Journey
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stitle span {
                    font-style: normal !important;
                }
                .bg-theme {
                    background-color: #e9fe49;
                    transition: all 0.3s ease;
                }
                .bg-theme:hover {
                    background-color: #ffffff;
                    color: black !important;
                }
                .theme-clr {
                    color: #e9fe49;
                }
                .bg-dark-grey {
                    background-color: rgba(255,255,255,0.05);
                }
                input:focus, textarea:focus {
                    box-shadow: none;
                    background: transparent !important;
                    color: white !important;
                    border-color: #e9fe49 !important;
                }
                input::placeholder, textarea::placeholder {
                    color: rgba(255,255,255,0.3);
                }
            `}</style>
        </section>
    );
}
