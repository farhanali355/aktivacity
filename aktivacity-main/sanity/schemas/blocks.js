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
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description Text', type: 'text' }),
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
    defineField({ name: 'text', title: 'Text to Slide', type: 'string', initialValue: 'Let\'s Aktivate Your Brand.' })
  ]
})
