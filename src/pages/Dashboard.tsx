
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, Clock, Eye, Lock, Settings, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  // Sample exam data
  const exams = [
    { id: 1, title: "Midterm Exam", subject: "Computer Science", date: "2023-11-15", students: 42, status: "Active" },
    { id: 2, title: "Final Exam", subject: "Data Structures", date: "2023-12-20", students: 38, status: "Scheduled" },
    { id: 3, title: "Quiz 3", subject: "Algorithms", date: "2023-10-30", students: 45, status: "Completed" },
  ];

  return (
    <MainLayout>
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground hacker-text">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-red-500/80">
                Teacher Dashboard
              </span>
            </h1>
            <p className="mt-2 text-foreground/70 font-mono">
              &gt; Manage your exams and monitor student activity
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Button asChild className="rounded-sm">
              <Link to="/create-exam" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>Create Exam</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-sm">
              <Link to="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Security Stats */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 font-mono text-primary">&gt; Security Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="cyber-box border-primary/30 bg-black/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Secure Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">98.7%</p>
                <p className="text-sm text-muted-foreground">Cheating prevention rate</p>
              </CardContent>
            </Card>
            <Card className="cyber-box border-primary/30 bg-black/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Data encryption</p>
              </CardContent>
            </Card>
            <Card className="cyber-box border-primary/30 bg-black/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  AI Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Continuous scanning</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Exams List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold font-mono text-primary">&gt; Your Exams</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/all-exams">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Card key={exam.id} className="cyber-box border-primary/30 bg-black/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {exam.title}
                  </CardTitle>
                  <CardDescription>{exam.subject}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Students:</span>
                      <span>{exam.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`${
                        exam.status === "Active" ? "text-green-500" : 
                        exam.status === "Scheduled" ? "text-blue-500" : 
                        "text-gray-500"
                      }`}>{exam.status}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Manage Exam</Button>
                </CardFooter>
              </Card>
            ))}
            
            {/* Add New Exam Card */}
            <Card className="cyber-box border-dashed border-primary/30 bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center p-6">
              <Button variant="ghost" asChild className="h-full w-full flex flex-col gap-4 py-8">
                <Link to="/create-exam">
                  <Plus className="h-12 w-12 text-primary/60" />
                  <p className="font-medium">Create New Exam</p>
                </Link>
              </Button>
            </Card>
          </div>
        </div>
        
        {/* Security Features Banner */}
        <div className="mt-12 rounded-sm cyber-box border border-primary/40 bg-black/50 backdrop-blur-sm p-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">The Most Secure Exam Platform</h3>
          </div>
          <p className="max-w-2xl mx-auto mb-6 text-foreground/80 font-mono">
            GlowHub uses advanced AI surveillance, secure browsers, and privacy-first data handling 
            to ensure your exams are the most secure in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Eye className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold">AI Monitoring</h4>
              <p className="text-xs text-foreground/70">Detects suspicious behavior</p>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold">End-to-End Encryption</h4>
              <p className="text-xs text-foreground/70">All data is fully encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold">Privacy Controls</h4>
              <p className="text-xs text-foreground/70">Student data is protected</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
