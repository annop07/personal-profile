import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { FadeInSection } from './utils/FadeInSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <PageTransition>
        <main className="pt-24">
          <div className="container-width space-y-8 pb-20">
            <FadeInSection>
              <HeroSection />
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <section className="section">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Latest Video</h2>
                <div className="aspect-video bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-500 text-sm">YouTube integration coming soon</p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <section className="section">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Recently Played</h2>
                <div className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-xl p-6 flex items-center justify-center h-64">
                  <p className="text-gray-500 dark:text-gray-500 text-sm">Spotify integration coming soon</p>
                </div>
              </section>
            </FadeInSection>
          </div>

          <Footer />
        </main>
      </PageTransition>
    </div>
  );
}
