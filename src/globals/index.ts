import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteTitle', type: 'text', required: true },
    { name: 'siteDescription', type: 'textarea' },
  ],
}

export { Header } from './Header'
export { Footer } from './Footer'