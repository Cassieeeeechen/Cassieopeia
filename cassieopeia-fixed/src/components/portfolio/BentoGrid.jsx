import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

const items = [
  {
    id: 0,
    title: 'The Matcha Ritual',
    category: 'Brand',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/fe920e18c_MatchaAtrium.png',
    span: 'col-span-3 row-span-1',
    textSize: 'text-2xl'
  },
  {
    id: 1,
    title: 'JINYI Cinema',
    category: 'Brand',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/b903e8694_clean.jpg',
    span: 'col-span-2 row-span-2',
    textSize: 'text-2xl'
  },
  {
    id: 25,
    title: 'Blue Fons Business Card',
    category: 'Brand',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/2e993e149_blueponsbusniess21.jpg',
    span: 'col-span-1 row-span-1',
    textSize: 'text-lg'
  },
  {
    id: 3,
    title: 'JINYI Cinema Mall Advertising',
    category: 'Illustration',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/40513cf22_A.jpg',
    span: 'col-span-1 row-span-1',
    textSize: 'text-lg'
  },
  {
    id: 4,
    title: 'JINYI Cinema F&B Poster',
    category: 'Visual Design',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/961b66020_159-1080x1920px.jpg',
    span: 'col-span-1 row-span-2',
    textSize: 'text-xl'
  },
  {
    id: 5,
    title: 'The Mood of the Dreams',
    category: 'Illustration',
    year: '2024',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/bbad318a8_7.jpg',
    span: 'col-span-2 row-span-1',
    textSize: 'text-xl'
  },
  {
    id: 6,
    title: 'Digital Gift & VIP Cards',
    category: 'UI/UX',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3cb84c1b2_.jpg',
    span: 'col-span-1 row-span-1',
    textSize: 'text-xl'
  },
  {
    id: 17,
    title: 'AI Training',
    category: 'AI-enhanced Design',
    year: '2025',
    image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/6d7304fe4_68B0E6B1-E4BA-49CD-8CD4-663CC91428C3.png',
    span: 'col-span-1 row-span-1',
    textSize: 'text-xl'
  }
];

