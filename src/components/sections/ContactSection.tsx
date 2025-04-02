
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would normally send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <div className="space-y-8">
      <h2 className="section-title">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Get In Touch</h3>
          <p className="text-muted-foreground mb-6">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            a project idea, or just want to say hi, I'd love to hear from you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:john.doe@example.com" className="hover:text-primary transition-colors">
                john.doe@example.com
              </a>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <Card className="mt-8 p-4 border border-muted bg-muted/30">
            <h4 className="font-medium mb-2">Looking for collaboration?</h4>
            <p className="text-sm text-muted-foreground">
              I'm always interested in working on innovative AI projects that push the boundaries of what's possible.
            </p>
          </Card>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm">Subject</label>
              <Input id="subject" placeholder="How can I help you?" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project, question, or just say hi!" 
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              I'll respond to your message as soon as possible.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
