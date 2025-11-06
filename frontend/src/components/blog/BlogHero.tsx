import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Vote } from "lucide-react";
import heroImage from "@/assets/hero-democracy.jpg";

const BlogHero = () => {
  return (
    <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Future of University
                <span className="text-accent block">Blockchain Voting</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Learn about EuiVota's revolutionary blockchain e-voting system for Edo State University Iyamho's SRC elections. 
                Discover how we're making student democracy transparent, secure, and accessible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                <BookOpen className="h-5 w-5 mr-2" />
                Read Latest Posts
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Vote className="h-5 w-5 mr-2" />
                Try EuiVota Platform
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Blockchain Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>University SRC</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Transparent Voting</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <img 
              src={heroImage} 
              alt="Nigerian students engaging in democratic activities"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;