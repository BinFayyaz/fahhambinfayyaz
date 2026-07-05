import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  strings: string[];
  speed?: number;
  backSpeed?: number;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  speed = 90,
  backSpeed = 50,
  delay = 1800,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(speed);

        if (text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(delay); // Wait at the end of the text
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(backSpeed);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, speed, backSpeed, delay, typingSpeed]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 font-mono font-bold border-r-2 border-cyan-400 pr-1 animate-pulse">
      {text}
    </span>
  );
};
