import React, { useEffect, useRef } from 'react';

/**
 * ThunderEffect: High-fidelity lightning interaction
 * - Properly handles continuous emission while active
 * - Distinguishes between mouse and touch
 * - Theme-aware and performance optimized
 */
const ThunderEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activePointers = useRef<Map<number, { x: number, y: number, isDown: boolean }>>(new Map());
  const lightningBolts = useRef<any[]>([]);
  const lastFrameTime = useRef(0);
  const lastEmitTime = useRef(new Map<number, number>());

  useEffect(() => {
    // Disable thunder animation on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

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
      
      return {
        core: '#ffffff',
        primary: primary.includes('%') ? `hsl(${primary})` : '#3b82f6',
        glow: accent.includes('%') ? `hsl(${accent})` : '#60a5fa'
      };
    };

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
      const isMobile = window.innerWidth < 768;
      const angle = Math.random() * Math.PI * 2;
      const length = isMobile ? 20 + Math.random() * 20 : 50 + Math.random() * 70;
      
      const targetX = x + Math.cos(angle) * length;
      const targetY = y + Math.sin(angle) * length;
      
      const segments = generateSegments(x, y, targetX, targetY, length / 1.5);
      
      lightningBolts.current.push({
        segments,
        life: 1.0,
        decay: 0.07 + Math.random() * 0.07,
        color: colors.primary,
        glow: colors.glow,
        core: colors.core,
        width: 1.2 + Math.random() * 1.5
      });
    };

    const handlePointerDown = (e: PointerEvent) => {
      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY, isDown: true });
      createBolt(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const ptr = activePointers.current.get(e.pointerId);
      if (ptr) {
        ptr.x = e.clientX;
        ptr.y = e.clientY;
      } else if (e.pointerType === 'mouse') {
        activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY, isDown: false });
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      activePointers.current.delete(e.pointerId);
      lastEmitTime.current.delete(e.pointerId);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    const render = (time: number) => {
      if (time - lastFrameTime.current < 33) {
        requestAnimationFrame(render);
        return;
      }
      lastFrameTime.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      
      // Continuous emission while pointer is active
      activePointers.current.forEach((ptr, id) => {
        const lastEmit = lastEmitTime.current.get(id) || 0;
        // Faster emission if button is down or it's a touch point
        const interval = (ptr.isDown || id > 1) ? 40 : 100;
        
        if (now - lastEmit > interval) {
          createBolt(ptr.x, ptr.y);
          lastEmitTime.current.set(id, now);
        }
      });

      const bolts = lightningBolts.current;
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        
        ctx.beginPath();
        ctx.lineWidth = bolt.width * 2.5 * bolt.life;
        ctx.strokeStyle = bolt.glow;
        ctx.shadowBlur = 6 * bolt.life;
        ctx.shadowColor = bolt.glow;
        ctx.globalAlpha = bolt.life * 0.3;
        
        bolt.segments.forEach((pt: any, idx: number) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

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
        touchAction: 'none',
      }}
    />
  );
};

export default ThunderEffect;