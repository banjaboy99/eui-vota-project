import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type StudentParty = "Dominium Party" | "Iyamho House" | "Adam's Party";
type Office = "President" | "Vice-president" | "Public Relations Officer" | "Director of Socials" | "Secretary General" | "Director of Sports" | "Director of Welfare" | "Financial Secretary";

interface Candidate {
  id: string;
  name: string;
  office: Office;
  party: StudentParty;
  bio: string;
  image: string;
}

const candidates: Candidate[] = [
  // President
  {
    id: "p1",
    name: "Sarah Johnson",
    office: "President",
    party: "Dominium Party",
    bio: "Experienced student leader with 3 years in student government. Committed to academic excellence and student welfare.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "p2", 
    name: "Michael Chen",
    office: "President",
    party: "Iyamho House",
    bio: "Former class representative with strong advocacy for student rights and campus infrastructure improvements.",
    image: "/api/placeholder/150/150"
  },
  // Vice-president
  {
    id: "vp1",
    name: "Emily Rodriguez",
    office: "Vice-president",
    party: "Adam's Party",
    bio: "Dedicated to bridging communication gaps between students and administration.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "vp2",
    name: "David Thompson",
    office: "Vice-president", 
    party: "Dominium Party",
    bio: "Focus on mental health initiatives and academic support programs.",
    image: "/api/placeholder/150/150"
  },
  // Public Relations Officer
  {
    id: "pr1",
    name: "Jessica Kim",
    office: "Public Relations Officer",
    party: "Iyamho House",
    bio: "Expert in digital marketing and social media engagement with proven track record.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "pr2",
    name: "James Wilson",
    office: "Public Relations Officer",
    party: "Adam's Party", 
    bio: "Experienced in event management and community outreach programs.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "pr3",
    name: "Lisa Anderson",
    office: "Public Relations Officer",
    party: "Dominium Party",
    bio: "Strong background in journalism and campus communications.",
    image: "/api/placeholder/150/150"
  },
  // Director of Socials
  {
    id: "ds1",
    name: "Marcus Brown",
    office: "Director of Socials",
    party: "Adam's Party",
    bio: "Creative event planner with fresh ideas for campus social life and entertainment.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "ds2",
    name: "Nina Patel",
    office: "Director of Socials",
    party: "Iyamho House",
    bio: "Passionate about inclusive events and cultural diversity celebrations.",
    image: "/api/placeholder/150/150"
  },
  // Secretary General
  {
    id: "sg1",
    name: "Robert Davis",
    office: "Secretary General",
    party: "Dominium Party",
    bio: "Meticulous organizer with strong administrative skills and attention to detail.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "sg2",
    name: "Amanda White",
    office: "Secretary General",
    party: "Adam's Party",
    bio: "Experience in record keeping and meeting coordination with transparency focus.",
    image: "/api/placeholder/150/150"
  },
  // Director of Sports
  {
    id: "dsp1",
    name: "Tyler Johnson",
    office: "Director of Sports",
    party: "Iyamho House", 
    bio: "Former varsity athlete committed to promoting sports excellence and fitness programs.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "dsp2",
    name: "Rachel Green",
    office: "Director of Sports",
    party: "Dominium Party",
    bio: "Focus on inclusive sports programs and equipment modernization initiatives.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "dsp3",
    name: "Kevin Martinez",
    office: "Director of Sports",
    party: "Adam's Party",
    bio: "Advocate for intramural sports expansion and recreational facility improvements.",
    image: "/api/placeholder/150/150"
  },
  // Director of Welfare
  {
    id: "dw1",
    name: "Sophie Turner",
    office: "Director of Welfare",
    party: "Adam's Party",
    bio: "Passionate about student mental health, financial aid, and support services.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "dw2",
    name: "Alex Morgan",
    office: "Director of Welfare",
    party: "Iyamho House",
    bio: "Experience in peer counseling and advocacy for student welfare programs.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "dw3",
    name: "Grace Lee",
    office: "Director of Welfare", 
    party: "Dominium Party",
    bio: "Focus on healthcare access, accommodation services, and student support networks.",
    image: "/api/placeholder/150/150"
  },
  // Financial Secretary
  {
    id: "fs1",
    name: "Daniel Clark",
    office: "Financial Secretary",
    party: "Dominium Party",
    bio: "Accounting major with experience in budget management and financial transparency.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "fs2",
    name: "Maria Santos",
    office: "Financial Secretary",
    party: "Iyamho House",
    bio: "Committed to responsible spending and maximizing value for student fees.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "fs3",
    name: "Chris Taylor",
    office: "Financial Secretary",
    party: "Adam's Party",
    bio: "Focus on financial aid programs and scholarship opportunities for students.",
    image: "/api/placeholder/150/150"
  },
  {
    id: "fs4",
    name: "Isabella Wang",
    office: "Financial Secretary",
    party: "Dominium Party",
    bio: "Experience in financial auditing and budget optimization strategies.",
    image: "/api/placeholder/150/150"
  }
];

