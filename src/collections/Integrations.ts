import { CollectionConfig } from 'payload'
export const Integrations: CollectionConfig = {
  slug: 'integrations',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Communication', value: 'communication' },
        { label: 'Development', value: 'development' },
        { label: 'Productivity', value: 'productivity' },
        { label: 'Design', value: 'design' },
      ],
    },
  ],
}