/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.example.com',
  //       port: '',
  //       path: '/:path*', // :path* is required
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
