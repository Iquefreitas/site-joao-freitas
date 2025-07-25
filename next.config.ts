import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Remove regra que trate svg para não conflitar
    config.module.rules = config.module.rules.filter(
       (rule: any) => !(rule.test && rule.test.toString().includes('svg'))
    );

    // Adiciona regra para importar SVGs como React Components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};

export default nextConfig;
