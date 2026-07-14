import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const socials = [
{
  name: 'Behance',
  href: 'https://www.behance.net/cassieeeeechen',
  icon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.65.673 1.42.673 2.3 0 .74-.14 1.38-.42 1.93-.28.55-.67 1.01-1.16 1.39-.49.38-1.05.67-1.69.86-.63.19-1.29.29-1.97.29H0V4.503h6.938zm-.34 4.972c.59 0 1.07-.14 1.44-.42.37-.28.55-.72.55-1.32 0-.34-.06-.62-.18-.84-.12-.22-.29-.4-.5-.53-.21-.14-.45-.22-.72-.27-.27-.05-.56-.07-.86-.07H2.57v3.45h4.028zm.19 5.238c.32 0 .62-.03.9-.09s.53-.17.74-.32c.21-.15.38-.35.5-.6.13-.25.19-.57.19-.95 0-.76-.21-1.3-.64-1.63-.43-.32-.99-.49-1.69-.49H2.57v4.08h4.218zM20.963 8.009c-.614-.64-1.497-.96-2.65-.96-.74 0-1.37.14-1.88.42-.51.27-.93.62-1.26 1.03-.33.41-.57.87-.72 1.37-.15.5-.23 1-.24 1.49h7.62c-.08-1.44-.46-2.71-1.07-3.35zm-4.73 3.908c.03.57.15 1.09.35 1.54.2.45.49.8.87 1.06.38.26.87.39 1.48.39.77 0 1.37-.19 1.8-.57.43-.38.71-.93.83-1.65h2.52c-.42 2.8-2.12 4.2-5.1 4.2-.78 0-1.5-.13-2.14-.38-.64-.25-1.18-.61-1.62-1.08-.44-.47-.78-1.04-1.02-1.7-.24-.66-.36-1.4-.36-2.21 0-.78.12-1.5.37-2.17.25-.67.6-1.25 1.05-1.73.45-.48 1-.86 1.64-1.13.64-.27 1.36-.41 2.14-.41.87 0 1.63.17 2.27.5.64.33 1.17.77 1.58 1.33.41.56.7 1.2.87 1.93.17.73.22 1.49.15 2.28h-7.13z" />
      </svg>

},
{
  name: 'Instagram',
  href: 'https://www.instagram.com/iridescentcassie/',
  icon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>

},
{
  name: 'LinkedIn',
  href: 'https://www.linkedin.com/in/cassieopeia',
  icon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

}];


export default function Footer() {
  return (
    <footer className="text-white px-6 md:px-10 py-20" style={{ background: 'linear-gradient(135deg, rgba(26,21,53,0.94) 0%, rgba(15,13,40,0.96) 40%, rgba(26,16,64,0.94) 70%, rgba(13,13,31,0.97) 100%)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-16">
          <div>
            <p className="text-3xl md:text-4xl font-extralight tracking-tight mb-2">Thanks!


            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full iridescent-bg text-gray-800 font-medium text-[13px] tracking-[0.15em] uppercase hover:shadow-xl transition-all duration-300">
            
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-[13px] font-light tracking-[0.35em] uppercase text-white/40">CASSIEOPEIA

          </p>

          <div className="flex items-center gap-6">
            {socials.map((s) =>
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              className="text-white/30 hover:text-white/70 transition-colors duration-300">
              
                {s.icon}
              </a>
            )}

          </div>

          <p className="text-[11px] text-white/20 font-light">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>);

}