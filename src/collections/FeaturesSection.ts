import { CollectionConfig } from 'payload'

export const FeaturesSection: CollectionConfig = {
  slug: 'features-section',
  admin: {
    useAsTitle: 'badge',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'YOUR IDEA STARTS HERE',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Collaborate without constraints',
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
  ],
}