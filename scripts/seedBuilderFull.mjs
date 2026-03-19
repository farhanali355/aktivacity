import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '0aqsi8be',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skkvg1rmsYajhxfCc5eDUoVEgaNWRQaTjtW3MTkNWYE07Rebm5R9GiKOr5387IAU9yoMLbt5ypUecC2jl1sgiw2tq6p3xr7O0P9oDIbJIoZN28pEmEou5fwalTQpazMXodkmpzLwIh8wdypRD9ZEyn5jOeGfz3S8l5Qd3wDBxscHY1uUYEvb'
})

const homePageData = {
  _type: 'homePage',
  _id: 'homePage',
  title: 'Home Page',
  pageBuilder: [
    {
      _type: 'heroBlock',
      _key: 'hero1',
      title: '<span class="theme-clr" style="font-size: inherit; line-height: inherit;">AI-Powered</span> Creative Tech <br /> & Digital Agency',
      subtitle: 'Your go-to for Software, Digital Marketing & Video.',
      buttonText: 'Book Free Consultation',
      buttonLink: '/contact'
    },
    {
      _type: 'introBlock',
      _key: 'intro1',
      tagline: 'WHO WE ARE',
      heading: 'Bridge the Gap Between Vision & Reality',
      subheading: 'Tired of juggling multiple vendors for your digital needs?',
      descriptionBox: 'As a leading <span className="theme-clr fw-bold">IT Company in Pakistan</span> and <span className="theme-clr fw-bold">Full Service Design & Development Agency</span>, we offer a <span className="text-decoration-underline text-white">unified strategy</span> that blends AI, technology, and creative storytelling.\nWe deliver <strong>integrated solutions</strong> and drive <strong>digital transformation</strong> for <strong>measurable business growth</strong>.'
    },
    {
      _type: 'aboutBlock',
      _key: 'about1',
      tagline: 'WHY CHOOSE US',
      heading: 'More Than an Agency <span class="fw-400 theme-clr" style="font-style: normal;">Your Digital Growth Partner in Pakistan</span>',
      description: "This is not a history lesson. It's a value proposition. Our <strong>AI-Powered Creative Tech</strong> model provides a superior advantage by combining data-driven insights with world-class design.\n\nWe are committed to the Pakistani market, leveraging a hybrid team of expert engineers and creative artists who believe that <strong>strategy, technology, and creativity</strong> must work as one.\nWhat you can expect is more than just service—it's a partnership focused entirely on your <strong>measurable growth</strong>."
    },
    {
      _type: 'serviceBlock',
      _key: 'service1',
      tagline: 'Our Integrated <span class="theme-clr" style="font-style: normal;">Creative Tech Stack</span>',
      description: 'We provide end-to-end expertise across four core pillars, ensuring your brand vision is executed flawlessly from code to campaign.',
      servicesList: [
        { _key: 's1', title: 'Web & App Development', description: 'Building scalable, high-performance web and mobile applications using cutting-edge AI and code.', page: '/services/web-development-services' },
        { _key: 's2', title: 'Digital Marketing', description: 'Data-driven strategies to amplify your brand reach and ROI using AI-enhanced targeting.', page: '/graphic-main' },
        { _key: 's3', title: 'AI Film & Video Production', description: 'Cinematic storytelling powered by AI for next-gen visual experiences and production efficiency.', page: '/services/seo-services' },
        { _key: 's4', title: 'Brand & Design', description: 'User-centered design, branding, and interfaces that are beautiful, intuitive, and effective.', page: '/social-media' }
      ]
    },
    {
      _type: 'textSliderBlock',
      _key: 'ts1',
      text: "Let's Aktivate Your Brand."
    },
    {
      _type: 'caseStudyBlock',
      _key: 'cs1',
      tagline: 'PORTFOLIO & CASE STUDIES',
      heading: 'Where Vision Meets <span class="theme-clr" style="font-style: normal;">Measurable Results</span>',
      description: 'Explore how we’ve helped businesses like yours leverage integrated technology and creativity to solve complex challenges and achieve key objectives.',
      cases: [
        { _key: 'c1', title: 'A Simple Social Media Marketing Checklist', category: 'Creative', link: '/study-details', imageUrl: '/assets/img/case/study-grid1.png' },
        { _key: 'c2', title: 'Transforming Challenges into Opportunities', category: 'Branding', link: '/study-details', imageUrl: '/assets/img/case/study-grid2.png' },
        { _key: 'c3', title: 'A Simple Social Media Marketing Checklist', category: 'Creative', link: '/study-details', imageUrl: '/assets/img/case/study-grid1.png' },
        { _key: 'c4', title: 'Transforming Challenges into Opportunities', category: 'Branding', link: '/study-details', imageUrl: '/assets/img/case/study-grid2.png' }
      ]
    },
    {
      _type: 'textSliderBlock',
      _key: 'ts2',
      text: "Let's Aktivate Your Brand."
    },
    {
      _type: 'testimonialBlock',
      _key: 't1',
      tagline: 'TESTIMONIALS',
      heading: 'What Our Clients <span class="theme-clr" style="font-style: normal;">Say About Us</span>',
      testimonials: [
        { _key: 't1', name: 'Daniel Smith', text: 'The level of professionalism and technical expertise provided by Aktivacity is simply unmatched. Our project was delivered on time and exceeded expectations.', imageUrl: 'https://i.pravatar.cc/150?u=daniel' },
        { _key: 't2', name: 'Sarah Johnson', text: 'Working with this team has been a game-changer for our digital presence. They truly understand how to bridge the gap between vision and reality.', imageUrl: 'https://i.pravatar.cc/150?u=sarah' },
        { _key: 't3', name: 'Michael Brown', text: 'Exceptional quality and attention to detail. The AI-powered insights they provided allowed us to scale our operations much faster than anticipated.', imageUrl: 'https://i.pravatar.cc/150?u=michael' },
        { _key: 't4', name: 'Emily Davis', text: 'Stunning design and smooth user experience. The team at Aktivacity really knows how to create digital products that people love to use.', imageUrl: 'https://i.pravatar.cc/150?u=emily' },
        { _key: 't5', name: 'Robert Wilson', text: 'Communication was seamless and the results were measurable. I highly recommend them for any complex web or app development needs.', imageUrl: 'https://i.pravatar.cc/150?u=robert' }
      ]
    },
    {
      _type: 'faqBlock',
      _key: 'f1',
      tagline: 'FAQ',
      heading: 'Your Questions, <span class="theme-clr">Answered</span>',
      faqs: [
        { _key: 'fq1', question: 'What makes an "AI-Powered Creative Tech Agency" different from a regular digital agency?', answer: 'Unlike traditional agencies, we integrate Artificial Intelligence into every step—from data-driven strategy and automated marketing to AI-enhanced design and development. This ensures faster delivery, smarter insights, and superior measurable results.' },
        { _key: 'fq2', question: 'Do you work with startups/SMEs in Pakistan, or only large enterprises?', answer: 'We work with visionaries of all sizes. Whether you\'re an ambitious startup looking to disrupt the market or an established enterprise seeking digital transformation, our scalable solutions are tailored to your specific budget and goals.' },
        { _key: 'fq3', question: 'Can you handle both our software development and marketing campaign?', answer: 'Absolutely. That\'s our core strength. We are a full-service integrated partner, ensuring your technical product (website/app) and your marketing message are perfectly aligned for maximum impact and growth.' },
        { _key: 'fq4', question: 'What is your typical project process and timeline?', answer: 'We follow an agile, transparent process: Discovery -> Strategy -> Design & Dev -> Deployment -> Growth. Timelines vary by project complexity, but our AI-powered workflows often allow us to deliver 30-40% faster than traditional standards.' },
        { _key: 'fq5', question: 'How do you measure the success and ROI of your projects?', answer: 'We focus on key performance indicators (KPIs) that matter to your business—leads generated, cost per acquisition, engagement rates, and revenue growth. We provide transparent reporting so you always know the value we\'re delivering.' }
      ]
    },
    {
      _type: 'textSliderBlock',
      _key: 'ts3',
      text: "Let's Aktivate Your Brand."
    }
  ]
}

async function seed() {
  console.log('⏳ Seeding FULL Home Page (Page Builder)...')
  try {
    const result = await client.createOrReplace(homePageData)
    console.log('✅ Home Page full data seeded successfully!', result._id)
  } catch (error) {
    console.error('❌ Error seeding data:', error.message)
  }
}

seed()
