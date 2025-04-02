
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeTypingAnimation from '@/components/CodeTypingAnimation';

const HomeSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col space-y-6">
        <div>
          <p className="text-muted-foreground mb-2 font-mono">Hello, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
            <span className="gradient-text">John Doe</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground">
            I build AI solutions.
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md">
          I'm an AI Engineer specializing in machine learning, deep learning, 
          and building intelligent systems that solve real-world problems.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        <a 
          href="#about" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit pt-6"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          <span>Learn more</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
      
      <div className="w-full">
        <CodeTypingAnimation 
          code={`// Machine Learning Engineer
          
class AIEngineer {
  constructor() {
    this.skills = [
      'Deep Learning', 
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning'
    ];
    this.languages = [
      'Python', 'JavaScript', 
      'TypeScript', 'C++'
    ];
    this.frameworks = [
      'TensorFlow', 'PyTorch', 
      'scikit-learn', 'React'
    ];
  }

  solveProblems(problem) {
    const solution = this.analyze(problem)
      .then(this.buildModel)
      .then(this.deploy);
      
    return solution;
  }
}

// Let's build something amazing!`} 
          delay={15}
        />
      </div>
    </div>
  );
};

export default HomeSection;
