
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, BarChart, Search, Lock, Star } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description: "Experience unmatched speed with our optimized algorithms and efficient code.",
    icon: Zap,
  },
  {
    name: "Team Collaboration",
    description: "Work together seamlessly with real-time updates and intuitive sharing tools.",
    icon: Users,
  },
  {
    name: "Advanced Analytics",
    description: "Gain deep insights with comprehensive data visualization and reporting.",
    icon: BarChart,
  },
  {
    name: "Smart Search",
    description: "Find exactly what you need instantly with our powerful search capabilities.",
    icon: Search,
  },
  {
    name: "Enterprise Security",
    description: "Rest easy knowing your data is protected by industry-leading security measures.",
    icon: Lock,
  },
  {
    name: "Premium Support",
    description: "Get help when you need it from our dedicated team of experts.",
    icon: Star,
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
            <span>&gt; SYSTEM FEATURES</span>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl hacker-text text-glitch">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
              Everything you need to succeed
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80 font-mono">
            &gt; Our comprehensive suite of tools helps you streamline your workflow,
            collaborate effectively, and achieve your goals faster.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.name} className="cyber-box bg-black/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-colors duration-300 group">
              <CardHeader>
                <div className="flex items-center">
                  <feature.icon className="h-8 w-8 text-primary mr-2" />
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
      </div>
    </section>
  );
};

export default Features;
