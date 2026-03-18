"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, Rocket, Target } from "lucide-react";

const studies = [
  {
    id: "clix",
    title: "The 400cr Growth Engine",
    client: "Clix Capital",
    role: "Strategic Steering",
    description: "Orchestrated the development of the 'Saarthi' AI Agent and Digital LAP ecosystems, contributing to 40% of the company's PAT within one fiscal year.",
    metrics: ["INR 400cr Book", "40% PAT Contrib", "FY25 Impact"],
    color: "hsl(210, 100%, 60%)",
    icon: <Rocket size={40} />
  },
  {
    id: "dmi",
    title: "Scaling 4800X Efficiency",
    client: "DMI Finance",
    role: "Ecosystem Architect",
    description: "Built strategic digital lending partnerships with Samsung and Google Pay. Grew loan book by 350% while achieving unprecedented operational gains.",
    metrics: ["4800X Efficiency", "3.5X Book Scale", "INR 4300cr Book"],
    color: "hsl(270, 80%, 65%)",
    icon: <Target size={40} />
  },
  {
    id: "citi",
    title: "Wall Street Intelligence",
    client: "Citibank",
    role: "IT Business Analyst",
    description: "Ranked #1 on Wall Street for Citi Velocity. Built ML stock recommendation engines and automated compliance systems saving millions in regulatory fines.",
    metrics: ["#1 Platform", "Top 0.125% Award", "$2M Risk Save"],
    color: "hsl(150, 80%, 55%)",
    icon: <Shield size={40} />
  }
];

export default function CaseStudies() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="case-studies-container">
      <div className="sticky-wrapper">
        <div className="section-header-cs container-wide">
          <span className="mono-label">[ STRATEGIC_DEEP_DIVES ]</span>
          <h2 className="heading-v2 text-gradient">Case Studies</h2>
        </div>

        <motion.div style={{ x }} className="horizontal-scroll">
          {studies.map((study) => (
            <div key={study.id} className="study-card-wrapper">
              <div className="study-card border-beam">
                <div className="study-card-left">
                  <div className="study-icon" style={{ background: `${study.color}22`, color: study.color }}>
                    {study.icon}
                  </div>
                  <div className="study-header">
                    <span className="mono-label" style={{ color: study.color }}>{study.client} // {study.role}</span>
                    <h3 className="heading-v2">{study.title}</h3>
                  </div>
                  <p className="study-desc">{study.description}</p>
                  
                  <div className="study-metrics">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="study-metric-tag mono">
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="study-card-right">
                    <div className="strategy-visual" style={{ background: `linear-gradient(135deg, ${study.color}33, transparent)` }}>
                        <div className="pulse-circle" style={{ borderColor: study.color }} />
                        <div className="pulse-circle anim-delay" style={{ borderColor: study.color }} />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
