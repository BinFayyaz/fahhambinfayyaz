import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiPython, SiNodedotjs, 
  SiReact, SiHtml5, SiCss, SiGit, SiGithub, SiVercel 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaBrain } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
  percent: number;
  color: string; // brand color code
  shadowColor: string; // Tailwind glow class
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "JavaScript",
      icon: <SiJavascript size={28} />,
      level: "Expert",
      percent: 92,
      color: "#F7DF1E",
      shadowColor: "hover:shadow-[0_0_20px_rgba(247,223,30,0.25)] hover:border-[#F7DF1E]/40"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={28} />,
      level: "Advanced",
      percent: 88,
      color: "#3178C6",
      shadowColor: "hover:shadow-[0_0_20px_rgba(49,120,198,0.25)] hover:border-[#3178C6]/40"
    },
    {
      name: "Python",
      icon: <SiPython size={28} />,
      level: "Advanced",
      percent: 85,
      color: "#3776AB",
      shadowColor: "hover:shadow-[0_0_20px_rgba(55,118,171,0.25)] hover:border-[#3776AB]/40"
    },
    {
      name: "React",
      icon: <SiReact size={28} />,
      level: "Advanced",
      percent: 90,
      color: "#61DAFB",
      shadowColor: "hover:shadow-[0_0_20px_rgba(97,218,251,0.25)] hover:border-[#61DAFB]/40"
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={28} />,
      level: "Advanced",
      percent: 86,
      color: "#339933",
      shadowColor: "hover:shadow-[0_0_20px_rgba(51,153,51,0.25)] hover:border-[#339933]/40"
    },
    {
      name: "REST APIs",
      icon: <TbApi size={30} />,
      level: "Expert",
      percent: 94,
      color: "#00B8D9",
      shadowColor: "hover:shadow-[0_0_20px_rgba(0,184,217,0.25)] hover:border-[#00B8D9]/40"
    },
    {
      name: "AI Integration",
      icon: <FaBrain size={28} />,
      level: "Advanced",
      percent: 85,
      color: "#10A37F",
      shadowColor: "hover:shadow-[0_0_20px_rgba(16,163,127,0.25)] hover:border-[#10A37F]/40"
    },
    {
      name: "Vercel",
      icon: <SiVercel size={28} />,
      level: "Advanced",
      percent: 87,
      color: "#FFFFFF",
      shadowColor: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/30"
    },
    {
      name: "Git",
      icon: <SiGit size={28} />,
      level: "Advanced",
      percent: 89,
      color: "#F05032",
      shadowColor: "hover:shadow-[0_0_20px_rgba(240,80,50,0.25)] hover:border-[#F05032]/40"
    },
    {
      name: "GitHub",
      icon: <SiGithub size={28} />,
      level: "Expert",
      percent: 93,
      color: "#f3f4f6",
      shadowColor: "hover:shadow-[0_0_20px_rgba(243,244,246,0.15)] hover:border-white/20"
    },
    {
      name: "HTML5",
      icon: <SiHtml5 size={28} />,
      level: "Expert",
      percent: 95,
      color: "#E34F26",
      shadowColor: "hover:shadow-[0_0_20px_rgba(227,79,38,0.25)] hover:border-[#E34F26]/40"
    },
    {
      name: "CSS3",
      icon: <SiCss size={28} />,
      level: "Expert",
      percent: 90,
      color: "#1572B6",
      shadowColor: "hover:shadow-[0_0_20px_rgba(21,114,182,0.25)] hover:border-[#1572B6]/40"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as any;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glowing sphere */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            My Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stack</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`glass-panel border-white/5 p-6 rounded-2xl flex flex-col items-start gap-4 transition-all duration-300 relative group overflow-hidden ${skill.shadowColor}`}
            >
              {/* Subtle background brand glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: skill.color }}
              />

              <div className="flex items-center justify-between w-full">
                <div 
                  className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                  {skill.level}
                </span>
              </div>

              <div className="w-full">
                <h3 className="text-base font-semibold text-white mb-1.5 font-display text-left">
                  {skill.name}
                </h3>
                
                {/* Custom animated progress tracker */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, #a78bfa)`
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1 text-[10px] text-gray-500">
                  <span>Knowledge</span>
                  <span>{skill.percent}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
