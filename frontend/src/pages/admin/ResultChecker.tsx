import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Archive } from "lucide-react";

type Result = {
  office: string;
  candidate: string;
  votes: number;
};

const mockResults: Result[] = [
  { office: "President", candidate: "Alice Smith", votes: 520 },
  { office: "President", candidate: "Bob Johnson", votes: 480 },
  { office: "Vice President", candidate: "Carol Lee", votes: 600 },
  { office: "Vice President", candidate: "David Kim", votes: 400 },
];

const ResultChecker = () => {
  const [results] = useState<Result[]>(mockResults);

  // Calculate total votes per office for chart
  const offices = Array.from(new Set(results.map(r => r.office)));
  const officeTotals = offices.map(office => ({
    office,
    total: results.filter(r => r.office === office).reduce((sum, r) => sum + r.votes, 0)
  }));

  // Placeholder export handlers
  const handleExportCSV = () => {
    // Implement CSV export logic here
    alert("Export as CSV (not implemented)");
  };
  const handleExportPDF = () => {
    // Implement PDF export logic here
    alert("Export as PDF (not implemented)");
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Election Results</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Verified Results (Blockchain)
            </CardTitle>
            <CardDescription>
              Final, tamper-proof tallies for each office and candidate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button onClick={handleExportCSV} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export CSV
              </Button>
              <Button onClick={handleExportPDF} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export PDF
              </Button>
              <Button asChild variant="secondary" size="sm">
                <a href="/admin/past-elections">
                  <Archive className="h-4 w-4 mr-1" />
                  Past Results Archive
                </a>
              </Button>
            </div>
            {/* Simple bar chart (text-based for now) */}
            {offices.map(office => (
              <div key={office} className="mb-6">
                <h2 className="font-semibold mb-2">{office}</h2>
                {results
                  .filter(r => r.office === office)
                  .map(r => (
                    <div key={r.candidate} className="flex items-center mb-1">
                      <span className="w-40">{r.candidate}</span>
                      <div className="flex-1 bg-gray-200 rounded h-4 mx-2">
                        <div
                          className="bg-primary h-4 rounded"
                          style={{
                            width: `${(r.votes / officeTotals.find(o => o.office === office)!.total) * 100}%`
                          }}
                        />
                      </div>
                      <span className="w-12 text-right">{r.votes}</span>
                    </div>
                  ))}
              </div>
            ))}
            {/* Results Table */}
            <table className="min-w-full border text-sm mt-8">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">Office</th>
                  <th className="p-2 border">Candidate</th>
                  <th className="p-2 border">Votes</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{r.office}</td>
                    <td className="p-2 border">{r.candidate}</td>
                    <td className="p-2 border">{r.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AdminLogin = () => <div>Admin Login Page</div>;
export default AdminLogin;