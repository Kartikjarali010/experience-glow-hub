
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, BarChart, Search, Lock, Star, Eye, BookOpen, Shield } from "lucide-react";

const features = [
  {
    name: "AI Proctoring",
    description: "Advanced AI monitors exams in real-time to detect and prevent cheating attempts automatically.",
    icon: Eye,
  },
  {
    name: "Secure Browser",
    description: "Locks down students' devices, preventing access to unauthorized resources during exams.",
    icon: Lock,
  },
  {
    name: "Plagiarism Detection",
    description: "Sophisticated algorithms identify copied content and suspicious answer patterns.",
    icon: Search,
  },
  {
    name: "Real-time Analytics",
    description: "Monitor exam progress, review flagged incidents, and analyze performance in real-time.",
    icon: BarChart,
  },
  {
    name: "Exam Builder",
    description: "Create comprehensive assessments with various question types and randomization options.",
    icon: BookOpen,
  },
  {
    name: "Identity Verification",
    description: "Multi-factor authentication ensures only registered students can access exams.",
    icon: Shield,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Tech circuit pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-[1px] h-32 bg-primary/20"></div>
        <div className="absolute top-1/4 left-10 w-16 h-[1px] bg-primary/20"></div>
        <div className="absolute top-1/3 right-10 w-[1px] h-48 bg-primary/20"></div>
        <div className="absolute top-1/3 right-10 w-24 h-[1px] bg-primary/20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[1px] h-24 bg-primary/20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-[1px] bg-primary/20"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block cyber-box px-4 py-1 mb-4 text-primary font-mono text-sm">
            <span>&gt; PLATFORM FEATURES</span>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl hacker-text text-glitch">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
              Comprehensive exam security
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80 font-mono">
            &gt; Our platform provides everything you need to create, administer, and
            monitor secure exams with confidence.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.name} 
              className="cyber-box bg-black/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center">
                  <div className="rounded-full bg-primary/10 p-2 mr-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-glitch">{feature.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm font-mono">
                  &gt; {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Feature showcase with image */}
        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block cyber-box px-3 py-1 text-primary font-mono text-sm">
              <span>&gt; ADVANCED SECURITY</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground hacker-text">
              AI-Powered Proctoring That Learns and Adapts
            </h3>
            <p className="text-foreground/80 leading-7 font-mono text-sm">
              Our advanced AI monitors student behavior, tracks eye movements, and detects suspicious activities in real-time. 
              Unlike traditional proctoring systems, our AI learns and adapts to new cheating methods, ensuring your exams 
              remain secure against evolving threats.
            </p>
            <ul className="space-y-3">
              {[
                "Facial recognition and continuous identity verification",
                "Environment scanning and prohibited object detection",
                "Automated flagging of suspicious behaviors",
                "Comprehensive post-exam reports with video evidence"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Lock className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="cyber-box rounded-sm p-[1px] group hover:border-primary/80 transition-all duration-300">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://source.unsplash.com/random/800x600/?technology,security"
                  alt="AI Proctoring"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
