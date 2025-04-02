
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm John Doe, an AI Engineer passionate about building intelligent systems
                that make a positive impact. My journey in artificial intelligence began during my
                computer science studies, where I was captivated by the potential of machines to
                learn and solve complex problems.
              </p>
              <p>
                With over 5 years of experience in the field, I've worked on a diverse range of
                projects from computer vision applications that help diagnose medical conditions to
                NLP systems that improve customer experiences through intelligent chat interactions.
              </p>
              <p>
                I believe in responsible AI development that considers ethics, bias, and transparency
                at every step of the process. When I'm not coding or training models, you'll find me
                contributing to open-source projects, writing about AI advancements, or hiking in
                the mountains.
              </p>
              <div className="pt-2">
                <h3 className="text-foreground font-medium mb-2">
                  Here are a few technologies I've been working with recently:
                </h3>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {[
                    'PyTorch', 'TensorFlow',
                    'Scikit-learn', 'Hugging Face',
                    'MLOps', 'React',
                    'Python', 'TypeScript',
                  ].map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Card className="overflow-hidden border border-muted bg-card/30 hover:bg-card/50 transition-colors animate-float">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center text-6xl font-bold text-primary/20">
                    JD
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">AI Engineer</h3>
                  <p className="text-sm text-muted-foreground">Passionate about solving complex problems with AI</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <p className="text-xs text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