const offices: Office[] = [
  "President",
  "Vice-president", 
  "Public Relations Officer",
  "Director of Socials",
  "Secretary General",
  "Director of Sports",
  "Director of Welfare",
  "Financial Secretary"
];

const partyColors = {
  "Dominium Party": "bg-blue-500",
  "Iyamho House": "bg-green-500", 
  "Adam's Party": "bg-purple-500"
};

export default function ElectionDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const [votes, setVotes] = useState<Record<Office, string | null>>({
    "President": null,
    "Vice-president": null,
    "Public Relations Officer": null,
    "Director of Socials": null,
    "Secretary General": null,
    "Director of Sports": null,
    "Director of Welfare": null,
    "Financial Secretary": null
  });

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("studentLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const handleVote = (candidateId: string, office: Office) => {
    setVotes(prev => ({
      ...prev,
      [office]: candidateId
    }));
    
    toast({
      title: "Vote Recorded",
      description: `Your vote for ${office} has been recorded.`,
    });
  };

  const getCandidatesByOffice = (office: Office) => {
    return candidates.filter(candidate => candidate.office === office);
  };

  const submitAllVotes = () => {
    const votedOffices = Object.entries(votes).filter(([_, candidateId]) => candidateId !== null);
    
    toast({
      title: "Votes Submitted",
      description: `Successfully submitted ${votedOffices.length} votes.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Student Union Election 2024
            </h1>
            <p className="text-muted-foreground text-lg">
              Vote for your representatives across all positions
            </p>
          </div>

          {offices.map(office => {
            const officeCandidates = getCandidatesByOffice(office);
            
            return (
              <div key={office} className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-2">
                  {office}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {officeCandidates.map(candidate => (
                    <Card 
                      key={candidate.id}
                      className={`relative transition-all duration-300 hover:shadow-lg ${
                        votes[office] === candidate.id 
                          ? 'ring-2 ring-primary shadow-lg' 
                          : 'hover:shadow-md'
                      }`}
                    >
                      <CardHeader className="text-center pb-4">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src={candidate.image} alt={candidate.name} />
                          <AvatarFallback className="text-lg">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <h3 className="font-semibold text-lg text-foreground">
                          {candidate.name}
                        </h3>
                        
                        <Badge 
                          variant="secondary"
                          className={`${partyColors[candidate.party]} text-white`}
                        >
                          {candidate.party}
                        </Badge>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {candidate.bio}
                        </p>
                        
                        <Button
                          onClick={() => handleVote(candidate.id, office)}
                          variant={votes[office] === candidate.id ? "default" : "outline"}
                          className="w-full"
                        >
                          {votes[office] === candidate.id ? "✓ Voted" : "Vote"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="text-center mt-12">
            <Button 
              onClick={submitAllVotes}
              size="lg"
              className="px-8"
            >
              Submit All Votes
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}