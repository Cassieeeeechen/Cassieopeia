import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
{
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90',
  category: 'Brand Identity',
  title: 'Luminara\nStudio',
  sub: '2025 — Brand Direction'
},
{
  image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=90',
  category: 'Editorial Design',
  title: 'Forme\nMagazine',
  sub: '2025 — Art Direction'
},
{
  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&q=90',
  category: 'Packaging',
  title: 'Éclat\nBeauté',
  sub: '2024 — Packaging & Identity'
},
{
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=90',
  category: 'Web Design',
  title: 'Aurum\nDigital',
  sub: '2024 — Digital Experience'
}];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearTimeout(t);
  }, [current]);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + slides.length + dir) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0">

          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="text-white px-6 text-center opacity-100 absolute inset-0 flex flex-col items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-text'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            <p className="text-[11px] font-medium tracking-[0.5em] uppercase text-white/60 mb-6">{slide.category}</p>
            <h1 className="text-5xl font-light tracking-tight leading-[0.9] sm:text-7xl md:text-8xl whitespace-pre-line">{slide.title}</h1>
            <p className="mt-6 text-[13px] font-light tracking-[0.25em] uppercase text-white/50">{slide.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={() => go(-1)} className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(1)} className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) =>
        <button
          key={i}
          onClick={() => {setDirection(i > current ? 1 : -1);setCurrent(i);}}
          className={`rounded-full transition-all duration-500 ${i === current ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`} />

        )}
      </div>

      <div className="absolute bottom-10 right-10 z-20 text-white/40 text-[12px] font-light tracking-[0.2em]">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F9F9FB] to-transparent z-10" />
    </section>);

}