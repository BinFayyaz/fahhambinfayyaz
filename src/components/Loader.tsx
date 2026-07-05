import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const statusMessages = [
  "Initializing quantum matrix...",
  "Loading neural networks...",
  "Syncing Vercel deployments...",
  "Establishing REST API links...",
  "Injecting AI chat protocols...",
  "Compiling GameHub interfaces...",
  "Powering up UI elements...",
  "System fully online."
];

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2s total loading time
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.floor((step / steps) * 100), 100);
      setProgress(currentProgress);

      const currentIdx = Math.min(
        Math.floor((currentProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setStatusIdx(currentIdx);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center font-mono select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Glow Background */}
        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        {/* Circular loader */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              className="stroke-gray-800/60"
              strokeWidth="2"
              fill="transparent"
            />
            <motion.circle
              cx="56"
              cy="56"
              r="50"
              className="stroke-cyan-400"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * progress) / 100}
              transition={{ ease: "easeOut" }}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.5))'
              }}
            />
          </svg>
          <span className="absolute text-2xl font-extrabold text-cyan-400 font-display tracking-tight">
            {progress}%
          </span>
        </div>

        {/* Rotating terminal messages */}
        <div className="h-6 overflow-hidden mb-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIdx}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-gray-400 text-xs font-semibold tracking-widest uppercase"
            >
              {statusMessages[statusIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Cyberpunk matrix line decoration */}
        <div className="text-[9px] text-cyan-500/15 max-w-[280px] line-clamp-2 mt-4 break-all select-none leading-relaxed">
          {Array.from({ length: 42 }).map(() => Math.round(Math.random())).join('')}
          {" :: FahhamBinFayyaz_PORTFOLIO_v2.0 :: "}
          {Array.from({ length: 42 }).map(() => Math.round(Math.random())).join('')}
        </div>
      </div>
    </motion.div>
  );
};
