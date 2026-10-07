import profileData from "@/content/profile.json";
import projectsData from "@/content/projects.json";
import experienceData from "@/content/experience.json";
import skillsData from "@/content/skills.json";
import certificationsData from "@/content/certifications.json";
import roadmapData from "@/content/roadmap.json";
import researchData from "@/content/research.json";
import professorsData from "@/content/professors.json";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  domains: string[];
  featured: boolean;
  summary: string;
  role: string;
  period: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  problem: string;
  solution: string;
  architecture: string;
  results: string;
  challenges: string;
  links: {
    github?: string;
    liveDemo?: string;
    paperDraft?: string;
  };
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
  thesis: string;
  highlights: string[];
  coursework: string[];
};

export type SkillCategory = {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    projectSlug?: string;
    provenBy: string;
  }[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  skills: string[];
};

export type RoadmapTrack = {
  id: string;
  name: string;
  country: string;
  focus: string;
  status: string;
  deadline: string;
  targetUniversities: string[];
  whatIBring: string;
  milestones: { step: string; completed: boolean; date: string }[];
};

export type ProfessorFit = {
  slug: string;
  name: string;
  lab: string;
  institution: string;
  location: string;
  recentPaper: string;
  alignmentTheme: string;
  keyConnections: string[];
  relevantProjects: string[];
};

export function getProfile() {
  return profileData;
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getExperience() {
  return experienceData;
}

export function getSkills(): SkillCategory[] {
  return skillsData as SkillCategory[];
}

export function getCertifications(): Certification[] {
  return certificationsData as Certification[];
}

export function getRoadmap() {
  return roadmapData;
}

export function getResearch() {
  return researchData;
}

export function getProfessors(): ProfessorFit[] {
  return professorsData as ProfessorFit[];
}

export function getProfessorBySlug(slug: string): ProfessorFit | undefined {
  return (professorsData as ProfessorFit[]).find((p) => p.slug === slug);
}
