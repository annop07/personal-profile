import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project covers are self-authored SVG diagrams in /public/covers.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
