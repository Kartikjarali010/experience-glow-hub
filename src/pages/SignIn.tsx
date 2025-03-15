import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setAuthError(null);
    
    // Simulate sign-in process
    console.log("Sign in attempted with:", values);
    
    // Mock successful authentication
    setTimeout(() => {
      toast({
        title: "Login successful!",
        description: "Redirecting to your dashboard...",
      });
      
      // Navigate to dashboard after simulated login
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
      
      setIsLoading(false);
    }, 1000);
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
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight hacker-text text-glitch">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
                Teacher Sign In
              </span>
            </h2>
            <p className="mt-2 text-foreground/70 font-mono">
              &gt; Access your secure exam dashboard
            </p>
          </div>
          
          <div className="cyber-box rounded-sm bg-black/50 backdrop-blur-sm p-[1px]">
            <div className="bg-background/30 backdrop-blur-sm p-8 rounded-sm">
              {authError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{authError}</AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  
                  <div className="flex items-center justify-between">
                    <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full group relative overflow-hidden transition-all duration-300"
                    disabled={isLoading}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isLoading ? "Signing in..." : "Sign In"}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/70">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                    Sign up
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

export default SignIn;
