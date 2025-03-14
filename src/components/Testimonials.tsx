
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "We've reduced cheating by 98% since implementing GlowHub's secure exam platform. Our students now have a level playing field.",
    author: "Dr. Sarah Johnson",
    role: "University Professor",
    rating: 5,
  },
  {
    quote: "The proctoring features are game-changing. I can focus on creating better assessments instead of worrying about academic integrity.",
    author: "Mark Williams",
    role: "High School Principal",
    rating: 5,
  },
  {
    quote: "Our certification exams have never been more secure. The AI monitoring catches things human proctors might miss.",
    author: "Lisa Chen",
    role: "Exam Center Director",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[1px] h-40 bg-primary/20"></div>
        <div className="absolute top-20 right-10 w-20 h-[1px] bg-primary/20"></div>
        <div className="absolute bottom-20 left-10 w-[1px] h-32 bg-primary/20"></div>
        <div className="absolute bottom-20 left-10 w-16 h-[1px] bg-primary/20"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block cyber-box px-4 py-1 mb-4 text-primary font-mono text-sm">
            <span>&gt; USER FEEDBACK</span>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl hacker-text text-glitch">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
              Trusted by educators worldwide
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80 font-mono">
            &gt; See what teachers and exam administrators are saying about our secure exam platform.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="cyber-box bg-black/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 mb-4 font-mono text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto">
                  <p className="font-semibold text-foreground text-glitch">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center justify-center text-center cyber-box bg-black/50 backdrop-blur-lg p-8 rounded-sm border border-primary/40 animate-in fade-in duration-700">
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4 hacker-text text-glitch">Ready to secure your exams?</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl font-mono">
            Join thousands of educators who trust GlowHub for fair and secure exams. Start today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-sm border border-primary/20 group relative overflow-hidden">
              <a href="#signup" className="flex items-center gap-2 px-6">
                <span>Start</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-sm border-primary/50 hover:border-primary/80 px-6">
              <a href="#demo" className="flex items-center gap-2">
                <span>Book a Demo</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
