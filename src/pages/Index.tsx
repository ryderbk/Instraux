import { Navigation } from '@/components/Navigation';
import { HeroScene } from '@/components/HeroScene';
import { AboutSection } from '@/components/AboutSection';
import { EventsSection } from '@/components/EventsSection';
import { WorkshopSection } from '@/components/WorkshopSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { ClosingSection } from '@/components/ClosingSection';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>INSTRAUX'26 - Techno-Cultural Symposium | Velammal Engineering College</title>
        <meta name="description" content="INSTRAUX'26 is the flagship techno-cultural symposium by the Department of Electronics and Instrumentation Engineering at Velammal Engineering College. Join us on 31st January 2026." />
      </Helmet>
      
      <main className="relative min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <HeroScene />
        <AboutSection />
        <EventsSection />
        <WorkshopSection />
        <RegistrationSection />
        <TeamSection />
        <ContactSection />
        <ClosingSection />
      </main>
    </>
  );
};

export default Index;
