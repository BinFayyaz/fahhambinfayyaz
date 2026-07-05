import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaLightbulb, FaCloudUploadAlt } from 'react-icons/fa';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Achievement {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const steps = 50;
      const increment = end / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Achievements: React.FC = () => {
  const stats: Stat[] = [
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 99, suffix: "%", label: "Deployment Uptime" },
    { value: 120, suffix: "K+", label: "Bot Operations Handled" },
    { value: 300, suffix: "+", label: "GitHub Contributions" }
  ];

  const list: Achievement[] = [
    {
      icon: <FaTrophy className="text-yellow-400 w-6 h-6" />,
      title: "Pioneered Multiplayer Bot Games",
      desc: "Designed and implemented lightweight concurrency loops for games inside popular messaging apps, managing lobbies and scoreboards via server memory."
    },
    {
      icon: <FaLightbulb className="text-cyan-400 w-6 h-6" />,
      title: "AI Integration Prototypes",
      desc: "Connected GPT APIs to custom scripts, creating smart agents that execute server code, fetch summaries, and respond contextually."
    },
    {
      icon: <FaCloudUploadAlt className="text-purple-400 w-6 h-6" />,
      title: "Full CI/CD Optimization",
      desc: "Successfully deployed responsive web nodes, custom express endpoints, and API channels to Vercel and render environments, ensuring fast load speeds."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Aurora spotlight */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            Key <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel border-white/5 p-6 rounded-2xl text-center group hover:border-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-3xl md:text-5xl font-black font-mono text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-semibold font-display tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Accomplishments Spotlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel border-white/5 p-6 rounded-2xl glass-panel-hover text-left flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-white font-bold font-display text-base md:text-lg">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
