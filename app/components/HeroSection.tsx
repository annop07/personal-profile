'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="section">
      <div className="space-y-3">
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
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Third-year Computer Science student at Khon Kaen University with practical experience in software engineering through internships and academic or freelance projects. Possesses skills in software development, system design, and effective teamwork, with a strong focus on learning, collaboration, and delivering reliable, user-centered solutions.
        </p>
      </div>
    </section>
  );
}