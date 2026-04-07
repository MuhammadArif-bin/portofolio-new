import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Next.js 15 compatible configuration
  swcMinify: true,
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Enable App Router features compatible with Next.js 15
  },
}

export default nextConfig
