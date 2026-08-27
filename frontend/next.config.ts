import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  compress: true, // Enable gzip compression
  experimental: {
    optimizePackageImports: ["lucide-react", "radash", "@xyflow/react"],
    optimizeCss: true,
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
  webpack: (config, { dev, isServer }) => {
    // Forcefully disable core-js polyfills that Next.js aggressively injects
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "core-js": false,
        "@swc/helpers": false,
        "next/dist/client/polyfills": false,
        "next/dist/build/polyfills/polyfill-nomodule": false,
        "next/dist/build/polyfills/polyfills": false,
      };
    }
    return config;
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
