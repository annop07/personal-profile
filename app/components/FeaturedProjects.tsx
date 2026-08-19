import Image from 'next/image';
import Link from 'next/link';
import { aiProjects, fullstackProjects, type ProjectData } from '../data/projects';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function GlobeIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    );
}

/* The card is one link target: the title anchor stretches over the whole article
   via after:inset-0, so the external links can sit beside it instead of nested
   inside it. */
function ProjectCard({ project }: { project: ProjectData }) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-gray-100 transition-all duration-300 hover:border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
            <div className="relative h-40 overflow-hidden bg-zinc-950">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                            {project.title}
                        </Link>
                    </h3>
                    <span className="whitespace-nowrap text-xs text-gray-500 dark:text-gray-500">
                        {project.date}
                    </span>
                </div>

                {project.metric && (
                    <p className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-sm font-semibold tabular-nums text-gray-900 dark:text-white">
                            {project.metric.value}
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-500">
                            {project.metric.label}
                        </span>
                    </p>
                )}

                <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-600 dark:bg-zinc-800 dark:text-gray-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="relative z-10 mt-auto flex flex-wrap gap-2">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
                        >
                            <GlobeIcon />
                            {project.demoUrl.includes('pypi.org') ? 'PyPI' : 'Website'}
                        </a>
                    )}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
                    >
                        <GithubIcon />
                        Source
                    </a>
                </div>
            </div>
        </article>
    );
}

function ProjectRow({ project }: { project: ProjectData }) {
    return (
        <article className="group relative flex items-center gap-4 py-4">
            <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-950">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                            {project.title}
                        </Link>
                    </h3>
                    <span className="whitespace-nowrap text-xs text-gray-500 dark:text-gray-500">
                        {project.date}
                    </span>
                </div>
                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.metric ? (
                        <span className="font-medium text-gray-900 dark:text-gray-200">
                            {project.metric.value} —{' '}
                        </span>
                    ) : null}
                    {project.description}
                </p>
                <p className="mt-1.5 truncate text-[11px] text-gray-500 dark:text-gray-500">
                    {project.tags.join(' · ')}
                </p>
            </div>

            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="relative z-10 flex-shrink-0 p-2 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            >
                <GithubIcon className="h-4 w-4" />
            </a>
        </article>
    );
}

export function AiProjects() {
    return (
        <section className="section">
            <div className="mb-6 space-y-1">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">AI Engineering</h2>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                    Retrieval, agents and fine-tuning — each one measured against a held-out set, with the
                    evaluation harness in the repository.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aiProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}

export function FullStackProjects() {
    return (
        <section className="section">
            <div className="mb-2 space-y-1">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Full-Stack Engineering</h2>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                    Where the fundamentals come from — production web, mobile and backend systems.
                </p>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-zinc-800">
                {fullstackProjects.map((project) => (
                    <ProjectRow key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
