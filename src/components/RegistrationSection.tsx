import { motion } from 'framer-motion';
import { Gift, Award, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const RegistrationSection = () => {
  return (
    <section
      id="register"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden pb-32 md:pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Registration Open
              </span>
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Join </span>
              <span className="text-gradient">INSTRAUX'26</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Secure your spot in the ultimate techno-cultural experience
            </p>
          </motion.div>

          {/* Registration card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-12"
          >
            {/* Fee display */}
            <motion.div
              className="text-center mb-10 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Registration Fee
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
                  ₹150
                </span>
                <span className="text-muted-foreground">
                  per person
                </span>
              </div>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Gift, text: 'Lunch Included for All Participants' },
                { icon: Award, text: 'Participation Certificates' },
                { icon: Clock, text: 'Pre-Registration is Mandatory' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Important Rules & Guidelines */}
            <div className="mb-10 p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-3">Important Information</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Participants can participate in One Technical and One Non-Technical event</li>
                <li>• Individual registration is required</li>
                <li>• College ID is compulsory</li>
                <li>• All participants are required to wear formal attire</li>
                <li>• Participants are requested to carry their own water bottles</li>
                <li>• Please ensure that all information provided is accurate</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                variant="premium"
                size="xl"
                className="w-full sm:w-auto min-w-[280px] animate-pulse-glow"
              >
                Register Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Registration closes January 25, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-to-t from-background via-background to-transparent p-4 border-t border-border/30">
        <Button
          variant="premium"
          size="lg"
          className="w-full shadow-lg shadow-primary/20"
        >
          Register Now — ₹150
        </Button>
      </div>
    </section>
  );
};
