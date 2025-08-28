import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Vote, BarChart3, FilePlus2, MonitorDot, ListChecks, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Mock data - replace with API calls in real implementation
  const stats = {
    totalStudents: 1200,
    totalCandidates: 45,
    electionsInProgress: 2,
    voterTurnout: 68, // percent
    facultyParticipation: [
      { faculty: "Engineering", percent: 75 },
      { faculty: "Science", percent: 60 },
      { faculty: "Arts", percent: 70 },
    ],
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Admin Dashboard</h1>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.totalStudents}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-accent" />
                Total Candidates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.totalCandidates}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-orange-500" />
                Elections In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.electionsInProgress}</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts (mocked as bars for now) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Voter Turnout
              </CardTitle>
              <CardDescription>Live turnout from blockchain ledger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
                <div
                  className="bg-primary h-6 rounded-full"
                  style={{ width: `${stats.voterTurnout}%` }}
                />
              </div>
              <p className="text-center font-semibold">{stats.voterTurnout}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                Participation by Faculty
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.facultyParticipation.map(fac => (
                <div key={fac.faculty} className="mb-2">
                  <div className="flex justify-between text-sm">
                    <span>{fac.faculty}</span>
                    <span>{fac.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-accent h-3 rounded-full"
                      style={{ width: `${fac.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Button asChild variant="default" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/candidates">
              <ListChecks className="h-5 w-5" />
              Manage Candidates
            </Link>
          </Button>
          <Button asChild variant="default" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/monitoring">
              <MonitorDot className="h-5 w-5" />
              Election Monitoring
            </Link>
          </Button>
          <Button asChild variant="default" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/results">
              <FilePlus2 className="h-5 w-5" />
              Results & Reports
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/audit-logs">
              <BookOpen className="h-5 w-5" />
              Audit Logs
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/candidates/add">
              <UserPlus className="h-5 w-5" />
              Add Candidate
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full flex items-center gap-2">
            <Link to="/admin/elections/create">
              <Vote className="h-5 w-5" />
              Create Election
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard