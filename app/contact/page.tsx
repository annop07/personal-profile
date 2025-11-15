import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { FadeInSection } from '../utils/FadeInSection';

export default function ContactPage() {
  const contactPlatforms = [
    {
      name: 'Email',
      description: 'annop.sa7@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
      ),
      href: 'mailto:annop.sa7@gmail.com',
      bgColor: 'bg-zinc-900/50',
      hoverColor: 'hover:bg-zinc-900/70',
    },
    {
      name: 'Github',
      description: '@annop07',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/annop07',
      bgColor: 'bg-zinc-900/50',
      hoverColor: 'hover:bg-zinc-900/70',
    },
    {
      name: 'LinkedIn',
      description: 'skubik',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: 'https://linkedin.com/in/skubik',
      bgColor: 'bg-zinc-900/50',
      hoverColor: 'hover:bg-zinc-900/70',
    },
    {
      name: 'Discord',
      description: 'skubik#0000',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      href: 'https://discord.com',
      bgColor: 'bg-zinc-900/50',
      hoverColor: 'hover:bg-zinc-900/70',
    },
  ];

  const callDurations = [
    {
      duration: '15 min chat',
      description: 'Quick introduction call',
      price: 'Free',
    },
    {
      duration: '30 min chat',
      description: 'Career advice or consultation',
      price: 'Free',
    },
    {
      duration: '60 min chat',
      description: 'In-depth discussion or mentoring',
      price: 'Free',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <PageTransition>
        <main className="pt-24">
          <div className="container-width pb-20">
            <FadeInSection>
              <div className="section space-y-3">
                <h1 className="text-3xl font-medium text-white">Contact</h1>
                <p className="text-sm text-gray-400">Let&apos;s connect.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="section space-y-6">
                <p className="text-sm text-gray-400">
                  Connect with me through any of these platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group ${platform.bgColor} ${platform.hoverColor} border border-zinc-800 rounded-xl p-6 transition-all duration-200 hover:border-zinc-700 cursor-pointer`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm mb-1">
                            {platform.name}
                          </h3>
                          <p className="text-gray-400 text-xs">
                            {platform.description}
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors"
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
