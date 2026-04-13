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
        { type: 'faqBlock' },
      ],
    }),
  ],
})
