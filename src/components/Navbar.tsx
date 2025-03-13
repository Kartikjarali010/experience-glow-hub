
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">
              GlowHub
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#about" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonials
              </a>
              <Button asChild size="sm" className="ml-4">
                <a href="#signup">Join Beta</a>
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Features
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Testimonials
            </a>
            <Button asChild size="sm" className="mt-4 w-full">
              <a href="#signup" onClick={toggleMenu}>Join Beta</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
