import { motion } from 'framer-motion';
import { ChevronDown, Activity, Zap } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

// Signal trace animation
const SignalTrace = ({ delay = 0, top = '30%' }: { delay?: number; top?: string }) => (
  <div 
    className="absolute left-0 right-0 h-px overflow-hidden pointer-events-none"
    style={{ top }}
  >
    <motion.div
      className="h-full w-40 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      initial={{ x: '-100%' }}
      animate={{ x: '400%' }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  </div>
);

export const HeroScene = () => {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />
      
      {/* PCB Grid overlay */}
      <div className="absolute inset-0 pcb-grid opacity-50" />
      
      {/* Animated signal traces */}
      <SignalTrace delay={0} top="20%" />
      <SignalTrace delay={2} top="50%" />
      <SignalTrace delay={4} top="80%" />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Department text */}
          <motion.p
            className="text-xs md:text-sm lg:text-base font-mono uppercase tracking-widest text-accent mb-3 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Department of Electronics and Instrumentation
          </motion.p>

          {/* Proudly Presents */}
          <motion.p
            className="text-sm md:text-base lg:text-lg font-light text-muted-foreground mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proudly Presents
          </motion.p>

          {/* Main title */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-foreground">INSTR</span>
            <span className="text-gradient-red">AUX</span>
            <span className="text-metallic">'26</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A National Level Technical Symposium
          </motion.p>

          {/* Countdown Timer Section */}
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToEvents}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Bottom signal trace */}
      <div className="absolute bottom-20 left-0 right-0 h-px overflow-hidden">
        <div className="w-40 h-full bg-gradient-to-r from-transparent via-accent to-transparent animate-signal-trace" />
      </div>
    </section>
  );
};
