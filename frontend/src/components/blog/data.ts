import { BlogPost, BlogCategory } from './types';
import { Vote, Users, GraduationCap, Shield } from "lucide-react";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How EuiVota Uses Blockchain for Secure SRC Elections",
    excerpt: "Dive deep into EuiVota's blockchain architecture and learn how we ensure election integrity, transparency, and immutability for university Student Representative Council elections.",
    author: "EuiVota Team",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop&crop=center"
  },
  {
    id: "2", 
    title: "Setting Up Your First SRC Election on EuiVota",
    excerpt: "A comprehensive guide for university administrators on how to create, configure, and manage Student Representative Council elections using the EuiVota platform.",
    author: "Sarah Adebayo",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Platform Guide",
    image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800&h=450&fit=crop&crop=center"
  },
  {
    id: "3",
    title: "Student Privacy and Security in Digital Voting",
    excerpt: "Exploring how EuiVota protects student privacy while maintaining election transparency. Learn about our zero-knowledge proofs and encryption methods.",
    author: "Dr. Kemi Okonkwo",
    date: "Dec 15, 2024", 
    readTime: "7 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&crop=center"
  },
  {
    id: "4",
    title: "Why Universities Are Switching to Blockchain Voting", 
    excerpt: "Case studies from Nigerian universities that have adopted EuiVota for their SRC elections, highlighting increased participation and trust in the electoral process.",
    author: "Prof. Chinedu Okoro",
    date: "Dec 10, 2024",
    readTime: "5 min read", 
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=450&fit=crop&crop=center"
  },
  {
    id: "5",
    title: "The Technology Behind EuiVota: Smart Contracts Explained",
    excerpt: "Understanding the smart contract architecture that powers EuiVota's voting system, from ballot creation to result verification and auditing.",
    author: "Blockchain Dev Team",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    category: "Blockchain", 
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=450&fit=crop&crop=center"
  },
  {
    id: "6",
    title: "Student Participation: Making Every Vote Count",
    excerpt: "How EuiVota's user-friendly interface and accessibility features are increasing student engagement in SRC elections across Nigerian universities.",
    author: "Aminat Ibrahim",
    date: "Nov 30, 2024",
    readTime: "4 min read",
    category: "Student Engagement",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop&crop=center"
  }
];

export const categories: BlogCategory[] = [
  {
    title: "Blockchain",
    description: "How EuiVota leverages blockchain technology for transparent and immutable SRC elections.",
    icon: Vote,
    count: 18,
    color: "text-primary"
  },
  {
    title: "Platform Guide", 
    description: "Step-by-step tutorials and guides for using the EuiVota voting platform effectively.",
    icon: GraduationCap,
    count: 24,
    color: "text-accent"
  },
  {
    title: "Security",
    description: "Privacy protection, encryption, and security measures in EuiVota's voting system.",
    icon: Shield, 
    count: 15,
    color: "text-primary-glow"
  },
  {
    title: "Case Studies",
    description: "Real-world examples of universities successfully using EuiVota for SRC elections.",
    icon: Users,
    count: 12,
    color: "text-destructive"
  }
];