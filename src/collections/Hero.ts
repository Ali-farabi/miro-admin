import { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Take ideas from better to best',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: "Miro is your team's visual platform to connect, collaborate, and create — together.",
    },
    {
      name: 'emailPlaceholder',
      type: 'text',
      defaultValue: 'Enter your work email',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Sign up free →',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'helperText',
      type: 'text',
      defaultValue: 'Collaborate with your team within minutes',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}