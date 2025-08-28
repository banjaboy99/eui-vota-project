import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Vote } from "lucide-react";

const BlogAbout = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              About EuiVota
            </h2>
            <p className="text-xl text-muted-foreground">
              Revolutionizing university democracy with blockchain-powered SRC elections.
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  EuiVota is a cutting-edge blockchain-based e-voting platform designed specifically 
                  for university Student Representative Council (SRC) elections. We combine the security 
                  of blockchain technology with an intuitive user experience to ensure transparent, 
                  tamper-proof, and accessible democratic processes.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our mission is to restore trust in student elections while making voting more 
                  convenient and inclusive. Through smart contracts and cryptographic security, 
                  EuiVota eliminates election fraud and provides real-time, verifiable results 
                  that every student can trust.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 py-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Student Votes</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
              
              <div className="space-y-6 pt-8 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground text-center">
                  Get Started with EuiVota
                </h3>
                <p className="text-center text-muted-foreground">
                  Ready to revolutionize your university's SRC elections? Join the blockchain voting revolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <Vote className="h-5 w-5 mr-2" />
                    Launch EuiVota Platform
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogAbout;