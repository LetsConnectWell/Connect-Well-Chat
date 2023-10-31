/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['existing-domain.com', 'lh3.googleusercontent.com'],
  },
};
