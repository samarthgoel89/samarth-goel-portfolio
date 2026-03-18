'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Saarthi AI Bot",
    category: "GenAI & Automation",
    impact: "End-to-end loan journey automation",
    tech: ["Python", "OpenAI", "Agentic Frameworks"]
  },
  {
    title: "Project Horizon",
    category: "Lending Infrastructure",
    impact: "Scalable credit engine for MSMEs",
    tech: ["Node.js", "Kubernetes", "PostgreSQL"]
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="section-header-cs">Strategic Deep Dive</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card overflow-hidden group"
            style={{ padding: '2rem' }}
          >
            <div className="project-tile" style={{ padding: '1rem' }}>
              <span className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 mb-6 text-lg leading-relaxed">
                {project.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx global>{`
        .project-tile {
            padding: 2rem !important;
        }
      `}</style>
    </div>
  );
}
