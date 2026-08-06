import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Turbopack tome un lockfile fuera del repo
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1080, 1280, 1920],
    imageSizes: [40, 64, 96, 128],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Sirve estáticos de /public sin sorpresas del optimizer en Vercel
    localPatterns: [{ pathname: "/images/**" }],
  },
};

export default nextConfig;
