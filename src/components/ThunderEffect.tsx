import React, { useEffect, useRef } from 'react';

const ThunderEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, isActive: false, isDown: false });
  const arcsRef = useRef<any[]>([]);
  const lastEmitRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const getThemeColors = () => {
      const bodyStyles = getComputedStyle(document.body);
      // Try to get HSL values from shadcn variables
      const primary = bodyStyles.getPropertyValue('--primary').trim();
      const accent = bodyStyles.getPropertyValue('--accent').trim();
      
      // Default to a fallback if not found
      return {
        primary: primary ? `hsl(${primary})` : '#3b82f6',
        accent: accent ? `hsl(${accent})` : '#60a5fa'
      };
    };

    const createArc = (x: number, y: number, isBurst = false) => {
      const colors = getThemeColors();
      const count = isBurst ? 8 : 1;
      
      for (let i = 0; i < count; i++) {
        const angle = isBurst ? (i / count) * Math.PI * 2 : Math.random() * Math.PI * 2;
        const length = isBurst ? 30 + Math.random() * 40 : 15 + Math.random() * 25;
        
        arcsRef.current.push({
          x,
          y,
          angle,
          length,
          segments: Math.floor(3 + Math.random() * 4),
          life: 1.0,
          decay: isBurst ? 0.05 : 0.08,
          color: colors.primary,
          glow: colors.accent,
          width: isBurst ? 2 : 1.5
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.isActive = true;

      const now = Date.now();
      if (now - lastEmitRef.current > 40) {
        createArc(e.clientX, e.clientY);
        lastEmitRef.current = now;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      createArc(e.clientX, e.clientY, true);
      pointerRef.current.isDown = true;
    };

    const handlePointerUp = () => {
      pointerRef.current.isDown = false;
    };

    const handlePointerLeave = () => {
      pointerRef.current.isActive = false;
    };

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);

    let animationFrame: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Throttle rendering slightly for performance (around 30fps-ish via simple logic if needed, 
      // but standard rAF is usually fine for these light effects)
      
      const arcs = arcsRef.current;
      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        
        ctx.beginPath();
        ctx.moveTo(arc.x, arc.y);
        
        let curX = arc.x;
        let curY = arc.y;
        const segLen = arc.length / arc.segments;
        
        for (let s = 0; s < arc.segments; s++) {
          const jitter = (Math.random() - 0.5) * 15;
          curX += Math.cos(arc.angle) * segLen + jitter;
          curY += Math.sin(arc.angle) * segLen + jitter;
          ctx.lineTo(curX, curY);
        }

        ctx.strokeStyle = arc.color;
        ctx.lineWidth = arc.width * arc.life;
        ctx.globalAlpha = arc.life;
        ctx.shadowBlur = 10 * arc.life;
        ctx.shadowColor = arc.glow;
        ctx.stroke();
        
        arc.life -= arc.decay;
        if (arc.life <= 0) {
          arcs.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'block',
      }}
    />
  );
};

export default ThunderEffect;