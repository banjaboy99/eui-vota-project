import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, User } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Replace this with real authentication logic
    if (adminId.trim() && password.trim()) {
      // Simulate successful login
      navigate("/admin/dashboard");
    } else {
      setError("Please enter both Admin ID and password.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <section className="py-16 sm:py-20 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-blockchain-gradient rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-primary">Admin Portal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Admin Login
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access the secure admin dashboard to manage elections, candidates, and results.
              </p>
            </div>
            <Card className="shadow-glow border-border">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-foreground">
                  Sign In
                </CardTitle>
                <CardDescription className="text-center text-muted-foreground">
                  Enter your admin credentials to access the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="adminId" className="text-sm font-medium text-foreground">
                      Admin ID
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="adminId"
                        type="text"
                        placeholder="Enter your admin ID"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                        className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  {error && (
                    <div className="text-red-600 text-sm text-center">{error}</div>
                  )}
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Sign In to Admin Dashboard
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLogin;