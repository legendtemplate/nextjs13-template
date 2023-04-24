/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.acme.com','picsum.photos'],
  },
}

module.exports = nextConfig
