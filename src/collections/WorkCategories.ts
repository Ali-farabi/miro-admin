import { CollectionConfig } from 'payload'
export const WorkCategories: CollectionConfig = {
  slug: 'work-categories',
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'linkText',
      type: 'text',
      defaultValue: 'Learn more',
    },
    {
      name: 'linkUrl',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}