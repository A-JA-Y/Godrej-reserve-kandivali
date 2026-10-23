import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Static HTML export: `next build` writes the whole site to out/
  output: "export",

  // The default image optimizer needs a Node server, so serve images as-is
  images: {
    unoptimized: true,
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  allowedDevOrigins: ["192.168.29.216"],
};

export default withBundleAnalyzer(withMDX(nextConfig));
