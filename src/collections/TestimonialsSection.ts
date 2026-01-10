import { CollectionConfig } from 'payload'
export const TestimonialsSection: CollectionConfig = {
  slug: 'testimonials-section',
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
      defaultValue: "Loved by the world's best teams",
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'See all customer stories →',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '#',
    },
  ],
}