import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Election = {
  id: number;
  title: string;
  description: string;
};

const Elections = () => {
  // Replace this with an API call in a real app
  const [elections, setElections] = useState<Election[]>([
    { id: 1, title: "Student Government President 2024", description: "Vote for your next president." },
    { id: 2, title: "Computer Science Department Rep", description: "Choose your department rep." },
  ]);

  // Example: fetch from backend
  // useEffect(() => {
  //   fetch("/api/elections")
  //     .then(res => res.json())
  //     .then(data => setElections(data));
  // }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Elections</h1>
      <ul className="space-y-4">
        {elections.map(election => (
          <li key={election.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{election.title}</h2>
            <p className="text-muted-foreground mb-2">{election.description}</p>
            <Link to={`/elections/${election.id}`} className="text-blue-600 underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Elections;