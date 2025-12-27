import { motion } from 'framer-motion';
import { Clock, CheckCircle, Users, Award, User, Gift, CreditCard, Shirt, Droplet } from 'lucide-react';

export const InfosSection = () => {
  const infos = [
    { icon: Clock, text: 'Pre-Registration is Mandatory (No on-spot Registration)' },
    { icon: CheckCircle, text: 'Please ensure that all the information provided is accurate' },
    { icon: Users, text: 'Participants can participate in One Technical and One Non-Technical event' },
    { icon: Award, text: 'Participation certificates will be provided' },
    { icon: User, text: 'Individual registration is required' },
    { icon: Gift, text: 'Lunch will be provided to all participants' },
    { icon: CreditCard, text: 'College ID is compulsory' },
    { icon: Shirt, text: 'All participants are required to wear formal attire' },
    { icon: Droplet, text: 'Participants are requested to carry their own water bottles' },
  ];

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
            Important Information
          </h2>
          
          {/* Information Grid */}
          <div className="grid gap-4">
            {infos.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">
                  {info.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
