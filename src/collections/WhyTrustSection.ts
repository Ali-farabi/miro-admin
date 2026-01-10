import { CollectionConfig } from 'payload'
export const WhyTrustSection: CollectionConfig = {
  slug: 'why-trust-section',
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
      defaultValue: 'Why companies large\nand small trust Miro',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Contact Sales to request a demo',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: 'yellow-400',
    },
  ],
}