import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Technical Excellence',
    description: 'Cutting-edge innovations in electronics and instrumentation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Creative minds solving real-world challenges.',
  },
  {
    icon: Users,
    title: 'Student-Driven',
    description: 'Fostering leadership and collaboration.',
  },
  {
    icon: Target,
    title: 'Industry Connect',
    description: 'Bridging academia and industry.',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 glass-panel rounded-chamfer text-sm font-mono uppercase tracking-widest text-accent">
              About the Symposium
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Where </span>
              <span className="text-gradient-copper">Innovation</span>
              <br className="md:hidden" />
              <span className="text-foreground"> Meets </span>
              <span className="text-gradient-red">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              INSTRAUX'26 is the flagship techno-cultural symposium by the Department of 
              Electronics and Instrumentation Engineering.
            </p>
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="module-card p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-chamfer bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 border border-primary/20">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex flex-row items-stretch justify-center gap-2 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: '8+', label: 'Events' },
              { value: '500+', label: 'Participants' },
              { value: '1', label: 'Workshop' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-panel p-3 sm:p-6 text-center rounded-chamfer flex-1 min-w-0"
              >
                <div className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-gradient-copper mb-1 truncate">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground font-mono uppercase tracking-wider truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