const moreItems = [
  { id: 20, title: 'JINYI Cinema IMAX Advertising', category: 'Outdoor Advertising', year: '2025', image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ea6065532_IMG_5375.jpg', span: 'col-span-2 row-span-1', textSize: 'text-xl' },
  { id: 13, title: 'Forme Editorial', category: 'AI-enhanced Design', year: '2025', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80', span: 'col-span-2 row-span-1', textSize: 'text-xl' },
  { id: 18, title: 'JINYI Cinema Billboard - Variant', category: 'Outdoor Advertising', year: '2025', image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3653f0644_-78x108cmh.jpg', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 19, title: 'JINYI Cinema Billboard - Final', category: 'Outdoor Advertising', year: '2025', image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/a45b3498e_.jpg', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 14, title: 'Urban Mural Project', category: 'Brand', year: '2025', image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800&q=80', span: 'col-span-2 row-span-1', textSize: 'text-xl' },
  { id: 15, title: 'Editorial Photography', category: 'UI/UX', year: '2025', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', span: 'col-span-1 row-span-2', textSize: 'text-xl' },
  { id: 16, title: 'The Creative Pulse Podcast', category: 'AI-enhanced Design', year: '2024', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 17, title: 'Bloom Events Experience', category: 'Brand', year: '2024', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 18, title: 'The Little Cloud Book', category: 'UI/UX', year: '2024', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 19, title: 'Veil Typography System', category: 'Brand', year: '2025', image: 'https://images.unsplash.com/photo-1471666875520-c75081f42081?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 20, title: 'Botanica Visual Identity', category: 'Brand', year: '2025', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80', span: 'col-span-1 row-span-2', textSize: 'text-xl' },
  { id: 21, title: 'Nuage Web Experience', category: 'AI-enhanced Design', year: '2025', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', span: 'col-span-2 row-span-1', textSize: 'text-xl' },
  { id: 22, title: 'Obsidian Packaging', category: 'UI/UX', year: '2023', image: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 23, title: 'Prism Motion Reel', category: 'AI-enhanced Design', year: '2023', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
  { id: 24, title: 'Solstice Campaign', category: 'Brand', year: '2023', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', span: 'col-span-1 row-span-1', textSize: 'text-lg' },
];

const allItems = [...items, ...moreItems];
const categories = ['All', ...Array.from(new Set(allItems.map(i => i.category)))];

function BentoCard({ item, index, fillParent, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxSpeed = 0.3 + (index % 3) * 0.15;
      setParallaxY(window.scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`${fillParent ? 'w-full h-full' : item.span} relative overflow-hidden rounded-[2rem] cursor-pointer group`}
      style={{ minHeight: 160, transform: `translateY(${parallaxY}px)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect && onSelect(item)}>

      <div className="absolute inset-0">
        <img src={item.image} alt={item.title} className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.id === 0 ? 'scale-125' : ''}`} style={item.id === 12 ? { objectPosition: '100% center', transform: 'scale(1.4)' } : item.id === 3 ? { transform: 'scale(1.7)', objectPosition: '40% center' } : {}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(232,180,255,0.18) 0%, rgba(147,197,253,0.12) 50%, rgba(134,239,172,0.1) 100%)' }} />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/50 mb-1">{item.category} · {item.year}</p>
            <h3 className={`${item.textSize} font-extralight text-white tracking-tight leading-tight`}>{item.title}</h3>
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 ml-4">
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Drag slider: left = smaller, right = larger
function SizeSlider({ value, onChange }) {
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const getRatio = (clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };

  const startDrag = (clientX) => {
    dragging.current = true;
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      if (x != null) onChange(getRatio(x));
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp, { once: true });
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp, { once: true });
  };

  return (
    <div className="flex items-center gap-3 select-none">

      <div
        ref={trackRef}
        className="relative w-28 h-[3px] rounded-full cursor-pointer"
        style={{ background: 'rgba(167,139,250,0.2)' }}
        onClick={(e) => onChange(getRatio(e.clientX))}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${value * 100}%`,
            background: 'linear-gradient(90deg, #a78bfa, #93c5fd)',
            transition: 'width 0.1s'
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full cursor-grab active:cursor-grabbing"
          style={{
            left: `calc(${value * 100}% - 8px)`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(220,210,255,0.85))',
            boxShadow: '0 2px 8px rgba(167,139,250,0.45), inset 0 1px 0 rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.8)',
            transition: 'left 0.1s'
          }}
          onMouseDown={(e) => { e.stopPropagation(); startDrag(e.clientX); }}
          onTouchStart={(e) => { e.stopPropagation(); startDrag(e.touches[0].clientX); }}
        />
      </div>
    </div>
  );
}

export default function BentoGrid() {
  const [active, setActive] = useState('All');
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sizeVal, setSizeVal] = useState(0.6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Derive grid params from sizeVal
  const cols = isMobile ? 2 : isTablet ? 3 : sizeVal < 0.35 ? 4 : sizeVal < 0.68 ? 3 : 2;
  const rowHeight = isMobile ? 80 : Math.round(160 + sizeVal * 220);
  const gapPx = isMobile ? 6 : sizeVal < 0.35 ? 8 : sizeVal < 0.68 ? 16 : 24;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap: `${gapPx}px`,
    gridAutoRows: `${rowHeight}px`,
    transition: 'grid-template-columns 0.4s ease, gap 0.4s ease, grid-auto-rows 0.4s ease'
  };

  const primaryFiltered = active === 'All' ? items : items.filter(i => i.category === active);
  const moreFiltered = active === 'All' ? moreItems : moreItems.filter(i => i.category === active);
  const getSpan = (item) => active === 'All' ? item.span : 'col-span-1 row-span-1';

  return (
    <section id="work" className="py-16 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-16 flex items-end justify-between gap-6">
        <div>
          <p className="text-[10px] md:text-[12px] font-medium tracking-[0.35em] md:tracking-[0.45em] uppercase mb-2 md:mb-4" style={{ color: 'rgba(130,100,220,0.7)' }}>CURATED WORK</p>
          <h2 className="text-2xl md:text-6xl font-extralight tracking-tight" style={{ color: '#1a1535' }}>
            Projects that<br /><span className="iridescent-text font-light">speak the truth</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 pb-2 shrink-0">
          <SizeSlider value={sizeVal} onChange={setSizeVal} />
        </div>
      </motion.div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
              active === cat ? 'text-white shadow-lg' : 'border text-purple-400 hover:text-purple-700'
            }`}
            style={active === cat
              ? { background: 'linear-gradient(135deg, #7c5ce8, #a78bfa)' }
              : { background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(12px)', borderColor: 'rgba(167,139,250,0.3)' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Primary grid */}
      <div style={gridStyle}>
        {primaryFiltered.map((item, i) => (
          <div key={item.id} className={getSpan(item)}>
            <BentoCard item={item} index={i} fillParent onSelect={setSelectedProject} />
          </div>
        ))}
      </div>

      {/* Explore More */}
      {moreFiltered.length > 0 && (
        <div className="mt-20">
          <div className="flex flex-col items-center gap-4 py-10">
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-gray-400">More Projects</p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-3"
              aria-label="Toggle more projects"
            >
              <span className="text-[12px] font-light tracking-wide text-gray-400">{showMore ? 'Hide' : 'Show'}</span>
              <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${showMore ? 'bg-[#7b8fd4]' : 'bg-gray-200'}`}>
                <div className={`absolute top-[3px] w-[22px] h-[22px] bg-white rounded-full shadow-sm transition-transform duration-300 ${showMore ? 'translate-x-[30px]' : 'translate-x-[3px]'}`} />
              </div>
            </button>
          </div>

          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div style={gridStyle}>
                {moreFiltered.map((item, i) => (
                  <div key={item.id} className={getSpan(item)}>
                    <BentoCard item={item} index={i} fillParent onSelect={setSelectedProject} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}