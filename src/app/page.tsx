import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
