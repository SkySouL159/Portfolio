// next.config.ts

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minifier
  images: {
    domains: ["example.com"], // Add external image domains
  },
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://external-api.com/:path*", // Proxy API requests
      },
    ];
  },
  env: {
    MY_SECRET: process.env.MY_SECRET, // Environment variables
  },
};

export default nextConfig;
