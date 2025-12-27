import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const SignalTrace = React.memo(({ delay = 0, top = '30%' }: { delay?: number; top?: string }) => (
  <div 
    className="absolute left-0 right-0 h-px overflow-hidden pointer-events-none"
    style={{ top }}
  >
    <motion.div
      className="h-full w-40 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      initial={{ x: '-100%' }}
      animate={{ x: '400%' }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  </div>
));

export const TechnicalBackground = React.memo(({ section = 'default' }: { section?: 'hero' | 'default' }) => {
  const shouldReduceMotion = useReducedMotion();

  const circuitPaths = useMemo(() => [
    "M0,100 L50,100 L50,50 L100,50",
    "M0,200 L100,200 L100,100 L200,100",
  ], []);

  if (shouldReduceMotion) {
    return <div className="fixed inset-0 bg-[#0a0a0c] -z-10" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#0a0a0c]">
      {/* Grid Structure - Static and optimized */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} 
      />

      {/* Simplified Technical Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {circuitPaths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="url(#line-grad)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 10
            }}
          />
        ))}
      </svg>

      {/* Low-performance cost Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {section === 'hero' && (
        <div className="absolute inset-0">
          <SignalTrace delay={0} top="25%" />
          <SignalTrace delay={4} top="65%" />
        </div>
      )}
    </div>
  );
});
