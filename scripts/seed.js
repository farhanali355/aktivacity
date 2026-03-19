import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const homePageData = {
  _type: 'homePage',
  _id: 'homePage',
  title: 'Home Page',
  hero: {
    title: '<span class="theme-clr" style="font-size: inherit; line-height: inherit;">AI-Powered</span> Creative Tech <br /> & Digital Agency',
    subtitle: 'Your go-to for Software, Digital Marketing & Video.',
    buttonText: 'Book Free Consultation',
    buttonLink: '/contact'
  },
  intro: {
    tagline: 'WHO WE ARE',
    heading: 'Bridge the Gap Between Vision & Reality',
    subheading: 'Tired of juggling multiple vendors for your digital needs?',
    descriptionBox: 'As a leading <span className="theme-clr fw-bold">IT Company in Pakistan</span> and <span className="theme-clr fw-bold">Full Service Design & Development Agency</span>, we offer a <span className="text-decoration-underline text-white">unified strategy</span> that blends AI, technology, and creative storytelling.\nWe deliver <strong>integrated solutions</strong> and drive <strong>digital transformation</strong> for <strong>measurable business growth</strong>.'
  },
  aboutSection: {
    tagline: 'WHY CHOOSE US',
    heading: 'More Than an Agency <span class="fw-400 theme-clr" style={{ fontStyle: "normal" }}>Your Digital Growth Partner in Pakistan</span>',
    description: "This is not a history lesson. It's a value proposition. Our <strong>AI-Powered Creative Tech</strong> model provides a superior advantage by combining data-driven insights with world-class design.\n\nWe are committed to the Pakistani market, leveraging a hybrid team of expert engineers and creative artists who believe that <strong>strategy, technology, and creativity</strong> must work as one.\nWhat you can expect is more than just service—it's a partnership focused entirely on your <strong>measurable growth</strong>."
  }
}

async function seed() {
  console.log('⏳ Seeding Home Page data...')
  try {
    await client.createIfNotExists(homePageData)
    console.log('✅ Home Page data seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding data:', error.message)
  }
}

seed()
