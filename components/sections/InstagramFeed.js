'use client'
import { useState, useEffect } from 'react';
import { Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function InstagramFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Skeleton Data for smooth loading & fallback
    const dummyItems = [
        { url: '/assets/img/about/about_team_strategy.png', isDummy: true },
        { url: '/assets/img/about/about_creative_workspace.png', isDummy: true },
        { url: '/assets/img/about/about_ai_tech.png', isDummy: true },
        { url: '/assets/img/about/about_data_analytics.png', isDummy: true },
        { url: '/assets/img/about/about_digital_growth.png', isDummy: true },
        { url: '/assets/img/about/about_team_strategy.png', isDummy: true },
    ];

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                // YEH RAHA URL JO AAPKO REPLACE KARNA HAI
                const beholdUrl = 'https://feeds.behold.so/iufeETuG7P63apV8GYLS';
                
                if (beholdUrl === 'YOUR_BEHOLD_URL_HERE') {
                    setLoading(false);
                    return; // Return if URL is not set
                }

                const response = await fetch(beholdUrl);
                const data = await response.json();
                
                if (data && data.posts && data.posts.length > 0) {
                    setPosts(data.posts);
                }
            } catch (error) {
                console.error("Error fetching Instagram data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramFeed();
    }, []);

    const swiperOptions = {
        modules: [Autoplay, FreeMode],
        spaceBetween: 24,
        speed: 10000,          // Balanced speed for the continuous marquee
        loop: true,
        allowTouchMove: true,  // Allow mouse sliding / touching
        freeMode: true,        // Solves the slow drag physics
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause automatically when user hovers/touches to drag
        },
        breakpoints: {
            320: { slidesPerView: 1.5 },
            576: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 },
            1200: { slidesPerView: 4.2 },
            1400: { slidesPerView: 4.5 },
        },
    };

    // Use fetched posts if available, else skeleton loader dummies
    const baseItems = posts.length > 0 ? posts : dummyItems;
    // Duplicate items to ensure Swiper loop has enough slides to never break
    const itemsToDisplay = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

    return (
        <section className="instagram-feed-section pt-space pb-space bg1-clr overflow-hidden">
            <div className="container mb-xxl-12 mb-xl-10 mb-8">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-right">
                        <div className="pricing-title">
                            <h2 className="stitle white-clr mb-0">
                                Connect on <strong style={{ color: '#E3FF04', fontWeight: 600 }}>Our Social</strong>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="marquee-wrapper" data-aos="fade-up" data-aos-duration={1500}>
                {(!loading || posts.length > 0) && (
                    <Swiper 
                        {...swiperOptions} 
                        className="instagram-marquee-swiper"
                        onSliderFirstMove={(swiper) => {
                            // Jab user slide ko mouse se pakray ga to speed free ho jaye gi
                            swiper.params.speed = 0; 
                        }}
                        onTouchEnd={(swiper) => {
                            // Mouse chorne par wapis apni speed me aa jaye
                            setTimeout(() => {
                                swiper.params.speed = 10000;
                            }, 10);
                        }}
                    >
                        {itemsToDisplay.map((item, index) => {
                            // Check media type from Behold Data
                            const isVideo = item.mediaType === 'VIDEO';
                            const mediaSrc = item.mediaUrl || item.url;
                            const linkUrl = item.permalink || "#";
                            const thumbnailSrc = item.sizes?.medium?.mediaUrl || mediaSrc; // Fallback to raw URL

                            return (
                                <SwiperSlide key={item.id || index}>
                                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="d-block">
                                        <div className="instagram-item position-relative overflow-hidden rounded-4 cursor-pointer" 
                                            style={{ 
                                                aspectRatio: '1/1.25', 
                                                background: '#222',
                                                border: '1px solid rgba(255,255,255,0.08)'
                                            }}>
                                                                                        {isVideo ? (
                                                <video 
                                                    src={mediaSrc}
                                                    poster={thumbnailSrc}
                                                    autoPlay 
                                                    loop 
                                                    muted 
                                                    playsInline 
                                                    className="w-100 h-100"
                                                    style={{ objectFit: 'cover', display: 'block' }}
                                                />
                                            ) : (
                                                <img 
                                                    src={thumbnailSrc} 
                                                    alt={item.caption || "Aktivacity Social"} 
                                                    className="w-100 h-100" 
                                                    style={{ objectFit: 'cover', display: 'block' }}
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>

            <style jsx>{`
                :global(.instagram-marquee-swiper .swiper-wrapper) {
                    transition-timing-function: linear !important;
                }
                .instagram-item video, 
                .instagram-item img {
                    object-fit: cover !important;
                    width: 100% !important;
                    height: 100% !important;
                    display: block !important;
                }
            `}</style>
        </section>
    );
}
