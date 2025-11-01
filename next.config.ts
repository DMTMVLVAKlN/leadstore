import type { NextConfig } from 'next'
const nextConfig: NextConfig = { reactStrictMode: true, experimental: { optimizePackageImports: ['three'] } }
export default nextConfig
