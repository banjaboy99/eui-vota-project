import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "./data";

const BlogCategories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Explore Content Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into blockchain technology, platform guides, security insights, 
            and real-world case studies from universities using EuiVota.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="text-xs text-muted-foreground font-medium">
                    {category.count} articles
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;