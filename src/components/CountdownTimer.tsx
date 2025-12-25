import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [countdown, setCountdown] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // Target date: January 31st, 2026
      const targetDate = new Date('2026-01-31T00:00:00').getTime();
      const currentDate = new Date().getTime();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CountdownBox = ({ value, label, index }: { value: number; label: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 md:p-8 rounded-chamfer flex flex-col items-center justify-center border border-accent/30"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Event details header */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span className="hidden sm:inline">Velammal Engineering College, Surapet, Chennai</span>
            <span className="sm:hidden">Velammal Engineering College</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-accent/30" />
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span>January 31st, 2026</span>
          </div>
        </motion.div>

        {/* Countdown boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-10 md:mb-12">
          <CountdownBox value={countdown.days} label="Days" index={0} />
          <CountdownBox value={countdown.hours} label="Hours" index={1} />
          <CountdownBox value={countdown.minutes} label="Minutes" index={2} />
          <CountdownBox value={countdown.seconds} label="Seconds" index={3} />
        </div>

        {/* Register button */}
        <motion.div
          className="flex justify-center pt-2 md:pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={scrollToRegister}
            className="btn-industrial-primary px-8 py-3 md:px-12 md:py-4 rounded-chamfer font-bold text-sm md:text-base font-display uppercase tracking-wider"
          >
            Register Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
