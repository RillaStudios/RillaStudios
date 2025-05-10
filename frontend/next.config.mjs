import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  allowedDevOrigins: [
    'localhost',
    '192.168.50.227'
  ],
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
