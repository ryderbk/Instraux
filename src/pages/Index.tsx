import { Navigation } from '@/components/Navigation';
import { HeroScene } from '@/components/HeroScene';
import { lazy, Suspense, useEffect } from 'react';
import { initializeEventsStorage } from '@/data/events';
import { Helmet } from 'react-helmet';

// Lazy load heavy sections
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const EventsSection = lazy(() => import('@/components/EventsSection').then(m => ({ default: m.EventsSection })));
const WorkshopSection = lazy(() => import('@/components/WorkshopSection').then(m => ({ default: m.WorkshopSection })));
const InfosSection = lazy(() => import('@/components/InfosSection').then(m => ({ default: m.InfosSection })));
const RegistrationSection = lazy(() => import('@/components/RegistrationSection').then(m => ({ default: m.RegistrationSection })));
const TeamSection = lazy(() => import('@/components/TeamSection').then(m => ({ default: m.TeamSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));

const LoadingFallback = () => <div className="min-h-screen bg-background" />;

const Index = () => {
  useEffect(() => {
    initializeEventsStorage();
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>INSTRAUX'26 - Techno-Cultural Symposium</title>
        <meta name="description" content="INSTRAUX'26 is the flagship techno-cultural symposium by the Department of Electronics and Instrumentation Engineering. Join us on 31st January 2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
      </Helmet>
      
      <main className="relative min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <div className="flex flex-col">
          <HeroScene />
          <Suspense fallback={<LoadingFallback />}>
            <div className="section-spacing">
              <AboutSection />
            </div>
            <div className="section-spacing">
              <EventsSection />
            </div>
            <div className="section-spacing">
              <WorkshopSection />
            </div>
            <div className="section-spacing">
              <InfosSection />
            </div>
            <div className="section-spacing">
              <RegistrationSection />
            </div>
            <div className="section-spacing">
              <TeamSection />
            </div>
            <div className="section-spacing">
              <ContactSection />
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
