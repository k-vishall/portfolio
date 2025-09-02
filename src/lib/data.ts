import { FaJava} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiDotnet,
} from "react-icons/si";
import { Code,  Database, Palette, Terminal } from "lucide-react"; // Lucide icons
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";
import { calculateYearsSince } from "./utils";

export type ExperienceMetric = {
  label: string;
  value: number;
  suffix?: string;
  srLabel: string; // screen-reader label (for <dt>)
};

export const experienceMetrics: ExperienceMetric[] = [
  {
    label: "Years",
    value: calculateYearsSince("2024-01-01"),
    suffix: "+",
    srLabel: "Years of experience",
  },
  {
    label: "Projects",
    value: 24,
    suffix: "+",
    srLabel: "Projects delivered",
  },
  {
    label: "Clients",
    value: 3,
    suffix: "+",
    srLabel: "Clients served",
  },
  {
    label: "Certifications",
    value: 2,
    srLabel: "Certifications",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project 1",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    github: "https://github.com",
  },
  {
    id: "project-4",
    title: "Project 4",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-5",
    title: "Project 5",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-6",
    title: "Project 6",
    description: "Lorem Ipsum is simply dummy text",
    image: "./projectDemo.svg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    github: "https://github.com",
  },
];

export type Skill = {
  name: string;
  level: number;
  icon: IconType | LucideIcon;
};

// --------------------
// Manual Skills
// --------------------
export const manualSkills: Skill[] = [
  { name: "Java", level: 80, icon: FaJava },
  { name: "C++", level: 75, icon: SiCplusplus },
  { name: "C#", level: 75, icon: TbBrandCSharp },
  { name: "Python", level: 70, icon: SiPython },
  { name: "Spring Boot", level: 80, icon: SiSpringboot },
  { name: ".NET", level: 75, icon: SiDotnet },
  { name: "React", level: 90, icon: Code },
  { name: "JavaScript", level: 95, icon: Code },
  { name: "TypeScript", level: 85, icon: Code },
  { name: "MySQL", level: 85, icon: SiMysql },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql },
  { name: "JDBC", level: 75, icon: Database },
  { name: "REST API", level: 80, icon: Terminal },
  { name: "UI/UX Design", level: 80, icon: Palette },
];

export const skills = manualSkills;

/**
 * This code is for extracting skills from projects currently not in use.
 * for use it remove above line and use below code it also merge manually
 * added skills
 * 
// --------------------
// Icon Map (auto for project tags)
// --------------------
const skillIconMap: Record<string, any> = {
  React: FaReact,
  "Node.js": FaNodeJs,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
}

function calculateLevel(count: number): number {
  if (count >= 5) return 95
  if (count === 4) return 90
  if (count === 3) return 80
  if (count === 2) return 70
  return 60 // default for 1 project
}

function extractSkillsFromProjects(projects: Project[]): Skill[] {
  const tagCounts: Record<string, number> = {}

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts).map(([tag, count]) => ({
    name: tag,
    level: calculateLevel(count),
    icon: skillIconMap[tag] || Code2,
  }))
}

const autoSkills: Skill[] = extractSkillsFromProjects(projects)

export const skills: Skill[] = [
  ...manualSkills,
  ...autoSkills.filter(
    (auto) =>
    !manualSkills.some(
    (manual) => manual.name.toLowerCase() === auto.name.toLowerCase()
    )
    ),
    ]
*/

