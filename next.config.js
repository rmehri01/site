module.exports = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
  }
};
