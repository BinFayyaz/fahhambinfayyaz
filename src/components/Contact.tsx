import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Magnetic } from './Magnetic';

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  url: string;
  color: string;
  shadowColor: string;
}

export const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: <FaInstagram size={28} />,
      label: "Instagram Profile",
      value: "@FahhamBinFayyaz",
      url: "https://www.instagram.com/fahhambinfayyaz/",
      color: "text-[#E1306C]",
      shadowColor: "hover:shadow-[0_0_20px_rgba(225,48,108,0.2)] hover:border-[#E1306C]/40"
    },
    {
      icon: <FaGithub size={28} />,
      label: "GitHub Profile",
      value: "@BinFayyaz",
      url: "https://github.com/BinFayyaz",
      color: "text-white",
      shadowColor: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/30"
    },
    {
      icon: <FaEnvelope size={28} />,
      label: "Direct Email",
      value: "fahamfayyaz6@gmail.com",
      url: "mailto:fahamfayyaz6@gmail.com",
      color: "text-cyan-400",
      shadowColor: "hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:border-cyan-400/40"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Let's discuss your next project! Whether you need a custom automation bot, a fully responsive React frontend, or smart LLM API integrations, I'm ready to collaborate. Reach out directly via any of the channels below.
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel border-white/5 p-8 rounded-2xl flex flex-col justify-between text-center glass-panel-hover transition-all duration-300 ${method.shadowColor}`}
            >
              <div className="flex flex-col items-center">
                {/* Glowing Icon Wrapper */}
                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${method.color}`}>
                  {method.icon}
                </div>
                
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  {method.label}
                </h3>
                
                <p className="text-white text-base font-semibold font-display mb-8 break-all">
                  {method.value}
                </p>
              </div>

              <div className="flex justify-center">
                <Magnetic range={40} strength={0.3}>
                  <a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 text-gray-300 hover:text-cyan-400 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                  >
                    Connect Now
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
