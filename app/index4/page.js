
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Blog4 from "@/components/sections/Blog4"
import CaseStudy4 from "@/components/sections/CaseStudy4"
import Hero4 from "@/components/sections/Hero4"
import Offer2 from "@/components/sections/Offer2"
import Protfolio1 from "@/components/sections/Protfolio1"
import StepWorking1 from "@/components/sections/StepWorking1"
import Testimonial4 from "@/components/sections/Testimonial4"
import TextSLider7 from "@/components/sections/TextSLider7"
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={4}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero4 />
                    <About3 />
                    <TextSLider7 />
                    <Protfolio1 />
                    <Offer2 />
                    <StepWorking1 />
                    <CaseStudy4 />
                    <Testimonial4 />
                    <Blog4 />
                </div>
            </Layout>
        </>
    )
}