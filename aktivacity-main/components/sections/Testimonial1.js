
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".cmn-prev",
        nextEl: ".cmn-next",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
    },
}

import { urlForImage } from "@/sanity/lib/image"

export default function Testimonial1({ data }) {
    const testimonialData = data?.testimonials || [
        {
            name: "Ahmed K.",
            img: "https://i.pravatar.cc/150?u=daniel",
            text: "Aktivacity transformed our vision into a high-performing SaaS platform with AI-driven marketing that tripled our user base. True full-service tech & digital agency partners!",
            ratingCount: "4.8k",
            companyLogo: "/assets/img/client/c1.png"
        },
        {
            name: "Sarah M.",
            img: "https://i.pravatar.cc/150?u=sarah",
            text: "From UI/UX design to explainer videos, their end-to-end solutions delivered investor-ready results. Highly recommend this Software Development Company in Pakistan.",
            ratingCount: "4.9k",
            companyLogo: "/assets/img/client/c2.png"
        },
        {
            name: "Michael Brown",
            img: "https://i.pravatar.cc/150?u=michael",
            text: "Exceptional quality and attention to detail. The AI-powered insights they provided allowed us to scale our operations much faster than anticipated.",
            ratingCount: "4.7k",
            companyLogo: "/assets/img/client/c3.png"
        },
        {
            name: "Emily Davis",
            img: "https://i.pravatar.cc/150?u=emily",
            text: "Stunning design and smooth user experience. The team at Aktivacity really knows how to create digital products that people love to use.",
            ratingCount: "5.0k",
            companyLogo: "/assets/img/client/c4.png"
        },
        {
            name: "Robert Wilson",
            img: "https://i.pravatar.cc/150?u=robert",
            text: "Communication was seamless and the results were measurable. I highly recommend them for any complex web or app development needs.",
            ratingCount: "4.6k",
            companyLogo: "/assets/img/client/c5.png"
        }
    ]

    return (
        <>
            <section className="testimonial-section pt-10 pb-100 position-relative">
                <div className="container">
                    <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                            {data?.tagline || 'TESTIMONIALS'}
                        </div>
                        <h2 className="stitle mb-4 text-white" dangerouslySetInnerHTML={{ __html: data?.heading || 'What Our Clients <span class="theme-clr" style="font-style: normal;">Say About Us</span>' }} />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="swiper testimonial-slider position-relative" >
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    {testimonialData.map((item, index) => {
                                        // Professional brand logos from assets
                                        const fallbackLogos = [
                                            "/assets/img/web-app/shopify-logo.png",
                                            "/assets/img/web-app/wordpress-logo.png",
                                            "/assets/img/seo-page/png-clipart-ahrefs-new-logo-tech-companies.png",
                                            "/assets/img/icons/clutch-icon.png",
                                            "/assets/img/icons/upwork-icon.png"
                                        ];
                                        const rating = item.ratingCount || (index % 2 === 0 ? "4.8k" : "4.9k");
                                        const logo = item.companyLogo || item.companyImg || fallbackLogos[index % 5];
                                        
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="testimonial-card mt-5">
                                                    <div className="card-header d-flex justify-content-between align-items-center mb-4">
                                                        <div className="user-info d-flex align-items-center">
                                                            <div className="user-img">
                                                                <img src={item.image && item.image.asset ? urlForImage(item.image).url() : (item.imageUrl || item.img || "https://i.pravatar.cc/150")} alt={item.name} />
                                                            </div>
                                                        </div>
                                                        <div className="star-rating d-flex align-items-center theme-clr">
                                                            <div className="stars">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <span className="rating-count ms-2 text-white opacity-50 fw-bold">({rating})</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="testimonial-text mb-4 text-white opacity-75">
                                                            "{item.text}"
                                                        </p>
                                                    </div>
                                                    <div className="card-footer border-0 bg-transparent p-0 mt-2 d-flex align-items-center justify-content-between">
                                                        <h4 className="user-name text-white fw-bold mb-0">{item.name}</h4>
                                                        <div className="company-logo ms-2">
                                                            <img src={logo} alt="company" style={{ width: 'auto', height: '28px', maxWidth: '80px', objectFit: 'contain', display: 'block', filter: 'brightness(1.2)' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Custom Navigation */}
                <div className="slider-nav-wrapper d-flex justify-content-center gap-3 mt-5 mb-5">
                    <button className="cmn-prev nav-btn d-center">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button className="cmn-next nav-btn d-center">
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
            </section>

            <style jsx>{`
                .testimonial-card {
                    background: #111;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    padding: 30px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                }
                
                .testimonial-card:hover {
                    box-shadow: 0 0 20px rgba(233, 254, 73, 0.2);
                    transform: translateY(-5px);
                    border-color: #e9fe49;
                }
                
                .user-img {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid #e9fe49;
                }
                
                .user-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .star-rating i {
                    font-size: 12px;
                    margin-left: 2px;
                }
                
                .rating-count {
                    font-size: 14px;
                    letter-spacing: 0.5px;
                }

                .company-logo img {
                    object-fit: contain;
                    transition: all 0.3s ease;
                    opacity: 0.7;
                }

                .testimonial-card:hover .company-logo img {
                    opacity: 1 !important;
                }
                
                .testimonial-text {
                    font-style: normal;
                    line-height: 1.5;
                    font-size: 16px;
                    min-height: 100px;
                }
                
                .user-name {
                    font-size: 20px;
                }
                
                .nav-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: 1px solid #454750;
                    color: white;
                    background: transparent;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .nav-btn:hover {
                    border-color: #e9fe49;
                    color: #e9fe49;
                    background: rgba(233, 254, 73, 0.05);
                }

                @media (max-width: 768px) {
                    .testimonial-card {
                        padding: 20px;
                    }
                    .user-name {
                        font-size: 18px;
                    }
                }
            `}</style>
        </>
    )
}
