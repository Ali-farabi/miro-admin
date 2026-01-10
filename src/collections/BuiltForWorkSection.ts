import { CollectionConfig } from 'payload'
export const BuiltForWorkSection: CollectionConfig = {
  slug: 'built-for-work-section',
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
      defaultValue: 'Built for the way you work',
    },
  ],
}