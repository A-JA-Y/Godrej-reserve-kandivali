/** @type {import('next-sitemap').IConfig} */

// Same origin logic as SITE_URL in data/project.js: NEXT_PUBLIC_SITE_URL wins,
// otherwise the Vercel production domain.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (productionHost ? `https://${productionHost}` : "http://localhost:3000");

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Static export: next build has already copied public/ into out/, so write there
  outDir: "out",
  // Match trailingSlash: true in next.config.ts
  trailingSlash: true,
  exclude: ["/thank-you", "/icon.svg", "/apple-icon.png"],


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
