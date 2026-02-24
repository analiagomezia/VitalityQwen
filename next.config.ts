import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/onboarding',
        destination: '/onboarding.html',
      },
      {
        source: '/faq',
        destination: '/faq.html',
      },
      {
        source: '/payment-success',
        destination: '/payment-success.html',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
