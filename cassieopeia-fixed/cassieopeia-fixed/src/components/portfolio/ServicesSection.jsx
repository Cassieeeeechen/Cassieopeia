import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Feather, Package, Type, Play } from 'lucide-react';

const services = [
{ icon: Layers, title: 'Brand Identity', desc: 'Logo systems, color theory, typography, and full visual identity design built to last.' },
{ icon: Globe, title: 'Visual Design', desc: 'Pixel-perfect interfaces with thoughtful UX — from landing pages to full digital experiences.' },
{ icon: Feather, title: 'Illustration', desc: 'Custom editorial and brand illustration that sets your visual language apart.' },
{ icon: Package, title: 'Photography', desc: 'Commercial and editorial photography that elevates brand storytelling.' },
{ icon: Type, title: 'Typography', desc: 'Custom lettering and typographic systems that become recognizable signatures.' },
{ icon: Play, title: 'Logo Design', desc: 'Distinctive, memorable logos that become the cornerstone of a brand\'s visual identity.' }];


export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-40 px-6 md:px-10" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20">

          <p className="text-[10px] md:text-[12px] font-medium tracking-[0.35em] md:tracking-[0.45em] uppercase mb-2 md:mb-4" style={{ color: 'rgba(130,100,220,0.7)' }}>What I Do</p>
          <h2 className="text-2xl md:text-6xl font-extralight tracking-tight" style={{ color: '#1a1535' }}>
            Services
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/60 border border-purple-100 backdrop-blur-sm cursor-pointer hover:bg-white/90 transition-colors duration-200"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon size={14} className="text-purple-400 shrink-0" />
                <span className="text-[13px] font-light tracking-wide" style={{ color: '#1a1535' }}>{s.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>);

}