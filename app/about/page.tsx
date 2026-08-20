import Navbar from '../components/Navbar';
import PhotoGrid from '../components/PhotoGrid';
import Timeline from '../components/Timeline';
import WorkExperience from '../components/WorkExperience';
import { workExperiences } from '../data/workExperience';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { FadeInSection } from '../utils/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Computer Science at Khon Kaen University, teaching assistant for two core CS courses, software engineer intern at Gofive, and freelance developer shipping an Odoo ERP a retail store and a water factory use every day.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <PageTransition>
        <main className="pt-24">
          <div className="container-width pb-20">
            <FadeInSection>
              <div className="section space-y-3">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About</h1>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Computer Science at Khon Kaen University, where I now teach two of the core courses
                  I once took. Along the way: an internship on enterprise SaaS at Gofive, and freelance
                  work that put an ERP into daily use at a retail store and a water factory.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="section">
                <PhotoGrid />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="section">
                <Timeline />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="section space-y-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Work Experience & Competitions</h2>
                <WorkExperience experiences={workExperiences} />
              </div>
            </FadeInSection>
          </div>

          <Footer />
        </main>
      </PageTransition>
    </div>
  );
}