export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  metaDescription: string;
  keywords: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  color: string;
}
