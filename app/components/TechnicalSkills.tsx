interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    /** The AI row leads the section, so it takes the full width. */
    wide?: boolean;
}

const sparkles = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const code = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const layers = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

const server = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5m-14 0h14m-14 0a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2M7 16h.01M7 8h.01" />
    </svg>
);

const database = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const wrench = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const skillCategories: SkillCategory[] = [
    {
        title: 'AI & ML',
        icon: sparkles,
        wide: true,
        skills: [
            'LLM APIs (tool calling)',
            'Structured Output',
            'RAG & Hybrid Search',
            'pgvector',
            'Qdrant',
            'Cross-Encoder Re-ranking',
            'Hugging Face Transformers',
            'QLoRA / PEFT',
            'Vision LLM Extraction',
            'Retrieval Evaluation (Recall@k, MRR)',
        ],
    },
    {
        title: 'Languages',
        icon: code,
        skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'SQL', 'Kotlin', 'PHP', 'C'],
    },
    {
        title: 'Frontend',
        icon: layers,
        skills: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Flutter'],
    },
    {
        title: 'Backend',
        icon: server,
        skills: ['FastAPI', 'Node.js (Express)', 'Spring Boot', 'Go Fiber', 'Laravel'],
    },
    {
        title: 'Database & Storage',
        icon: database,
        skills: ['PostgreSQL (pgvector)', 'MySQL', 'MongoDB', 'Qdrant', 'Prisma', 'Firebase', 'SQLite'],
    },
    {
        title: 'DevOps & Tools',
        icon: wrench,
        wide: true,
        skills: [
            'Git',
            'GitHub Actions (CI/CD)',
            'Docker',
            'Docker Compose',
            'pytest',
            'Postman',
            'Figma',
            'Vercel',
            'Railway',
            'Azure',
        ],
    },
];

export default function TechnicalSkills() {
    return (
        <section className="section">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className={`group rounded-xl border border-gray-300 bg-gray-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 ${category.wide ? 'sm:col-span-2' : ''
                            }`}
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-lg bg-gray-200 p-2 text-gray-600 dark:bg-zinc-800 dark:text-gray-400">
                                {category.icon}
                            </div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="cursor-default rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
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
