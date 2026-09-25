export interface Resume {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    photo?: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
    summary: string;
  };

  skills: string[];

  experience: Experience[];

  education: Education[];

  projects: Project[];

  languages: Language[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  institution: string;
  course: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  website?: string;
}

export interface Language {
  name: string;
  level: string;
}