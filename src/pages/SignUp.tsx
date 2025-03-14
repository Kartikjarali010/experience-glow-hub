
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  institution: z.string().min(2, { message: "Institution name is required." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      institution: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // In a real application, you would register with backend
    toast({
      title: "Account created!",
      description: "Redirecting to your dashboard...",
    });
    
    // Simulate redirect after registration
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  }

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[1px] h-40 bg-primary/20"></div>
          <div className="absolute top-20 right-10 w-20 h-[1px] bg-primary/20"></div>
          <div className="absolute bottom-20 left-10 w-[1px] h-32 bg-primary/20"></div>
          <div className="absolute bottom-20 left-10 w-16 h-[1px] bg-primary/20"></div>
        </div>
        
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center border border-primary/30 rounded-full p-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight hacker-text text-glitch">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
                Teacher Sign Up
              </span>
            </h2>
            <p className="mt-2 text-foreground/70 font-mono">
              &gt; Create your secure educator account
            </p>
          </div>
          
          <div className="cyber-box rounded-sm bg-black/50 backdrop-blur-sm p-[1px]">
            <div className="bg-background/30 backdrop-blur-sm p-8 rounded-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Institution</FormLabel>
                        <FormControl>
                          <Input placeholder="University or School name" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full group relative overflow-hidden transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Create Account
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/70">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary hover:text-primary/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <p className="text-xs text-foreground/60 font-mono">
              The Most Secure Exam Platform for Educators
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
