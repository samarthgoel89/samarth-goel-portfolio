"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe,
  Plus,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import ExperienceView from "../components/Experience";
import ProjectGrid from "../components/Projects";
import VisionView from "../components/Vision";
import ContactForm from "../components/Contact";
import Hero3D from "../components/Hero3D";
import LogoCloud from "../components/LogoCloud";
import Counter from "../components/Counter";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = { 
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once it's revealed, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return <div style={{ background: '#0A0A0A', minHeight: '100vh' }} />;

  return (
    <div className="portfolio-root">
      <Navbar />
      
      <main>
        <div className="aurora-bg" />
        <section className="hero-viewport">
          <Hero3D />
          
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="hero-container container-wide"
          >
            <div className="hero-grid">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="hero-text-content"
              >
                <div className="status-badge mono">
                  <span className="status-dot"></span> AVAILABLE FOR STRATEGIC STEERING
                </div>
                
                <h1 className="hero-display-title">
                  Strategic AI & <br />
                  <span className="text-gradient">Fintech Architect.</span>
                </h1>
                
                <p className="hero-lead-text">
                  Rethinking financial ecosystems through the lens of <br />
                  Agentic Intelligence and Strategic Innovation.
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="cta-button-primary">
                    EXPLORE THE LAB <ArrowUpRight size={20} />
                  </a>
                  <a href="#contact" className="cta-button-ghost">
                    <span className="mono">INITIATE_CONTACT</span>
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="profile-group"
              >
                <div className="profile-wrapper">
                  <div className="profile-orb">
                    <Image 
                      src="/profile_transparent.png" 
                      alt="Samarth Goel Profile Photo" 
                      width={380} 
                      height={380} 
                      className="profile-img-floating"
                      priority
                    />
                  </div>
                  <div className="orb-glow"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="scroll-indicator mono">
            [ SCROLL_TO_DISCOVER ]
          </div>
        </section>
        <LogoCloud />

        {/* BENTO GRID VALUE PROPOSITION */}
        <section className="section-viewport reveal">
          <div className="bento-layout container-wide">
            <div className="bento-tile col-8 row-2 glass border-beam">
              <div className="tile-header">
                <TrendingUp className="icon-blue" size={24} />
                <span className="mono-label">IMPACT_METRICS</span>
              </div>
              <h2 className="heading-lg">AVP Strategy @ Clix Capital</h2>
              <p className="text-mid">Orchestrating growth and digital transformation in high-scale lending. Built a 400cr book with 4800X operational efficiency gains in strategic initiatives.</p>
              
              <div className="metrics-row">
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4300} suffix="+" prefix="INR " />
                  </div>
                  <div className="metric-tag mono">TOTAL_BOOK_GROWTH (Cr)</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4800} suffix="X" />
                  </div>
                  <div className="metric-tag mono">OPERATIONAL_EFFICIENCY</div>
                </div>
              </div>
            </div>

            <div className="bento-tile col-4 row-1 liquid-glass">
              <Cpu className="icon-purple" size={32} />
              <h3 className="heading-sm">AI Agent Expert</h3>
              <p className="mono-sm text-dim">LangChain, Python, LLM Orchestration.</p>
            </div>

            <div className="bento-tile col-4 row-1 glass">
              <ShieldCheck className="icon-emerald" size={32} />
              <h3 className="heading-sm">Fintech Strategic</h3>
              <p className="mono-sm text-dim">Credit Logic & Market Strategy.</p>
            </div>

            <div className="bento-tile col-12 row-1 glass border-beam-alt">
              <div className="flex-between">
                <div>
                  <h3 className="heading-sm">Global Perspective</h3>
                  <p className="text-dim">Partnerships with Samsung, Google, and Jio to bridge the digital credit gap.</p>
                </div>
                <Globe size={60} className="icon-ghost" />
              </div>
            </div>
          </div>
        </section>

        {/* IMMERSIVE SECTIONS */}
        <div id="case-studies">
          <CaseStudies />
        </div>

        <div id="vision" className="reveal">
          <VisionView />
        </div>

        <div id="experience" className="reveal">
          <ExperienceView />
        </div>

        <div id="projects" className="reveal">
          <ProjectGrid />
        </div>

        <div id="contact" className="reveal">
          <ContactForm />
        </div>
      </main>

      <footer className="footer-v2 mono">
        <p>[ © 2026 SAMARTH_GOEL | AGENTIC_BUILD_1.0 ]</p>
      </footer>

      <style jsx>{`
        .portfolio-root {
          background-color: var(--background);
          color: white;
        }

        .section-spacer {
          height: 15vh;
          width: 100%;
        }

        .section-margin-top {
          margin-top: 10vh;
        }

        /* Scope cleanly off */

        .hero-viewport {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 5rem;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text-content {
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: rgba(255,255,255,0.7);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: hsl(var(--accent-emerald));
          border-radius: 50%;
          box-shadow: 0 0 10px hsl(var(--accent-emerald));
        }

        .hero-display-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3.5rem, 6vw, 6.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .hero-lead-text {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 3.5rem;
        }

        .profile-group {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .profile-orb {
          width: 380px;
          height: 400px;
          position: relative;
          z-index: 2;
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          animation: float-profile 6s ease-in-out infinite;
        }

        .profile-img-floating {
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5)) contrast(1.1) brightness(1.1);
          width: 100%;
          height: 100%;
        }

        @keyframes float-profile {
          0% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(-20px); }
          100% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(0px); }
        }

        .orb-glow {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, hsla(270, 80%, 65%, 0.3) 0%, hsla(210, 100%, 60%, 0.2) 40%, transparent 70%);
          z-index: 1;
          filter: blur(50px);
          animation: pulse-glow 4s ease-in-out infinite alternate;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .cta-button-primary {
          background: white;
          color: black;
          padding: 1.25rem 2.5rem;
          border-radius: 4px;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cta-button-primary:hover {
          transform: scale(1.02) translateY(-2px);
          background: #f0f0f0;
        }

        .cta-button-ghost {
          padding: 1.25rem 2.5rem;
          border-radius: 4px;
          color: white;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          transition: all 0.2s ease;
        }

        .cta-button-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.2em;
        }

        /* BENTO LAYOUT */
        .section-viewport {
          padding: 10rem 0;
        }

        .bento-layout {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(300px, auto);
          gap: 1.5rem;
        }

        .bento-tile {
          padding: 3.5rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bento-tile:hover {
          transform: translateY(-5px);
        }

        .col-12 { grid-column: span 12; }
        .col-8 { grid-column: span 8; }
        .col-4 { grid-column: span 4; }
        .row-1 { grid-row: span 1; }
        .row-2 { grid-row: span 2; }

        .tile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .metric-val { margin-bottom: 0.5rem; }
        .metrics-row {
          display: flex;
          gap: 5rem;
          margin-top: 4rem;
        }

        .heading-lg { font-size: 3rem; margin-bottom: 1.5rem; line-height: 1.1; }
        .heading-xl { font-size: 4rem; line-height: 1; color: white; }
        .heading-sm { font-size: 1.75rem; margin: 1.5rem 0 1rem; }
        
        .text-dim { color: var(--text-secondary); line-height: 1.6; }
        .text-mid { font-size: 1.25rem; color: #d1d5db; line-height: 1.6; }

        .mono-label { font-size: 0.75rem; letter-spacing: 0.1em; color: #64748b; }
        .mono-tag { font-size: 0.7rem; color: #475569; letter-spacing: 0.05em; }

        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .icon-ghost { opacity: 0.1; }

        .footer-v2 {
          padding: 8rem 0 4rem;
          text-align: center;
          color: #334155;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .bento-tile { grid-column: span 12; padding: 2.5rem; }
          .metrics-row { flex-direction: column; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .hero-text-content {
            align-items: center;
            text-align: center;
            order: 2;
          }
          .profile-group {
            order: 1;
            margin-bottom: 2rem;
          }
          .profile-orb {
            width: 250px;
            height: 300px;
            transform: none;
          }
          .hero-display-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }
          .hero-lead-text {
            font-size: 1.1rem;
            padding: 0 1rem;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            padding: 0 2rem;
          }
          .cta-button-primary, .cta-button-ghost {
            width: 100%;
            justify-content: center;
          }
      `}</style>
    </div>
  );
}
