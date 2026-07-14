import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const statsByLang = {
  en: [
    { number: '3+', label: 'Years Experience' },
    { number: '120+', label: 'Projects Delivered' }
  ],
  zh: [
    { number: '3+', label: '年设计经验' },
    { number: '120+', label: '完成项目' }
  ],
};


function GalaxyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 1200 }, () => {
      const r = Math.random() * 0.5 + 0.1;
      const theta = Math.random() * Math.PI * 2;
      const arm = Math.floor(Math.random() * 3);
      const armOffset = arm / 3 * Math.PI * 2;
      const spread = (Math.random() - 0.5) * 0.6;
      return {
        r,
        theta: theta + armOffset,
        spread,
        size: Math.random() * 1.8 + 0.3,
        hue: Math.random() * 80 + 200, // blues/purples
        alpha: Math.random() * 0.7 + 0.3,
        speed: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1)
      };
    });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 1.1;

      ctx.clearRect(0, 0, w, h);

      // Soft galaxy core glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.5);
      grd.addColorStop(0, 'rgba(200, 180, 255, 0.18)');
      grd.addColorStop(0.4, 'rgba(150, 180, 255, 0.08)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((star) => {
        const spiralT = star.theta + angle * 0.15 + star.r * 4;
        const px = cx + Math.cos(spiralT + star.spread) * star.r * maxR;
        const py = cy + Math.sin(spiralT + star.spread) * star.r * maxR * 0.38;

        const shimmer = 0.5 + 0.5 * Math.sin(angle * 2 + star.theta * 3);
        const hue = star.hue + shimmer * 60;
        const sat = 60 + shimmer * 40;

        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${sat}%, 80%, ${star.alpha * 0.85})`;
        ctx.fill();
      });

      angle += 0.003;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }} />;
}

export default function AboutSection() {
  const { language } = useLanguage();
  const stats = statsByLang[language];
  return (
    <section id="about" className="relative py-40 px-6 md:px-10 overflow-hidden" style={{ background: 'transparent' }}>
      {/* Iridescent color washes */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 40%, rgba(220,180,255,0.2) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 45% at 80% 60%, rgba(180,220,255,0.18) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}>
          
          <p className="text-[12px] font-medium tracking-[0.45em] uppercase mb-5" style={{ color: 'rgba(130,100,220,0.7)' }}>{language === 'zh' ? '关于我' : 'About Me'}</p>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Small photo */}
            <div className="shrink-0 w-48 h-60 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://media.base44.com/images/public/69ad44f7d817e6a3f2fc7781/48eb0b433_hf_20260308_023652_d2dabbbb-1fa4-42cb-9e35-b03887bb7b5b.png"
                alt="Cassie portrait"
                className="w-full h-full object-cover" />
              
            </div>

            {/* Text */}
            <div className="flex-1">
              <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-4xl md:text-5xl font-extralight tracking-tight mb-8 leading-tight"
               style={{ color: '#1a1535' }}>
               {language === 'zh' ? '愿景' : 'The Vision'}
              </motion.h2>
              <div className="space-y-4 font-light leading-relaxed text-[15px]" style={{ color: 'rgba(60,40,100,0.65)' }}>
                {language === 'zh' ? (
                  <>
                    <p>
                      Cassie 是一名以极简主义、幻彩质感与几何形态为核心视觉语言的平面设计师。她的设计方法将策略性思维与艺术直觉相融合，把每一个项目都视为通过色彩、形态与字体讲述故事的机会。
                    </p>
                    <p>
                      在设计工作之外，Cassie 十分注重身心整体的生活方式。她通过声音疗愈、阅读心灵成长类书籍以及参加艺术工作坊获得精神上的滋养。她的创作能量来自多元的文化体验——从现场爵士演出到沉浸式科幻电影。她以极强的自律精神维持规律的健身习惯，并坚持植物性饮食，将健康视为创作卓越不可或缺的基础。
                    </p>
                    <p>
                      她相信真正好的设计应当既经典隽永，又不失当代的松弛感——那种能够超越潮流、触及更深层情感共鸣的作品。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Cassie is a graphic designer whose visual language centers on minimalism, iridescence, and geometry. Her approach blends strategic thinking with artistic intuition, treating every project as an opportunity to tell a story through color, form, and typography.
                    </p>
                    <p>
                      Beyond the studio, Cassie is deeply committed to holistic living. She finds spiritual nourishment through sound baths, reading spiritual literature, and attending art workshops. Her creative energy is fueled by diverse cultural experiences—from live jazz performances to immersive sci-fi cinema. Driven by self-discipline, she maintains a consistent gym practice and follows a plant-based diet, viewing wellness as an essential foundation for creative excellence.
                    </p>
                    <p>
                      She believes in design that feels both timeless and effortlessly modern—work that transcends trends and resonates on a deeper level.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-12 border-t border-purple-100/40">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}>
              
                <p className="text-3xl font-extralight iridescent-text">{stat.number}</p>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(130,100,220,0.5)' }}>{stat.label}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}