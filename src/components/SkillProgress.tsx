
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
  style?: React.CSSProperties;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ 
  value, 
  className,
  indicatorClassName,
  style
}) => {
  return (
    <Progress 
      value={value} 
      className={className}
      indicatorClassName={indicatorClassName}
      style={{ 
        "--progress-value": `${value}%`,
        ...style
      } as React.CSSProperties}
    />
  );
};

export default SkillProgress;
