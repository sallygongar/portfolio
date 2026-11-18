import { aboutText, skillGroups } from "@/lib/about";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20"
    >
      <p className="font-mono text-sm text-accent-text">About</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        A bit about me
      </h2>
      <p className="mt-4 max-w-2xl text-muted">{aboutText}</p>

      <h3 className="mt-12 text-xl font-semibold tracking-tight">Skills</h3>
      <dl className="mt-6 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt className="font-mono text-xs uppercase tracking-wider text-accent-text">
              {group.title}
            </dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {item.name}
                    {item.learning && (
                      <span className="text-accent-text"> · learning</span>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
