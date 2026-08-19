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
            </div>
        </section>
    );
}
