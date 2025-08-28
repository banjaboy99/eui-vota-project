import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, BarChart3, Clock, Fingerprint, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Built on Hyperledger Fabric for immutable vote recording and complete transparency.",
    },
    {
      icon: Fingerprint,
      title: "Biometric Verification",
      description: "Advanced liveness checks ensure only verified students can participate in elections.",
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Separate portals for students and administrators with role-based permissions.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Results",
      description: "Live vote tracking and instant result visualization with complete audit trails.",
    },
    {
      icon: Clock,
      title: "Election Management",
      description: "Comprehensive tools for creating, managing, and monitoring university elections.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Public verification of results with blockchain-backed proof of integrity.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose EuiVota?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our blockchain-powered platform ensures every vote counts while maintaining 
            the highest standards of security and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-blockchain-gradient rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;