import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';

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

  const Digit = ({ value }: { value: string }) => (
    <div className="relative h-[1.2em] w-[0.7em] overflow-hidden flex justify-center">
      <motion.div
        key={value}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.4 
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {value}
      </motion.div>
    </div>
  );

  const CountdownBox = ({ value, label }: { value: number; label: string }) => {
    const stringValue = String(value).padStart(2, '0');
    return (
      <div className="glass-panel p-2 sm:p-6 md:p-7 rounded-chamfer flex flex-col items-center justify-center border border-accent/30 aspect-square">
        <div className="flex text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-0.5 sm:mb-2 leading-none overflow-hidden">
          <Digit value={stringValue[0]} />
          <Digit value={stringValue[1]} />
        </div>
        <div className="text-[8px] sm:text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full pb-32 md:pb-40"
    >
      <div className="w-full">
        {/* Event details header */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span>January 31st, 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span>Velammal Engineering College</span>
          </div>
        </motion.div>

        {/* Countdown boxes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 mb-10 md:mb-12">
          <CountdownBox value={countdown.days} label="Days" />
          <CountdownBox value={countdown.hours} label="Hours" />
          <CountdownBox value={countdown.minutes} label="Minutes" />
          <CountdownBox value={countdown.seconds} label="Seconds" />
        </div>

        {/* Register button */}
        <motion.div
          className="flex justify-center pt-2 md:pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="premium"
            size="lg"
            onClick={scrollToRegister}
          >
            Register Now
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
