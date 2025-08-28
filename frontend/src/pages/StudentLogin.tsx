import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, User, GraduationCap } from "lucide-react";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student login attempt:", { studentId });
    
    if (studentId.trim()) {
      localStorage.setItem("studentLoggedIn", "true")
      navigate("/biometric-verification");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 sm:py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-blockchain-gradient rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Student Portal</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Student Login
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Access your secure voting portal using your university credentials. 
                  Make your voice heard in student elections.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="shadow-glow border-border">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center text-foreground">
                      Sign In
                    </CardTitle>
                    <CardDescription className="text-center text-muted-foreground">
                      Enter your student ID to access the voting portal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="studentId" className="text-sm font-medium text-foreground">
                          Student ID
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="studentId"
                            type="text"
                            placeholder="Enter your student ID"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Sign In to Portal
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-border" />
                        </div>
                      </div>

                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Secure & Transparent Voting
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      EuiVota uses advanced blockchain technology and biometric verification 
                      to ensure your vote is secure, private, and accurately counted.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blockchain-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Blockchain Security</h3>
                        <p className="text-sm text-muted-foreground">
                          All votes are immutably recorded on Hyperledger Fabric blockchain
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lemon-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Identity Verification</h3>
                        <p className="text-sm text-muted-foreground">
                          Advanced liveness checks ensure only eligible students can vote
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-success-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Complete Transparency</h3>
                        <p className="text-sm text-muted-foreground">
                          Public verification of results with full audit trails
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground">First Time Voting?</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn how to use the EuiVota platform with our comprehensive guide.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/docs">View Documentation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentLogin;