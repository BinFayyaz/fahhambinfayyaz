import React, { useMemo } from 'react';

export const ParticleBackground: React.FC = () => {
  const particleCount = 100;

  const { particles, styleSheet } = useMemo(() => {
    const list = [];
    let styles = '';

    for (let i = 0; i < particleCount; i++) {
      const size = Math.floor(Math.random() * 8) + 3; // Random size from 3px to 10px
      const startPositionY = Math.floor(Math.random() * 10) + 100; // Y start: 100vh to 110vh
      const duration = 8000 + Math.floor(Math.random() * 6000); // 8s to 14s for smooth drifting
      const delay = Math.floor(Math.random() * 14000); // Random delay offset
      
      const startX = Math.floor(Math.random() * 100); // Random start X (vw)
      const endX = Math.floor(Math.random() * 100); // Random end X (vw)
      const endY = -startPositionY - Math.floor(Math.random() * 30); // End Y (off-screen top)

      const keyframeName = `move-frames-${i}`;
      styles += `
        @keyframes ${keyframeName} {
          from {
            transform: translate3d(${startX}vw, ${startPositionY}vh, 0);
          }
          to {
            transform: translate3d(${endX}vw, ${endY}vh, 0);
          }
        }
        .particle-container-${i} {
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          transform: translateY(-10vh);
          animation-name: ${keyframeName};
          animation-duration: ${duration}ms;
          animation-delay: -${delay}ms; /* Negative delay to start pre-filled */
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `;

      list.push(i);
    }

    return { particles: list, styleSheet: styles };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
      <div className="w-full h-full relative overflow-hidden">
        {particles.map((index) => (
          <div key={index} className={`particle-container-${index}`}>
            <div
              className="w-full h-full rounded-full mix-blend-screen"
              style={{
                backgroundImage: 'radial-gradient(hsl(180, 100%, 80%), hsl(180, 100%, 80%) 10%, hsla(180, 100%, 80%, 0) 56%)',
                animation: 'fade-frames 200ms infinite, scale-frames 2s infinite',
                animationDelay: `${Math.floor(Math.random() * 4000)}ms`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
