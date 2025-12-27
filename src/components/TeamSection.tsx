import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Crown, Star } from 'lucide-react';
import { TechnicalBackground } from './TechnicalBackground';

const staffMembers = [
  {
    name: 'Dr S Sathish Kumar',
    role: 'Principal',
    icon: Crown,
  },
  {
    name: 'Dr Z Brijet',
    role: 'Head of the Department',
    icon: Star,
  },
  {
    name: 'Dr S N Sivaraj',
    role: 'Faculty Coordinator',
    subtitle: 'Assistant Professor III',
    icon: BookOpen,
  },
];

const studentCoordinators = [
  {
    name: 'Bharath K V',
    role: 'Student Coordinator',
    icon: GraduationCap,
  },
  {
    name: 'Yuvashree S',
    role: 'Student Coordinator',
    icon: GraduationCap,
  },
];

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <TechnicalBackground />
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary">
            The Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Meet Our </span>
            <span className="text-gradient">Organizers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The dedicated minds behind INSTRAUX'26
          </p>
        </motion.div>

        {/* Staff row - all 3 aligned equally */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="glass-card p-6 group text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <member.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-0.5">
                  {member.role}
                </p>
                {member.subtitle && (
                  <p className="text-xs text-muted-foreground">
                    {member.subtitle}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Student Coordinators row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {studentCoordinators.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors duration-300">
                    <member.icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent-cyan">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
