import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site has no API routes or server actions, so every
  // page prerenders to HTML and Cloudflare Pages serves it straight off the CDN.
  output: "export",
  images: {
    // No image optimization server exists in an export build.
    unoptimized: true,
    // Project covers are self-authored SVG diagrams in /public/covers.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
