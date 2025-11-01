import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  webpack: (config) => {
    // Add support for importing Web Workers
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]',
      },
    });

    return config;
  },
};

export default nextConfig;
