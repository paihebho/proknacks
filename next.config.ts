import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
