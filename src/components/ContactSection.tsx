import { siteConfig } from "@/lib/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 py-14 md:py-10"
    >
      <div className="rounded-2xl px-6 py-12 text-center md:py-16">
        <p className="font-mono text-sm text-accent-text">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          {siteConfig.contactIntro}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Send me an email
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-3 font-medium transition-colors hover:bg-border/50"
          >
            LinkedIn
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-3 font-medium transition-colors hover:bg-border/50"
          >
            GitHub
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <p className="mt-6 select-all text-sm text-muted">{siteConfig.email}</p>
      </div>
    </section>
  );
}
