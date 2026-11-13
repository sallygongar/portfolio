import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border">
      <div className="relative aspect-video bg-border/40">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}: live demo`}
            className="text-accent-text underline-offset-4 hover:underline"
          >
            Live demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}: source code`}
            className="text-muted underline-offset-4 transition-colors hover:text-accent-text hover:underline"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
