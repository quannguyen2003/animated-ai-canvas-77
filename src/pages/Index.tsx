
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionContainer from '@/components/SectionContainer';
import ParticlesBackground from '@/components/ParticlesBackground';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-3xl font-mono font-bold gradient-text mb-4">
            AI Engineer Portfolio
          </div>
          <div className="w-16 h-1 bg-primary mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      
      <main className="min-h-screen">
        <SectionContainer id="home" className="relative">
          <HomeSection />
        </SectionContainer>
        
        <SectionContainer id="about">
          <AboutSection />
        </SectionContainer>
        
        <SectionContainer id="experience">
          <ExperienceSection />
        </SectionContainer>
        
        <SectionContainer id="skills">
          <SkillsSection />
        </SectionContainer>
        
        <SectionContainer id="projects">
          <ProjectsSection />
        </SectionContainer>
        
        <SectionContainer id="contact">
          <ContactSection />
        </SectionContainer>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
