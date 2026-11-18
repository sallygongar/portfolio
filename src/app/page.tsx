import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
