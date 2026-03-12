
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
            slidesPerView: 3,
        },
    },
}

export default function Testimonial1() {
    const testimonialData = [
        {
            name: "Daniel Smith",
            role: "SENIOR ENGINEER",
            img: "https://i.pravatar.cc/150?u=daniel",
            text: "The level of professionalism and technical expertise provided by Aktivacity is simply unmatched. Our project was delivered on time and exceeded expectations."
        },
        {
            name: "Sarah Johnson",
            role: "MARKETING DIRECTOR",
            img: "https://i.pravatar.cc/150?u=sarah",
            text: "Working with this team has been a game-changer for our digital presence. They truly understand how to bridge the gap between vision and reality."
        },
        {
            name: "Michael Brown",
            role: "FOUNDER & CEO",
            img: "https://i.pravatar.cc/150?u=michael",
            text: "Exceptional quality and attention to detail. The AI-powered insights they provided allowed us to scale our operations much faster than anticipated."
        },
        {
            name: "Emily Davis",
            role: "CREATIVE HEAD",
            img: "https://i.pravatar.cc/150?u=emily",
            text: "Stunning design and smooth user experience. The team at Aktivacity really knows how to create digital products that people love to use."
        },
        {
            name: "Robert Wilson",
            role: "PROJECT MANAGER",
            img: "https://i.pravatar.cc/150?u=robert",
            text: "Communication was seamless and the results were measurable. I highly recommend them for any complex web or app development needs."
        }
    ]

    return (
        <>
            <section className="testimonial-section pt-10 pb-100 position-relative">
                <div className="container">
                    <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-2 px-4 theme-clr gap-3 mb-4">
                            TESTIMONIALS
                        </div>
                        <h2 className="stitle mb-4 text-white">
                            What Our Clients <span className="theme-clr" style={{ fontStyle: 'normal' }}>Say About Us</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="swiper testimonial-slider position-relative" >
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    {testimonialData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial-card mt-5">
                                                <div className="card-header d-flex justify-content-between align-items-center mb-4">
                                                    <div className="user-info d-flex align-items-center">
                                                        <div className="user-img">
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div className="star-rating theme-clr">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <p className="testimonial-text mb-4 text-white opacity-75">
                                                        "{item.text}"
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 bg-transparent p-0 mt-2">
                                                    <h4 className="user-name text-white fw-bold mb-1">{item.name}</h4>
                                                    <span className="user-role theme-clr fw-bold small text-uppercase">{item.role}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Custom Navigation */}
                <div className="slider-nav-wrapper d-flex justify-content-center gap-3 mt-5">
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
