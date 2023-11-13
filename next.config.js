/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  target: 'experimental-serverless-trace',
  exportPathMap: async function () {
    // your exportPathMap logic here
    return {
      '/': { page: '/' },
      '/issues/board/[id]': { page: '/issues/board/[id]' },
      // other pages...
    };
  },
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
