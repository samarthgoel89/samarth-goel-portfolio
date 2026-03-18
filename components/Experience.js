'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Clix Capital",
    role: "AVP - Strategy & AI Initiatives",
    period: "2023 - Present",
    description: "Leading strategic GenAI deployments and core business expansion.",
    highlights: ["Built INR 400cr book", "Developed Saarthi AI Bot"]
  },
  {
    company: "DMI Finance",
    role: "Senior Product Manager",
    period: "2020 - 2023",
    description: "Scaled digital lending portfolios through tech-first partnerships.",
    highlights: ["3.5X book growth", "4800X efficiency gain"]
  }
];

export default function ProfessionalJourney() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="section-header-cs">Professional Journey</h2>
      <div className="space-y-12 pr-4 lg:pr-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 ml-4 lg:ml-0"
            style={{
                marginBottom: '2rem',
                marginRight: '1rem',
                padding: '2.5rem'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
              <span className="text-white/60 font-mono italic">{exp.period}</span>
            </div>
            <h4 className="text-xl font-semibold mb-4 text-white/90">{exp.role}</h4>
            <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-3">
              {exp.highlights.map((h, j) => (
                <span key={j} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx global>{`
        .glass-card {
            padding: 2.5rem !important;
            margin-bottom: 2rem !important;
        }
      `}</style>
    </div>
  );
}
