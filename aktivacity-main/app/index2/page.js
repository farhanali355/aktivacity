
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog2 from "@/components/sections/Blog2"
import CaseStudy2 from "@/components/sections/CaseStudy2"
import Hero2 from "@/components/sections/Hero2"
import Offer1 from "@/components/sections/Offer1"
import SoftwareWatch1 from "@/components/sections/SoftwareWatch1"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
import TextSLider4 from "@/components/sections/TextSLider4"
import TextSLider5 from "@/components/sections/TextSLider5"
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero2 />
                    <TextSLider4 />
                    <About1 />
                    <TextSLider5 />
                    <Offer1 />
                    <SoftwareWatch1 />
                    <CaseStudy2 />
                    <Team2 />
                    <Testimonial2 />
                    <Blog2 />
                </div>
            </Layout>
        </>
    )
}