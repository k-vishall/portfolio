import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiDotnet,
} from "react-icons/si";
import { Code, Database, Palette, Terminal } from "lucide-react"; // Lucide icons
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export type Skill = {
  name: string;
  level: number;
  icon: IconType | LucideIcon;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-2",
    title: "Project 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-3",
    title: "Project 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    github: "https://github.com",
  },
  {
    id: "project-4",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-5",
    title: "Project 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-6",
    title: "Project 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    image: "./projectDemo.svg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    github: "https://github.com",
  },
];

export const skills: Skill[] = [
  { name: "Java", level: 80, icon: FaJava },
  { name: "C++", level: 75, icon: SiCplusplus },
  { name: "C#", level: 75, icon: TbBrandCSharp },
  { name: "Python", level: 70, icon: SiPython },
  { name: "Spring Boot", level: 80, icon: SiSpringboot },
  { name: ".NET", level: 75, icon: SiDotnet },
  { name: "HTML/CSS", level: 85, icon: Code },
  { name: "React", level: 90, icon: Code },
  { name: "JavaScript", level: 95, icon: Code },
  { name: "TypeScript", level: 85, icon: Code },
  { name: "MySQL", level: 85, icon: SiMysql },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql },
  { name: "JDBC", level: 75, icon: Database },
  { name: "REST API", level: 80, icon: Terminal },
  { name: "UI/UX Design", level: 80, icon: Palette },
];
