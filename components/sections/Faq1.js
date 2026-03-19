'use client'
import { useState } from 'react'

export default function Faq1({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const faqData = data?.faqs || [
        {
            question: "What makes an \"AI-Powered Creative Tech Agency\" different from a regular digital agency?",
            answer: "Unlike traditional agencies, we integrate Artificial Intelligence into every step—from data-driven strategy and automated marketing to AI-enhanced design and development. This ensures faster delivery, smarter insights, and superior measurable results."
        },
        {
            question: "Do you work with startups/SMEs in Pakistan, or only large enterprises?",
            answer: "We work with visionaries of all sizes. Whether you're an ambitious startup looking to disrupt the market or an established enterprise seeking digital transformation, our scalable solutions are tailored to your specific budget and goals."
        },
        {
            question: "Can you handle both our software development and marketing campaign?",
            answer: "Absolutely. That's our core strength. We are a full-service integrated partner, ensuring your technical product (website/app) and your marketing message are perfectly aligned for maximum impact and growth."
        },
        {
            question: "What is your typical project process and timeline?",
            answer: "We follow an agile, transparent process: Discovery -> Strategy -> Design & Dev -> Deployment -> Growth. Timelines vary by project complexity, but our AI-powered workflows often allow us to deliver 30-40% faster than traditional standards."
        },
        {
            question: "How do you measure the success and ROI of your projects?",
            answer: "We focus on key performance indicators (KPIs) that matter to your business—leads generated, cost per acquisition, engagement rates, and revenue growth. We provide transparent reporting so you always know the value we're delivering."
        }
    ]

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq-section bg-black position-relative" style={{ padding: '160px 0' }}>
            <div className="container">
                <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                        {data?.tagline || 'FAQ'}
                    </div>
                    <h2 className="stitle text-white" dangerouslySetInnerHTML={{ __html: data?.heading || 'Your Questions, <span class="theme-clr">Answered</span>' }} />
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion-wrapper">
                            {faqData.map((item, index) => (
                                <div
                                    key={item._key || index}
                                    className={`faq-item mb-4 ${activeIndex === index ? 'active' : ''}`}
                                >
                                    <div
                                        className="faq-header d-flex align-items-center justify-content-between p-4 cursor-pointer"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h4 className={`mb-0 fs-5 fw-medium transition-colors ${activeIndex === index ? 'theme-clr' : 'text-white'}`}>
                                            {item.question}
                                        </h4>
                                        <div className={`icon-box d-flex align-items-center justify-content-center rounded-circle transition-transform ${activeIndex === index ? 'bg-theme rotate-180' : 'bg-dark-grey'}`}>
                                            <i className={`fas fa-chevron-down ${activeIndex === index ? 'text-black' : 'theme-clr'}`}></i>
                                        </div>
                                    </div>
                                    <div
                                        className="faq-content-wrapper transition-all"
                                        style={{
                                            display: 'grid',
                                            gridTemplateRows: activeIndex === index ? '1fr' : '0fr',
                                            opacity: activeIndex === index ? 1 : 0.5
                                        }}
                                    >
                                        <div className="faq-content overflow-hidden">
                                            <div className="px-4 pb-4">
                                                <p className="text-white opacity-75 mb-0" style={{ lineHeight: '1.7' }}>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stitle span {
                    font-style: normal !important;
                }
                .faq-item {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    transition: all 0.3s ease;
                    background: rgba(255, 255, 255, 0.02);
                }
                .faq-item:hover {
                    border-color: rgba(233, 254, 73, 0.3);
                    background: rgba(255, 255, 255, 0.05);
                }
                .faq-item.active {
                    border-color: #e9fe49;
                    background: rgba(233, 254, 73, 0.05);
                }
                .cursor-pointer {
                    cursor: pointer;
                }
                .icon-box {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                .bg-theme {
                    background-color: #e9fe49;
                }
                .bg-dark-grey {
                    background-color: #1a1a1a;
                }
                .rotate-180 {
                    transform: rotate(180deg);
                }
                .transition-colors {
                    transition: color 0.3s ease;
                }
                .transition-transform {
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                .transition-all {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                @media (max-width: 768px) {
                    .faq-header h4 {
                        font-size: 1rem !important;
                        padding-right: 15px;
                    }
                    .icon-box {
                        width: 32px;
                        height: 32px;
                        min-width: 32px;
                    }
                }
            `}</style>
        </section>
    )
}
