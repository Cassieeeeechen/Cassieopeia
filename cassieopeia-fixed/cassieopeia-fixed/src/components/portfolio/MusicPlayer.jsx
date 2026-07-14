import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
    >
      {/* SoundCloud embed — hidden, autoplay controlled by src */}
      <iframe
        key={playing ? 'playing' : 'paused'}
        allow="autoplay"
        src={
          playing
            ? 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1485011803&color=%23c4b5fd&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false'
            : 'about:blank'
        }
        style={{ display: 'none' }}
        title="background-music"
      />

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-400">Now Playing</p>
            <p className="text-[13px] font-light text-gray-700 mt-0.5">Slow Love — Noomi</p>
            <div className="flex items-end gap-0.5 mt-2 h-5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{ background: 'linear-gradient(180deg, #c4b5fd, #93c5fd)' }}
                  animate={{ height: ['8px', '20px', '8px'] }}
                  transition={{ duration: 0.7, delay: i * 0.13, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setPlaying(p => !p)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-2xl glass-strong shadow-lg border border-white/50 flex items-center justify-center"
      >
        {playing
          ? <Pause size={16} className="text-gray-600" />
          : <Music size={16} className="text-gray-500" />
        }
      </motion.button>
    </motion.div>
  );
}