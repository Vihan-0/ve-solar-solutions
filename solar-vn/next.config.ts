import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve optimized images in modern formats (WebP/AVIF)
    formats: ["image/avif", "image/webp"],
    // Define responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce default quality slightly for faster loads (still looks great)
    qualities: [75, 80, 85],
    // Increase the cache TTL for optimized images (1 year)
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
