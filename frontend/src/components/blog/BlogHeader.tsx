import { Button } from "@/components/ui/button";
import { Vote, BookOpen, Users, Link } from "lucide-react";

const BlogHeader = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Vote className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EuiVota Blog</h1>
              <p className="text-xs text-muted-foreground">Blockchain Voting Education</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog Posts
            </a>
            <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <Button asChild variant="outline" size="sm">
              <Link to="/">
              <Users className="h-4 w-4 mr-2" />
              Back to EuiVota
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <BookOpen className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;