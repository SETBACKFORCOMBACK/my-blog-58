import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },  
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="block">
              <h1 className="text-2xl font-bold text-foreground">Imran Sheik</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button key={label} variant="outline" size="sm" asChild>
                <a href={href} aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm" 
              aria-label="Download Resume"
              onClick={() => alert('Resume download will be available soon!')}
            >
              Resume
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-6 space-y-4">
              <div className="flex space-x-2 items-center">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button key={label} variant="outline" size="sm" asChild>
                    <a href={href} aria-label={label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
                
                <ThemeToggle />
              </div>
              
                <Button 
                  variant="outline" 
                  size="sm" 
                  aria-label="Download Resume"
                  onClick={() => alert('Resume download will be available soon!')}
                >
                  Resume
                </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;