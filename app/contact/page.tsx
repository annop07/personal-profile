import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { FadeInSection } from '../utils/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Annop Sangsila — email, GitHub, LinkedIn and PyPI. Based in Khon Kaen, Thailand and open to AI engineering roles.',
};

const contactPlatforms = [
  {
    name: 'Email',
    description: 'annop.sa7@gmail.com',
    href: 'mailto:annop.sa7@gmail.com',
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    description: '@annop07',
    href: 'https://github.com/annop07',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    description: 'Annop Sangsila',
    href: 'https://www.linkedin.com/in/annop-sangsila-759460364/',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'PyPI',
    description: 'pip install taintguard',
    href: 'https://pypi.org/project/taintguard/',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <PageTransition>
        <main className="pt-24">
          <div className="container-width pb-20">
            <FadeInSection>
              <div className="section space-y-3">
                <h1 className="text-3xl font-medium text-gray-900 dark:text-white">Contact</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Let&apos;s connect.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="section space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based in Khon Kaen, Thailand — open to AI engineering roles and remote work.
                  Email is the fastest way to reach me.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      {...(platform.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-100 p-6 transition-all duration-200 hover:border-gray-300 hover:bg-gray-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                          {platform.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h2 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            {platform.name}
                          </h2>
                          <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                            {platform.description}
                          </p>
                        </div>
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          <Footer />
        </main>
      </PageTransition>
    </div>
  );
}
