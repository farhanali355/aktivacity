
import Layout from "@/components/layout/Layout"
import Protfolio1 from "@/components/sections/Protfolio1"
import PortfolioTestimonial from "@/components/sections/PortfolioTestimonial"
import PortfolioCTA from "@/components/sections/PortfolioCTA"

export default function PortfolioPage() {
    return (
        <Layout
            headerStyle={2}
            footerStyle={3}
            breadcrumbTitle="Our Portfolio"
            breadcrumbSubTitle="From AI solutions to creative campaigns, explore work built to solve real business challenges and deliver measurable results."
        >
            <Protfolio1 />
            <PortfolioTestimonial />
            <PortfolioCTA />
        </Layout>
    )
}
