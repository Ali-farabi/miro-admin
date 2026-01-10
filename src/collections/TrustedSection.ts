import { CollectionConfig } from 'payload'
export const TrustedSection: CollectionConfig = {
  slug: 'trusted-section',
  admin: {
    useAsTitle: 'text',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      defaultValue: 'Trusted by 45M+ users',
    },
  ],
}