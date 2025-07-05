export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Contact {
  icon: React.ReactNode;
  link: string;
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
}
