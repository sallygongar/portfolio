import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-16 md:py-24"
    >
      <p className="font-mono text-sm text-accent-text">Projects</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Things I&apos;ve built
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        A selection of projects where I practice state management, async flows
        and testing.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <div className="rounded-2xl border border-dashed border-border p-6 md:col-span-2">
          <p className="font-mono text-xs text-accent-text">Coming soon</p>
          <p className="mt-2 text-muted">
            Next up: a dashboard with authentication, roles, tables and charts.
          </p>
        </div>
      </div>
    </section>
  );
}
