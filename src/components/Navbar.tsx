import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <Home className="h-4 w-4" />, label: 'Home', href: '#home' },
  { icon: <User className="h-4 w-4" />, label: 'About', href: '#about' },
  { icon: <Briefcase className="h-4 w-4" />, label: 'Experience', href: '#experience' },
  { icon: <Code2 className="h-4 w-4" />, label: 'Skills', href: '#skills' },
  { icon: <FolderGit2 className="h-4 w-4" />, label: 'Projects', href: '#projects' },
  { icon: <Mail className="h-4 w-4" />, label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="font-mono text-xl font-bold gradient-text">
          AI Engineer
        </a>
        
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md flex items-center gap-1.5 transition-all",
                  activeSection === item.href.substring(1)
                    ? "bg-muted text-primary font-medium" 
                    : "hover:bg-muted/50"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                  setActiveSection(item.href.substring(1));
                }}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="container py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md flex items-center gap-1.5 transition-all",
                    activeSection === item.href.substring(1)
                      ? "bg-muted text-primary font-medium" 
                      : "hover:bg-muted/50"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                    setActiveSection(item.href.substring(1));
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
