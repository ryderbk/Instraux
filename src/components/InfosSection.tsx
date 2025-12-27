import { motion } from 'framer-motion';

export const InfosSection = () => {
  return (
    <section id="infos" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Information
          </h2>
          
          {/* Content will be added here */}
          <div className="glass-panel p-8 rounded-xl border border-border/20">
            <p className="text-muted-foreground text-center">
              Coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
