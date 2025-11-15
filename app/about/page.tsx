import Navbar from '../components/Navbar';
import PhotoGrid from '../components/PhotoGrid';
import Timeline from '../components/Timeline';
import ProjectCard from '../components/ProjectCard';
import HobbiesCard from '../components/HobbiesCard';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { FadeInSection } from '../utils/FadeInSection';

export default function AboutPage() {
  const projects = [
    {
      title: 'Shabu POS',
      description: 'A full-stack, real-time Point of Sale system with QR-based self-ordering to streamline restaurant operations and enhance customer experience.',
      link: 'https://github.com/annop07/fullPOS',
      tags: [
        { label: 'TypeScript', color: 'bg-blue-500 text-white' },
        { label: 'Next.js', color: 'bg-gray-700 text-white' },
        { label: 'Node.js', color: 'bg-green-600 text-white' },
        { label: 'Prisma', color: 'bg-cyan-600 text-white' },
        { label: 'PhpMyAdmin', color: 'bg-orange-600 text-white' },
      ],
    },
    {
      title: 'Tinder Cat',
      description: 'A mobile application that lets users create profiles for their cats, match with nearby cats, and chat in real time—similar to Tinder but designed for pets.',
      link: 'https://github.com/annop07/cat-tinder',
      tags: [
        { label: 'React Native', color: 'bg-cyan-500 text-white' },
        { label: 'TypeScript', color: 'bg-yellow-400 text-white' },
        { label: 'Node.js', color: 'bg-green-600 text-white' },
        { label: 'WebSocket.io', color: 'bg-emerald-500 text-white' },
        { label: 'Cloudinary', color: 'bg-blue-500 text-white' },
        { label: 'MongoDB', color: 'bg-green-500 text-white' }
      ],
    },
    {
      title: 'Doctora',
      description: "A full-stack healthcare platform for booking doctor appointments, managing patient records, and enabling real-time availability checking.",
      link: 'https://github.com/annop07/FrontendDoctora',
      tags: [
        { label: 'Next.js', color: 'bg-cyan-500 text-white' },
        { label: 'Spring boots', color: 'bg-green-500 text-white' },
        { label: 'TypeScript', color: 'bg-yellow-400 text-white' },
        { label: 'Postgresql', color: 'bg-green-600 text-white' },
      ],
    },
  ];

  const hobbies = [
    {
      title: 'YouTube',
      description: 'documenting my life as a software engineer',
      stat: '19 videos',
      statColor: 'text-red-500',
    },
    {
      title: 'Real Estate Investing',
      description: 'playing monopoly but with real money',
      stat: '0 properties',
      statColor: 'text-green-500',
    },
    {
      title: 'Stocks and Crypto',
      description: 'buying high and selling low is my philosophy',
      stat: '+$25,000 profit',
      statColor: 'text-green-500',
    },
    {
      title: 'Mechanical Keyboards',
      description: 'fun but will be the reason why im homeless',
      stat: '3 custom keyboards',
      statColor: 'text-purple-500',
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
              <h1 className="text-3xl font-bold text-white">About</h1>
              <p className="text-sm text-gray-400">Who I am.</p>
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
              <h2 className="text-lg font-medium text-white">Projects</h2>
              <div className="space-y-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                />
              ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <div className="section space-y-6">
              <h2 className="text-lg font-medium text-white">Hobbies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <HobbiesCard
                  key={index}
                  title={hobby.title}
                  description={hobby.description}
                  stat={hobby.stat}
                  statColor={hobby.statColor}
                />
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