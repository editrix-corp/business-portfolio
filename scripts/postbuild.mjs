/**
 * Post-export step, run automatically by `npm run export`:
 *
 *  1. Hashes every inline script Next emits and writes those hashes into the
 *     CSP, so the policy never needs 'unsafe-inline' for scripts.
 *  2. Writes robots.txt and sitemap.xml using NEXT_PUBLIC_SITE_URL.
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

const htmlFiles = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith(".html")) htmlFiles.push(full);
  }
})(OUT);

const hashes = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    const body = match[1];
    if (!body) continue;
    hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
}

const scriptSrc = ["'self'", ...hashes].join(" ");
const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  // React writes inline style attributes for the motion transforms; those
  // cannot be hashed, and style injection is a far smaller risk than script.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self' blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const headersPath = join(OUT, "_headers");
const existing = readFileSync(headersPath, "utf8");
const rewritten = existing.replace(
  /^(\s*)Content-Security-Policy:.*$/m,
  `$1Content-Security-Policy: ${csp}`,
);

if (rewritten === existing) {
  console.error("build-csp: no Content-Security-Policy line found in public/_headers");
  process.exit(1);
}

// Cloudflare rejects the whole file past 2000 characters on a single rule.
const longest = Math.max(...rewritten.split("\n").map((l) => l.length));
if (longest > 2000) {
  console.error(`build-csp: a header line is ${longest} chars, over Cloudflare's 2000 limit`);
  process.exit(1);
}

writeFileSync(headersPath, rewritten);
console.log(`postbuild: ${hashes.size} inline script hashes across ${htmlFiles.length} HTML files`);
console.log(`postbuild: longest header line ${longest} chars`);

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
if (!siteUrl) {
  console.warn("postbuild: NEXT_PUBLIC_SITE_URL is unset — robots.txt and sitemap.xml will point at localhost");
}
const base = siteUrl || "http://localhost:3000";

writeFileSync(
  join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${base}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
);
console.log(`postbuild: robots.txt and sitemap.xml written for ${base}`);
