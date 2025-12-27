import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Phone, Clock, Users, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { getEventById } from '@/data/events';

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idNum = id ? Number(id) : NaN;
  const event = Number.isInteger(idNum) ? getEventById(idNum) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Button 
            variant="premium"
            onClick={() => navigate('/#events')}
          >
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const EventIcon = event.icon ?? (() => null);
  const isRed = event.type === 'technical';

  return (
    <>
      <Helmet>
        <title>{event.title} | INSTRAUX'26</title>
        <meta name="description" content={event.description} />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 pcb-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-20">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/#events')}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-widest">Back to Events</span>
          </motion.button>

          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-16 h-16 rounded-chamfer flex items-center justify-center flex-shrink-0 ${
                  isRed 
                    ? 'bg-primary/20 border border-primary/30' 
                    : 'bg-secondary/20 border border-secondary/30'
                }`}>
                  <EventIcon className={`w-8 h-8 ${isRed ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 mb-3 text-xs font-mono uppercase tracking-widest rounded-full ${
                    isRed
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {(event.type ?? '').replace('-', ' ')} Event
                  </span>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {event.title}
                  </h1>
                  <p className="text-xl text-accent font-light">{event.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {event.description ?? 'No description available.'}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel p-4 rounded-chamfer border border-accent/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="text-sm font-mono uppercase text-muted-foreground">Prize Pool</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">{event.prizePool}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="glass-panel p-4 rounded-chamfer border border-accent/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-mono uppercase text-muted-foreground">Schedule</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{event.schedule}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-panel p-4 rounded-chamfer border border-accent/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm font-mono uppercase text-muted-foreground">Team Size</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Max {event.maxTeamSize} {event.maxTeamSize === 1 ? 'person' : 'members'}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="glass-panel p-4 rounded-chamfer border border-accent/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="text-sm font-mono uppercase text-muted-foreground">Registration</span>
                  </div>
                  <p className="text-lg font-semibold text-accent">{event.registrationFee}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Rules Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className={`w-1 h-8 rounded-full ${isRed ? 'bg-primary' : 'bg-secondary'}`} />
                Rules & Guidelines
              </h2>
              <div className="glass-panel p-6 rounded-chamfer border border-accent/30">
                <ul className="space-y-3">
                  {(event.rules ?? []).map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + index * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs text-accent font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className={`w-1 h-8 rounded-full ${isRed ? 'bg-primary' : 'bg-secondary'}`} />
                Event Contact
              </h2>
              <div className="glass-panel p-6 rounded-chamfer border border-accent/30">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-chamfer flex items-center justify-center flex-shrink-0 ${
                    isRed 
                      ? 'bg-primary/20 border border-primary/30' 
                      : 'bg-secondary/20 border border-secondary/30'
                  }`}>
                    <Phone className={`w-6 h-6 ${isRed ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <p className="text-sm font-mono uppercase text-muted-foreground mb-1">Coordinator</p>
                    <p className="font-semibold text-foreground">{event.contact.name}</p>
                    <a 
                      href={`tel:${event.contact.phone}`}
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      {event.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center"
            >
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full"
                >
                  Register Now
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/#events')}
              >
                View All Events
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
