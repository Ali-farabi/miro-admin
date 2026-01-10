import { CollectionConfig } from "payload";
export const WorkTogetherSection: CollectionConfig = {
  slug: 'work-together-section',
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
      defaultValue: 'Work together,\nwherever you work',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}