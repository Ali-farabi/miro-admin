import { CollectionConfig } from "payload";

export const WaysWeWorkSection: CollectionConfig = {
  slug: 'ways-we-work-section',
  admin: {
    useAsTitle: 'mainTitle',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'The Ways',
    },
    {
      name: 'mainTitle',
      type: 'text',
      required: true,
      defaultValue: 'We Work',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'How has our relationship with work changed?',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'View the report →',
    },
    {
      name: 'buttonUrl',
      type: 'text',
      defaultValue: '#',
    },
  ],
}