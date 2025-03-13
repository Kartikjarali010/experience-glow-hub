
import React from "react";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; 2023 GlowHub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
