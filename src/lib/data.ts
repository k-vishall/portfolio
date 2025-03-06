import { FaJava } from "react-icons/fa";
import { SiLeetcode, SiCplusplus  } from "react-icons/si";
import { Code, Database, Palette } from "lucide-react"; // Lucide icons
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export type Skill = {
  name: string
  level: number
  icon: IconType | LucideIcon;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    github: "https://github.com",
  },
  {
    id: "project-4",
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers to track engagement and growth metrics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "ShadCN UI", "RESTful API"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-5",
    title: "Fitness Tracker",
    description: "A mobile-responsive application for tracking workouts, nutrition, and fitness goals.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    github: "https://github.com",
  },
  {
    id: "project-6",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export const skills: Skill[] = [
  { name: "React", level: 90, icon: Code },
  { name: "TypeScript", level: 85, icon: Code },
  { name: "Next.js", level: 80, icon: Code },
  { name: "Node.js", level: 75, icon: Database },
  { name: "JavaScript", level: 95, icon: Code },
  { name: "UI/UX Design", level: 80, icon: Palette },
  { name: "Java", level: 70, icon: FaJava }, 
  { name: "C++", level: 75, icon: SiCplusplus }, 
  { name: "LeetCode", level: 90, icon: SiLeetcode },
];
