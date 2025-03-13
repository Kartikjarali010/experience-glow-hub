
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Vision: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Vision</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transforming the way teams work together
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            We're on a mission to create intuitive tools that empower teams to achieve their full potential.
          </p>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
              <TabsTrigger value="story">Our Story</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-7">
                We're dedicated to simplifying complex workflows through intuitive design and powerful technology. 
                Our mission is to provide tools that eliminate barriers to productivity, enabling teams to focus 
                on what truly matters - creating amazing products and services.
              </p>
            </TabsContent>
            <TabsContent value="values" className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3 text-foreground/80 leading-7">
                <li><strong>Innovation:</strong> We constantly push boundaries to create new solutions.</li>
                <li><strong>Simplicity:</strong> We believe in making complex things simple and accessible.</li>
                <li><strong>Collaboration:</strong> We work together with our customers to build better products.</li>
                <li><strong>Quality:</strong> We are committed to excellence in everything we create.</li>
                <li><strong>Integrity:</strong> We act with honesty, transparency, and respect in all our interactions.</li>
              </ul>
            </TabsContent>
            <TabsContent value="story" className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Our Story</h3>
              <p className="text-foreground/80 leading-7">
                Founded in 2023 by a team of passionate developers and designers, our company emerged from a 
                shared frustration with existing tools. We set out to create something better - a platform 
                that truly understands the needs of modern teams. What started as a side project has evolved 
                into a comprehensive solution used by innovative teams around the world.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Vision;
