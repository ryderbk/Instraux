import React, { useState, useEffect } from 'react';
import { RealisticLightning } from './RealisticLightning';
import { useInView } from 'react-intersection-observer';

interface LightningHeadingProps {
  title: string;
  isMain?: boolean;
  className?: string;
}

export const LightningHeading: React.FC<LightningHeadingProps> = ({ 
  title, 
  isMain = false,
  className = ""
}) => {
  const [triggered, setTriggered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !triggered) {
      if (isMain) {
        setTriggered(true);
      } else {
        const timer = setTimeout(() => setTriggered(true), 200);
        return () => clearTimeout(timer);
      }
    }
  }, [inView, triggered, isMain]);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <RealisticLightning 
        trigger={triggered} 
        isMainHeading={isMain} 
        width={isMain ? 1000 : 800} 
        height={isMain ? 400 : 300}
        className="-top-1/2 -left-1/4"
      />
      <h2 className={`relative z-10 ${isMain ? 'text-6xl md:text-8xl mb-8 font-bold text-white tracking-tight' : 'text-4xl md:text-6xl mb-6 font-bold text-white'}`}>
        {title}
      </h2>
    </div>
  );
};
