import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const offices = ["President", "Vice President", "Secretary", "Treasurer"];
const faculties = ["Engineering", "Science", "Arts", "Business"];
const parties = ["Unity", "Progress", "Reform", "Alliance"];

const AddCandidate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    department: "",
    faculty: "",
    party: "",
    office: "",
    bio: "",
    photo: null as File | null,
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Basic validation
    if (!form.name || !form.department || !form.faculty || !form.party || !form.office) {
      setError("Please fill in all required fields.");
      return;
    }
    // Replace this with API call
    console.log("New candidate:", form);
    navigate("/admin/candidates");
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Add New Candidate</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" name="department" value={form.department} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="faculty">Faculty</Label>
                <select
                  id="faculty"
                  name="faculty"
                  value={form.faculty}
                  onChange={handleChange}
                  className="w-full border rounded h-10 px-2"
                  required
                >
                  <option value="">Select faculty</option>
                  {faculties.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="party">Party</Label>
                <select
                  id="party"
                  name="party"
                  value={form.party}
                  onChange={handleChange}
                  className="w-full border rounded h-10 px-2"
                  required
                >
                  <option value="">Select party</option>
                  {parties.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="office">Office</Label>
                <select
                  id="office"
                  name="office"
                  value={form.office}
                  onChange={handleChange}
                  className="w-full border rounded h-10 px-2"
                  required
                >
                  <option value="">Select office</option>
                  {offices.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" name="bio" value={form.bio} onChange={handleChange} rows={3} />
              </div>
              <div>
                <Label htmlFor="photo">Photo</Label>
                <Input id="photo" name="photo" type="file" accept="image/*" onChange={handlePhoto} />
              </div>
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <Button type="submit" variant="default" className="w-full">
                Add Candidate
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCandidate;