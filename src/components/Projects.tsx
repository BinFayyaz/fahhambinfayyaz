import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  desc: string;
  category: 'web' | 'bot' | 'ai';
  categoryLabel: string;
  techs: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'bot' | 'ai'>('all');

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'bot', label: 'Bots' },
    { value: 'ai', label: 'AI/Automation' }
  ] as const;

  const projects: Project[] = [
    {
      id: 1,
      title: "GameHub Theta",
      desc: "A premium modern games portal and gaming dashboard featuring tournament panels, user profiles, interactive game lists, and lightning-fast state management.",
      category: "web",
      categoryLabel: "Web App",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://gamehub-v2-theta.vercel.app",
      githubUrl: "https://github.com/BinFayyaz",
      image: "/gamehub_preview.jpg"
    },
    {
      id: 2,
      title: "LuxeCommerce",
      desc: "A luxury minimalist e-commerce storefront with smooth transitions, shopping cart logic, animated catalog interfaces, and micro-interactions.",
      category: "web",
      categoryLabel: "Web App",
      techs: ["React", "TypeScript", "Tailwind CSS", "State Context", "Vercel"],
      liveUrl: "https://luxecommerce-modern-ecommerce-platf.vercel.app",
      githubUrl: "https://github.com/BinFayyaz",
      image: "/luxecommerce_preview.jpg"
    },
    {
      id: 3,
      title: "GASCB Bot Hub",
      desc: "An automated service bot offering modular commands, interactive widgets, Discord/Telegram controls, and server health tracking analytics.",
      category: "bot",
      categoryLabel: "Automation Bot",
      techs: ["Node.js", "Express", "WebSockets", "REST APIs", "Vercel"],
      liveUrl: "https://gascb-bot.vercel.app",
      githubUrl: "https://github.com/BinFayyaz",
      image: "/gascb_preview.jpg"
    },
    {
      id: 4,
      title: "AI-Enabled WhatsApp Bot",
      desc: "An advanced WhatsApp agent powered by LLM models, featuring automated replies, multiplayer gaming lobbies, group utility systems, and scheduled tasks.",
      category: "ai",
      categoryLabel: "AI / Bot",
      techs: ["Python", "Node.js", "OpenAI API", "SQLite", "Automation Scripts"],
      liveUrl: "#", // Live on whatsapp, link contact
      githubUrl: "https://github.com/BinFayyaz",
      image: "/whatsapp_bot_preview.jpg"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glowing aurora */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === opt.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel border-white/5 rounded-2xl overflow-hidden glass-panel-hover flex flex-col group h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors py-1"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                    
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
