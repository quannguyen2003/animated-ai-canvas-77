
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'Neural Image Restoration',
    description: 'Deep learning model that restores and enhances damaged or low-quality images using a custom GAN architecture with attention mechanisms.',
    image: 'bg-gradient-to-br from-violet-500 to-indigo-800',
    tags: ['PyTorch', 'Computer Vision', 'GANs', 'Python'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'project2',
    title: 'LLM Chatbot Assistant',
    description: 'Conversational AI assistant built with large language models, fine-tuned for specialized domains with RAG capabilities.',
    image: 'bg-gradient-to-br from-blue-400 to-blue-700',
    tags: ['NLP', 'Transformers', 'HuggingFace', 'Python'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'project3',
    title: 'Predictive Analytics Dashboard',
    description: 'Interactive data visualization platform with predictive capabilities for business intelligence metrics.',
    image: 'bg-gradient-to-br from-emerald-400 to-green-700',
    tags: ['React', 'D3.js', 'scikit-learn', 'TypeScript'],
    github: '#',
    featured: false
  },
  {
    id: 'project4',
    title: 'ML Model Deployment Pipeline',
    description: 'End-to-end MLOps pipeline for automated training, testing, and deployment of machine learning models.',
    image: 'bg-gradient-to-br from-orange-400 to-pink-600',
    tags: ['MLflow', 'Docker', 'AWS', 'Python'],
    github: '#',
    featured: false
  },
  {
    id: 'project5',
    title: 'Time Series Forecasting Engine',
    description: 'Advanced time series forecasting system using ensemble of deep learning models for accurate predictions.',
    image: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    tags: ['TensorFlow', 'LSTM', 'Time Series', 'Python'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'project6',
    title: 'Reinforcement Learning Environment',
    description: 'Custom environment for training RL agents to solve complex robotics and control problems.',
    image: 'bg-gradient-to-br from-purple-500 to-indigo-900',
    tags: ['Reinforcement Learning', 'PyTorch', 'Python', 'Gymnasium'],
    github: '#',
    featured: false
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex gap-2">
          <Button 
            variant={filter === 'featured' ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter('featured')}
          >
            Featured
          </Button>
          <Button 
            variant={filter === 'all' ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group overflow-hidden border-muted bg-card/30 hover:bg-card/50 transition-all">
            <div className={`h-48 ${project.image} group-hover:opacity-80 transition-opacity`}>
              <div className="h-full w-full flex items-center justify-center p-6">
                <h3 className="text-white text-xl font-bold text-center">{project.title}</h3>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              {project.github && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              
              {project.demo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
