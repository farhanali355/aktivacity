import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceWebApp',
  title: 'Web & App Layout Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (Internal)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string' },
        { name: 'title', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'CTA Button Text', type: 'string' },
        { name: 'buttonLink', title: 'CTA Button Link', type: 'string' },
      ],
    }),
    // Marquee Logos
    defineField({
      name: 'marqueeLogos',
      title: 'Marquee Logos',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    // Why Section (Problem Cards)
    defineField({
      name: 'whySection',
      title: 'Why Section (Problem Cards)',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'cards',
          title: 'Problem Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'iconClass', title: 'FontAwesome Icon Class (e.g. fas fa-bolt)', type: 'string' },
                { name: 'title', title: 'Card Title', type: 'string' },
                { name: 'description', title: 'Card Description', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    // Deliverables Section
    defineField({
      name: 'deliverablesSection',
      title: 'Deliverables Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'list',
          title: 'Deliverables List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),
    // CTA Banner
    defineField({
      name: 'ctaBanner',
      title: 'CTA Banner (Middle)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Banner Text', type: 'string' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'buttonLink', title: 'Button Link', type: 'string' },
      ],
    }),
    // Process Section
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] },
              ],
            },
          ],
        },
      ],
    }),
    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string' },
                { name: 'answer', title: 'Answer', type: 'text' },
              ],
            },
          ],
        },
        // Connect Expert
        { name: 'expertName', title: 'Expert Name', type: 'string' },
        { name: 'expertRole', title: 'Expert Role', type: 'string' },
        { name: 'expertImage', title: 'Expert Image', type: 'image' },
        { name: 'expertText', title: 'Expert Text', type: 'text' },
        { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'string' },
      ],
    }),
    // Final Conversion
    defineField({
      name: 'finalConversion',
      title: 'Final Conversion Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
      ],
    }),
  ],
})
