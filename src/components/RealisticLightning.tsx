import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Segment {
  p1: Point;
  p2: Point;
  thickness: number;
}

interface LightningStrike {
  segments: Segment[];
  alpha: number;
  startTime: number;
  flickerOffset: number;
}

interface RealisticLightningProps {
  trigger: boolean;
  onComplete?: () => void;
  width?: number;
  height?: number;
  className?: string;
  isMainHeading?: boolean;
}

export const RealisticLightning: React.FC<RealisticLightningProps> = ({
  trigger,
  onComplete,
  width = 600,
  height = 200,
  className = "",
  isMainHeading = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [active, setActive] = useState(false);

  const generateLightning = (start: Point, end: Point, branches: number = 3): Segment[] => {
    const segments: Segment[] = [];
    
    const generatePath = (p1: Point, p2: Point, thickness: number, depth: number) => {
      if (depth <= 0) {
        segments.push({ p1, p2, thickness });
        return;
      }

      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      
      const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      const offsetScale = dist * 0.25;
      const nx = midX + (Math.random() - 0.5) * offsetScale;
      const ny = midY + (Math.random() - 0.5) * offsetScale;
      
      const nextPoint = { x: nx, y: ny };
      
      generatePath(p1, nextPoint, thickness, depth - 1);
      generatePath(nextPoint, p2, thickness, depth - 1);

      // Branching logic
      if (Math.random() < 0.15 && depth > 2 && branches > 0) {
        const branchAngle = (Math.random() - 0.5) * Math.PI * 0.5;
        const branchLen = dist * 0.5;
        const branchEnd = {
          x: nextPoint.x + Math.sin(branchAngle) * branchLen,
          y: nextPoint.y + Math.cos(branchAngle) * branchLen
        };
        generatePath(nextPoint, branchEnd, thickness * 0.5, depth - 1);
      }
    };

    generatePath(start, end, isMainHeading ? 4 : 2, 5);
    return segments;
  };

  useEffect(() => {
    if (!trigger) return;
    setActive(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const segments = generateLightning(
      { x: width * 0.2 + Math.random() * width * 0.6, y: -20 },
      { x: width * 0.2 + Math.random() * width * 0.6, y: height + 20 }
    );

    const startTime = performance.now();
    const duration = isMainHeading ? 250 : 180;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        ctx.clearRect(0, 0, width, height);
        setActive(false);
        onComplete?.();
        return;
      }

      // Physics-based flicker
      const flicker = Math.sin(progress * Math.PI * 10) > 0 ? 1 : 0.4;
      const alpha = (1 - progress) * flicker;

      ctx.clearRect(0, 0, width, height);

      // Screen flash for main heading
      if (isMainHeading && progress < 0.15) {
        const flashIntensity = (1 - progress / 0.15) * 0.4;
        ctx.fillStyle = `rgba(255, 255, 255, ${flashIntensity})`;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = alpha;

      segments.forEach(seg => {
        // Outer Glow
        ctx.beginPath();
        ctx.moveTo(seg.p1.x, seg.p1.y);
        ctx.lineTo(seg.p2.x, seg.p2.y);
        ctx.lineWidth = seg.thickness * (isMainHeading ? 6 : 4);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#a855f7';
        ctx.stroke();

        // Secondary Glow
        ctx.lineWidth = seg.thickness * 3;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.stroke();

        // White-hot core
        ctx.lineWidth = seg.thickness;
        ctx.strokeStyle = '#fff';
        ctx.shadowBlur = 0;
        ctx.stroke();
      });

      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [trigger, width, height, isMainHeading, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        mixBlendMode: 'screen',
        display: active ? 'block' : 'none',
        zIndex: 5
      }}
    />
  );
};
