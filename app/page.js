'use client';

import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import ProfessionalJourney from '@/components/Experience';
import Projects from '@/components/Projects';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <section id="experience" className="py-20 px-4">
        <ProfessionalJourney />
      </section>
      <section id="projects" className="py-20 px-4">
        <Projects />
      </section>
      <section id="vision" className="py-20 px-4">
        <Vision />
      </section>
      <section id="contact" className="py-20 px-4">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
