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

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  allowedDevOrigins: ["192.168.29.216"],

  async redirects() {
    return [
      {
        source: "/crownresidences",
        destination: "https://crownresidences.godrejgolflink.in/",
        permanent: false,
      },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));