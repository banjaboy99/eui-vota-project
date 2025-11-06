import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  Vote, 
  Clock, 
  CheckCircle, 
  User, 
  Calendar, 
  BarChart3,
  AlertCircle,
  Trophy,
  BookOpen
} from "lucide-react";

const StudentDashboard = () => {
  // Mock data - would come from API in real implementation
  const student = {
    name: "Iyevhobu Peter",
    id: "FSC/CSC/22003944",
    department: "Computer Science",
    email: "iyevhobu22.peter@edouniversity.edu.ng"
  };

  const activeElections = [
    {
      id: 1,
      title: "Student Government President 2024",
      description: "Choose your next student body president",
      deadline: "March 15, 2024",
      timeLeft: "2 days, 14 hours",
      candidates: 4,
      hasVoted: false,
      status: "active"
    },
    {
      id: 2,
      title: "Computer Science Department Rep",
      description: "Select your department representative",
      deadline: "March 20, 2024", 
      timeLeft: "7 days, 6 hours",
      candidates: 3,
      hasVoted: true,
      status: "active"
    }
  ];

  const pastElections = [
    {
      id: 3,
      title: "Student Council Elections 2023",
      date: "November 2023",
      participated: true,
      winner: "Joshua Osasenaga"
    },
    {
      id: 4,
      title: "Sports Committee Elections 2023",
      date: "October 2023", 
      participated: false,
      winner: "Osezuwa Efe"
    }
  ];

  const stats = {
    totalElections: 6,
    participated: 4,
    pending: 1
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {student.name}</h1>
              <p className="text-muted-foreground">Student ID: {student.id} • {student.department}</p>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {student.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Vote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalElections}</p>
                    <p className="text-sm text-muted-foreground">Total Elections</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.participated}</p>
                    <p className="text-sm text-muted-foreground">Participated</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange/10 rounded-xl">
                    <Clock className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
                    <p className="text-sm text-muted-foreground">Pending Vote</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Elections */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      <span>Active Elections</span>
                    </CardTitle>
                    <CardDescription>Elections you can participate in</CardDescription>
                  </div>
                  <Badge variant="secondary">{activeElections.length} Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeElections.map((election) => (
                    <div key={election.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{election.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{election.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Ends: {election.deadline}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{election.candidates} candidates</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          {election.hasVoted ? (
                            <Badge variant="default" className="mb-2">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Voted
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="mb-2">
                              <Clock className="h-3 w-3 mr-1" />
                              {election.timeLeft}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        {election.hasVoted ? (
                          <Button variant="outline" size="sm" disabled>
                            Vote Cast
                          </Button>
                        ) : (
                          <Button variant="default" size="sm" asChild>
                            <Link to={`/elections/${election.id}`}>
                              Vote Now
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <p className="text-sm text-foreground">{student.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Student ID</label>
                    <p className="text-sm text-foreground">{student.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Department</label>
                    <p className="text-sm text-foreground">{student.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-sm text-foreground">{student.email}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/profile">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/election-details">
                    <Vote className="h-4 w-4 mr-2" />
                    View All Elections
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/past-elections">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Past Elections
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/docs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    How to Vote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Past Elections Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>Recent Elections</span>
            </CardTitle>
            <CardDescription>Your participation history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {pastElections.map((election) => (
                <div key={election.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">{election.title}</h3>
                    {election.participated ? (
                      <Badge variant="default" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Participated
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Not Participated
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{election.date}</p>
                  <p className="text-sm text-foreground">Winner: {election.winner}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/past-elections">View All Past Elections</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;