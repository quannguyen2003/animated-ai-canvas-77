
import React, { useState, useEffect } from 'react';

interface CodeTypingAnimationProps {
  code: string;
  delay?: number;
}

const CodeTypingAnimation: React.FC<CodeTypingAnimationProps> = ({ 
  code, 
  delay = 20 
}) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + code[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [code, currentIndex, delay]);

  return (
    <div className="code-block">
      <pre><code className={`language-typescript ${isComplete ? 'animate-pulse-glow' : ''}`}>
        {text}
        {!isComplete && <span className="inline-block w-1 h-4 bg-primary animate-blink"></span>}
      </code></pre>
    </div>
  );
};

export default CodeTypingAnimation;
