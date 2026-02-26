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
    return {
      beforeFiles: [
        // Serve static HTML files via API route (before App Router catches them)
        {
          source: '/:filename(email-preview|payment-success|onboarding|faq)\\.html',
          destination: '/api/serve-html/:filename',
        },
        // Clean URLs (without .html extension)
        {
          source: '/onboarding',
          destination: '/api/serve-html/onboarding',
        },
        {
          source: '/faq',
          destination: '/api/serve-html/faq',
        },
        {
          source: '/payment-success',
          destination: '/api/serve-html/payment-success',
        },
        {
          source: '/email-preview',
          destination: '/api/serve-html/email-preview',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default withNextIntl(nextConfig);
