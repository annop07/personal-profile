import type { MetadataRoute } from 'next';
import { projectsData } from './data/projects';
import { siteUrl } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        { path: '/', priority: 1 },
        { path: '/about', priority: 0.8 },
        { path: '/contact', priority: 0.5 },
    ];

    return [
        ...pages.map(({ path, priority }) => ({
            url: new URL(path, siteUrl).toString(),
            changeFrequency: 'monthly' as const,
            priority,
        })),
        ...projectsData.map((project) => ({
            url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
            changeFrequency: 'monthly' as const,
            priority: project.category === 'ai' ? 0.9 : 0.6,
        })),
    ];
}
