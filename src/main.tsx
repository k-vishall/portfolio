import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    // attribute="class"
    // defaultTheme="system"
    // enableSystem
    // disableTransitionOnChange
  >
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);
