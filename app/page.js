import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Hero1 from "@/components/sections/Hero1"
import IntroSection from "@/components/sections/IntroSection"
import Product1 from "@/components/sections/Product1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import HomeTestimonial from "@/components/sections/HomeTestimonial"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import Watch1 from "@/components/sections/Watch1"
import Faq1 from "@/components/sections/Faq1"
import ContactCTA from "@/components/sections/ContactCTA"
import { client } from "@/sanity/lib/client"

import { urlFor } from "@/sanity/lib/image"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata() {
    const pageData = await client.fetch(`*[_type == "homePage"][0]{metaTitle, metaDescription, ogImage}`)
    
    return {
        title: pageData?.metaTitle || "AI-Powered Creative & Digital Agency in Pakistan | Aktivacity",
        description: pageData?.metaDescription || "Aktivacity is an AI-powered creative & digital agency in Pakistan, helping brands grow through smarter development, marketing, design, and automation.",
        openGraph: {
            title: pageData?.metaTitle || "AI-Powered Creative & Digital Agency in Pakistan | Aktivacity",
            description: pageData?.metaDescription || "Aktivacity is an AI-powered creative & digital agency in Pakistan, helping brands grow through smarter development, marketing, design, and automation.",
            images: pageData?.ogImage ? [urlFor(pageData.ogImage).width(1200).height(630).url()] : []
        }
    }
}

export default async function Home() {
    const pageData = await client.fetch(`*[_type == "homePage"][0]{..., "timestamp": now()}`, {}, {
        next: { revalidate: 0 },
        cache: 'no-store'
    })

    const pageBuilder = pageData?.pageBuilder || [];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    
                    {pageBuilder.length > 0 ? (
                        pageBuilder.map((block, index) => {
                            switch (block._type) {
                                case 'heroBlock':
                                    return <Hero1 key={index} data={block} />
                                case 'introBlock':
                                    return <IntroSection key={index} data={block} />
                                case 'aboutBlock':
                                    return <Product1 key={index} data={block} />
                                case 'serviceBlock':
                                    return <Service1 key={index} data={block} />
                                case 'textSliderBlock':
                                    return <TextSLider1 key={index} data={block} />
                                case 'caseStudyBlock':
                                    return <CaseStudy1 key={index} data={block} />
                                case 'testimonialBlock':
                                    return <HomeTestimonial key={index} />
                                case 'teamBlock':
                                    return <Team1 key={index} data={block} />
                                case 'blogBlock':
                                    return <Blog1 key={index} data={block} />
                                case 'faqBlock':
                                    return <Faq1 key={index} data={block} />
                                case 'videowatchBlock':
                                    return <Watch1 key={index} data={block} />
                                case 'contactCtaBlock':
                                    return <ContactCTA key={index} data={block} />
                                default:
                                    return null
                            }
                        })
                    ) : (
                        // FALLBACK: Default Hardcoded Sections
                        <>
                            <Hero1 />
                            <IntroSection />
                            <Product1 />
                            <Service1 />
                            <TextSLider1 />
                            <CaseStudy1 />
                            <TextSLider2 />
                            <Team1 />
                            <HomeTestimonial />
                            <TextSLider3 />
                        </>
                    )}
                </div>
            </Layout>
        </>
    )
}