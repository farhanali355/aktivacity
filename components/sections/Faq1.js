'use client'
import { useState } from 'react'

export default function Faq1({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const faqData = data?.faqs || [
        {
            question: "What makes an “AI-Powered Creative Tech Agency” different from other digital agencies?",
            answer: "We go beyond standard offerings, with an emphasis on the integration of AI & automation with UI/UX, development, and video creation for smart business growth."
        },
        {
            question: "Do you work with startups/SMEs in Pakistan, or only large enterprises?",
            answer: "We absolutely do. Our industry-aligned solutions cater to startups, SMEs, and enterprises, with particular emphasis on the Pakistani market."
        },
        {
            question: "Can you manage both our software development and your marketing campaigns?",
            answer: "Yes, being a Full-Service Tech & Digital Agency, we offer a one-stop solution for all your needs."
        },
        {
            question: "What is your standard project workflow and duration?",
            answer: "We use a cooperative framework, with design thinking & agile development for the various phases. This includes the following: discovery (1-2 weeks), prototyping (2-4 weeks), development/test (4-8 weeks), launch/optimization."
        },
        {
            question: "How do you track success and ROI on your projects?",
            answer: "ROI, conversion, retention, and revenue growth, and other metrics tell the story. This is all tracked with GA and custom dashboards for the stakeholders."
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
