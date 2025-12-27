import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getEvents, Event } from '@/data/events';
import { Code as DefaultIcon } from 'lucide-react';
import { TechnicalBackground } from './TechnicalBackground';

interface EventCardProps {
  event: Event;
  index: number;
  accentColor?: 'red' | 'amber';
}

const EventCard = ({ event, index, accentColor = 'red' }: EventCardProps) => {
  const navigate = useNavigate();
  const ledColor = accentColor === 'red'
    ? 'bg-primary shadow-glow-red'
    : 'bg-secondary shadow-glow-amber';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      onClick={() => navigate(`/event/${event.id}`)}
      className="module-card p-5 group cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {/* LED indicator dot - overriding default */}
      <div 
        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${ledColor} animate-led-pulse`}
        style={{ boxShadow: accentColor === 'red' ? '0 0 8px rgba(180, 60, 40, 0.6)' : '0 0 8px rgba(167, 139, 250, 0.6)' }}
      />
      
      {/* Icon */}
      <div className="w-12 h-12 mb-4 rounded-chamfer bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-300 border border-accent/20">
        {event.icon ? (
          <event.icon className="w-6 h-6 text-accent" />
        ) : (
          <DefaultIcon className="w-6 h-6 text-accent" />
        )}
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-gradient-copper transition-all duration-300">
        {event.title}
      </h3>
      <p className="text-sm text-foreground/80 font-mono">
        {event.subtitle}
      </p>
    </motion.div>
  );
};

export const EventsSection = () => {
  const events = getEvents();
  const technical = events.filter(e => e.type === 'technical');
  const nonTechnical = events.filter(e => e.type === 'non-technical');

  return (
    <section
      id="events"
      className="relative overflow-hidden"
    >
      <TechnicalBackground />
      
      <div className="relative z-10 container-px">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 glass-panel rounded-chamfer text-sm font-mono uppercase tracking-widest text-accent">
            Explore Events
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-copper">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A perfect blend of technical challenges and cultural experiences
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="max-w-5xl mx-auto">
          {/* Technical Events */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary/60" />
              Technical Events
              <span className="w-2 h-2 rounded-full bg-primary animate-led-pulse" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {technical.length > 0 ? technical.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} accentColor="red" />
              )) : (
                <div className="col-span-4 text-center py-12 text-muted-foreground">No technical events available.</div>
              )}
            </div>
          </motion.div>

          {/* Non-Technical Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-secondary" />
              Non-Technical Events
              <span className="w-2 h-2 rounded-full bg-secondary animate-led-pulse" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {nonTechnical.length > 0 ? nonTechnical.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} accentColor="amber" />
              )) : (
                <div className="col-span-4 text-center py-12 text-muted-foreground">No non-technical events available.</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
