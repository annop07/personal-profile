import Image from 'next/image';
import Link from 'next/link';
import { aiProjects, fullstackProjects, type ProjectData } from '../data/projects';
import { BrandMark, hasBrandMark } from './BrandMark';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function ArrowIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
    );
}

/* No cover art: the stack marks say what it is built from and the footer says
   what it measured, which is more of the argument in less vertical space than a
   diagram thumbnail was making. The title anchor stretches over the whole
   article via after:inset-0, so the card is a single tap target rather than a
   hover-only affordance. */
function AiProjectCard({ project }: { project: ProjectData }) {
    const marks = project.techIcons.filter((icon) => hasBrandMark(icon.name)).slice(0, 6);

    return (
        <article
            className={`group relative flex flex-col rounded-xl border p-5 transition-colors duration-200 ${
                project.featured
                    ? 'border-gray-400 bg-gray-50 hover:border-gray-500 dark:border-zinc-600 dark:bg-zinc-900 dark:hover:border-zinc-500'
                    : 'border-gray-200 bg-white hover:border-gray-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700'
            }`}
        >
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                    {marks.map((icon) => (
                        <BrandMark key={icon.name} name={icon.name} />
                    ))}
                </div>
                {project.featured && (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
                        Start here
                    </span>
                )}
            </div>

            <h3 className="text-[15px] font-semibold leading-snug text-gray-900 dark:text-white">
                <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                    {project.title}
                </Link>
            </h3>

            <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
            </p>

            {project.metric && (
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-200 pt-3 dark:border-zinc-800">
                    <div className="min-w-0">
                        <p className="font-mono text-[13px] font-medium tabular-nums text-gray-900 dark:text-white">
                            {project.metric.value}
                        </p>
                        <p className="mt-0.5 line-clamp-1 text-[11px] text-gray-600 dark:text-gray-400">
                            {project.metric.label}
                        </p>
                    </div>
                    <ArrowIcon className="mb-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-gray-500" />
                </div>
            )}
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
                <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">AI Engineering</h2>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                        {aiProjects.length} projects
                    </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Retrieval, agents and fine-tuning — each one measured against a held-out set, with the
                    evaluation harness in the repository.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aiProjects.map((project) => (
                    <AiProjectCard key={project.slug} project={project} />
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
