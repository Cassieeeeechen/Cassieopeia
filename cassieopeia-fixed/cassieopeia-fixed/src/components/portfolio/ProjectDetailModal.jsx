import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { categoryLabelsZh, titleLabelsZh, projectContentZh, workflowStepsZh } from '@/lib/projectTranslations';

const workflowSteps = [
{
  phase: '01 — Discovery',
  title: 'Understanding the brief',
  body: "Every project begins with deep listening. I immerse myself in the brand's world — its history, competitors, and aspirations. This phase is about asking the right questions before picking up a pencil.",
  image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=85',
  imageAlt: 'Discovery process — notes and research',
  layout: 'image-right'
},
{
  phase: '02 — Concept',
  title: 'Translating ideas into form',
  body: "Dozens of rough sketches, mood boards, and typographic explorations. I push the concept in unexpected directions before editing ruthlessly toward clarity. The best ideas survive because they're inevitable.",
  image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=85',
  imageAlt: 'Concept sketches and mood boards',
  layout: 'image-left'
},
{
  phase: '03 — Design',
  title: 'Craft at every scale',
  body: 'From large-format billboards to 16px favicons, every touchpoint receives the same level of obsessive attention. Pixel-perfect execution is not a finish line — it is the baseline.',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
  imageAlt: 'Design execution and refinement',
  layout: 'image-right'
},
{
  phase: '04 — Delivery',
  title: 'A living system, not a static file',
  body: 'The final handoff includes comprehensive brand guidelines, production-ready assets, and a clear system for how everything grows together. Good design scales — this is how we make sure it does.',
  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e8a7149b5_Matcha2.jpg',
  imageAlt: 'Final café poster — The Matcha Ritual',
  layout: 'image-left'
}];


