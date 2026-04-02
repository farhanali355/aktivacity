import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '0aqsi8be',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skkvg1rmsYajhxfCc5eDUoVEgaNWRQaTjtW3MTkNWYE07Rebm5R9GiKOr5387IAU9yoMLbt5ypUecC2jl1sgiw2tq6p3xr7O0P9oDIbJIoZN28pEmEou5fwalTQpazMXodkmpzLwIh8wdypRD9ZEyn5jOeGfz3S8l5Qd3wDBxscHY1uUYEvb'
})

const webAppServiceData = {
  _type: 'serviceWebApp',
  _id: 'web-app-service-1',
  title: 'Web & App Development',
  slug: { _type: 'slug', current: 'web-development' },
  hero: {
    badge: 'Innovation & Growth',
    title: 'Web Development Services in Karachi',
    subheading: 'Your Trusted Partner for Custom Websites & Web Applications That Drive Real Business Growth',
    description: 'Aktivacity is a Karachi-based web development agency helping businesses across Pakistan build powerful digital experiences. We specialize in custom websites, web applications, e-commerce stores, and mobile apps.',
    buttonText: 'Book a Free Consultation',
    buttonLink: '/contact'
  },
  whySection: {
    tagline: 'The Problem We Solve',
    heading: 'The Web & App Challenges We Solve',
    cards: [
      { _key: '1', iconClass: 'fas fa-bolt-slash', title: 'Outdated or Slow Websites', description: 'Poor performance drives 67% of users away within 3 seconds.' },
      { _key: '2', iconClass: 'fas fa-user-minus', title: 'Low Engagement & Conversions', description: 'Bad UI/UX design limits business growth and revenue.' },
      { _key: '3', iconClass: 'fas fa-mobile-screen-button', title: 'Lack of Mobile Optimization', description: '58% of traffic abandons non-responsive platforms.' }
    ]
  },
  deliverablesSection: {
    tagline: 'Our Expertise',
    heading: 'Our Web & App Development Services',
    description: "We don't just build products; we deliver competitive advantages. Every line of code is an investment in your market dominance.",
    list: [
      { _key: 'd1', title: 'Custom Website Development', description: 'Your website is your most powerful sales tool — and we build it to perform.' },
      { _key: 'd2', title: 'Web Application Development', description: 'From complex enterprise platforms to lightweight SaaS tools.' },
      { _key: 'd3', title: 'E-Commerce Website Development', description: 'We build online stores that are designed to sell — not just look good.' }
    ]
  },
  ctaBanner: {
    text: 'Ready to Build a High-Performing Digital Platform?',
    buttonText: 'Get a Free Strategy Call',
    buttonLink: '/contact'
  },
  processSection: {
    tagline: 'Our Process',
    heading: 'Our Streamlined Development Process',
    description: 'This structured approach eliminates bottlenecks and accelerates launch timelines.',
    steps: [
      { _key: 's1', stepNumber: '01', title: 'Requirements Analysis', points: ['Business goals analysis', 'User needs analysis'] },
      { _key: 's2', stepNumber: '02', title: 'UI/UX Prototyping', points: ['Conversion focused design', 'Wireframes'] },
      { _key: 's3', stepNumber: '03', title: 'Agile Development', points: ['Proven agile workflows', 'Clean code'] }
    ]
  },
  faqSection: {
    heading: 'Web & App Development FAQs',
    faqs: [
      { _key: 'f1', question: 'How long does web development take?', answer: 'Typically 4 to 6 weeks for standard sites, 3-6 months for custom apps.' },
      { _key: 'f2', question: 'Do you offer support after launch?', answer: 'Yes, we provide comprehensive monthly maintenance packages.' }
    ],
    expertName: 'Zain Ahmed',
    expertRole: 'Founder @ Aktivacity',
    expertText: '“Have more questions or just curious about future possibilities? Feel free to connect with me.”',
    linkedinUrl: 'https://linkedin.com'
  },
  finalConversion: {
    heading: "Let's Build Your Digital Platform",
    description: 'Stop losing customers to slow, outdated websites. Start converting today.',
    buttonText: 'BOOK A CALL'
  }
}

async function seed() {
  console.log('⏳ Seeding Dynamic Service Layout...')
  try {
    const result = await client.createOrReplace(webAppServiceData)
    console.log('✅ Service page seeded successfully!', result._id)
  } catch (error) {
    console.error('❌ Error seeding data:', error.message)
  }
}

seed()
