
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { 
  BrainCircuit, 
  Code2, 
  Database, 
  BarChart3, 
  Cloud, 
  Sparkles 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <BrainCircuit className="h-5 w-5 text-primary" />,
    title: 'Machine Learning',
    skills: [
      { name: 'Supervised Learning', level: 95, color: '#c4b5fd' },
      { name: 'Deep Learning', level: 90, color: '#a5b4fc' },
      { name: 'Natural Language Processing', level: 85, color: '#818cf8' },
      { name: 'Computer Vision', level: 80, color: '#6366f1' },
    ]
  },
  {
    icon: <Code2 className="h-5 w-5 text-primary" />,
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95, color: '#22d3ee' },
      { name: 'JavaScript', level: 85, color: '#38bdf8' },
      { name: 'TypeScript', level: 80, color: '#2dd4bf' },
      { name: 'C++', level: 75, color: '#4ade80' },
    ]
  },
  {
    icon: <Database className="h-5 w-5 text-primary" />,
    title: 'Data',
    skills: [
      { name: 'SQL', level: 85, color: '#f472b6' },
      { name: 'Data Analysis', level: 90, color: '#fb7185' },
      { name: 'Data Visualization', level: 80, color: '#e879f9' },
      { name: 'Big Data', level: 75, color: '#d946ef' },
    ]
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    title: 'Frameworks',
    skills: [
      { name: 'PyTorch', level: 90, color: '#fbbf24' },
      { name: 'TensorFlow', level: 85, color: '#f59e0b' },
      { name: 'scikit-learn', level: 95, color: '#d97706' },
      { name: 'React', level: 80, color: '#f97316' },
    ]
  },
  {
    icon: <Cloud className="h-5 w-5 text-primary" />,
    title: 'Cloud',
    skills: [
      { name: 'AWS', level: 85, color: '#64748b' },
      { name: 'Google Cloud Platform', level: 80, color: '#94a3b8' },
      { name: 'Azure', level: 75, color: '#cbd5e1' },
      { name: 'Docker & Kubernetes', level: 80, color: '#e2e8f0' },
    ]
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: 'Specialized',
    skills: [
      { name: 'Reinforcement Learning', level: 75, color: '#a78bfa' },
      { name: 'MLOps', level: 85, color: '#8b5cf6' },
      { name: 'Transfer Learning', level: 80, color: '#7c3aed' },
      { name: 'Generative AI', level: 90, color: '#6d28d9' },
    ]
  },
];

const SkillsSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-card/30 hover:bg-card/50 transition-colors border-muted">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {category.icon}
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-1.5"
                    indicatorClassName="animate-pulse-glow"
                    style={{ 
                      '--progress-background': 'hsl(var(--muted))',
                      '--progress-foreground': skill.color 
                    } as React.CSSProperties} 
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-lg font-medium mb-4">Certifications & Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'AWS Certified Machine Learning',
            'TensorFlow Developer Certificate',
            'Google Cloud Professional ML Engineer',
            'Deep Learning Specialization',
            'MLOps & Data Engineering Certificate',
            'Kaggle Competition Gold Medal'
          ].map((cert, index) => (
            <div 
              key={index} 
              className="p-4 border border-muted rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
