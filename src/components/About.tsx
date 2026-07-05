import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRobot, FaLaptopCode } from 'react-icons/fa';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaCode className="text-cyan-400 w-6 h-6" />,
      title: "Frontend & Backend",
      desc: "Responsive web UI with robust APIs and microservices."
    },
    {
      icon: <FaRobot className="text-purple-400 w-6 h-6" />,
      title: "Bot Automation",
      desc: "Custom WhatsApp, Discord, and automation bots."
    },
    {
      icon: <FaLaptopCode className="text-teal-400 w-6 h-6" />,
      title: "AI Integration",
      desc: "Embedding Large Language Models and agents in workflows."
    },
    {
      icon: <FaGraduationCap className="text-indigo-400 w-6 h-6" />,
      title: "Active Learning",
      desc: "Expanding knowledge in Computer Science and systems."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[360px] aspect-square rounded-2xl group overflow-hidden"
            >
              {/* Glowing Outline */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-[#030712] rounded-2xl overflow-hidden relative">
                  <img
                    src="/developer_avatar.jpg"
                    alt="Fahham Bin Fayyaz Cybernetic Portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 border border-cyan-400/10 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </div>

          {/* Right Side: Description */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                I Build Intelligent, Scalable & Captivating Digital Systems
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Hello! I am Fahham Bin Fayyaz, a passionate student developer who loves crafting modern web experiences and automating repetitive processes. My journey started with building interactive websites, which expanded into developing complex automated bots, multiplayer game nodes, and incorporating cutting-edge AI integrations.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                I specialize in setting up responsive frontends with React and Tailwind CSS, backed by robust Node.js or Python backend APIs. I focus on clean, reusable code architectures and ensuring every user interface feels premium, polished, and intuitive.
              </p>

              {/* Grid of highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-panel border-white/5 p-5 rounded-xl hover:border-cyan-500/20 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="mb-3 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-1 text-sm font-display">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-normal">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
