import { CollectionConfig } from 'payload'
export const BuiltForTeamsSection: CollectionConfig = {
  slug: 'built-for-teams-section',
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
      defaultValue: 'Built for all kinds of teams',
    },
    {
      name: 'integrationsText',
      type: 'text',
      defaultValue: 'Integrate your favorite tools',
    },
    {
      name: 'integrationsImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
