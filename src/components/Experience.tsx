import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
}

export const Experience: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2025 - Present",
      title: "Fullstack Developer & Bot Architect",
      subtitle: "Freelance & Independent Projects",
      desc: "Architecting bespoke chat agents and responsive web applications. Integrating AI automation, managing SQLite databases, setting up server connections, and designing high-performance interfaces."
    },
    {
      year: "2024 - 2025",
      title: "Advanced Web App Engineering",
      subtitle: "Vite, React, TypeScript Ecosystem",
      desc: "Created complex interfaces like GameHub Theta and LuxeCommerce. Focused on client-side state management, performance optimization, responsive glassmorphism styles, and Vercel hosting integration."
    },
    {
      year: "2023 - 2024",
      title: "Chatbot & Automation Specialist",
      subtitle: "Python, NodeJS, REST APIs",
      desc: "Developed GASCB Bot and a comprehensive WhatsApp AI Bot. Engineered multi-threaded command structures, custom automated replies, API polling mechanisms, and lightweight multiplayer lobby servers."
    },
    {
      year: "2022 - 2023",
      title: "Coding Foundation & Systems Basics",
      subtitle: "Computer Science Student Journey",
      desc: "Learned basic programming paradigms (OOP, algorithms, data structures) using Python, JavaScript, HTML5, and CSS3. Established a robust base in Git and GitHub contribution workflows."
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Timeline indicator node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#030712] -translate-x-1/2 top-6 z-20 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                  
                  {/* Left spacer / right card layout */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="glass-panel border-white/5 p-6 rounded-2xl glass-panel-hover"
                    >
                      <span className="inline-block text-xs font-bold text-cyan-400 font-mono tracking-widest uppercase mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold font-display text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Opposite empty space for desktop symmetry */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
