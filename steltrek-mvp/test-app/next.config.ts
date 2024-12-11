import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // swcMinify should not be in experimental
  swcMinify: true,

  // Optional headers or rewrites
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
        ],
      },
    ];
  },

  // Webpack customizations (if necessary)
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
