"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-box glass">
        <div className="contact-header">
          <Sparkles className="sparkle" size={32} />
          <h2 className="section-title">Solve a Problem with AI</h2>
          <p>Have a complex strategy or automation challenge? Let's build the solution together.</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" className="glass" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" className="glass" />
          </div>
          <div className="form-group">
            <label>The Challenge</label>
            <textarea placeholder="Describe the problem you want to solve..." className="glass" rows={4}></textarea>
          </div>
          
          <button type="submit" className="btn-submit">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 8rem 0;
          display: flex;
          justify-content: center;
        }

        .contact-box {
          width: 100%;
          max-width: 700px;
          padding: 4rem;
          text-align: center;
        }

        .contact-header {
          margin-bottom: 3rem;
        }

        .sparkle {
          color: hsl(var(--accent-purple));
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 800;
        }

        .contact-header p {
          color: #94A3B8;
          font-size: 1.1rem;
        }

        .contact-form {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #F8FAFC;
          margin-left: 0.5rem;
        }

        input, textarea {
          padding: 1rem 1.5rem;
          color: #F8FAFC;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: hsla(var(--accent-purple) / 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .btn-submit {
          margin-top: 1rem;
          background: linear-gradient(to right, hsl(var(--accent-blue)), hsl(var(--accent-purple)));
          color: white;
          padding: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          box-shadow: 0 10px 30px hsla(var(--accent-blue) / 0.2);
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        @media (max-width: 640px) {
          .contact-box {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
