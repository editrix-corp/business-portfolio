import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // `npm run export` emits a fully static ./out.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  // GitHub Pages serves a project repo under /<repo>, so assets need that prefix.
  basePath: process.env.GITHUB_PAGES ? "/business-portfolio" : undefined,
  assetPrefix: process.env.GITHUB_PAGES ? "/business-portfolio" : undefined,
  cacheComponents: !process.env.STATIC_EXPORT,
  partialPrefetching: !process.env.STATIC_EXPORT,
  turbopack: {
    root: path.resolve(import.meta.dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
