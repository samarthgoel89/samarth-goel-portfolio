"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experience = [
  {
    company: "Clix Capital",
    title: "AVP - Strategy & AI Initiatives",
    period: "Dec 2022 – Present",
    highlights: [
      "Built INR 400cr loan book in 12 months",
      "40% contribution to FY25 PAT",
      "Developed Saarthi AI Bot for loan automation"
    ]
  },
  {
    company: "DMI Finance",
    title: "Senior Product Manager",
    period: "May 2019 – Dec 2022",
    highlights: [
      "3.5X book growth (INR 1200cr to 4300cr+)",
      "4800X operational efficiency gain",
      "Partnerships with Samsung, Google, Jio"
    ]
  },
  {
    company: "Citibank, Singapore",
    title: "AVP - IT Business Analyst",
    period: "Jun 2014 – Apr 2018",
    highlights: [
      "Dazzle Award winner (Top 0.125% globally)",
      "Saved $2M in regulatory fines via automation",
      "Built ML/NLP stock recommendation engine"
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Journey</h2>
      
      <div className="timeline">
        {experience.map((item, idx) => (
          <motion.div 
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="timeline-content glass">
              <div className="item-header">
                <div>
                  <h3>{item.title}</h3>
                  <div className="company-info">
                    <Briefcase size={16} /> <span>{item.company}</span>
                  </div>
                </div>
                <div className="period">
                  <Calendar size={16} /> <span>{item.period}</span>
                </div>
              </div>
              
              <ul className="highlights-list">
                {item.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .experience-section {
          padding: 8rem 0;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 4rem;
          text-align: center;
          font-weight: 700;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, hsla(var(--accent-blue) / 0.2), transparent);
        }

        .timeline-item {
          width: 50%;
          padding: 1rem 3rem;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          left: 0;
          text-align: right;
        }

        .timeline-item:nth-child(even) {
          left: 50%;
          text-align: left;
        }

        .timeline-content {
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          border-color: hsla(var(--accent-blue) / 0.4);
          transform: scale(1.02);
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .timeline-item:nth-child(odd) .item-header {
          flex-direction: row-reverse;
        }

        .company-info, .period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #94A3B8;
          margin-top: 0.25rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #CBD5E1;
          font-size: 0.95rem;
        }

        .timeline-item:nth-child(odd) .highlights-list li {
          flex-direction: row-reverse;
        }

        .bullet {
          color: hsl(var(--accent-blue));
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 0;
          }
          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding: 1rem 0 1rem 2rem;
            text-align: left !important;
          }
          .item-header, .highlights-list li {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
}
