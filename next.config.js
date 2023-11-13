/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
