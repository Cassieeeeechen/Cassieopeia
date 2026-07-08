import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function UniversePortal({ visible, onClose, onDownloadCV }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="universe-portal"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={onClose}
          style={{ background: 'radial-gradient(ellipse at center, #0a0618 0%, #050314 40%, #000008 100%)' }}>

          {/* Light beams — space travel effect */}
          {Array.from({ length: 8 }).map((_, i) => {
            if (i === 1 || i === 5) return null; // Skip vertical beams
            const angle = (i / 8) * Math.PI * 2;
            const isHorizontal = i % 2 === 0;
            return (
              <motion.div
                key={`beam-${i}`}
                className="absolute origin-center"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '2px',
                  height: isHorizontal ? '200vh' : '100vw',
                  background: `linear-gradient(${isHorizontal ? '180deg' : '90deg'}, transparent, rgba(150,100,255,0.4), transparent)`,
                  transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleY: isHorizontal ? [1, 1.4, 1] : [1, 1, 1],
                  scaleX: !isHorizontal ? [1, 1.4, 1] : [1, 1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut'
                }}
              />
            );
          })}

          {/* Stars */}
          {Array.from({ length: 220 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 2.5 + 0.5,
                height: Math.random() * 2.5 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: Math.random() * 3 + 1, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}

          {/* Color nebula washes */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 40%, rgba(120,60,200,0.3) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 35% at 70% 60%, rgba(60,100,200,0.25) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 30% at 50% 50%, rgba(200,180,255,0.12) 0%, transparent 60%)' }} />

          {/* Ripple rings */}
          <motion.div
            className="absolute rounded-full border border-purple-400/30"
            animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ width: 200, height: 200 }}
          />
          <motion.div
            className="absolute rounded-full border border-blue-300/20"
            animate={{ scale: [1, 3.5], opacity: [0.4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
            style={{ width: 200, height: 200 }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ delay: 0.5, duration: 4.5, times: [0, 0.2, 0.7, 1] }}
            className="text-center z-10 pointer-events-none">
            <p className="text-white text-xs font-light uppercase tracking-[0.5em] opacity-40 mb-3">YOU HAVE ENTERED</p>
            <p className="text-white text-4xl font-extralight tracking-tight opacity-25">Cassie's space</p>
          </motion.div>

          {/* CV Popover appears after text fades */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-[210] pointer-events-auto"
          >
                <button
                  onClick={onDownloadCV}
                  className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: 'rgba(50, 30, 80, 0.7)',
                    color: 'rgba(200, 180, 255, 0.4)',
                    padding: '8px 14px',
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(167, 139, 250, 0.8), rgba(120, 100, 220, 0.7))';
                    e.target.style.border = '1px solid rgba(200, 180, 255, 0.5)';
                    e.target.style.boxShadow = '0 6px 20px rgba(150, 100, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(20, 10, 30, 0.8)';
                    e.target.style.border = '1px solid rgba(150, 100, 255, 0.2)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
                  }}>
                  ↓ Download my CV
                </button>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IridescentBubble({ isDark }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const SIZE = 520;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const r = 210;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      const t = timeRef.current;

      if (isDark) {
        // === DARK MODE: deep iridescent sphere on black ===

        // Base sphere — deep dark navy/black
        const baseGrad = ctx.createRadialGradient(cx - 40, cy - 50, 10, cx, cy, r);
        baseGrad.addColorStop(0, 'rgba(30, 20, 60, 1)');
        baseGrad.addColorStop(0.4, 'rgba(10, 5, 30, 1)');
        baseGrad.addColorStop(0.85, 'rgba(5, 2, 15, 1)');
        baseGrad.addColorStop(1, 'rgba(0, 0, 5, 1)');
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = baseGrad;
        ctx.fill();

        // Iridescent color patches clipped to circle
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.clip();

        const patches = [
          {
            ox: Math.cos(t * 0.5) * 70 + 10,
            oy: Math.sin(t * 0.38) * 60 - 10,
            hue: 240 + Math.sin(t * 0.3) * 30, // blue
            alpha: 0.85,
            radius: 170,
          },
          {
            ox: Math.cos(t * 0.38 + 2) * 80 - 30,
            oy: Math.sin(t * 0.55 + 1) * 55 + 40,
            hue: 270 + Math.sin(t * 0.45) * 40, // purple
            alpha: 0.75,
            radius: 155,
          },
          {
            ox: Math.cos(t * 0.62 + 4) * 55 + 35,
            oy: Math.sin(t * 0.42 + 3) * 65 - 15,
            hue: 300 + Math.sin(t * 0.25) * 30, // magenta
            alpha: 0.65,
            radius: 130,
          },
          {
            ox: Math.cos(t * 0.3 + 1) * 75 - 5,
            oy: Math.sin(t * 0.7 + 2) * 45 + 35,
            hue: 210 + Math.sin(t * 0.55) * 25, // cyan-blue
            alpha: 0.5,
            radius: 120,
          },
          // Rainbow band — thin bright streak
          {
            ox: Math.cos(t * 0.2) * 90 - 20,
            oy: Math.sin(t * 0.15) * 30 + 20,
            hue: 50 + Math.sin(t * 0.4) * 60, // yellow-green-red band
            alpha: 0.55,
            radius: 35,
          },
        ];

        patches.forEach((p) => {
          const px = cx + p.ox;
          const py = cy + p.oy;
          const g = ctx.createRadialGradient(px, py, 0, px, py, p.radius);
          g.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${p.alpha})`);
          g.addColorStop(0.5, `hsla(${p.hue + 25}, 90%, 55%, ${p.alpha * 0.5})`);
          g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        });

        ctx.restore();

        // Rim glow — vivid iridescent edge
        const rimGrad = ctx.createRadialGradient(cx, cy, r * 0.78, cx, cy, r);
        rimGrad.addColorStop(0, 'rgba(0,0,0,0)');
        rimGrad.addColorStop(0.6, `hsla(${230 + Math.sin(t * 0.3) * 50}, 100%, 70%, 0.35)`);
        rimGrad.addColorStop(1, `hsla(${280 + Math.sin(t * 0.45) * 60}, 100%, 75%, 0.7)`);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = rimGrad;
        ctx.fill();

        // Small bright highlight top-left
        const hiGrad = ctx.createRadialGradient(cx - 60, cy - 68, 2, cx - 45, cy - 52, 60);
        hiGrad.addColorStop(0, 'rgba(180,200,255,0.7)');
        hiGrad.addColorStop(0.5, 'rgba(140,160,255,0.25)');
        hiGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = hiGrad;
        ctx.fill();

      } else {
        // === LIGHT MODE: original pearl bubble ===

        // Outer soft glow
        const glowGrad = ctx.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 1.35);
        glowGrad.addColorStop(0, 'rgba(200,180,255,0)');
        glowGrad.addColorStop(0.5, 'rgba(180,160,255,0.08)');
        glowGrad.addColorStop(1, 'rgba(160,200,255,0.04)');
        ctx.beginPath();
        ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Base sphere
        const baseGrad = ctx.createRadialGradient(cx - 50, cy - 60, 20, cx, cy, r);
        baseGrad.addColorStop(0, 'rgba(255,255,255,0.96)');
        baseGrad.addColorStop(0.3, 'rgba(248,244,255,0.75)');
        baseGrad.addColorStop(0.65, 'rgba(230,235,255,0.45)');
        baseGrad.addColorStop(1, 'rgba(210,225,255,0.18)');
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = baseGrad;
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.clip();

        const patches = [
          { ox: Math.cos(t * 0.55) * 60 + 20, oy: Math.sin(t * 0.4) * 55 + 10, hue: 270 + Math.sin(t * 0.35) * 40, alpha: 0.52, radius: 160 },
          { ox: Math.cos(t * 0.4 + 2) * 70 - 30, oy: Math.sin(t * 0.65 + 1) * 50 + 30, hue: 210 + Math.sin(t * 0.5) * 50, alpha: 0.42, radius: 140 },
          { ox: Math.cos(t * 0.7 + 4) * 50 + 40, oy: Math.sin(t * 0.45 + 3) * 65 - 20, hue: 300 + Math.sin(t * 0.28) * 35, alpha: 0.38, radius: 130 },
          { ox: Math.cos(t * 0.35 + 1) * 80 - 10, oy: Math.sin(t * 0.8 + 2) * 40 + 40, hue: 180 + Math.sin(t * 0.6) * 45, alpha: 0.28, radius: 120 },
        ];

        patches.forEach((p) => {
          const px = cx + p.ox;
          const py = cy + p.oy;
          const g = ctx.createRadialGradient(px, py, 0, px, py, p.radius);
          g.addColorStop(0, `hsla(${p.hue}, 90%, 75%, ${p.alpha})`);
          g.addColorStop(0.6, `hsla(${p.hue + 30}, 80%, 80%, ${p.alpha * 0.4})`);
          g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        });

        ctx.restore();

        const rimGrad = ctx.createRadialGradient(cx, cy, r * 0.75, cx, cy, r);
        rimGrad.addColorStop(0, 'rgba(255,255,255,0)');
        rimGrad.addColorStop(0.7, `hsla(${250 + Math.sin(t * 0.3) * 50}, 80%, 88%, 0.22)`);
        rimGrad.addColorStop(1, `hsla(${190 + Math.sin(t * 0.45) * 70}, 90%, 92%, 0.5)`);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = rimGrad;
        ctx.fill();

        const hiGrad = ctx.createRadialGradient(cx - 65, cy - 72, 4, cx - 48, cy - 55, 80);
        hiGrad.addColorStop(0, 'rgba(255,255,255,0.98)');
        hiGrad.addColorStop(0.45, 'rgba(255,255,255,0.45)');
        hiGrad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = hiGrad;
        ctx.fill();

        const sparkGrad = ctx.createRadialGradient(cx + 80, cy - 90, 0, cx + 80, cy - 90, 28);
        sparkGrad.addColorStop(0, 'rgba(255,255,255,0.75)');
        sparkGrad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = sparkGrad;
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, r - 1, Math.PI * 1.1, Math.PI * 1.75);
        ctx.strokeStyle = `hsla(${240 + Math.sin(t * 0.4) * 60}, 70%, 85%, 0.35)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      timeRef.current += 0.008;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [isDark]);

  const glowColor = isDark
    ? 'radial-gradient(circle, rgba(100,80,255,0.45) 0%, rgba(180,60,255,0.2) 45%, transparent 72%)'
    : 'radial-gradient(circle, rgba(200,180,255,0.35) 0%, rgba(160,200,255,0.18) 45%, transparent 72%)';

  return (
    <div className="relative flex items-center justify-center" style={{ width: 'min(380px, 72vw)', height: 'min(380px, 72vw)' }}>
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: '100%', height: '100%', background: glowColor, filter: 'blur(48px)' }}
      />
      <canvas ref={canvasRef} style={{ borderRadius: '50%', position: 'relative', zIndex: 1, width: '100%', height: '100%' }} />
    </div>
  );
}

