import React from 'react';
import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import { Magnetic } from './Magnetic';
import { FaArrowRight } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const titles = [
    "Student Developer",
    "Web Developer",
    "Bot Developer",
    "AI Enthusiast"
  ];


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Aurora Radial Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[15%] left-[8%] w-12 h-12 border border-cyan-400/20 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[20%] left-[12%] w-16 h-16 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -35, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[25%] right-[10%] w-10 h-10 border border-teal-500/25 rounded-md"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Available for Freelance & Projects
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] tracking-tight mb-4"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
              Fahham Bin Fayyaz
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 h-8"
          >
            <span>I am a</span>
            <TypingEffect strings={titles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-10"
          >
            Crafting premium fullstack web platforms, custom automation, and intelligent chat bots. Merging aesthetic interfaces with solid backend logic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(167,139,250,0.4)]"
              >
                Get in Touch
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Hero Right Code Console */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[450px] glass-panel border-white/5 rounded-2xl p-6 relative shadow-2xl group overflow-hidden"
          >
            {/* Top border neon line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Window controls */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-500">developer.ts</span>
            </div>

            {/* Code text */}
            <div className="text-left font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">developer</span>{' '}
              <span className="text-gray-400">=</span>{' '}
              <span className="text-gray-400">{'{'}</span>
              
              <div className="pl-4 mt-1">
                <span className="text-gray-400">name:</span>{' '}
                <span className="text-emerald-300">'Fahham Bin Fayyaz'</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">role:</span>{' '}
                <span className="text-emerald-300">'Full Stack AI Engineer'</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">passion:</span>{' '}
                <span className="text-emerald-300">'Automating the Future'</span>,
              </div>
              
              <div className="pl-4 mt-2">
                <span className="text-gray-400">skills:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <div className="pl-4 text-cyan-300">
                  'TypeScript', 'React', 'Python',
                </div>
                <div className="pl-4 text-cyan-300">
                  'NodeJS', 'APIs', 'AI Agents'
                </div>
                <span className="text-gray-400">{']'}</span>,
              </div>

              <div className="pl-4 mt-2">
                <span className="text-gray-400">focus:</span>{' '}
                <span className="text-orange-300">/AutonomousBots|SmartApps/</span>
              </div>

              <div className="mt-1">
                <span className="text-gray-400">{'};'}</span>
              </div>
            </div>

            {/* Glowing spot */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
