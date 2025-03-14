
import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight, ScanFace, Clock, CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  examCode: z.string().min(6, { message: "Exam code must be at least 6 characters." }),
});

const otpSchema = z.object({
  otp: z
    .string()
    .min(6, { message: "OTP must be 6 digits." })
    .max(6, { message: "OTP must be 6 digits." }),
});

type EmailFormValues = z.infer<typeof emailSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

const TakeExam: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [countdown, setCountdown] = useState(0);
  
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      examCode: "",
    },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  function submitEmail(values: EmailFormValues) {
    console.log(values);
    // In a real application, this would send an OTP to the student's email
    toast({
      title: "OTP sent!",
      description: "Check your email for the one-time verification code.",
    });
    
    // Start countdown timer (2 minutes)
    setCountdown(120);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setStep("otp");
  }

  function submitOTP(values: OtpFormValues) {
    console.log(values);
    // In a real application, this would verify the OTP and redirect to the exam
    toast({
      title: "Verification successful!",
      description: "Redirecting to your exam...",
    });
    
    // Simulate redirect to the exam
    setTimeout(() => {
      navigate("/exam-room");
    }, 1500);
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const resendOTP = () => {
    toast({
      title: "New OTP sent!",
      description: "Check your email for the new verification code.",
    });
    
    // Reset countdown
    setCountdown(120);
  };

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
              {step === "email" ? 
                <ScanFace className="h-6 w-6 text-primary" /> : 
                <CheckCheck className="h-6 w-6 text-primary" />
              }
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight hacker-text text-glitch">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
                {step === "email" ? "Enter Exam Details" : "Verify Your Identity"}
              </span>
            </h2>
            <p className="mt-2 text-foreground/70 font-mono">
              &gt; {step === "email" ? "Access your secure exam session" : "Enter the verification code sent to your email"}
            </p>
          </div>
          
          <div className="cyber-box rounded-sm bg-black/50 backdrop-blur-sm p-[1px]">
            <div className="bg-background/30 backdrop-blur-sm p-8 rounded-sm">
              {step === "email" ? (
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(submitEmail)} className="space-y-6">
                    <FormField
                      control={emailForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground/80">Student Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@school.edu" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
                          </FormControl>
                          <FormDescription className="text-xs font-mono">
                            We'll send a verification code to this email.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={emailForm.control}
                      name="examCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground/80">Exam Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter the code provided by your instructor" {...field} className="bg-background/50 border-primary/30 focus:border-primary/80" />
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
                        Continue
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
                    </Button>
                  </form>
                </Form>
              ) : (
                <Form {...otpForm}>
                  <form onSubmit={otpForm.handleSubmit(submitOTP)} className="space-y-6">
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem className="space-y-6">
                          <FormLabel className="font-mono text-foreground/80 flex justify-between items-center">
                            <span>Verification Code</span>
                            {countdown > 0 && (
                              <span className="flex items-center text-foreground/60 text-sm">
                                <Clock className="h-3 w-3 mr-1" />
                                {formatTime(countdown)}
                              </span>
                            )}
                          </FormLabel>
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} className="bg-background/50 border-primary/30" />
                                <InputOTPSlot index={1} className="bg-background/50 border-primary/30" />
                                <InputOTPSlot index={2} className="bg-background/50 border-primary/30" />
                                <InputOTPSlot index={3} className="bg-background/50 border-primary/30" />
                                <InputOTPSlot index={4} className="bg-background/50 border-primary/30" />
                                <InputOTPSlot index={5} className="bg-background/50 border-primary/30" />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormDescription className="text-xs font-mono text-center">
                            Enter the 6-digit code sent to your email.
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
                        Verify and Start Exam
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-y-0 right-0 w-5 bg-primary/20 transition-all group-hover:w-full -z-10"></span>
                    </Button>
                    
                    <div className="flex justify-center">
                      <Button 
                        type="button" 
                        variant="link" 
                        onClick={resendOTP}
                        disabled={countdown > 0}
                        className="text-primary"
                      >
                        {countdown > 0 ? `Resend in ${formatTime(countdown)}` : "Resend Code"}
                      </Button>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button 
                        type="button" 
                        variant="link" 
                        onClick={() => setStep("email")}
                        className="text-primary"
                      >
                        Back to Exam Details
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <p className="text-xs text-foreground/60 font-mono">
              The Most Secure Exam Platform for Students
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TakeExam;
