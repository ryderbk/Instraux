import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const TechnicalBackground = ({ section = 'default' }: { section?: 'hero' | 'default' }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const shouldReduceMotion = useReducedMotion();

  const circuitPaths = useMemo(() => [
    "M0,100 Q50,100 50,50 T100,50",
    "M0,200 Q100,200 100,100 T200,100",
    "M500,0 Q500,100 600,100 T700,200",
    "M800,500 Q900,500 900,600 T1000,700",
  ], []);

  if (shouldReduceMotion) {
    return <div className="fixed inset-0 bg-[#0a0a0c] -z-10" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#0a0a0c]">
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Parallax Container */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Grid Structure */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} 
        />

        {/* Technical Elements */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
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
                opacity: [0, 0.5, 0],
                x: [0, 100, 200]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 3
              }}
            />
          ))}
        </svg>

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </motion.div>

      {/* Signal Waves (Hero Section Only) */}
      {section === 'hero' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-t border-primary/20"
              style={{ top: `${30 + i * 15}%` }}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
