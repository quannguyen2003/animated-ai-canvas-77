
import React from 'react';
import { Calendar, Building, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  yearStart: string;
  yearEnd: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'techcorp',
    title: 'Senior AI Engineer',
    company: 'TechInnovate AI',
    period: 'Jan 2021 - Present',
    yearStart: '2021',
    yearEnd: 'Present',
    description: 'Leading the development of large language models for enterprise applications. Optimized model training pipelines reducing inference time by 40%.',
    technologies: ['PyTorch', 'Transformers', 'CUDA', 'AWS SageMaker']
  },
  {
    id: 'datascience',
    title: 'Machine Learning Engineer',
    company: 'DataVision Corp',
    period: 'Mar 2019 - Dec 2020',
    yearStart: '2019',
    yearEnd: '2021',
    description: 'Designed and implemented computer vision algorithms for autonomous systems. Developed a real-time object detection system with 95% accuracy.',
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'Kubernetes']
  },
  {
    id: 'ailab',
    title: 'AI Research Intern',
    company: 'Future AI Labs',
    period: 'Jun 2018 - Feb 2019',
    yearStart: '2018',
    yearEnd: '2019',
    description: 'Conducted research on reinforcement learning algorithms. Published a paper on multi-agent systems at a top-tier conference.',
    technologies: ['PyTorch', 'OpenAI Gym', 'JAX', 'Docker']
  }
];

const ExperienceSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="section-title">Work Experience</h2>
      
      <p className="text-muted-foreground max-w-2xl mb-8">
        My professional journey in AI engineering has been marked by impactful roles where 
        I've applied cutting-edge techniques to solve complex problems.
      </p>
      
      <div className="relative mt-12">
        {/* Timeline vertical line */}
        <div className="absolute left-[22px] top-1 bottom-1 w-[2px] bg-border" />
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-14">
              {/* Calendar icon with year */}
              <div className="absolute left-0 top-0 flex flex-col items-center">
                <div className="w-11 h-11 rounded-md bg-muted flex items-center justify-center text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium mt-1 text-primary">
                  {exp.yearStart} - {exp.yearEnd}
                </span>
              </div>
              
              {/* Content */}
              <div className="rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-colors p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <Building className="h-4 w-4 mr-1.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-accent/20 hover:bg-accent/30 text-foreground font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-primary hover:text-primary/80 p-0 h-auto"
                >
                  View Details <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
