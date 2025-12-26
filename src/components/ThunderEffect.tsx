import React, { useEffect, useRef } from 'react';

/**
 * ThunderEffect: High-fidelity realistic lightning interaction
 * - Midpoint displacement for natural branching
 * - Pointer Event tracking (mobile-safe)
 * - Theme-aware colors
 * - Performance optimized (30fps cap)
 */
const ThunderEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activePointers = useRef<Map<number, { x: number, y: number }>>(new Map());
  const lightningBolts = useRef<any[]>([]);
  const lastFrameTime = useRef(0);
  const lastEmitTime = useRef(0);

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
    window.addEventListener('orientationchange', resize);
    resize();

    const getThemeColors = () => {
      const style = getComputedStyle(document.body);
      const primary = style.getPropertyValue('--primary').trim();
      const accent = style.getPropertyValue('--accent').trim();
      
      // Convert HSL variables to usable strings or fallback to defaults
      return {
        core: '#ffffff',
        primary: primary ? `hsl(${primary})` : '#3b82f6',
        glow: accent ? `hsl(${accent})` : '#60a5fa'
      };
    };

    /**
     * Recursive midpoint displacement for realistic jagged lines
     */
    const generateSegments = (x1: number, y1: number, x2: number, y2: number, displacement: number) => {
      if (displacement < 2) {
        return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
      }

      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displacement;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displacement;

      return [
        ...generateSegments(x1, y1, midX, midY, displacement / 2),
        ...generateSegments(midX, midY, x2, y2, displacement / 2).slice(1)
      ];
    };

    const createBolt = (x: number, y: number) => {
      const colors = getThemeColors();
      const isMobile = 'ontouchstart' in window;
      const angle = Math.random() * Math.PI * 2;
      const length = isMobile ? 40 + Math.random() * 40 : 60 + Math.random() * 80;
      
      const targetX = x + Math.cos(angle) * length;
      const targetY = y + Math.sin(angle) * length;
      
      const segments = generateSegments(x, y, targetX, targetY, length / 1.5);
      
      lightningBolts.current.push({
        segments,
        life: 1.0,
        decay: 0.04 + Math.random() * 0.04,
        color: colors.primary,
        glow: colors.glow,
        core: colors.core,
        width: 2.5 + Math.random() * 2
      });

      // Chance to branch
      if (!isMobile && Math.random() > 0.7) {
        const branchIdx = Math.floor(segments.length * 0.4);
        const start = segments[branchIdx];
        const branchAngle = angle + (Math.random() - 0.5) * 1.5;
        const branchLen = length * 0.5;
        const bTargetX = start.x + Math.cos(branchAngle) * branchLen;
        const bTargetY = start.y + Math.sin(branchAngle) * branchLen;
        
        lightningBolts.current.push({
          segments: generateSegments(start.x, start.y, bTargetX, bTargetY, branchLen / 2),
          life: 0.8,
          decay: 0.06,
          color: colors.primary,
          glow: colors.glow,
          core: colors.core,
          width: 1.5
        });
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      createBolt(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!activePointers.current.has(e.pointerId)) return;
      
      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastEmitTime.current > 40) {
        createBolt(e.clientX, e.clientY);
        lastEmitTime.current = now;
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      activePointers.current.delete(e.pointerId);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    const render = (time: number) => {
      // Cap redraw to ~30 FPS
      if (time - lastFrameTime.current < 33) {
        requestAnimationFrame(render);
        return;
      }
      lastFrameTime.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const bolts = lightningBolts.current;
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        
        // Draw Glow
        ctx.beginPath();
        ctx.lineWidth = bolt.width * 3 * bolt.life;
        ctx.strokeStyle = bolt.glow;
        ctx.shadowBlur = 15 * bolt.life;
        ctx.shadowColor = bolt.glow;
        ctx.globalAlpha = bolt.life * 0.5;
        
        bolt.segments.forEach((pt: any, idx: number) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Draw Primary
        ctx.beginPath();
        ctx.lineWidth = bolt.width * bolt.life;
        ctx.strokeStyle = bolt.color;
        ctx.globalAlpha = bolt.life;
        ctx.shadowBlur = 0;
        
        bolt.segments.forEach((pt: any, idx: number) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Draw Core
        ctx.beginPath();
        ctx.lineWidth = (bolt.width / 2) * bolt.life;
        ctx.strokeStyle = bolt.core;
        ctx.globalAlpha = bolt.life;
        
        bolt.segments.forEach((pt: any, idx: number) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        bolt.life -= bolt.decay;
        if (bolt.life <= 0) bolts.splice(i, 1);
      }

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(render);
    };

    const raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      cancelAnimationFrame(raf);
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