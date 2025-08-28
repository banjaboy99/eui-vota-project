import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

type Candidate = {
  id: number;
  name: string;
  department: string;
  faculty: string;
  party: string;
  office: string;
};

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Alice Smith",
    department: "Computer Science",
    faculty: "Engineering",
    party: "Unity",
    office: "President",
  },
  {
    id: 2,
    name: "Bob Johnson",
    department: "Political Science",
    faculty: "Arts",
    party: "Progress",
    office: "Vice President",
  },
];

const Candidates = () => {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);

  // Filter logic
  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.department.toLowerCase().includes(search.toLowerCase()) ||
      c.party.toLowerCase().includes(search.toLowerCase()) ||
      c.office.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Candidate Management</CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Search by name, department, party, office..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64"
              />
              <Button asChild variant="default">
                <Link to="/admin/candidates/add">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Candidate
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Department</th>
                    <th className="p-2 border">Faculty</th>
                    <th className="p-2 border">Party</th>
                    <th className="p-2 border">Office</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCandidates.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center p-4">
                        No candidates found.
                      </td>
                    </tr>
                  ) : (
                    filteredCandidates.map((c) => (
                      <tr key={c.id} className="hover:bg-accent/10">
                        <td className="p-2 border">{c.name}</td>
                        <td className="p-2 border">{c.department}</td>
                        <td className="p-2 border">{c.faculty}</td>
                        <td className="p-2 border">{c.party}</td>
                        <td className="p-2 border">{c.office}</td>
                        <td className="p-2 border flex gap-2">
                          <Button asChild size="sm" variant="outline">
                            <Link to={`/admin/candidates/edit/${c.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Candidates;