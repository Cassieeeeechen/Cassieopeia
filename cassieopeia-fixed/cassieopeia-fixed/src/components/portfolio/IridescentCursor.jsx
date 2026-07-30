import React, { useEffect, useRef } from 'react';

// A soft, light iridescent glow that gently follows the cursor.
// Purely a CSS-blurred gradient orb, eased toward the pointer position —
// no particles, no trail, just a subtle ambient aura matching the site's
// purple/pink/blue palette.
export default function IridescentCursor() {
  const orbRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Skip on touch-only devices — an aura that never catches up to a tap
    // is just visual noise on mobile.
    const isTouchOnly = window.matchMedia('(hover: none)').matches;
    if (isTouchOnly) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (orbRef.current) {
        orbRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 260,
        height: 260,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'radial-gradient(circle, rgba(199,167,255,0.16) 0%, rgba(150,190,255,0.10) 35%, rgba(255,182,220,0.06) 60%, transparent 75%)',
        filter: 'blur(18px)',
        mixBlendMode: 'multiply',
        willChange: 'transform',
      }}
    />
  );
}
