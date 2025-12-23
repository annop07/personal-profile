import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import TechnicalSkills from './components/TechnicalSkills';
import FeaturedProjects from './components/FeaturedProjects';
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
              <TechnicalSkills />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <FeaturedProjects />
            </FadeInSection>
          </div>

          <Footer />
        </main>
      </PageTransition>
    </div>
  );
}
