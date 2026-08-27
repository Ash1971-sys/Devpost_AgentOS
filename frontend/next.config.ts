import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Enable gzip compression
  experimental: {
    optimizePackageImports: ["lucide-react", "radash", "@xyflow/react"],
  },
  async headers() {
    return [
      {
        // Apply cache headers to all static assets in the /images folder
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache
          },
        ],
      },
    ];
  },
};

export default nextConfig;
