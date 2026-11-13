import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ProjectsSection />
    </main>
  );
}
