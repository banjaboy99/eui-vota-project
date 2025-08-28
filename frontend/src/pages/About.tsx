import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About EuiVota
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                EuiVota revolutionizes university elections through blockchain technology, 
                ensuring transparency, security, and trust in every vote cast.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that every student voice matters in university governance. 
                  EuiVota was created to eliminate the traditional barriers and trust issues 
                  in student elections through cutting-edge blockchain technology.
                </p>
                <p className="text-lg text-muted-foreground">
                  Built on Hyperledger Fabric, our platform ensures that every vote is 
                  immutably recorded, publicly verifiable, and completely transparent, 
                  while maintaining voter privacy and preventing fraud.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blockchain-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">100%</CardTitle>
                    <CardDescription>Secure Votes</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blockchain-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">50k+</CardTitle>
                    <CardDescription>Students Served</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blockchain-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">25+</CardTitle>
                    <CardDescription>Universities</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blockchain-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">99.9%</CardTitle>
                    <CardDescription>Uptime</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built on Proven Technology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                EuiVota leverages enterprise-grade blockchain infrastructure 
                to deliver uncompromising security and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Hyperledger Fabric</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enterprise blockchain platform ensuring immutable vote recording 
                    and transparent audit trails.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Biometric Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced liveness detection and facial recognition to prevent 
                    voter fraud and ensure eligible participation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Real-time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Live monitoring of election progress with instant result 
                    verification and comprehensive audit capabilities.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;