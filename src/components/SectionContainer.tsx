
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  className, 
  children 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 min-h-screen flex flex-col justify-center opacity-0",
        className
      )}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
