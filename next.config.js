/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/landing-page', // Add this line
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;