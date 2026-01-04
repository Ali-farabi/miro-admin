import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  
  admin: {
    user: 'users',
  },
  
  collections: [
    // Пользователи
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    
    // Hero секция
    {
      slug: 'hero',
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
          defaultValue: 'Take ideas from better to best',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
          defaultValue: "Miro is your team's visual platform to connect, collaborate, and create — together.",
        },
        {
          name: 'emailPlaceholder',
          type: 'text',
          defaultValue: 'Enter your work email',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Sign up free →',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#',
        },
        {
          name: 'helperText',
          type: 'text',
          defaultValue: 'Collaborate with your team within minutes',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    
    // Features Section (главная секция)
    {
      slug: 'features-section',
      admin: {
        useAsTitle: 'badge',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'YOUR IDEA STARTS HERE',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Collaborate without constraints',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Sign up free →',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },

    // Work Together Section
    {
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
    },

    // Integrations Section
    {
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
    },

    // The Ways We Work Section
    {
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
    },

    // Built For Work Section
    {
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
    },

    // Trusted Section
    {
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
    },

    // Work Categories (табы для Built For Work Section)
    {
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
    },

    // Features (отдельные фичи)
    {
      slug: 'features',
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
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'linkText',
          type: 'text',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    
    // Testimonials
    {
      slug: 'testimonials',
      admin: {
        useAsTitle: 'authorName',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'authorName',
          type: 'text',
          required: true,
        },
        {
          name: 'authorRole',
          type: 'text',
          required: true,
        },
        {
          name: 'authorCompany',
          type: 'text',
          required: true,
        },
        {
          name: 'authorImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    
    // Trusted By (компании)
    {
      slug: 'trusted-companies',
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
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    
    // Integrations
    {
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
    },
    
    // Settings (глобальные настройки)
    {
      slug: 'settings',
      admin: {
        useAsTitle: 'siteName',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'siteName',
          type: 'text',
          defaultValue: 'Miro',
        },
        {
          name: 'siteDescription',
          type: 'textarea',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'contactEmail',
          type: 'email',
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'twitter',
              type: 'text',
            },
            {
              name: 'linkedin',
              type: 'text',
            },
            {
              name: 'facebook',
              type: 'text',
            },
          ],
        },
      ],
    },
    
    // Медиа файлы
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(dirname, '../public/media'),
        mimeTypes: ['image/*'],
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'large',
            width: 1920,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
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
    },

    // Team Categories (табы для Built For Teams Section)
    {
      slug: 'team-categories',
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
          name: 'features',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
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
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    // Добавьте эти коллекции в ваш payload.config.ts после 'team-categories':

    // Why Trust Miro Section
    {
      slug: 'why-trust-section',
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
          defaultValue: 'Why companies large\nand small trust Miro',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Contact Sales to request a demo',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: 'yellow-400',
        },
      ],
    },

    // Trust Stats
    {
      slug: 'trust-stats',
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
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    {
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
    },

  ],
  
  editor: lexicalEditor({}),
  
  secret: process.env.PAYLOAD_SECRET || '',
  
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],
})