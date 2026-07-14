import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-[300] flex items-center gap-1.5 text-[11px] font-medium tracking-wide"
      style={{
        bottom: 24,
        right: 24,
        background: 'rgba(255,255,255,0.65)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: '999px',
        padding: '10px 18px',
        boxShadow: '0 8px 24px rgba(120,100,220,0.18), inset 0 1px 0 rgba(255,255,255,0.9)',
        color: 'rgba(90,70,180,0.85)',
      }}
      aria-label="Toggle language / 切换语言"
    >
      <span style={{ opacity: language === 'en' ? 1 : 0.4 }}>EN</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ opacity: language === 'zh' ? 1 : 0.4 }}>中文</span>
    </motion.button>
  );
}
