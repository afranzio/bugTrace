/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
