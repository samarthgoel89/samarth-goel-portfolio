'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Intelligent Workflows",
    content: "Transitioning from simple automation to cognitive agentic systems."
  },
  {
    title: "Embedded Fintech",
    content: "Seamless credit experiences integrated at the point of need."
  }
];

export default function Vision() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-header-cs">Strategic Vision</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="vision-pillar p-12 glass-card text-center"
            style={{ padding: '3rem' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">{pillar.title}</h3>
            <p className="text-xl text-white/70 leading-relaxed italic">
              "{pillar.content}"
            </p>
          </motion.div>
        ))}
      </div>
      
      <style jsx global>{`
        .vision-pillar {
            padding: 4rem !important;
        }
      `}</style>
    </div>
  );
}
