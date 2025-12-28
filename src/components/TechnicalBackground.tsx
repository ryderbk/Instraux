import React, { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

export const TechnicalBackground = React.memo(({ section = 'default' }: { section?: 'hero' | 'default' }) => {
  const shouldReduceMotion = useReducedMotion();

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
          backgroundSize: '120px 120px',
          willChange: 'auto'
        }} 
      />

      {/* Gradient background - Low cost, GPU accelerated */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" 
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          willChange: 'auto'
        }}
      />
    </div>
  );
});

TechnicalBackground.displayName = 'TechnicalBackground';
