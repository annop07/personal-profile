'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section className="section">
            <div className="space-y-4">
                <h1 className="text-3xl text-gray-900 dark:text-white">
                    <TypeAnimation
                        sequence={[
                            'hello, Annop here',
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={true}
                        repeat={0}
                    />
                </h1>

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                    AI Engineer · Full-Stack Developer
                </p>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    A developer passionate about Artificial Intelligence and building software that people
                    actually use. My journey began at Khon Kaen University and grew into teaching two core
                    CS courses, interning on enterprise systems, and shipping software a retail store and a
                    water factory use every day. I now focus on AI engineering — <span className="text-gray-900 dark:text-gray-200">RAG</span>,{' '}
                    <span className="text-gray-900 dark:text-gray-200">agentic systems</span>, and{' '}
                    <span className="text-gray-900 dark:text-gray-200">model fine-tuning</span>.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                        href="/Annop-Sangsila-Resume.pdf"
                        download
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                        </svg>
                        Resume
                    </a>
                    <a
                        href="mailto:annop.sa7@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        annop.sa7@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}
