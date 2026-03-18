"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, TrendingUp, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Policy Saarthi (RAG Bot)",
    category: "GEN_AI_AGENT",
    tech: ["Python", "RAG", "LangChain", "OpenAI"],
    desc: "AI-powered policy assistant for the Clix salesforce, enabling real-time queries and strategic guidance on Loan Against Property policies.",
    impact: "Enhanced Salesforce Effectiveness",
    icon: <Bot size={24} />,
    color: "var(--accent-blue)",
    link: "https://bit.ly/4r8u7pu"
  },
  {
    title: "AI Business Caller",
    category: "VOICE_AI",
    tech: ["Python", "Vapi", "AI Voice", "Groq"],
    desc: "Autonomous AI caller for automated DSA reachout, engagement, and product awareness, reducing manual outreach effort by 80%.",
    impact: "80% Reachout Automation",
    icon: <Cpu size={24} />,
    color: "var(--accent-purple)",
    link: "http://bit.ly/4ao1DAK"
  },
  {
    title: "Small Business Loan Launch",
    category: "STRATEGIC_FINTECH",
    tech: ["LOS Integration", "Scorecard Design", "Strategy"],
    desc: "Conceptualized and launched a high ROA product, scaling it to a monthly INR 10 Cr business within just 4 months.",
    impact: "INR 10 Cr Monthly Run Rate",
    icon: <TrendingUp size={24} />,
    color: "var(--accent-emerald)",
    link: "#"
  },
  {
    title: "DSA Finder AI",
    category: "GEOSPATIAL_AI",
    tech: ["Python", "Maps API", "Clustering"],
    desc: "Intelligent tool to identify and prospect nearby DSAs, optimizing the sales team's field efforts through data-driven planning.",
    impact: "Optimized Field Prospecting",
    icon: <Cpu size={24} />,
    color: "var(--accent-blue)",
    link: "https://bit.ly/DSA-finder"
  },
  {
    title: "AI Curated Newsletter",
    category: "AGENTIC_WORKFLOW",
    tech: ["Python", "NewsAPI", "LLM Summarization"],
    desc: "Automated personal intelligence system that curates and summarizes industry-specific news to keep strategic decisions updated.",
    impact: "Strategic Intel Automation",
    icon: <TrendingUp size={24} />,
    color: "var(--accent-purple)",
    link: "https://bit.ly/clix-briefs"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container-wide">
        <div className="section-header reveal">
          <span className="mono-label">[ THE_EXPERIMENTAL_LAB ]</span>
          <h2 className="heading-v2 text-gradient">AI Lab & Projects</h2>
        </div>

        <div className="projects-bento">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`project-tile glass border-beam ${idx === 0 ? 'tile-featured' : ''}`}
            >
              <div className="tile-content">
                <div className="tile-header">
                  <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
                  <span className="mono-label">{project.category}</span>
                </div>

                <div className="tile-body">
                  <h3 className="project-title heading-v2">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  
                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag mono-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="tile-footer">
                  <div className="impact-indicator">
                    <span className="mono-tag">CORE_IMPACT</span>
                    <p className="impact-text mono">{project.impact}</p>
                  </div>
                  <a href={project.link} className="project-link">
                    <ArrowUpRight size={24} />
                  </a>
                </div>
              </div>

              <div className="tile-glow" style={{ background: `radial-gradient(circle at top right, ${project.color}33, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section { padding: 10rem 0; }
        
        .section-header { margin-bottom: 5rem; }
        .heading-v2 { font-size: 4rem; margin-top: 1rem; }

        .projects-bento {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(400px, auto);
          gap: 1.5rem;
        }

        :global(.project-tile) {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        :global(.tile-featured) {
          grid-column: span 2;
        }

        .tile-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .project-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .project-title { font-size: 3rem; margin-bottom: 1.5rem; line-height: 1; }
        .project-desc { font-size: 1.25rem; color: #94a3b8; line-height: 1.6; margin-bottom: 2.5rem; max-width: 600px; }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.03);
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.05);
          color: #64748b;
        }

        .tile-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 4rem;
        }

        .impact-text { font-size: 0.9rem; color: #f8fafc; margin-top: 0.5rem; font-weight: 600; }
        
        .project-link {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          color: black;
          transition: transform 0.2s ease;
        }

        .project-link:hover { transform: scale(1.1) rotate(10deg); }

        .tile-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .projects-bento { grid-template-columns: 1fr; }
          :global(.tile-featured) { grid-column: span 1; }
          :global(.project-tile) { padding: 2.5rem; }
          .project-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
