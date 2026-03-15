"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Eye, Target } from "lucide-react";

export default function Vision() {
  const pillars = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Agentic Intelligence",
      text: "Moving beyond simple chatbots to autonomous agents that execute complex business logic end-to-end."
    },
    {
      icon: <Eye size={32} />,
      title: "Strategic Foresight",
      text: "Identifying the intersection of emerging AI capabilities and high-impact fintech market gaps."
    },
    {
      icon: <Target size={32} />,
      title: "Impact at Scale",
      text: "Engineering systems that don't just work, but drive INR 400cr+ in incremental PAT via efficiency."
    }
  ];

  return (
    <section className="vision-section">
      <div className="vision-header">
        <h2 className="section-title">The <span className="text-gradient">Philosophy</span></h2>
        <p>Intelligence is the new infrastructure. My goal is to build the layer that defines the future of finance.</p>
      </div>

      <div className="vision-grid">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="pillar-card glass"
          >
            <div className="pillar-icon">{pillar.icon}</div>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .vision-section {
          padding: 8rem 0;
        }

        .vision-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .vision-header p {
          max-width: 600px;
          margin: 0 auto;
          color: #94A3B8;
          font-size: 1.25rem;
          line-height: 1.6;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .pillar-card {
          padding: 4rem 2rem;
          text-align: center;
          border-radius: 40px;
          transition: all 0.3s ease;
        }

        .pillar-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: hsla(var(--accent-purple) / 0.3);
          transform: translateY(-8px);
        }

        .pillar-icon {
          color: hsl(var(--accent-purple));
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .pillar-card h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .pillar-card p {
          color: #94A3B8;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
