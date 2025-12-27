import { motion } from 'framer-motion';
import { Plane, Target, Gauge, Award, Users } from 'lucide-react';
import { Button } from './ui/button';

export const WorkshopSection = () => {
  return (
    <section
      id="workshop"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-sm font-medium text-accent-cyan">
              Featured Workshop
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-accent">Remote Pilot Training</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Master the Art of Drone Flying
            </p>
          </motion.div>

          {/* Workshop card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Visual */}
              <div className="flex justify-center">
                <motion.div
                  className="relative"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Plane className="w-20 h-20 text-primary transform -rotate-45" />
                  </div>
                  {/* Orbit ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                </motion.div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Get hands-on experience with professional drone technology. Learn the 
                  fundamentals of remote piloting, flight dynamics, and aerial photography.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: Target, label: 'Precision Training' },
                    { icon: Gauge, label: 'Flight Dynamics' },
                    { icon: Award, label: 'Certification' },
                    { icon: Users, label: 'Expert Mentors' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Workshop Fee
                      </p>
                      <p className="font-display text-3xl font-bold text-gradient">
                        ₹300
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">Limited Seats</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const element = document.getElementById('register');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Plane className="w-4 h-4 mr-2" />
                  Enroll in Workshop
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
