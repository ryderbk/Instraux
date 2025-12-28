import { motion } from 'framer-motion';
import { Gift, Award, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { TechnicalBackground } from './TechnicalBackground';

export const RegistrationSection = () => {
  return (
    <section
      id="register"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden pb-32 md:pb-20"
    >
      <TechnicalBackground />
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


            {/* CTA */}
            <div className="text-center">
              <Button
                variant="premium"
                size="xl"
                className="w-full sm:w-auto min-w-[280px] animate-pulse-glow"
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform', '_blank');
                }}
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

    </section>
  );
};
