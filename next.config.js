/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ttymi-homepage.pockethost.io',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
};

module.exports = nextConfig;
