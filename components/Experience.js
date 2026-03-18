"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, TrendingUp, Zap } from "lucide-react";
import Counter from "./Counter";

const experience = [
  {
    company: "Clix Capital",
    logo: "CX",
    role: "AVP | Strategy & New Business Initiatives - CEO’s Office",
    period: "Dec 2022 - Present",
    location: "Gurugram, India",
    context: "Strategic Steering & AI Transformation",
    impact: [
      { label: "Book Growth", val: "INR 400 Cr" },
      { label: "PAT Contrib", val: "40%" },
      { label: "Efficiency", val: "4800X" }
    ],
    points: [
      "Conceptualized & launched Small Business Loan product, scaling to INR 10cr monthly in 4 months.",
      "Setup co-lending business, scaling from zero to INR 50cr monthly in 6 months with a lean team.",
      "Self-developed multiple AI POCs: AI Caller for DSA reachout, RAG Bot for Policy Saarthi, and automated payment application.",
      "Leading company-wide digital & AI initiatives, including knowledge sharing on Generative AI."
    ]
  },
  {
    company: "DMI Finance",
    role: "Senior Product Manager",
    period: "May 2019 - Dec 2022",
    location: "New Delhi, India",
    context: "Product Innovation & Ecosystem Scaling",
    impact: [
      { label: "Book Scale", val: "3.5X" },
      { label: "Portfolio", val: "INR 4300 Cr+" }
    ],
    points: [
      "Achieved loan book growth from INR 1200 Cr to INR 4300+ Cr with zero ramp-up in human resources.",
      "Established 100% digital API-based partnerships with Samsung, Google Pay, Airtel, and Jio.",
      "Developed 100% digital KYC stack handling all KYC types leveraging AI-driven OCR and facial recognition.",
      "Designed and executed targeted cross-selling program increasing monthly disbursals to INR 40 Cr."
    ]
  },
  {
    company: "Citibank",
    role: "Assistant Vice President, IT Business Analyst",
    period: "Jun 2014 - Apr 2018",
    location: "Singapore",
    context: "Institutional Clients Group – Operations & Technology",
    impact: [
      { label: "Clients", val: "82K+" },
      { label: "Savings", val: "$2M" }
    ],
    points: [
      "Achieved Rank 1 on Wall Street for Citi Velocity, the bank's market intelligence platform.",
      "Received Dazzle Award (top 100 of 80K) for outstanding performance in institutional banking tech.",
      "Ideated machine learning and NLP based recommendation engine for sales traders.",
      "Saved USD 2M in potential regulatory fines through root cause analysis and strategic risk management."
    ]
  },
  {
    company: "HCL Technologies",
    role: "Business Analyst",
    period: "May 2012 - Jun 2014",
    location: "Singapore",
    context: "Banking, Financial Services and Insurance Practice",
    points: [
      "Managed a globally distributed team of 11 members and clients across 4 continents.",
      "Improved a leading global bank's bottom line by USD 300M via client lifetime value relationship management.",
      "Developed execution cost analytics tool to track trade profitability and reconcile invoices.",
      "Conducted 80+ hours of technical and functional training sessions for BAs and developers."
    ]
  }
];

export default function Experience() {
  return (
    <section className="exp-section">
      <div className="container-wide">
        <div className="section-header reveal">
          <span className="mono-label">[ THE_CHRONOLOGY ]</span>
          <h2 className="heading-v2 text-gradient">Professional Journey</h2>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot border-beam" />
                <div className="marker-line" />
              </div>

              <div className="timeline-content glass border-beam">
                <div className="exp-header">
                  <div>
                    <h3 className="company-name heading-sm">{exp.company}</h3>
                    <p className="role-title mono text-gradient">{exp.role}</p>
                  </div>
                  <div className="exp-meta mono-sm">
                    <div className="meta-item"><Calendar size={14} /> {exp.period}</div>
                    <div className="meta-item"><MapPin size={14} /> {exp.location}</div>
                  </div>
                </div>

                <div className="exp-body">
                  <p className="exp-context">
                    <Zap size={14} /> {exp.context}
                  </p>
                  
                  <ul className="exp-points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>
                        <ChevronRight size={14} className="text-secondary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.impact && (
                    <div className="exp-impact-grid">
                      {exp.impact.map((imp, i) => {
                        // Extract number and surrounding text
                        const num = parseFloat(imp.val.replace(/[^0-9.]/g, ""));
                        const prefix = imp.val.split(/[0-9]/)[0] || "";
                        const suffix = imp.val.split(/[0-9.]/).pop() || "";
                        
                        return (
                          <div key={i} className="impact-card-sm liquid-glass">
                            <span className="impact-val heading-sm">
                                <Counter value={num} prefix={prefix} suffix={suffix} delay={0.2 * i} />
                            </span>
                            <span className="impact-label mono-sm">{imp.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .exp-section { padding: 10rem 0; }
        
        .section-header { margin-bottom: 5rem; }
        .heading-v2 { font-size: 4rem; margin-top: 1rem; }

        .timeline {
          position: relative;
          padding-left: 3rem;
        }

        :global(.timeline-item) {
          position: relative;
          margin-bottom: 8rem;
        }
        :global(.timeline-item:last-child) {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -3rem;
          top: 0;
          bottom: 0;
          width: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--background);
          z-index: 2;
        }

        .marker-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
        }

        .timeline-content {
          padding: 3rem;
          border-radius: 20px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 2rem;
        }

        .company-name { font-size: 2rem; }
        .role-title { font-size: 1.1rem; margin-top: 0.5rem; letter-spacing: 0.05em; }

        .exp-meta {
          text-align: right;
          color: var(--text-secondary);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: flex-end;
          margin-bottom: 0.5rem;
        }

        .exp-context {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #d1d5db;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .exp-points {
          list-style: none;
          margin-bottom: 3rem;
        }

        .exp-points li {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .exp-impact-grid {
          display: flex;
          gap: 1.5rem;
        }

        .impact-card-sm {
          padding: 1.5rem;
          border-radius: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .impact-val { color: white; display: block; margin-bottom: 0.25rem; }
        .impact-label { font-size: 0.65rem; color: #475569; letter-spacing: 0.1em; }

        @media (max-width: 768px) {
          .exp-header { flex-direction: column; gap: 1.5rem; }
          .exp-meta { text-align: left; }
          .meta-item { justify-content: flex-start; }
          .exp-impact-grid { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
