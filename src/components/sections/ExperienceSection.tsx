
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'techcorp',
    company: 'TechCorp AI',
    position: 'Senior AI Engineer',
    period: 'Jan 2021 - Present',
    description: [
      'Led the development of a computer vision system that improved manufacturing quality control efficiency by 35%',
      'Designed and implemented a recommendation engine that increased user engagement by 28% across platform services',
      'Mentored junior engineers and established best practices for ML model development and deployment',
      'Collaborated with cross-functional teams to integrate AI solutions into existing product offerings'
    ],
    technologies: ['PyTorch', 'Docker', 'Kubernetes', 'MLflow', 'AWS SageMaker']
  },
  {
    id: 'datascience',
    company: 'DataScience Inc.',
    position: 'Machine Learning Engineer',
    period: 'Mar 2019 - Dec 2020',
    description: [
      'Developed NLP models for sentiment analysis that improved customer feedback processing time by 60%',
      'Built and deployed a real-time anomaly detection system for network security monitoring',
      'Optimized ML pipelines resulting in 40% reduction in model training time',
      'Authored detailed technical documentation and presented findings to technical and non-technical stakeholders'
    ],
    technologies: ['TensorFlow', 'Keras', 'Python', 'GCP', 'SQL']
  },
  {
    id: 'ailab',
    company: 'AI Research Lab',
    position: 'AI Research Intern',
    period: 'Jun 2018 - Feb 2019',
    description: [
      'Conducted research on reinforcement learning algorithms for robotic control systems',
      'Implemented and evaluated multiple deep learning architectures for image classification',
      'Co-authored a research paper published in a peer-reviewed AI conference',
      'Collaborated with a team of researchers to develop innovative AI solutions for real-world problems'
    ],
    technologies: ['PyTorch', 'Python', 'CUDA', 'OpenCV', 'ROS']
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('techcorp');
  
  return (
    <div className="space-y-8">
      <h2 className="section-title">Experience</h2>
      
      <Tabs defaultValue="techcorp" value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="mb-8 overflow-x-auto flex flex-nowrap w-full gap-1 bg-transparent">
          {experiences.map((exp) => (
            <TabsTrigger 
              key={exp.id} 
              value={exp.id}
              className="data-[state=active]:bg-accent/10 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {experiences.map((exp) => (
          <TabsContent key={exp.id} value={exp.id}>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-muted px-2 py-1 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm mt-2"
              >
                Company Website 
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ExperienceSection;
