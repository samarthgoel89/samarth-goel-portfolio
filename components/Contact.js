'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div 
        className="glass-card text-center p-16"
        style={{ padding: '4rem' }}
      >
        <h2 className="text-5xl font-bold mb-8 heading-v2">Let's Build the Future</h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Open for strategic collaborations in AI, Fintech, and Digital Transformation.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="mailto:samarth.goel@icloud.com" 
            className="px-12 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/samarthgoel" 
            className="px-12 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold text-lg transition-all"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
      
      <style jsx global>{`
        .glass-card {
            padding: 5rem !important;
        }
      `}</style>
    </div>
  );
}
