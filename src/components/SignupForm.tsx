
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  institution: z.string().min(2, { message: "Institution name is required." }),
  role: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SignupForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      institution: "",
      role: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // In a real application, you would submit this data to your backend
    toast({
      title: "Free trial activation initiated!",
      description: "Check your email to complete the setup process.",
    });
    form.reset();
  }

  return (
    <section id="signup" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[1px] h-40 bg-primary/20"></div>
        <div className="absolute top-20 right-10 w-20 h-[1px] bg-primary/20"></div>
        <div className="absolute bottom-20 left-10 w-[1px] h-32 bg-primary/20"></div>
        <div className="absolute bottom-20 left-10 w-16 h-[1px] bg-primary/20"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-mono">&gt; FREE TRIAL</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl hacker-text text-glitch">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
              Start securing your exams today
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80 font-mono">
            &gt; Get full access to all features for 14 days. No credit card required.
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-lg">
          <div className="cyber-box rounded-sm bg-black/50 backdrop-blur-sm p-[1px]">
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground/80">Name</FormLabel>
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
                            <Input placeholder="john@example.com" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
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
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground/80">Role (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Teacher, Administrator, etc." {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                        </FormControl>
                        <FormDescription className="text-xs font-mono">
                          Tell us your role so we can customize your experience.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full group relative overflow-hidden transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start Your Free Trial
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
                  </Button>
                </form>
              </Form>
              <div className="mt-6 text-center">
                <p className="text-xs text-foreground/60 font-mono">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust symbols */}
        <div className="mt-16">
          <p className="text-center text-sm font-medium text-foreground/60 mb-6 font-mono">TRUSTED BY LEADING INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://source.unsplash.com/random/200x100/?university,logo" alt="University logo" className="h-full w-auto" />
            </div>
            <div className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://source.unsplash.com/random/200x100/?school,logo" alt="School logo" className="h-full w-auto" />
            </div>
            <div className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://source.unsplash.com/random/200x100/?education,logo" alt="Education logo" className="h-full w-auto" />
            </div>
            <div className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://source.unsplash.com/random/200x100/?college,logo" alt="College logo" className="h-full w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
