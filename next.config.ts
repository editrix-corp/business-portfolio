import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // `npm run export` emits a fully static ./out for Cloudflare Pages.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
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
