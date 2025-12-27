import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const contacts = [
  { icon: Phone, label: '+91 8838182119 / +91 9360220424', href: 'tel:+918838182119' },
  { icon: Mail, label: 'instraux@gmail.com', href: 'mailto:instraux@gmail.com' },
  { icon: Instagram, label: '@instraux_2k26', href: 'https://instagram.com/instraux_2k26' },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-flowing-gradient" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            <span className="text-foreground">Get in </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions? Reach out to us
          </p>
        </motion.div>

        {/* Contact items */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card px-5 py-3 flex items-center gap-3 hover:scale-[1.02] cursor-pointer"
            >
              <contact.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
