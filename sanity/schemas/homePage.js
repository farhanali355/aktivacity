import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Used for reference only',
      initialValue: 'Home Page',
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      initialValue: { current: 'home' },
      description: 'The URL path for this page (e.g., "home")'
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'Recommended: 50-60 characters. This title appears in Google search results.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      description: 'Recommended: 150-160 characters. This description appears under the title in search results.',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image (Social Share)',
      type: 'image',
      description: 'Image displayed when sharing the link on social media (Facebook, LinkedIn, etc.)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder Sections',
      description: 'Add, edit, and reorder the sections of your home page here.',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'introBlock' },
        { type: 'aboutBlock' },
        { type: 'serviceBlock' },
        { type: 'textSliderBlock' },
        { type: 'caseStudyBlock' },
        { type: 'testimonialBlock' },
        { type: 'blogBlock' },
        { type: 'teamBlock' },
        { type: 'videowatchBlock' },
        { type: 'contactCtaBlock' },
        { type: 'faqBlock' },
      ],
    }),
  ],
})
