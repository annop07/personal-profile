import type { MetadataRoute } from 'next';
import { siteUrl } from './site';

// Required by `output: "export"` — emit the file at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: new URL('/sitemap.xml', siteUrl).toString(),
    };
}
