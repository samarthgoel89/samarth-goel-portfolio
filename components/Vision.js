"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, Target, Zap } from "lucide-react";

export default function Vision() {
  const pillars = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Agentic Intelligence",
      tag: "CORE_ARCHITECTURE",
      text: "Moving beyond deterministic code to autonomous financial agents that orchestrate complex business logic end-to-end."
    },
    {
      icon: <Eye size={32} />,
      title: "Strategic Foresight",
      tag: "MARKET_STEERING",
      text: "Identifying the precise intersection of emerging GenAI capabilities and structural high-impact fintech market gaps."
    },
    {
      icon: <Target size={32} />,
      title: "Impact at Scale",
      tag: "VALUE_EXTRACTION",
      text: "Engineering intelligence layers that drive INR 400cr+ in incremental PAT through hyper-filtered operational efficiency."
    }
  ];

  return (
    <section className="vision-section">
      <div className="container-wide">
        <div className="vision-header reveal">
          <span className="mono-label">[ THE_STRATEGIC_MINDSET ]</span>
          <h2 className="heading-v2 text-gradient">The Philosophy</h2>
          <p className="vision-lead">Intelligence is the new infrastructure. My mission is to build the cognitive layer that defines the next decade of financial ecosystems.</p>
        </div>

        <div className="vision-grid">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="vision-pillar liquid-glass"
            >
              <div className="pillar-header">
                <div className="pillar-icon">{pillar.icon}</div>
                <span className="pillar-tag mono-sm">{pillar.tag}</span>
              </div>
              
              <div className="pillar-body">
                <h3 className="pillar-title heading-sm">{pillar.title}</h3>
                <p className="pillar-text">{pillar.text}</p>
              </div>

              <div className="pillar-status mono-sm">
                <Zap size={14} className="icon-pulse" /> SYSTEM_ACTIVE
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="skills-interests reveal"
          style={{ marginTop: '8rem' }}
        >
          <div className="flex-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem', marginBottom: '3rem' }}>
            <h2 className="heading-v2 text-gradient">Skills & Interests</h2>
            <div className="mono-label">[ TECHNICAL_DNA ]</div>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="mono-sm text-secondary">CORE_COMPETENCIES</h4>
              <div className="skills-list">
                {["Business Analysis", "Product Management", "SQL & Data Analysis", "VBA Macros", "APIs & .Net", "Applied AI"].map(s => (
                   <span key={s} className="skill-tag glass">{s}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h4 className="mono-sm text-secondary">INTERESTS_&_PASSIONS</h4>
              <div className="skills-list">
                {["AI Enthusiast", "Financial Modeling", "Strategy & Startups", "UX Design", "Pickleball", "Traveling"].map(s => (
                  <span key={s} className="interest-tag liquid-glass">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .vision-section { padding: 10rem 0; }
        
        .vision-header { text-align: center; margin-bottom: 7rem; }
        
        .vision-lead {
          max-width: 800px;
          margin: 2rem auto 0;
          font-size: 1.5rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .flex-between { display: flex; justify-content: space-between; align-items: center; }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .skill-tag, .interest-tag {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .skill-tag { background: rgba(255,255,255,0.02); }
        .interest-tag { color: hsl(var(--accent-emerald)); }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        :global(.vision-pillar) {
          padding: 3.5rem;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          min-height: 480px;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,0.05);
          transition: border-color 0.3s ease;
        }

        :global(.vision-pillar:hover) {
          border-color: rgba(255,255,255,0.2);
        }

        .pillar-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        .pillar-icon { color: hsl(var(--accent-purple)); }
        .pillar-tag { color: #475569; letter-spacing: 0.1em; }

        .pillar-title { font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.1; }
        .pillar-text { font-size: 1.1rem; color: #94a3b8; line-height: 1.6; }

        .pillar-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: hsl(var(--accent-emerald));
          margin-top: 3rem;
          font-weight: 700;
        }

        .icon-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .vision-grid { grid-template-columns: 1fr; }
          :global(.vision-pillar) { min-height: auto; padding: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
