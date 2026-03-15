"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import ExperienceView from "../components/Experience";
import ProjectsView from "../components/Projects";
import ContactView from "../components/Contact";

import VisionView from "../components/Vision";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="badge glass">
              <TrendingUp size={14} />
              <span>AVP @ Clix Capital</span>
            </div>
            
            <h1 className="title">
              Strategic AI & <br />
              <span className="text-gradient">Fintech Leader</span>
            </h1>
            
            <p className="tagline">
              Building Agentic Workflows, Voice Assistants & <br />
              Intelligent Credit Systems.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary glass">
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* Quick Expertise (Staggered Load) */}
        <section className="highlights">
          <div className="highlight-grid">
            {[
              { icon: <Bot />, label: "Agentic AI", desc: "Autonomous financial agents" },
              { icon: <Cpu />, label: "Intelligent Credit", desc: "ML-driven loan systems" },
              { icon: <TrendingUp />, label: "Business Scale", desc: "INR 4300cr+ book growth" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="highlight-card glass"
              >
                <div className="icon-box">{item.icon}</div>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <VisionView />

        {/* Dynamic Sections */}
        <div id="experience">
          <ExperienceView />
        </div>
        
        <div id="projects">
          <ProjectsView />
        </div>
        
        <ContactView />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Samarth Goel. Built with Agentic Intent.</p>
      </footer>

      <style jsx>{`
        .container {
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          margin-bottom: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .tagline {
          font-size: 1.25rem;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
        }

        .btn-primary {
          background: #F8FAFC;
          color: #0D0D0D;
          padding: 1rem 2.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-radius: var(--radius-sm);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,255,255,0.1);
        }

        .btn-secondary {
          padding: 1rem 2.5rem;
          font-weight: 700;
          color: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 5rem 0;
        }

        .highlight-card {
          padding: 2.5rem;
          text-align: left;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          border-color: hsla(var(--accent-blue) / 0.3);
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
        }

        .icon-box {
          color: hsl(var(--accent-blue));
          margin-bottom: 1.5rem;
        }

        .highlight-card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .highlight-card p {
          color: #94A3B8;
          line-height: 1.6;
        }

        .footer {
          padding: 4rem 0;
          text-align: center;
          color: #64748B;
          font-size: 0.875rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
          }
          .title {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
}
