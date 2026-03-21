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
import ContactForm from "../components/Contact";
import Hero3D from "../components/Hero3D";
import LogoCloud from "../components/LogoCloud";
import Counter from "../components/Counter";
import CaseStudies from "../components/CaseStudies";
import Education from "../components/Education";
import Philosophy from "../components/Philosophy";
import Skills from "../components/Skills";
import NeuralNetwork from "../components/NeuralNetwork";

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
                transition={{ delay: 0.3, duration: 1.2, type: "spring", bounce: 0.4 }}
                className="hero-text-content"
              >
                <div className="status-badge mono">
                  <span className="status-dot"></span> AVAILABLE FOR STRATEGIC STEERING
                </div>
                
                <h1 className="hero-display-title">
                  Strategic AI & <br />
                  <span className="text-gradient">Solutions Architect.</span>
                </h1>
                
                <p className="hero-lead-text">
                  Rethinking complex ecosystems through the lens of <br />
                  Agentic Intelligence and Strategic Innovation.
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="cta-button-primary">
                    EXPLORE THE LAB <ArrowUpRight size={20} />
                  </a>
                  <a href="#contact" className="cta-button-primary cta-highlight">
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
                      alt="Samarth Goel"
                      width={420}
                      height={420}
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
        <section className="section-viewport">
          <div className="bento-layout container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="bento-tile col-8 row-2 glass border-beam"
            >
              <div className="tile-header">
                <TrendingUp className="icon-blue" size={48} strokeWidth={1.5} />
                <span className="mono-label">IMPACT_METRICS</span>
              </div>
              <h2 className="heading-lg">Strategic Transformation Leader</h2>
              <p className="text-mid">Orchestrating AI-driven growth and massive digital transformation across large-scale enterprises. Scaled critical business units while achieving 4800X operational efficiency gains via intelligent automation.</p>
              
              <div className="metrics-row">
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4300} suffix="+" prefix="INR " />
                  </div>
                  <div className="metric-tag mono">TOTAL_VALUE_OBTAINED (Cr)</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4800} suffix="X" />
                  </div>
                  <div className="metric-tag mono">OPERATIONAL_EFFICIENCY</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
              className="bento-tile col-4 row-1 liquid-glass"
            >
              <Cpu className="icon-purple" size={48} strokeWidth={1.5} />
              <h3 className="heading-sm">AI Agent Expert</h3>
              <p className="mono-sm text-dim">LangChain, Python, LLM Orchestration.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="bento-tile col-4 row-1 glass"
            >
              <ShieldCheck className="icon-emerald" size={48} strokeWidth={1.5} />
              <h3 className="heading-sm">Strategic Visionary</h3>
              <p className="mono-sm text-dim">Process Optimization & Market Strategy.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
              className="bento-tile col-12 row-1 glass border-beam-alt"
            >
              <div className="flex-between">
                <div>
                  <h3 className="heading-sm">Global Perspective</h3>
                  <p className="text-dim">Forging API-first ecosystems and scaling products alongside Samsung, Google, and other global tech titans.</p>
                </div>
                <div style={{ flexShrink: 0, marginLeft: '1.5rem', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 0 20px rgba(138,43,226,0.3)', position: 'relative' }}>
                  <Image 
                    src="/images/global_mesh.png" 
                    alt="Global Network"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="case-studies">
          <CaseStudies />
        </div>

        <div id="projects" className="reveal">
          <ProjectGrid />
        </div>

        <div id="philosophy" className="reveal">
          <Philosophy />
        </div>

        <div id="education" className="reveal">
          <Education />
        </div>

        <div id="experience" className="reveal">
          <ExperienceView />
        </div>

        <div id="skills" className="reveal">
          <Skills />
        </div>

        <div id="contact" className="reveal">
          <ContactForm />
        </div>
      </main>

      <footer className="footer-v2 mono">
        <p>[ © 2026 SAMARTH_GOEL | BUILT AND MAINTAINED BY AI ]</p>
      </footer>
    </div>
  );
}
