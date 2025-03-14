
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal, Shield, Clock, Users } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-red-900/20 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      {/* Tech circuit lines - top right */}
      <div className="absolute top-0 right-0 w-1/3 h-64 pointer-events-none">
        <div className="absolute top-20 right-20 w-[1px] h-32 bg-primary/30"></div>
        <div className="absolute top-20 right-40 w-16 h-[1px] bg-primary/30"></div>
        <div className="absolute top-40 right-40 w-[1px] h-20 bg-primary/30"></div>
        <div className="absolute top-60 right-20 w-20 h-[1px] bg-primary/30"></div>
      </div>
      
      {/* Tech circuit lines - bottom left */}
      <div className="absolute bottom-0 left-0 w-1/3 h-64 pointer-events-none">
        <div className="absolute bottom-20 left-20 w-[1px] h-32 bg-primary/30"></div>
        <div className="absolute bottom-20 left-20 w-16 h-[1px] bg-primary/30"></div>
        <div className="absolute bottom-40 left-36 w-[1px] h-20 bg-primary/30"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 text-primary/80 font-mono text-sm">
              <Terminal size={16} className="text-primary" />
              <span className="animate-pulse">SYSTEM_READY</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground hacker-text text-glitch sm:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
              Secure Exam Platform for Modern Educators
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 font-mono">
            &gt; Prevent cheating, ensure fairness, and streamline exam administration with our
            advanced security features and intuitive interface.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
            <Button asChild size="lg" className="rounded-sm border border-primary/20 group relative overflow-hidden animate-pulse">
              <a href="#signup" className="flex items-center gap-2 px-6">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-sm border-primary/50 hover:border-primary/80 px-6">
              <a href="#demo" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Request Demo</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Stats Counter */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 glass-morphism p-8 rounded-sm border border-primary/20 animate-in fade-in duration-700">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-primary mr-2" />
            </div>
            <p className="text-3xl font-bold text-foreground hacker-text">10,000+</p>
            <p className="text-sm text-foreground/70 font-mono">Teachers Trust Us</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-primary mr-2" />
            </div>
            <p className="text-3xl font-bold text-foreground hacker-text">99.9%</p>
            <p className="text-sm text-foreground/70 font-mono">Cheating Prevention Rate</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-6 w-6 text-primary mr-2" />
            </div>
            <p className="text-3xl font-bold text-foreground hacker-text">70%</p>
            <p className="text-sm text-foreground/70 font-mono">Time Saved on Proctoring</p>
          </div>
        </div>
        
        <div className="mt-16 flow-root sm:mt-24">
          <div className="cyber-box rounded-sm p-[1px] group hover:border-primary/80 transition-all duration-300">
            <div className="-m-2 p-2 lg:-m-4 lg:p-4 overflow-hidden">
              <img
                src="https://source.unsplash.com/random/1920x1080/?exam,security,technology"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-sm shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
