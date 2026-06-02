import { defineField, defineType } from 'sanity'

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for reference only',
      initialValue: 'Main Services Page',
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb & Header',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Banner Title', type: 'string', initialValue: 'AI & Digital Services <br/> For Growth & Scale' }),
        defineField({ name: 'label', title: 'Banner Label', type: 'string', initialValue: 'SERVICES' }),
        defineField({ name: 'subtitle', title: 'Banner Subtitle', type: 'text', initialValue: 'Integrated solutions designed to support every stage of your digital growth journey.' }),
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
      ]
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder Sections',
      description: 'Add, edit, and reorder the sections of your services page here.',
      type: 'array',
      of: [
        { type: 'serviceHeroBlock' },
        { type: 'serviceListBlock' },
        { type: 'resultsBridgeBlock' },
        { type: 'statsBlock' },
        { type: 'marqueeBlock' },
        { type: 'industryListBlock' },
        { type: 'stepsBlock' },
        { type: 'caseStudyBlock' },
        { type: 'testimonialBlock' },
        { type: 'faqBlock' },
        { type: 'contactCtaBlock' },
      ],
    }),
  ],
})
