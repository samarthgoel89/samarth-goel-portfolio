'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Clix Capital', domain: 'clix.capital' },
  { name: 'DMI Finance', domain: 'dmifinance.in' },
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'Google', domain: 'google.com' },
  { name: 'Airtel', domain: 'airtel.in' },
  { name: 'Jio', domain: 'jio.com' },
  { name: 'HDFC Bank', domain: 'hdfcbank.com' },
  { name: 'Vercel', domain: 'vercel.com' }
];

export default function LogoCloud() {
  return (
    <div className="py-12 bg-black/50 backdrop-blur-sm border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h3 className="text-center text-sm font-medium uppercase tracking-widest text-white/40">
          Trusted by Leaders & Partners
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-4 mx-12">
              <img 
                src={`https://logo.clearbit.com/${partner.domain}`}
                alt={partner.name}
                className="w-10 h-10 partner-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold text-white/20 hover:text-white/60 transition-colors pointer-events-none">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
