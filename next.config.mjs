/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    output: 'standalone',
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  serverExternalPackages: ['mongoose'], 
  output: 'standalone',
}

export default nextConfig