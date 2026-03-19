
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export default function CaseStudy1({ data }) {
    const cases = data?.cases || [
        {
            _key: '1',
            title: "A Simple Social Media Marketing Checklist",
            category: "Creative",
            link: "/study-details",
            imageUrl: "/assets/img/case/study-grid1.png"
        },
        {
            _key: '2',
            title: "Transforming Challenges into Opportunities",
            category: "Branding",
            link: "/study-details",
            imageUrl: "/assets/img/case/study-grid2.png"
        },
        {
            _key: '3',
            title: "A Simple Social Media Marketing Checklist",
            category: "Creative",
            link: "/study-details",
            imageUrl: "/assets/img/case/study-grid1.png"
        },
        {
            _key: '4',
            title: "Transforming Challenges into Opportunities",
            category: "Branding",
            link: "/study-details",
            imageUrl: "/assets/img/case/study-grid2.png"
        }
    ]

    return (
        <>

            <section className="case-study-vsesion01 bg2-clr pb-space">
                <div className="container">
                    <div className="section-title text-center mb-xxl-15 mb-xl-10 mb-8" data-aos="fade-up" data-aos-duration="1000">
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                            {data?.tagline || 'PORTFOLIO & CASE STUDIES'}
                        </div>
                        <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4 text-white" dangerouslySetInnerHTML={{ __html: data?.heading || 'Where Vision Meets <span class="theme-clr" style="font-style: normal;">Measurable Results</span>' }} />
                        <p className="white-clr mb-0 fs-5" style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
                            {data?.description || 'Explore how we’ve helped businesses like yours leverage integrated technology and creativity to solve complex challenges and achieve key objectives.'}
                        </p>
                    </div>
                    <div className="row g-xxl-7 g-xl-5 g-4">
                        {cases.map((item, index) => (
                            <div key={item._key || index} className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400 + (index * 200)}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src={item.image && item.image.asset ? urlForImage(item.image).url() : (item.imageUrl || "/assets/img/case/study-grid1.png")} alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href={item.link || "/study-details"} className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                {item.category || "Creative"}
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href={item.link || "/study-details"} className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                {item.title || "A Simple Social Media Marketing Checklist"}
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
