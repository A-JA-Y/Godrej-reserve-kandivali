/** @type {import('next-sitemap').IConfig} */

// Same origin logic as SITE_URL in data/project.js: NEXT_PUBLIC_SITE_URL wins,
// otherwise the Vercel production domain, otherwise the live domain (used on Cloudflare).
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (productionHost ? `https://${productionHost}` : "https://godrejreserveskandivali.com");

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Static export: next build has already copied public/ into out/, so write there
  outDir: "out",
  // Match trailingSlash: true in next.config.ts
  trailingSlash: true,
  // App Router icon files (app/icon.png, app/apple-icon.png) build as routes; they are not pages
  exclude: ["/thank-you", "/icon.png", "/apple-icon.png"],


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
