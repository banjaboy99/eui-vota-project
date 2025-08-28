import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Vote, Lock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-voting.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Secure University
              <span className="text-primary block">Elections Made Simple</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              EuiVota leverages Hyperledger Fabric blockchain technology to deliver 
              transparent, immutable, and trustworthy electronic voting for student elections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/login">Start Voting</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/docs">Learn More</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Vote className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Transparent</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Secure</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Instant</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Blockchain voting interface showing secure digital voting technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-trust-gradient opacity-20"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blockchain-gradient rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;