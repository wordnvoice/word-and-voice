import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  // Allow the local network IP to load Next.js development resources
  // when testing the website from a mobile device.
  allowedDevOrigins: ["192.168.1.5"],

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
    ],
  },
};

export default nextConfig;