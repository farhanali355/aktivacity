import { client } from "@/sanity/lib/client"
import ServicesClient from "./ServicesClient"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata() {
    const pageData = await client.fetch(`*[_type == "servicePage"][0]{seo}`)
    
    return {
        title: pageData?.seo?.metaTitle || "AI Digital Services & Solutions - Web, SEO & Branding | Aktivacity",
        description: pageData?.seo?.metaDescription || "Explore Aktivacity's digital services: web development, SEO, digital marketing, AI automation, UI/UX design, and branding. Built to help businesses grow faster and scale smarter.",
        openGraph: {
            title: pageData?.seo?.metaTitle || "AI Digital Services & Solutions - Web, SEO & Branding | Aktivacity",
            description: pageData?.seo?.metaDescription || "Explore Aktivacity's digital services: web development, SEO, digital marketing, AI automation, UI/UX design, and branding. Built to help businesses grow faster and scale smarter.",
            images: pageData?.seo?.ogImage ? [pageData.seo.ogImage] : []
        }
    }
}

export default async function ServicePage() {
    const pageData = await client.fetch(`*[_type == "servicePage"][0]{..., "timestamp": now()}`, {}, {
        next: { revalidate: 0 },
        cache: 'no-store'
    })

    const fallbackServices = [
        {
            id: '01',
            title: "Development Services",
            desc: "Scalable web, mobile, and SaaS solutions built for performance, automation, and long-term growth.",
            subCapabilities: [
                { title: "Web Development Services", href: "/services/web-development-services" },
                { title: "Software Development", href: "/services/software-development" }
            ],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: '02',
            title: "Digital Marketing (SEO & PPC)",
            desc: "Search, paid media, and growth strategies designed to increase visibility, generate leads, and maximize ROI.",
            subCapabilities: [
                { title: "SEO Optimization", href: "/services/seo-services" },
                { title: "Digital Marketing", href: "/services/digital-marketing-services" }
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
        }
    ]

    const fallbackStats = [
        { label: "AI Projects Delivered", val: "100+", icon: "fa-robot" },
        { label: "Clients Served Globally", val: "50+", icon: "fa-globe" },
        { label: "Years of AI Experience", val: "5+", icon: "fa-calendar-check" },
        { label: "Client Satisfaction Rate", val: "95%+", icon: "fa-heart" }
    ]

    const fallbackIndustries = [
        { name: "Enterprises", desc: "Scalable solutions built for complex systems and long-term growth.", icon: "fa-building" },
        { name: "E-commerce", desc: "Performance-driven strategies to increase sales, conversions, and retention.", icon: "fa-shopping-cart" }
    ]

    const fallbackStack = [
        { name: "Node.js", logo: "/assets/img/web-app/nodejs.png" },
        { name: "Python", logo: "/assets/img/web-app/python.png" },
        { name: "React", logo: "/assets/img/web-app/react-native.png" }
    ]

    return (
        <ServicesClient 
            pageData={pageData} 
            fallbackServices={fallbackServices}
            fallbackStats={fallbackStats}
            fallbackIndustries={fallbackIndustries}
            fallbackStack={fallbackStack}
        />
    )
}