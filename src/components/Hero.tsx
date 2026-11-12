import Image from "next/image";
import { siteConfig } from "@/lib/site";
import sally from "@/assets/sally.jpeg";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col-reverse items-center justify-center gap-12 px-6 py-16 md:flex-row md:justify-between md:py-24">
      <div className="max-w-xl text-center md:text-left">
        <p className="font-mono text-sm text-accent-text">Hi, my name is</p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>

        <p className="mt-4 text-xl text-foreground sm:text-2xl">
          {siteConfig.tagline}
        </p>

        <p className="mt-4 text-muted">{siteConfig.summary}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href={siteConfig.cv}
            download
            className="rounded-lg border border-border px-5 py-3 font-medium transition-colors hover:bg-border/50"
          >
            Download CV
          </a>
        </div>

        <ul className="mt-8 flex justify-center gap-6 text-sm md:justify-start">
          <li>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

      <Image
        src={sally}
        alt={`Portrait of ${siteConfig.name}`}
        priority
        placeholder="blur"
        sizes="(min-width: 768px) 320px, 224px"
        className="size-56 rounded-2xl object-cover md:size-80"
      />
    </section>
  );
}
