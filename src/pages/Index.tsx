import { Navigation } from '@/components/Navigation';
import { HeroScene } from '@/components/HeroScene';
import { AboutSection } from '@/components/AboutSection';
import { EventsSection } from '@/components/EventsSection';
import { WorkshopSection } from '@/components/WorkshopSection';
import { InfosSection } from '@/components/InfosSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { useEffect } from 'react';
import { initializeEventsStorage } from '@/data/events';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    // Initialize event storage and ensure no global scroll behavior mutation is left set.
    initializeEventsStorage();

    // Ensure we start at top on initial load
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>INSTRAUX'26 - Techno-Cultural Symposium</title>
        <meta name="description" content="INSTRAUX'26 is the flagship techno-cultural symposium by the Department of Electronics and Instrumentation Engineering. Join us on 31st January 2026." />
      </Helmet>
      
      <main className="relative min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <HeroScene />
        <AboutSection />
        <EventsSection />
        <WorkshopSection />
        <InfosSection />
        <RegistrationSection />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
