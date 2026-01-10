import { CollectionConfig } from "payload";
export const IntegrationsSection: CollectionConfig = {
  slug: 'integrations-section',
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
      defaultValue: 'Connect\nyour tools,\nclose your tabs',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.',
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