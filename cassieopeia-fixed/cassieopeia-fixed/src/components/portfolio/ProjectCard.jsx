import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryLabels = {
    branding: 'Branding',
    web_design: 'Web Design',
    illustration: 'Illustration',
    packaging: 'Packaging',
    typography: 'Typography',
    motion: 'Motion'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
        {project.image_url ?
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" /> :


        <div className="w-full h-full iridescent-bg flex items-center justify-center">
            <span className="text-6xl font-extralight text-white/60">
              {project.title?.[0]}
            </span>
          </div>
        }

        {/* Overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }} className="bg-[#c7e0ff] opacity-100 rounded-[7px] absolute inset-0 from-black/50 via-transparent to-transparent" />



        {/* Hover content */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70">
                {categoryLabels[project.category] || project.category}
              </p>
              <h3 className="text-xl font-light text-white mt-1">
                {project.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Below card info */}
      <div className="mt-4 flex items-center justify-between px-1">
        <h3 className="text-sm font-medium text-gray-700 tracking-wide">
          {project.title}
        </h3>
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400">
          {project.year || '2024'}
        </span>
      </div>
    </motion.div>);

}