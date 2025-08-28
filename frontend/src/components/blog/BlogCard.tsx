import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "./types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group h-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {post.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="w-full group/button justify-between p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;