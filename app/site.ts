/* The resume already points at annop.dev, so that is the canonical home.
   NEXT_PUBLIC_SITE_URL overrides it for preview deployments or a domain change. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://annop.dev"
    : "http://localhost:3000");
