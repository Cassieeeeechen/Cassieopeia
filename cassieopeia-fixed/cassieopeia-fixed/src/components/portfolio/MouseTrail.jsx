import { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -300, y: -300 };
    let particles = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      if (x == null) return;
      mouse.x = x;
      mouse.y = y;

      // Move custom cursor dot
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';

      // Bioluminescent particles — cool blue-green tones
      for (let i = 0; i < 4; i++) {
        const hue = 160 + Math.random() * 60; // 160–220: cyan/teal/blue-green
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -Math.random() * 1.2 - 0.3, // drift upward like deep-sea glow
          radius: 6 + Math.random() * 10,
          maxRadius: 40 + Math.random() * 40,
          alpha: 0.55 + Math.random() * 0.3,
          hue,
          life: 1,
          decay: 0.014 + Math.random() * 0.012,
        });
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;
        if (p.life <= 0) { particles.splice(i, 1); continue; }

        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.98; // gentle slow down
        p.radius = p.radius + (p.maxRadius - p.radius) * 0.04;

        const a = p.alpha * p.life * p.life; // quadratic fade for softness

        // Core bright glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0,   `hsla(${p.hue}, 100%, 92%, ${a})`);
        grad.addColorStop(0.2, `hsla(${p.hue}, 95%,  70%, ${a * 0.8})`);
        grad.addColorStop(0.6, `hsla(${p.hue}, 90%,  50%, ${a * 0.35})`);
        grad.addColorStop(1,   `hsla(${p.hue}, 85%,  40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Extra outer bloom
        const bloom = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.2);
        bloom.addColorStop(0, `hsla(${p.hue + 20}, 100%, 75%, ${a * 0.15})`);
        bloom.addColorStop(1, `hsla(${p.hue + 20}, 90%,  60%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = bloom;
        ctx.fill();
      }

      // Pulsing cursor aura around the dot
      const pulse = 0.5 + 0.5 * Math.sin(time * 3);
      const aura = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 28 + pulse * 8);
      aura.addColorStop(0,   `hsla(180, 100%, 80%, ${0.18 + pulse * 0.08})`);
      aura.addColorStop(0.5, `hsla(170, 95%,  60%, ${0.08 + pulse * 0.04})`);
      aura.addColorStop(1,   'hsla(160, 90%, 50%, 0)');
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 28 + pulse * 8, 0, Math.PI * 2);
      ctx.fillStyle = aura;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'rgba(120, 255, 220, 0.95)',
          boxShadow: '0 0 10px 3px rgba(80, 220, 180, 0.7), 0 0 24px 6px rgba(60, 200, 160, 0.3)',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease',
          mixBlendMode: 'screen',
        }}
      />
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}