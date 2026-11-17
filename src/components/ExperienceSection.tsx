import { education, experience } from "@/lib/about";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24"
    >
      <p className="font-mono text-sm text-accent-text">Experience</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Where I&apos;ve worked
      </h2>

      <ol className="mt-10 space-y-10 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={job.period} className="relative">
            <span
              className="absolute -left-7 top-2 size-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {job.role}
            </h3>
            <p className="text-sm text-muted">{job.context}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wider text-accent-text">
          Education
        </h3>
        <p className="mt-3 font-medium">{education.degree}</p>
        <p className="text-sm text-muted">
          {education.school} · {education.period}
        </p>
      </div>
    </section>
  );
}
