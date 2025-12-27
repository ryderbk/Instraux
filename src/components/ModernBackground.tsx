import React, { useMemo } from 'react';

/**
 * ModernBackground: A futuristic background system reflecting electronics and instrumentation.
 * Features: Flowing circuit paths, signal waves, grid structures, and glowing nodes.
 */
const ModernBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050208]">
      {/* Base Grid Structure */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />

      {/* SVG Circuit Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          <mask id="circuit-mask">
            <rect width="100%" height="100%" fill="white" />
          </mask>
        </defs>

        {/* Slow moving circuit lines */}
        <g className="animate-[pulse_4s_ease-in-out_infinite]">
          <path d="M -100 100 L 200 100 L 250 150 L 500 150" fill="none" stroke="url(#line-grad)" strokeWidth="1" className="animate-[circuit_20s_linear_infinite]" />
          <path d="M 800 200 L 600 200 L 550 250 L 300 250" fill="none" stroke="url(#line-grad)" strokeWidth="1" className="animate-[circuit_25s_linear_infinite_reverse]" />
          <path d="M 100 600 L 300 600 L 350 550 L 600 550" fill="none" stroke="url(#line-grad)" strokeWidth="1" className="animate-[circuit_30s_linear_infinite]" />
          <path d="M 900 700 L 700 700 L 650 750 L 400 750" fill="none" stroke="url(#line-grad)" strokeWidth="1" className="animate-[circuit_22s_linear_infinite_reverse]" />
        </g>

        {/* Floating Nodes */}
        <circle cx="250" cy="150" r="2" fill="#a78bfa" className="animate-pulse">
           <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="550" cy="250" r="2" fill="#a78bfa" className="animate-pulse">
           <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="550" r="2" fill="#a78bfa" className="animate-pulse">
           <animate attributeName="opacity" values="0.2;0.8;0.2" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default ModernBackground;
