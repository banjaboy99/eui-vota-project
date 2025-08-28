export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export interface BlogCategory {
  title: string;
  description: string;
  icon: any; // Lucide icon component
  count: number;
  color: string;
}