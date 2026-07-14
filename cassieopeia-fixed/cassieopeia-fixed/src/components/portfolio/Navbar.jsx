import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, User, Layers, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const navLinksByLang = {
  en: [
    { href: '#work',     Icon: Briefcase, label: 'Work'     },
    { href: '#about',    Icon: User,      label: 'About'    },
    { href: '#services', Icon: Layers,    label: 'Services' },
    { href: '#contact',  Icon: Mail,      label: 'Contact'  },
  ],
  zh: [
    { href: '#work',     Icon: Briefcase, label: '作品'   },
    { href: '#about',    Icon: User,      label: '关于'   },
    { href: '#services', Icon: Layers,    label: '服务'   },
    { href: '#contact',  Icon: Mail,      label: '联系'   },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo pill */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-indigo-200 text-[12px] md:text-[18px] lg:text-base font-black uppercase tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em]"
                style={{
                  background: 'rgba(255,255,255,0.38)',
                  backdropFilter: 'blur(18px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow: '0 4px 24px rgba(120,100,220,0.09), inset 0 1px 0 rgba(255,255,255,0.8)',
                  borderRadius: '999px',
                  padding: '8px 22px',
                  transition: 'box-shadow 0.3s ease',
                  display: 'inline-block',
                  lineHeight: 1,
                }}>
                CASSIEOPEIA
              </a>
            </div>
            <div className="flex-1" />

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center ml-3"
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: mobileOpen ? 'rgba(167,139,250,0.18)' : 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 2px 12px rgba(120,100,220,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
              {mobileOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="url(#xGrad)" strokeWidth="1.8" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="xGrad" x1="1" y1="1" x2="13" y2="13" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa"/>
                      <stop offset="1" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="starGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#c4b5fd"/>
                      <stop offset="0.5" stopColor="#a78bfa"/>
                      <stop offset="1" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2L14.9 9.1H22.5L16.5 13.5L18.8 20.9L12 16.5L5.2 20.9L7.5 13.5L1.5 9.1H9.1L12 2Z"
                    fill="url(#starGrad)" opacity="0.9"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(240,235,255,0.35)', backdropFilter: 'blur(2px)' }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              className="fixed z-50"
              style={{
                top: 72, right: 18, width: 180, borderRadius: 22,
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(48px) saturate(180%)',
                WebkitBackdropFilter: 'blur(48px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 8px 32px rgba(120,100,220,0.1), inset 0 1px 0 rgba(255,255,255,1)',
                padding: '10px',
              }}>

              <div className="flex flex-col gap-1">
                {navLinksByLang[language].map(({ href, Icon, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/60">
                    <Icon size={15} strokeWidth={1.6} style={{ color: 'rgba(120,100,200,0.7)' }} />
                    <span className="text-[12px] font-light tracking-[0.08em]" style={{ color: 'rgba(40,30,80,0.7)' }}>{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}