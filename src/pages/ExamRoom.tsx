
import React, { useState, useEffect } from "react";
import { Shield, Clock, Eye } from "lucide-react";

const ExamRoom: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Secure Exam Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-primary/30 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">CS101: Final Exam</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-sm">
              <Eye className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-foreground/80">Secure Monitoring Active</span>
            </div>
            
            <div className="flex items-center gap-2 py-1 px-3 rounded-sm border border-primary/40 bg-black/30">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-mono text-foreground font-medium">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Exam Content */}
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Questions Panel */}
        <div className="w-full md:w-3/4 p-6 md:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="p-6 rounded-sm cyber-box border border-primary/30 bg-black/30 backdrop-blur-sm">
                <h2 className="text-lg font-semibold mb-4">Question 1 of 10</h2>
                <p className="mb-6 font-mono">What is the primary advantage of using a secure exam platform?</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-sm border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <input type="radio" id="q1-a" name="q1" className="h-4 w-4 text-primary" />
                    <label htmlFor="q1-a" className="flex-grow cursor-pointer">Reducing administrative overhead</label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-sm border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <input type="radio" id="q1-b" name="q1" className="h-4 w-4 text-primary" />
                    <label htmlFor="q1-b" className="flex-grow cursor-pointer">Preventing academic dishonesty</label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-sm border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <input type="radio" id="q1-c" name="q1" className="h-4 w-4 text-primary" />
                    <label htmlFor="q1-c" className="flex-grow cursor-pointer">Simplifying grading procedures</label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-sm border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <input type="radio" id="q1-d" name="q1" className="h-4 w-4 text-primary" />
                    <label htmlFor="q1-d" className="flex-grow cursor-pointer">All of the above</label>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-sm cyber-box border border-primary/30 bg-black/30 backdrop-blur-sm">
                <h2 className="text-lg font-semibold mb-4">Question 2 of 10</h2>
                <p className="mb-6 font-mono">Explain how AI monitoring contributes to exam security (min. 100 words).</p>
                
                <textarea 
                  className="w-full h-40 p-3 rounded-sm border border-primary/30 bg-background/30 focus:border-primary/60 focus:outline-none resize-none"
                  placeholder="Type your answer here..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-12 flex justify-between">
              <button className="px-6 py-2 rounded-sm border border-primary/40 bg-background/50 text-foreground">Previous</button>
              <button className="px-6 py-2 rounded-sm bg-primary text-primary-foreground">Next</button>
            </div>
          </div>
        </div>
        
        {/* Navigation Panel */}
        <div className="w-full md:w-1/4 p-6 border-t md:border-t-0 md:border-l border-primary/20 bg-black/20 backdrop-blur-sm">
          <div className="sticky top-6">
            <h3 className="text-foreground font-semibold mb-4">Question Navigator</h3>
            
            <div className="grid grid-cols-5 gap-2 mb-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <button 
                  key={i}
                  className={`h-10 w-full flex items-center justify-center rounded-sm border ${
                    i < 2 ? 'bg-primary/20 border-primary/50' : 'border-primary/20 hover:border-primary/40'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 bg-primary/20 border border-primary/50 rounded-sm"></div>
                <span className="text-sm text-foreground/70">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 border border-primary/20 rounded-sm"></div>
                <span className="text-sm text-foreground/70">Unanswered</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-sm border border-primary/30 bg-black/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">Security Notice</h4>
              </div>
              <p className="text-xs text-foreground/80">
                This exam is being monitored for academic integrity. Any suspicious activity will be flagged for review.
              </p>
            </div>
            
            <button className="mt-8 w-full py-3 rounded-sm bg-primary text-primary-foreground font-semibold">
              Submit Exam
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamRoom;
