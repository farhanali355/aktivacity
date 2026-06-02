import { defineField, defineType } from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', description: 'Use HTML <span className="theme-clr"></span> to highlight text' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
  ],
})

export const introBlock = defineType({
  name: 'introBlock',
  title: 'Intro Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'descriptionBox', title: 'Description Text', type: 'text' }),
  ],
})

export const aboutBlock = defineType({
  name: 'aboutBlock',
  title: 'About (Why Choose Us) Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'WHY CHOOSE US' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Beyond Services: AI-First Creative <br><span class="theme-clr" style="font-style: normal;">& Growth Execution</span>' }),
    defineField({ name: 'subHeading', title: 'Sub Heading (Top Paragraph)', type: 'text', initialValue: 'Moving beyond traditional agency services, we combine strategy with modern, AI-first technology and efficient workflows. With our hybrid team of engineers and artists, we bring everything under one roof, so you don’t have to juggle multiple vendors.' }),
    defineField({ name: 'resultsTitle', title: 'Results Box Title', type: 'string', initialValue: 'THE RESULT?' }),
    defineField({
      name: 'resultsList',
      title: 'Results Box List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Your team moves faster, with fewer bottlenecks and clearer direction.',
        'From design to development to marketing, everything works together seamlessly.',
        'Your brand stays consistent, execution stays sharp, and growth stays optimized.'
      ]
    }),
    defineField({ name: 'description', title: 'Description Text (Bottom Paragraph)', type: 'text', initialValue: 'We go beyond traditional agency models by combining AI, creativity, and technology into one streamlined workflow...' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
})

export const serviceBlock = defineType({
  name: 'serviceBlock',
  title: 'Service Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Our Integrated Creative Tech Stack' }),
    defineField({ name: 'description', title: 'Description Text', type: 'text', initialValue: 'We provide end-to-end expertise across four core pillars, ensuring your brand vision is executed flawlessly from code to campaign.' }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Service Title', type: 'string' }),
            defineField({ name: 'description', title: 'Service Description', type: 'string' }),
            defineField({ name: 'image', title: 'Service Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'page', title: 'Link / Page URL', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})

export const caseStudyBlock = defineType({
  name: 'caseStudyBlock',
  title: 'Case Study Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'PORTFOLIO & CASE STUDIES' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Where Vision Meets <span class="theme-clr" style="font-style: normal;">Measurable Results</span>' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'cases',
      title: 'Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'category', title: 'Category', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'link', title: 'Link', type: 'string' }),
          ]
        }
      ]
    })
  ]
})

export const testimonialBlock = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'TESTIMONIALS' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'What Our Clients <span class="theme-clr" style="font-style: normal;">Say About Us</span>' }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Client Name', type: 'string' }),
            defineField({ name: 'text', title: 'Review Text', type: 'text' }),
            defineField({ name: 'image', title: 'Client Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageUrl', title: 'Image URL (fallback)', type: 'string', description: 'Used if no image is uploaded' })
          ]
        }
      ]
    })
  ]
})

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'FAQ' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Your Questions, <span class="theme-clr">Answered</span>' }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' })
          ]
        }
      ]
    })
  ]
})

export const textSliderBlock = defineType({
  name: 'textSliderBlock',
  title: 'Text Slider (Marquee)',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Text to Slide', type: 'string', initialValue: "Let's Aktivate Your Brand." })
  ]
})

export const blogBlock = defineType({
    name: 'blogBlock',
    title: 'Blog Section',
    type: 'object',
    fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'BLOG & NEWS' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Latest From <span class="theme-clr">Our Blog</span>' })
    ]
})

export const teamBlock = defineType({
    name: 'teamBlock',
    title: 'Team Section',
    type: 'object',
    fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'OUR TEAM' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Meet The <span class="theme-clr">Experts</span>' })
    ]
})

export const videowatchBlock = defineType({
    name: 'videowatchBlock',
    title: 'Watch Section (Video)',
    type: 'object',
    fields: [
        defineField({ name: 'videoUrl', title: 'Video URL', type: 'string' })
    ]
})

export const contactCtaBlock = defineType({
    name: 'contactCtaBlock',
    title: 'Contact CTA',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to Build Something Extraordinary?' }),
        defineField({ name: 'description', title: 'Description', type: 'text', initialValue: "Let's discuss your vision. Share your details, and our team will contact you to craft a personalized strategy for digital transformation." }),
        defineField({ name: 'email', title: 'Support Email', type: 'string', initialValue: 'Hello@Aktivacity.Com' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Get Started' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string', initialValue: '/contact' })
    ]
})

export const serviceHeroBlock = defineType({
    name: 'serviceHeroBlock',
    title: 'Service Hero',
    type: 'object',
    fields: [
        defineField({ name: 'badgeText', title: 'Badge Text', type: 'string', initialValue: 'Built for Speed, Scale & Performance' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'High-Performance <br /> Digital Systems for Growth' }),
        defineField({ name: 'description', title: 'Description', type: 'text', initialValue: 'Built to eliminate complexity...' }),
        defineField({ name: 'parallaxText', title: 'Background Parallax Text', type: 'string', initialValue: 'CAPABILITIES' }),
        defineField({ name: 'image', title: 'Hero Image', type: 'image' })
    ]
})

export const serviceListBlock = defineType({
    name: 'serviceListBlock',
    title: 'Service List Showcase',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Core Services' }),
        defineField({ 
            name: 'services', 
            title: 'Services', 
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ 
                        name: 'subCapabilities', 
                        title: 'Sub Capabilities', 
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Title', type: 'string' }),
                                defineField({ name: 'href', title: 'Link (URL)', type: 'string' })
                            ]
                        }]
                    }),
                    defineField({ name: 'image', title: 'Service Image', type: 'image' })
                ]
            }]
        })
    ]
})

export const resultsBridgeBlock = defineType({
    name: 'resultsBridgeBlock',
    title: 'Results Bridge (Parallax)',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Built for Measurable Results' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'parallaxText', title: 'Background Parallax Text', type: 'string', initialValue: 'RESULTS' })
    ]
})

export const statsBlock = defineType({
    name: 'statsBlock',
    title: 'Stats / Metrics Section',
    type: 'object',
    fields: [
        defineField({
            name: 'stats',
            title: 'Stats Entities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'value', title: 'Value (e.g. 100+)', type: 'string' }),
                    defineField({ name: 'icon', title: 'FontAwesome Icon Class', type: 'string' })
                ]
            }]
        })
    ]
})

export const marqueeBlock = defineType({
    name: 'marqueeBlock',
    title: 'Logo Marquee (Tech Stack)',
    type: 'object',
    fields: [
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Tech Name', type: 'string' }),
                    defineField({ name: 'image', title: 'Logo Image', type: 'image' })
                ]
            }]
        })
    ]
})

export const industryListBlock = defineType({
    name: 'industryListBlock',
    title: 'Industry Specialization',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Services Built for <br /> High-Growth Industries' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'industries',
            title: 'Industries',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Industry Name', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'icon', title: 'FontAwesome Icon Class', type: 'string' })
                ]
            }]
        })
    ]
})

export const stepsBlock = defineType({
    name: 'stepsBlock',
    title: 'Process Steps (How We Work)',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'How We Work' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'stepNumber', title: 'Step Number (e.g. 01. Discover)', type: 'string' }),
                    defineField({ name: 'title', title: 'Description', type: 'string' })
                ]
            }]
        })
    ]
})