export default function CrystalHero() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [showCVPopover, setShowCVPopover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollTop + windowHeight) / docHeight;
      
      if (scrollPercent > 0.9) {
        setShowCVPopover(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePortalClose = () => {
    setPortalOpen(false);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  };

  const handleDownloadCV = () => {
    const cvUrl = 'https://media.base44.com/files/public/69ad44f7d817e6a3f2fc7781/a7a3a5904_ARTISTCV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Cassie_Resume.pdf';
    link.click();
    setShowCVPopover(false);
  };

  return (
    <>
      <UniversePortal visible={portalOpen} onClose={handlePortalClose} onDownloadCV={handleDownloadCV} />

    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#ffffff' }}>

      {/* Very subtle background blush */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,210,255,0.18) 0%, transparent 70%)' }} />

      {/* Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center cursor-pointer relative"
        onClick={() => setPortalOpen(true)}
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}>
        <IridescentBubble isDark={false} />
        
        {/* Popover */}
        <AnimatePresence>
          {showPopover && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full mt-6 z-50"
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(32px) saturate(180%)',
                WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: '999px',
                padding: '10px 20px',
                boxShadow: '0 8px 32px rgba(120,100,220,0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
                whiteSpace: 'nowrap'
              }}>
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase" style={{ color: 'rgba(120,100,200,0.8)' }}>
                ACTIVATE THE PORTAL
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>



      {/* Text below bubble */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 text-center">
        <p className="text-[11px] font-medium tracking-[0.45em] uppercase mb-3" style={{ color: 'rgba(130,100,220,0.55)' }}>GRAPHIC DESIGNER</p>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight" style={{ color: '#1a1535' }}>
          Crafting <span className="iridescent-text font-light">Visual Poetry</span>
        </h1>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 mx-auto"
          style={{ background: 'linear-gradient(to bottom, rgba(160,140,220,0.4), transparent)' }}
        />
      </motion.a>
    </section>
    </>
  );
}