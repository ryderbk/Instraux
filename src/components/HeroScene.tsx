import { motion } from 'framer-motion';
import { ChevronDown, Activity, Zap } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Institution label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-light text-muted-foreground/70 tracking-wide mb-3"
          >
            Velammal Engineering College
          </motion.p>

          {/* Department badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 glass-panel rounded-chamfer"
          >
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Electronics & Instrumentation Engineering
            </span>
            <Zap className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
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
            className="text-xl md:text-2xl text-muted-foreground mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A National Technical Symposium
          </motion.p>

          {/* Date & Venue pills */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="glass-panel px-6 py-3 rounded-chamfer">
              <span className="font-mono font-semibold text-foreground tracking-wide">
                31st January 2026
              </span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-chamfer">
              <span className="text-muted-foreground">
                Velammal Engineering College
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              className="btn-industrial-primary px-10 py-3.5 text-lg"
              onClick={scrollToEvents}
            >
              View Events
            </button>
          </motion.div>
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
