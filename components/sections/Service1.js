'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Service1 = () => {
    const router = useRouter()

    const serviceData = [
        {
            id: 1,
            title: "Web & App Development",
            description: "Building scalable, high-performance web and mobile applications using cutting-edge AI and code.",
            image: "/assets/img/element/development.jpg",
            page: "/web-app"
        },
        {
            id: 2,
            title: "Digital Marketing",
            description: "Data-driven strategies to amplify your brand reach and ROI using AI-enhanced targeting.",
            image: "/assets/img/element/it.jpg",
            page: "/graphic-main"
        },
        {
            id: 3,
            title: "AI Film & Video Production",
            description: "Cinematic storytelling powered by AI for next-gen visual experiences and production efficiency.",
            image: "/assets/img/element/video.jpg",
            page: "/seo-services"
        },
        {
            id: 4,
            title: "Brand & Design",
            description: "User-centered design, branding, and interfaces that are beautiful, intuitive, and effective.",
            image: "/assets/img/element/designing.jpg",
            page: "/social-media"
        }
    ]

    const navigateToPage = (path) => {
        router.push(path)
    }

    return (
        <section className="service-section bg-black text-center position-relative" style={{ padding: '160px 0' }}>
            <div className="container">
                <div className="section-title mb-5" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="stitle text-white mb-3">Our Integrated <span className="theme-clr">Creative Tech Stack</span></h2>
                    <p className="text-white opacity-75 mx-auto fs-5" style={{ maxWidth: '800px' }}>
                        We provide end-to-end expertise across four core pillars, ensuring your brand vision is executed flawlessly from code to campaign.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {serviceData.map((service) => (
                        <div key={service.id} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div className="service-card position-relative overflow-hidden rounded-4 border border-secondary border-opacity-25" onClick={() => navigateToPage(service.page)}>
                                <div className="img-wrapper w-100 h-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-100 h-100 object-fit-cover transition-transform duration-500"
                                    />
                                </div>
                                <div className="overlay-content position-absolute bottom-0 start-0 w-100 p-4 text-start d-flex flex-column justify-content-end">
                                    <h3 className="text-white mb-2 fw-bold">{service.title}</h3>
                                    <p className="text-white opacity-75 mb-3 small">{service.description}</p>
                                    <button className="explore-btn btn btn-outline-light rounded-pill align-self-start py-2 px-4 fw-semibold border-0 bg-theme text-black">
                                        Explore More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5" data-aos="fade-up" data-aos-duration="1400">
                    <button
                        onClick={() => navigateToPage('/graphics-services')}
                        className="btn btn-outline-theme rounded-pill py-3 px-5 fw-bold fs-5 text-uppercase theme-border theme-clr bg-transparent"
                    >
                        View Graphics Services
                    </button>
                </div>
            </div>

            <style jsx>{`
                .service-card {
                    height: 350px;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(227, 255, 4, 0.15);
                    border-color: #e9fe49 !important;
                }
                .img-wrapper img {
                    transition: transform 0.6s ease;
                    filter: brightness(0.7);
                }
                .service-card:hover .img-wrapper img {
                    transform: scale(1.1);
                    filter: brightness(0.9);
                }
                .overlay-content {
                    background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), transparent);
                    height: 100%;
                    transform: translateY(20px);
                    transition: transform 0.4s ease;
                }
                .service-card:hover .overlay-content {
                    transform: translateY(0);
                }
                .explore-btn {
                    background-color: #e9fe49;
                    color: black;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: all 0.4s ease 0.1s;
                }
                .service-card:hover .explore-btn {
                    transform: translateY(0);
                    opacity: 1;
                }
                .bg-theme {
                    background-color: #e9fe49 !important;
                }
                .text-theme {
                    color: #e9fe49 !important;
                }
                .theme-hover:hover {
                    background-color: #e9fe49;
                    color: black !important;
                    box-shadow: 0 0 20px rgba(233, 254, 73, 0.4);
                }
            `}</style>
        </section>
    )
}

export default Service1















