import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 bg-[#030712]/90 backdrop-blur-md mt-auto relative z-10 text-gray-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          &copy; {new Date().getFullYear()} Fahham Bin Fayyaz. All rights reserved.
        </div>
        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};
