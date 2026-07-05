import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaEye, FaRegCalendarAlt } from 'react-icons/fa';

export const GithubStats: React.FC = () => {
  // Generate mock grid commits (24 weeks * 7 days)
  const contributionGrid = useMemo(() => {
    const cols = 24;
    const rows = 7;
    const grid = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const levels = [
      'bg-gray-800/40',
      'bg-emerald-950/70',
      'bg-emerald-800/80',
      'bg-emerald-500',
      'bg-emerald-300'
    ];

    for (let c = 0; c < cols; c++) {
      const colCells = [];
      for (let r = 0; r < rows; r++) {
        // Higher probability of light commits, lower probability of heavy commits
        const rand = Math.random();
        let level = 0;
        if (rand > 0.85) level = 4;
        else if (rand > 0.65) level = 3;
        else if (rand > 0.4) level = 2;
        else if (rand > 0.15) level = 1;

        const commits = level === 0 ? 0 : Math.floor(Math.random() * (level * 3)) + 1;
        colCells.push({
          level: levels[level],
          commits,
          day: days[r]
        });
      }
      grid.push(colCells);
    }
    return grid;
  }, []);

  const stats = [
    { icon: <FaStar size={16} className="text-yellow-400" />, label: "Total Stars", value: "24" },
    { icon: <FaCodeBranch size={16} className="text-cyan-400" />, label: "Total Repos", value: "18" },
    { icon: <FaEye size={16} className="text-purple-400" />, label: "Views", value: "1.2K" },
    { icon: <FaRegCalendarAlt size={16} className="text-emerald-400" />, label: "Contributions", value: "320+" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            GitHub <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Activity</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* GitHub Integration Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 glass-panel border-white/5 rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-gray-300">
                <FaGithub size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold font-display text-base">@BinFayyaz</h3>
                <a
                  href="https://github.com/BinFayyaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Metrics list */}
            <div className="space-y-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <span className="text-xs text-gray-400 font-semibold">{stat.label}</span>
                  </div>
                  <span className="text-sm font-bold text-white font-mono">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Matrix Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 glass-panel border-white/5 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                Contribution Matrix
              </h3>
              <p className="text-gray-400 text-xs mb-6">
                Visualizing code deployments, bot integrations, and repository updates.
              </p>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto w-full pb-2">
              <div className="flex gap-[3px] min-w-[480px]">
                {contributionGrid.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3px]">
                    {col.map((cell, rowIdx) => (
                      <div
                        key={rowIdx}
                        className={`w-[13px] h-[13px] rounded-[2px] transition-colors duration-200 cursor-pointer ${cell.level} hover:scale-125`}
                        title={`${cell.commits} commits on ${cell.day}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend footer */}
            <div className="flex items-center justify-between text-[10px] text-gray-500 mt-4">
              <span>Last 24 Weeks</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-[10px] h-[10px] bg-gray-800/40 rounded-[1px]" />
                <div className="w-[10px] h-[10px] bg-emerald-950/70 rounded-[1px]" />
                <div className="w-[10px] h-[10px] bg-emerald-800/80 rounded-[1px]" />
                <div className="w-[10px] h-[10px] bg-emerald-50 rounded-[1px]" />
                <span>More</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
