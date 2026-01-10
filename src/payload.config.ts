import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { fileURLToPath } from 'url'


import {
  Users,
  Media,
  Hero,
  FeaturesSection,
  WorkTogetherSection,
  IntegrationsSection,
  WaysWeWorkSection,
  BuiltForWorkSection,
  TrustedSection,
  WorkCategories,
  Features,
  Testimonials,
  TrustedCompanies,
  Integrations,
  Settings,
  BuiltForTeamsSection,
  TeamCategories,
  WhyTrustSection,
  TrustStats,
  TestimonialsSection,
} from './collections'

import { Header, Footer } from './globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'https://miro-project-production.up.railway.app',
  
  admin: {
    user: 'users',
  },
  
  collections: [
    Users,
    Media,
    Hero,
    FeaturesSection,
    WorkTogetherSection,
    IntegrationsSection,
    WaysWeWorkSection,
    BuiltForWorkSection,
    TrustedSection,
    WorkCategories,
    Features,
    Testimonials,
    TrustedCompanies,
    Integrations,
    Settings,
    BuiltForTeamsSection,
    TeamCategories,
    WhyTrustSection,
    TrustStats,
    TestimonialsSection,
  ],
  
  globals: [
    Header,
    Footer,
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
    'https://miro-project-production.up.railway.app',
    'https://miro-drab.vercel.app',
    'https://*.vercel-storage.com',
  ],
  
  csrf: [
    'https://miro-project-production.up.railway.app',
    'https://miro-drab.vercel.app',
  ],
  
  plugins: [
    vercelBlobStorage({
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      collections: {
        media: true,
      },
    }),
  ],
})