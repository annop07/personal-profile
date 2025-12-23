'use client';

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    gradientFrom: string;
    gradientTo: string;
}

export default function TechnicalSkills() {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Programming Skills',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: ['TypeScript', 'JavaScript', 'Go ', 'Python', 'Java', 'C', 'CSS', 'Kotlin', 'SQL', 'PHP'],
            gradientFrom: 'from-blue-500',
            gradientTo: 'to-cyan-500',
        },
        {
            title: 'Frameworks',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            skills: ['Next.js', 'React', 'React Native','Node.js', 'Spring Boot', 'Express.js', 'Go Fiber', 'Tailwind CSS', 'Laravel', 'FastAPI', 'Expo'],
            gradientFrom: 'from-purple-500',
            gradientTo: 'to-pink-500',
        },
        {
            title: 'Database',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Prisma', 'Firebase'],
            gradientFrom: 'from-green-500',
            gradientTo: 'to-emerald-500',
        },
        {
            title: 'Tools',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Figma', 'Vercel', 'Railway', 'Github Action'],
            gradientFrom: 'from-orange-500',
            gradientTo: 'to-yellow-500',
        },
    ];

    return (
        <section className="section">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="group bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-xl p-5 hover:border-gray-400 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                                {category.icon}
                            </div>
                            <h3 className="text-gray-900 dark:text-white font-medium text-sm">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1.5 text-xs font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
