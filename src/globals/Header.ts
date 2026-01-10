import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'navigation',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Link', value: 'link' },
            { label: 'Dropdown', value: 'dropdown' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'link',
          },
        },
        {
          name: 'dropdownItems',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'ctaButtons',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          required: true,
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Text', value: 'text' },
          ],
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      ],
    },
  ],
}