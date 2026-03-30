
import Layout from "@/components/layout/Layout"
import Protfolio1 from "@/components/sections/Protfolio1"

export default function ProtfolioPage() {
    return (
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Portfolio">
            <Protfolio1 />
        </Layout>
    )
}
