import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const ClosingSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-sm text-muted-foreground mb-8 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Department of Electronics & Instrumentation Engineering
          </motion.p>

          {/* Main text */}
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-foreground">Be Part of</span>
            <br />
            <span className="text-gradient">Something Amazing</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Join us on 31st January 2026 for an unforgettable experience
          </motion.p>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="premium"
              size="xl"
              className="animate-pulse-glow"
              onClick={() => {
                const element = document.getElementById('register');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
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
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-border/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © 2026 INSTRAUX. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-semibold text-gradient">
                INSTRAUX'26
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">
                EIE Department
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
