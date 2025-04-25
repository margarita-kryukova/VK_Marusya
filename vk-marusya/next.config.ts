import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Здесь могут быть опциональные настройки SVGR
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
