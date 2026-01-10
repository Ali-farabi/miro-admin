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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  
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
    'miro-drab.vercel.app',
    'https://miro-drab.vercel.app',
  ],
  
  plugins: [
    vercelBlobStorage({
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
      },
    }),
  ],
})