
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Terminal className="h-6 w-6 text-primary mr-2" />
            <span className="text-2xl font-mono font-bold text-glitch bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">
              GlowHub
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-foreground/70 hover:text-primary px-3 py-2 rounded-sm text-sm font-mono transition-colors border-b border-transparent hover:border-primary/30">
                &gt;_Features
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary px-3 py-2 rounded-sm text-sm font-mono transition-colors border-b border-transparent hover:border-primary/30">
                &gt;_About
              </a>
              <a href="#testimonials" className="text-foreground/70 hover:text-primary px-3 py-2 rounded-sm text-sm font-mono transition-colors border-b border-transparent hover:border-primary/30">
                &gt;_Testimonials
              </a>
              <Button asChild size="sm" className="ml-4 rounded-sm border border-primary/20 bg-background hover:bg-primary/10 text-primary">
                <a href="#signup">&gt; Join Beta</a>
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-sm text-foreground border border-transparent hover:border-primary/30 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b cyber-box animate-in fade-in-50 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-foreground/70 hover:text-primary block px-3 py-2 rounded-sm text-base font-mono" onClick={toggleMenu}>
              &gt;_Features
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary block px-3 py-2 rounded-sm text-base font-mono" onClick={toggleMenu}>
              &gt;_About
            </a>
            <a href="#testimonials" className="text-foreground/70 hover:text-primary block px-3 py-2 rounded-sm text-base font-mono" onClick={toggleMenu}>
              &gt;_Testimonials
            </a>
            <Button asChild size="sm" className="mt-4 w-full rounded-sm border border-primary/20 bg-background hover:bg-primary/10 text-primary">
              <a href="#signup" onClick={toggleMenu}>&gt; Join Beta</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
