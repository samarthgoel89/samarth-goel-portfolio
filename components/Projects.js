"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Saarthi AI Bot",
    category: "Generative AI",
    tech: ["Python", "OpenAI", "Agentic Workflows"],
    description: "End-to-end loan journey automation reducing manual intervention by 80%.",
    impact: "INR 400cr Book Growth"
  },
  {
    title: "DSA Finder",
    category: "Product Innovation",
    tech: ["Data Engineering", "Recommendation Engine"],
    description: "Intelligent agent helping field agents find the right partners in seconds.",
    impact: "60% Faster Sourcing"
  },
  {
    title: "Personal Brand Agent",
    category: "Self-Initiated",
    tech: ["GenAI", "Knowledge Retrieval"],
    description: "AI-driven content engine for personal branding and LinkedIn growth.",
    impact: "7,000+ Followers"
  },
  {
    title: "AI Caller POC",
    category: "Voice AI",
    tech: ["Twilio", "Real-time Voice"],
    description: "Voice-based collection and service agents with natural dialogue.",
    impact: "90% Cost Reduction"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="section-intro">
        <h2 className="section-title">AI Lab & Projects</h2>
        <p className="section-desc">Pioneering the next wave of intelligent financial systems.</p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="project-card glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="card-header">
              <span className="category">{project.category}</span>
              <Sparkles size={16} className="sparkle" />
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            
            <div className="card-footer">
              <div className="impact-box">
                <span className="impact-label">Impact:</span>
                <span className="impact-value">{project.impact}</span>
              </div>
              <button className="icon-btn">
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .projects-section {
          padding: 8rem 0;
        }

        .section-intro {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-desc {
          color: #94A3B8;
          font-size: 1.1rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, hsla(var(--accent-purple) / 0.05), transparent);
          pointer-events: none;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--accent-purple));
        }

        .sparkle {
          color: hsla(var(--accent-purple) / 0.5);
        }

        .project-title {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .project-desc {
          color: #CBD5E1;
          margin-bottom: 2rem;
          line-height: 1.6;
          flex-grow: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          color: #94A3B8;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .impact-box {
          display: flex;
          flex-direction: column;
        }

        .impact-label {
          font-size: 0.7rem;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .impact-value {
          font-weight: 700;
          color: #F8FAFC;
        }

        .icon-btn {
          color: #94A3B8;
          background: transparent;
        }

        .icon-btn:hover {
          color: #F8FAFC;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .project-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
