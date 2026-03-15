"use client";

import { motion } from "framer-motion";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar glass"
    >
      <div className="nav-logo">
        <Cpu className="logo-icon" size={24} />
        <span className="logo-text">Samarth Goel</span>
      </div>
      
      <div className="nav-links">
        <a href="#experience">Journey</a>
        <a href="#projects">AI Lab</a>
        <a href="#contact" className="nav-cta">Reach Out</a>
      </div>
      
      <div className="nav-social">
        <a href="https://linkedin.com/in/samarth-goel" target="_blank" rel="noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Github size={20} />
        </a>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 2rem;
          z-index: 1000;
          border-radius: 100px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          color: hsl(var(--accent-blue));
        }

        .logo-text {
          font-weight: 700;
          font-family: var(--font-outfit);
          font-size: 1.1rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: #94A3B8;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #F8FAFC;
        }

        .nav-cta {
          background: #F8FAFC;
          color: #0D0D0D !important;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-weight: 600 !important;
        }

        .nav-social {
          display: flex;
          gap: 1rem;
          color: #64748B;
        }

        .nav-social a:hover {
          color: #F8FAFC;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
}
