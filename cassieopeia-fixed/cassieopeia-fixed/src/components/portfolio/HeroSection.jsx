import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import PearlOrbs from './PearlOrbs';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #ece9ff 0%, #f5f0ff 20%, #e8f0ff 45%, #f0f5ff 70%, #f5eeff 100%)'}}>
      <PearlOrbs />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />


      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>

          <p className="text-[13px] font-medium tracking-[0.4em] uppercase mb-8" style={{color: 'rgba(130,100,220,0.7)'}}>GRAPHIC DESIGNER</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9]" style={{color: '#1a1535'}}>

          Crafting
          <br />
          <span className="iridescent-text font-light">Visual</span>
          <br />
          Poetry
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-base md:text-lg text-gray-400 font-light max-w-md mx-auto leading-relaxed">

          Transforming ideas into luminous experiences through thoughtful design and creative direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16">

          <a
            href="#work"
            className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors duration-300">

            Explore Work
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>

              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{background: 'linear-gradient(to top, #f0f0ff, transparent)'}} />
    </section>);

}