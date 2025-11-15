'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="section">
      <div className="space-y-3">
        <h1 className="text-3xl text-white">
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
        <p className="text-sm leading-relaxed text-gray-400">
          your average boba enjoyer from socal trying to document the struggles of
          becoming a software engineer.
        </p>
      </div>
    </section>
  );
}