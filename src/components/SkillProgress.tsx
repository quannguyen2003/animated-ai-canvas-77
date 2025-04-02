
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillProgressProps {
  value: number;
  className?: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ value, className }) => {
  return (
    <Progress 
      value={value} 
      className={className}
      style={{ 
        "--progress-value": `${value}%`,
      } as React.CSSProperties}
    />
  );
};

export default SkillProgress;
