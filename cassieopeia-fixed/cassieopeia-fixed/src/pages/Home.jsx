import React from 'react';
import ReadingProgress from '@/components/portfolio/ReadingProgress';
import Navbar from '@/components/portfolio/Navbar';
import CrystalHero from '@/components/portfolio/CrystalHero';
import BentoGrid from '@/components/portfolio/BentoGrid';
import AboutSection from '@/components/portfolio/AboutSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen iridescent-page-bg" style={{ backgroundAttachment: 'fixed' }}>
      <ReadingProgress />
      <Navbar />
      <CrystalHero />
      <BentoGrid />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}