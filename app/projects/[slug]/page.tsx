import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import TechIcon from '../../components/TechIcon';
import { getProjectBySlug, projectsData } from '../../data/projects';

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Navbar />
            <PageTransition>
                <main className="pt-24">
                    {/* Project Section - max-w-5xl like reference */}
                    <section className="w-full max-w-5xl mx-auto px-6 pb-20">
                        {/* Back Button */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </Link>

                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h1>
                                {/* Tech Icons */}
                                <div className="flex items-center gap-2">
                                    {project.techIcons.map((icon, index) => (
                                        <div
                                            key={index}
                                            title={icon.name}
                                        >
                                            <TechIcon name={icon.name} className="w-8 h-8" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Links - GitHub and Demo */}
                            <div className="flex items-center gap-2">
                                {/* Demo Link */}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                        title="View Live Demo"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </a>
                                )}
                                {/* GitHub Link */}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    title="View Source Code"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                            {project.longDescription}
                        </p>

                        {/* Example Images */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Example Images:</h2>
                            <div className="space-y-4 not-prose">
                                {project.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg overflow-hidden ${project.slug === 'tinder-cat' || project.slug === 'doctora-mobile' ? 'max-w-xs mx-auto' : ''
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            width={1920}
                                            height={1080}
                                            className="w-full h-auto"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Footer />
                </main>
            </PageTransition>
        </div>
    );
}