function SliderImage({ step }) {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const images = step.images || [step.image];

  return (
    <div className="flex-1 w-full">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50 group">
        <img
          src={images[currentIdx]}
          alt={step.imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIdx((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => setCurrentIdx((i) => (i + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={16} className="text-white" />
            </button>
            <p className="absolute bottom-2 right-3 text-white/60 text-xs">{currentIdx + 1} / {images.length}</p>
          </>
        )}
      </div>
    </div>
  );
}

function VideoBlock({ project }) {
  const { language } = useLanguage();
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video group cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
          
          <Play size={28} className="text-white ml-1" fill="white" />
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-8">
        <p className="text-white/50 text-[11px] tracking-[0.3em] uppercase font-medium">{language === 'zh' ? '幕后花絮' : 'Process Film'}</p>
        <p className="text-white text-lg font-extralight mt-0.5">{project.title}</p>
      </div>
    </div>);

}

export default function ProjectDetailModal({ project, onClose }) {
  const { language } = useLanguage();
  const [galleryImageIndex, setGalleryImageIndex] = React.useState(null);
  const [referenceImageIndex, setReferenceImageIndex] = React.useState(0);

  const getGalleryImages = () => {
    if (!project) return [];
    if (project.id === 70) return ['/images/powergrid/powergrid-01.png', '/images/powergrid/powergrid-02.png'];
    if (project.id === 60) return ['/images/santadance/santadance-01.jpg'];
    if (project.id === 61) return ['/images/friendlywithnature/fwn-01.jpg'];
    if (project.id === 62) return ['/images/littlegirl/littlegirl-01.jpg'];
    if (project.id === 63) return ['/images/mothersday/mothersday-01.jpg'];
    if (project.id === 50) {
      return [
        '/images/artinus/artinus-branding.jpg',
        '/images/artinus/artinus-ecommerce.jpg'
      ];
    }
    if (project.id === 5) {
      return [
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/83af35d74_01.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/6e734f31f_02.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/aa91f1652_03.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/a5a776fdb_06.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ff012a1f7_09.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/41b016632_10.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e180e57a9_16.jpg',
        'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/5af53d5de_07.jpg'
      ];
    }
    return [];
  };

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (galleryImageIndex !== null) {
          setGalleryImageIndex(null);
        } else {
          onClose();
        }
      }
      if (galleryImageIndex !== null) {
        const images = getGalleryImages();
        if (e.key === 'ArrowLeft') setGalleryImageIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') setGalleryImageIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose, galleryImageIndex]);

  const galleryImages = getGalleryImages();
  const currentImage = galleryImageIndex !== null ? galleryImages[galleryImageIndex] : null;

  const translateSteps = (steps, zhKey) => {
    if (language !== 'zh') return steps;
    const zh = workflowStepsZh[zhKey];
    if (!zh) return steps;
    return steps.map((step, i) => ({
      ...step,
      phase: zh[i]?.phase || step.phase,
      title: zh[i]?.title || step.title,
      body: zh[i]?.body || step.body,
    }));
  };

  if (!project) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {galleryImageIndex !== null &&
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[150] bg-black/90 flex items-center justify-center"
        onClick={() => setGalleryImageIndex(null)}>
        <button
          onClick={() => setGalleryImageIndex(null)}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <X size={20} className="text-white" />
        </button>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          key={currentImage}
          src={currentImage}
          alt="Gallery fullscreen"
          className="max-w-[90vw] max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => { e.stopPropagation(); setGalleryImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length); }}
          className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setGalleryImageIndex((i) => (i + 1) % galleryImages.length); }}
          className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronRight size={24} className="text-white" />
        </button>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {galleryImageIndex + 1} / {galleryImages.length}
        </p>
        </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {project && (
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-white overflow-y-auto">
        
          {/* Sticky nav bar */}
          <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <p className="text-[11px] font-light tracking-[0.15em] text-gray-400">
              Cassieopeia <span className="mx-1 opacity-40">›</span>{' '}
              <button
                onClick={onClose}
                className="hover:text-gray-700 transition-colors duration-200 underline-offset-2 hover:underline">
                {language === 'zh' ? '作品' : 'projects'}
              </button>
              <span className="mx-1 opacity-40">›</span> {(language === 'zh' ? (categoryLabelsZh[project.category] || project.category) : project.category).toLowerCase().replace(/\s+/g, '-')}-{project.year}
            </p>
            <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
            
              <X size={15} className="text-gray-600" />
            </button>
          </div>

          {/* Hero */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full">
          
            <div className="relative w-full" style={{ height: '70vh', minHeight: 400 }}>
              <img
              src={project.id === 4 ? 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/961b66020_159-1080x1920px.jpg' : project.id === 6 ? 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3cb84c1b2_.jpg' : project.id === 25 ? 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/2e993e149_blueponsbusniess21.jpg' : project.id === 50 ? '/images/artinus/artinus-branding.jpg' : project.id === 70 ? '/images/powergrid/powergrid-01.png' : project.id === 60 ? '/images/santadance/santadance-01.jpg' : project.id === 61 ? '/images/friendlywithnature/fwn-01.jpg' : project.id === 62 ? '/images/littlegirl/littlegirl-01.jpg' : project.id === 63 ? '/images/mothersday/mothersday-01.jpg' : project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={project.id === 4 ? { objectPosition: 'center 85%' } : {}} />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-12">
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} className="text-yellow-50 text-4xl font-light tracking-tight leading-tight opacity-100 md:text-7xl">

                
                  {language === 'zh' ? (titleLabelsZh[project.id] || project.title) : project.title}
                </motion.h1>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">

            {/* Project meta */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-gray-100">
            
              {(() => {
                const enScope = project.id === 0 ? 'Commercial Photography' : project.id === 1 ? 'Full Brand Identity' : project.id === 5 ? 'Children\'s Picture Book Design' : project.id === 6 ? 'Digital Card System' : (project.id === 2 || project.id === 12 || project.id === 13) ? 'Outdoor Billboard Campaign' : project.id === 25 ? 'Brand Identity · Print' : project.id === 50 ? 'Commercial Photography · E-commerce Design' : project.id === 70 ? 'Outdoor Billboard KV Design' : project.id === 60 ? 'Illustration · Product Application' : project.id === 61 ? 'Illustration · Packaging Design' : project.id === 62 ? 'Story Illustration' : project.id === 63 ? 'Festive Campaign Illustration' : 'Full Identity';
                const enDeliverables = project.id === 0 ? 'Visual Design · AI Enhanced' : project.id === 1 ? 'Photography · Print · Digital · UI · Outdoor' : project.id === 5 ? 'Illustration · Book Layout · Bilingual Design · Print Production' : project.id === 6 ? 'Card Design · Digital Wallet Assets · Multiple Formats' : (project.id === 2 || project.id === 12 || project.id === 13) ? 'Billboard Design · Multiple Formats · Motion Concept' : project.id === 25 ? 'Logo Design · Business Card · Brand Guidelines' : project.id === 50 ? 'Product Photography · Posters · Taobao Main Images · Detail Pages' : project.id === 70 ? 'KV Design · Icon System · Multi-city Billboard Extension' : project.id === 60 ? 'Character Illustration · Sleep Mask Print Application' : project.id === 61 ? 'Character Illustration · Puzzle & Packaging Design' : project.id === 62 ? 'Character Illustration · Print' : project.id === 63 ? 'Illustration · Social Poster · Print' : 'Brand System';
                const zhEntry = projectContentZh[project.id];
                const metaItems = [
                  { label: language === 'zh' ? '类别' : 'Category', value: language === 'zh' ? (categoryLabelsZh[project.category] || project.category) : project.category },
                  { label: language === 'zh' ? '年份' : 'Year', value: project.year },
                  { label: language === 'zh' ? '范围' : 'Scope', value: language === 'zh' && zhEntry ? zhEntry.scope : enScope },
                  { label: language === 'zh' ? '交付内容' : 'Deliverables', value: language === 'zh' && zhEntry ? zhEntry.deliverables : enDeliverables },
                ];
                return metaItems.map((m) =>
            <div key={m.label}>
                  <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-1">{m.label}</p>
                  <p className="text-[15px] font-light text-gray-800">{m.value}</p>
                </div>
            );
              })()}
            </motion.div>

            {/* Intro paragraph */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="py-16">
            
              <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-purple-400 mb-6">{language === 'zh' ? '项目概述' : 'Overview'}</p>
              <p className="text-slate-700 text-2xl font-thin tracking-tight leading-relaxed md:text-3xl max-w-3xl">
                {(() => {
                  const enOverview = project.id === 0 ?
              'A commercial photography and visual design project for The Matcha Ritual— capturing the ritual of matcha in its purest form, elevated through AI-assisted image enhancement to achieve a depth and luminosity beyond the lens.' :
              project.id === 1 ?
              'A comprehensive brand identity system for JINYI Cinema — spanning food & beverage commercial photography, outdoor billboard campaigns (403×180cm and 78×108cm formats), F&B poster design, mall advertising, digital assets, and a full UI illustration system. Every touchpoint designed to feel cinematic.' :
              project.id === 6 ?
              'A premium digital loyalty card system featuring interactive VIP cards and gift card promotions. The design uses iridescent gradients, dynamic geometry, and playful typography to transform transactional assets into collectible digital experiences.' :
              project.id === 5 ?
              'A beautifully illustrated children\'s picture book available in both Chinese and English. "The Mood of the Dreams" combines whimsical character design with lush botanical illustrations, creating an enchanting visual narrative for young readers.' :
              project.id === 25 ?
              'A clean, minimal brand identity for Blue Fons — a tech company built on clarity and precision. The brief called for a timeless corporate identity centered on a distinctive water-drop mark, rendered in a deep cobalt blue on textured white stock. The business card design communicates authority and trust through restraint.' :
              (project.id === 2 || project.id === 12 || project.id === 13) ?
              'An outdoor billboard campaign for JINYI Cinema\'s laser projection technology service. The design balances cinematic elegance with dynamic energy—featuring flowing iridescent gradients, bold typography, and light effects that translate the immersive theater experience to the urban landscape.' :
              project.id === 50 ?
              'A full commercial photography and e-commerce design collaboration for ARTINUS, a Korean outdoor fishing apparel brand expanding into overseas markets. Working alongside a co-designer, the project spanned product photography, poster design, and complete Taobao storefront assets — including main product images and detail pages for the brand\'s technical outerwear and accessories collection.' :
              project.id === 70 ?
              'A key visual (KV) and billboard design project for China Southern Power Grid — Guangdong Power Grid. Responsible for the main KV design and its extension across other cities in the province (including Foshan, Dongguan, Zhuhai), along with a supporting icon system. Two campaign directions were developed, each translating the utility\'s service improvements into a bold, cinematic cityscape visual.' :
              project.id === 60 ?
              '《Santa Dance》is a self-practice character illustration inspired by a dancer I admire, capturing a moment of playful movement. The piece was applied to a physical sleep mask product to demonstrate how the illustration translates into a real, tactile item.' :
              project.id === 61 ?
              '"Friendly With Nature" is an illustration and packaging design project following a boy\'s quiet walk through a glowing forest — accompanied by birdsong, fireflies, and wildflowers. The illustration was adapted into a jigsaw puzzle package, complete with cover art and supporting pattern tiles.' :
              project.id === 62 ?
              '"Little Girl" is a story illustration inspired by a real moment — a little girl lying on the ground, refusing to walk, mid-tantrum. Too charming a scene to let pass, it became the basis for this playful, doodle-accented character piece.' :
              project.id === 63 ?
              'A Mother\'s Day illustrated campaign poster for JINYI Cinema, blending warm typography with a tender illustration of a mother and child nestled inside a blooming envelope — designed to carry an emotional, heartfelt message across the brand\'s social and in-venue channels.' :
              'A project born from the belief that the most powerful design disappears into the brand it represents — leaving only the feeling behind.';
                  return language === 'zh' ? (zhEntry ? zhEntry.overview : projectContentZh.default.overview) : enOverview;
                })()}
              </p>
            </motion.div>

            {/* Process Video */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24">
            
              <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-purple-400 mb-6">{language === 'zh' ? '幕后花絮' : 'Process Film'}</p>
              <VideoBlock project={project} />
            </motion.div>

            {/* Workflow Steps */}
            <div className="space-y-32">
              {project.id === 0 ? (
              translateSteps([
                {
                   phase: '01 — Photography',
                   title: 'Capturing the Product',
                   body: 'Shot multiple matcha drink variations and styling setups to establish the core visual assets. Focused on capturing natural lighting, foam textures, and the layered gradient effect from matcha to cream. These raw photography assets became the foundation for all subsequent design directions.',
                   image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ec9eaa9c7_IMG_78152.jpg',
                   imageAlt: 'Matcha photography session',
                   layout: 'image-right'
                 },
                {
                   phase: '02 — Research & Direction',
                   title: 'Collecting References & Choosing Direction',
                   body: 'Gathered inspiration from premium beverage marketing, café aesthetics, and matcha ritual imagery. Explored multiple visual directions—minimalist, editorial, lifestyle-focused—and refined them down to the strongest concept that balanced sophistication with approachability.',
                   image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3d3c0e132_Screenshot2026-04-25at71707pm.jpg',
                   imageAlt: 'Direction research and moodboards',
                   layout: 'image-left',
                   isSlider: true,
                   images: [
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3d3c0e132_Screenshot2026-04-25at71707pm.jpg',
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/d24bffcd0_Screenshot2026-04-25at71310pm.jpg',
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/d966b5514_Screenshot2026-04-25at71310pm.jpg'
                   ]
                 },
                {
                   phase: '03 — Design Drafting',
                   title: 'Building the Poster Layout',
                   body: 'Created initial poster drafts using the chosen direction. Established typography hierarchy, image placement, and spatial composition. Tested different layouts with the photography assets and refined the information architecture to guide the viewer\'s eye naturally through the design.',
                   image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3220c055d_Matchac.png',
                   imageAlt: 'Poster layout drafts',
                   layout: 'image-right',
                   isSlider: true,
                   images: [
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3220c055d_Matchac.png',
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ff266f332_Matcha.png',
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/235724069_Matcha.png',
                     'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/d966b5514_Screenshot2026-04-25at71310pm.jpg'
                   ]
                 },
                {
                   phase: '04 — Refinement & Polish',
                   title: 'Final Details & Information Priority',
                   body: 'Polished spacing, refined color relationships, and optimized information hierarchy across the entire layout. Ensured typography breathes, imagery has proper emphasis, and every design element serves the user experience. Final adjustments for balance, contrast, and premium presentation.',
                   image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e8a7149b5_Matcha2.jpg',
                   imageAlt: 'Final refined poster design',
                   layout: 'image-left'
                 }
              ], '0').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  {step.isSlider ? (
                    <SliderImage step={step} />
                  ) : (
                    <div className="flex-1 w-full">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                        <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                      </div>
                    </div>
                  )}
                  </motion.div>
                  ))
                  ) : project.id === 5 ? (
              translateSteps([
                {
                  phase: '01 — Concept & Story Development',
                  title: 'Bringing Dreams to Life',
                  body: 'Started with the core concept of exploring emotional moods through dreamy, whimsical narratives. Developed character personas and the visual story arc that would resonate with children aged 4-8. Each mood is represented through color psychology and character expressions.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/c7a2e1d2a_TopViewBookMockup.jpg',
                  imageAlt: 'Character concept sketches',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Character & Botanical Illustration',
                  title: 'Whimsical Visual Identity',
                  body: 'Created a distinctive cast of characters with warm, expressive eyes and gentle proportions—designed to feel approachable to young readers. Illustrated lush botanical elements that frame each scene, creating safe, nurturing environments that enhance the emotional journey.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/fe0d0f76c_BOOKMOCKUP.jpg',
                  imageAlt: 'Character design and illustration style',
                  layout: 'image-left'
                },
                {
                   phase: '03 — Color Palette & Mood Design',
                   title: 'Emotional Color Language',
                   body: 'Carefully selected color palettes for each mood segment—warm peachy tones for contentment, cool purples for dreaminess, vibrant jewel tones for joy. The consistent botanical frame creates visual continuity while colors shift to reflect emotional states throughout the narrative.',
                   image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/36455477e_0.jpg',
                   imageAlt: 'Color palette exploration',
                   layout: 'image-right'
                },
                {
                  phase: '04 — Layout & Bilingual Production',
                  title: 'Picture Book Design & Publication',
                  body: 'Designed page layouts with careful attention to how illustrations and text work together. Created both Chinese and English versions with culturally appropriate design sensibilities. Final files prepared for professional print production with color management and binding specifications.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/7e265795d_cassieeeeechen_1702183261777.jpeg',
                  imageAlt: 'Final book design and layouts',
                  layout: 'image-left'
                }
              ], '5').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                    </div>
                  </div>
                </motion.div>
              ))
              ) : project.id === 6 ? (
              translateSteps([
                {
                  phase: '01 — Concept & Tier Strategy',
                  title: 'Designing the Card Hierarchy',
                  body: 'Developed a three-tier system: Standard Gift Cards, VIP Membership Cards, and Premium Promotional Cards. Each tier has distinct visual language while maintaining brand cohesion. The iridescent gradient palette communicates luxury and exclusivity across all formats.',
                  image: 'https://images.unsplash.com/photo-1552058544-f006b1f7dd51?w=1200&q=85',
                  imageAlt: 'Card design system hierarchy',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Visual Identity & Color System',
                  title: 'Iridescent Gradient Language',
                  body: 'Custom iridescent gradients flowing across each card create visual dynamism and premium feel. Deep purples transition to cyan and lime accents—reflecting the cinema\'s modern energy. Gold details and holographic effects elevate perceived value for digital redemption.',
                  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
                  imageAlt: 'Gradient and color exploration',
                  layout: 'image-left'
                },
                {
                  phase: '03 — Information Architecture & Interaction Design',
                  title: 'Balancing Beauty with Clarity',
                  body: 'Carefully placed benefit callouts, card numbers, and expiration details integrate seamlessly without disrupting the aesthetic. Typography hierarchy ensures key information (privileges, limitations) is scannable. Interactive hover states animate the gradients subtly for digital wallet integration.',
                  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85',
                  imageAlt: 'Information layout and typography',
                  layout: 'image-right'
                },
                {
                  phase: '04 — Multi-Format Delivery & Implementation',
                  title: 'Digital-First, Multiple Outputs',
                  body: 'Designed for mobile wallets (Apple Wallet, Google Pay), email templates, and printable formats. Each output maintains visual integrity while respecting platform constraints. Assets prepared in multiple resolutions and formats with clear usage guidelines for partners.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/32f5a49db_300dpi.jpg',
                  imageAlt: 'Final card implementations',
                  layout: 'image-left'
                }
              ], '6').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                    </div>
                  </div>
                </motion.div>
              ))
              ) : project.id === 25 ? (
              translateSteps([
                {
                  phase: '01 — Discovery',
                  title: 'Understanding the Brand DNA',
                  body: 'Blue Fons is a tech company whose name evokes clarity, flow, and precision. The brief: a corporate identity that feels modern yet trustworthy. Research into water symbolism, tech brand conventions, and premium print techniques shaped the direction from day one.',
                  image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=85',
                  imageAlt: 'Brand research and discovery',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Logo Design',
                  title: 'The Water-Drop Mark',
                  body: 'The logo centers on a geometric water-drop form — referencing both the brand name and the clarity of clean technology. Multiple iterations refined the balance between the mark and the stacked wordmark, arriving at a form that works at any scale from favicon to billboard.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/2e993e149_blueponsbusniess21.jpg',
                  imageAlt: 'Blue Fons logo and mark design',
                  layout: 'image-left'
                },
                {
                  phase: '03 — Business Card Design',
                  title: 'Print as a First Impression',
                  body: 'The card design uses deep cobalt blue on heavy textured white stock — a deliberate choice to communicate premium quality. Two layouts were developed: a horizontal variant for contact details and a vertical format for the logo face. Typography is spare, precise, and confident.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/2e993e149_blueponsbusniess21.jpg',
                  imageAlt: 'Blue Fons business card mockup',
                  layout: 'image-right'
                },
                {
                  phase: '04 — Brand Guidelines',
                  title: 'A System Built to Scale',
                  body: 'The final deliverable included a concise brand manual covering color values (Pantone + CMYK + RGB + Hex), typography hierarchy, logo spacing rules, and application guidance for print and digital contexts. Clean, minimal, and built to last.',
                  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
                  imageAlt: 'Brand guidelines documentation',
                  layout: 'image-left'
                }
              ], '25').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">{step.title}</h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">{step.body}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img src={step.image} alt={step.imageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                    </div>
                  </div>
                </motion.div>
              ))
              ) : (project.id === 2 || project.id === 12 || project.id === 13) ? (
              translateSteps([
                {
                  phase: '01 — Brand Immersion',
                  title: 'Understanding JINYI\'s Vision',
                  body: 'Deep dive into JINYI Cinema\'s positioning and the laser projection technology. The goal: translate cutting-edge visual technology into an outdoor medium that stops commuters in their tracks. Understanding the emotional impact of immersive cinema experience.',
                  image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85',
                  imageAlt: 'Cinema technology research',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Visual Concept Development',
                  title: 'Dynamic Iridescent Language',
                  body: 'Multiple design directions exploring flowing gradients, light patterns, and motion implied through static imagery. Each version emphasizes different aspects: light refraction, energy flow, or technological precision. Client feedback refined the final direction toward dynamic elegance.',
                  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
                  imageAlt: 'Concept variations and mood boards',
                  layout: 'image-left'
                },
                {
                  phase: '03 — Production-Ready Design',
                  title: 'Multi-Format Billboard System',
                  body: 'Designing for multiple billboard dimensions (403x180cm, 78x108cm) while maintaining visual coherence. Each format receives careful attention to typography scale, color gradients, and information hierarchy. Assets prepared for print production at billboard scale with bleed and safety margins.',
                  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85',
                  imageAlt: 'Billboard production specs',
                  layout: 'image-right'
                },
                {
                  phase: '04 — Urban Integration',
                  title: 'Impact in Context',
                  body: 'The final billboards are designed to capture attention through motion-implied gradients and bright focal lighting. The iridescent palette reflects JINYI\'s premium positioning while the dynamic waves suggest the immersive technology. A billboard that works as hard as the cinema experience itself.',
                  image: 'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/f7ca18424_403x180cmh.jpg',
                  imageAlt: 'Final billboard in urban setting',
                  layout: 'image-left'
                }
              ], 'billboard').map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>
              
                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                  
                    </div>
                  </div>
                </motion.div>
              ))
              ) : project.id === 70 ? (
              [
                {
                  phase: '01 — Concept Direction A',
                  title: 'Service Improvement, Visualized',
                  body: 'Developed the primary KV concept translating Guangdong Power Grid\'s "Five Precisions, Five News" service upgrades into a bold cityscape visual — using bandage-like light trails and icon callouts to represent smoother, faster, more precise service across the Guangzhou skyline.',
                  image: '/images/powergrid/powergrid-01.png',
                  imageAlt: 'China Southern Power Grid KV — Direction A',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Concept Direction B',
                  title: 'A Cleaner, More Confident Statement',
                  body: 'A second direction pushed toward a more refined, confident tone — pairing "Optimizing the Business Environment, Guangdong Power at Full Strength" with a cleaner golden skyline treatment and a WeChat QR code for the utility\'s service account, extending the system into a functional, campaign-ready billboard.',
                  image: '/images/powergrid/powergrid-02.png',
                  imageAlt: 'China Southern Power Grid KV — Direction B',
                  layout: 'image-left'
                }
              ].map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                    </div>
                  </div>
                </motion.div>
              ))
              ) : project.id === 50 ? (
              translateSteps([
                {
                  phase: '01 — Commercial Photography',
                  title: 'Capturing the Technical Details',
                  body: 'Shot the full ARTINUS product range — technical fishing apparel, caps, and accessories — with a focus on fabric texture, embroidery detail, and the brand\'s signature gold-on-navy identity. Studio lighting was used to highlight the premium materials and construction quality.',
                  image: '/images/artinus/artinus-ecommerce.jpg',
                  imageAlt: 'ARTINUS product photography',
                  layout: 'image-right'
                },
                {
                  phase: '02 — Collaborative Poster Design',
                  title: 'From Photography to Campaign',
                  body: 'Working alongside a co-designer, the raw photography was developed into a full poster campaign — layering Korean and English typography, atmospheric ocean and mountain imagery, and the brand\'s wing motif to position ARTINUS as a premium outdoor lifestyle brand for overseas markets.',
                  image: '/images/artinus/artinus-branding.jpg',
                  imageAlt: 'ARTINUS branding campaign poster',
                  layout: 'image-left'
                },
                {
                  phase: '03 — E-commerce Assets',
                  title: 'Taobao Main Images & Detail Pages',
                  body: 'Adapted the photography and brand system into full Taobao storefront assets — including main product images, detail pages, and series-specific product shoots (008 & 009 series). Every asset was optimized for e-commerce conversion while staying true to the premium brand positioning.',
                  image: '/images/artinus/artinus-ecommerce.jpg',
                  imageAlt: 'ARTINUS Taobao e-commerce detail page',
                  layout: 'image-right'
                }
              ], '50').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                    </div>
                  </div>
                </motion.div>
              ))
              ) : (project.id === 60 || project.id === 61 || project.id === 62 || project.id === 63) ? null : (
              translateSteps(workflowSteps, 'default').map((step, i) => (
              <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${step.layout === 'image-right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-purple-400">{step.phase}</p>
                    <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-light text-gray-500 leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Image */}
                  {step.renderCustom ? step.renderCustom() : (
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
                      <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />

                    </div>
                  </div>
                  )}
                </motion.div>
              ))
              )}
            </div>

            {/* Gallery strip */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32">
            
              <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-purple-400 mb-8">{language === 'zh' ? '作品图集' : 'Gallery'}</p>
              <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`.gallery-scroll::-webkit-scrollbar { display: none; }`}</style>
                {(project.id === 60 ? [
                '/images/santadance/santadance-01.jpg'] :
                project.id === 61 ? [
                '/images/friendlywithnature/fwn-01.jpg'] :
                project.id === 62 ? [
                '/images/littlegirl/littlegirl-01.jpg'] :
                project.id === 63 ? [
                '/images/mothersday/mothersday-01.jpg'] :
                project.id === 50 ? [
                '/images/artinus/artinus-branding.jpg',
                '/images/artinus/artinus-ecommerce.jpg'] :
                project.id === 70 ? [
                '/images/powergrid/powergrid-01.png',
                '/images/powergrid/powergrid-02.png'] :
                project.id === 5 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/83af35d74_01.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/6e734f31f_02.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/aa91f1652_03.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/a5a776fdb_06.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ff012a1f7_09.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/41b016632_10.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e180e57a9_16.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/5af53d5de_07.jpg'] :
                project.id === 6 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/32f5a49db_300dpi.jpg',
                'https://images.unsplash.com/photo-1552058544-f006b1f7dd51?w=800&q=80',
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/53d510846_IMG_4491.png'] :
                project.id === 17 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/6d7304fe4_68B0E6B1-E4BA-49CD-8CD4-663CC91428C3.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/72443d586_07027286-57C9-4827-84BA-3F39355927F7.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ca5da318e_5332146F-5198-470F-A2F4-A57E0B27FA5F.png'] :
                project.id === 4 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e8f119a30_-A4.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/24fb26114_-60x80cm.jpg'] :
                project.id === 25 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/2e993e149_blueponsbusniess21.jpg'] :
                project.id === 1 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/b903e8694_clean.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/f7ca18424_403x180cmh.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3653f0644_-78x108cmh.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/a45b3498e_.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/40513cf22_A.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ea6065532_IMG_5375.jpg'] :
                (project.id === 2 || project.id === 12 || project.id === 13) ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/f7ca18424_403x180cmh.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3653f0644_-78x108cmh.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/a45b3498e_.jpg'] :
                project.id === 0 ? [
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/fe920e18c_MatchaAtrium.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/e8a7149b5_Matcha2.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/12abe38e7_Matcha3.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/f305cd734_90CEE0C0-DC41-47FB-A0F9-8321F592E4A2.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/82238d912_icem.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3220c055d_Matchac.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/ff266f332_Matcha.png',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/3d3c0e132_Screenshot2026-04-25at71707pm.jpg',
                'https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/d24bffcd0_Screenshot2026-04-25at71310pm.jpg'] :
                [
                'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
                'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80']).map((src, idx) => (
                 <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setGalleryImageIndex(idx)}
                className="overflow-hidden rounded-xl bg-gray-50 shrink-0 cursor-pointer"
                style={{ width: 320, height: project.id === 0 || project.id === 6 || project.id === 17 ? 420 : 320 }}>
                    <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                    ))}
                    </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 flex justify-center">
              <button
                onClick={onClose}
                className="group relative px-10 py-4 rounded-2xl text-[11px] font-medium tracking-[0.3em] uppercase text-gray-500 hover:text-gray-800 transition-colors duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(240,235,255,0.35) 50%, rgba(200,220,255,0.25) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 4px 24px rgba(180,160,255,0.12), inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.04)'
                }}>
                <span style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #93c5fd 50%, #c4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>{language === 'zh' ? '← 返回首页' : '← Back to Home'}</span>
              </button>
            </motion.div>

            {/* Footer CTA */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
              <div>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-gray-400 mb-2">{language === 'zh' ? '下一步' : 'Next Step'}</p>
                <p className="text-2xl font-extralight text-gray-800 tracking-tight">{language === 'zh' ? '有类似的项目想法吗？' : 'Have a similar project in mind?'}</p>
              </div>
              <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-gray-700 transition-colors duration-300">
              
                {language === 'zh' ? '联系我' : "Let's Talk"} <ArrowUpRight size={13} />
              </a>
          </motion.div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}