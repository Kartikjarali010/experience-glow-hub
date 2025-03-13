
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
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Our comprehensive suite of tools helps you streamline your workflow,
            collaborate effectively, and achieve your goals faster.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-background/50 backdrop-blur-md border hover:shadow-md transition-all duration-300">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
