import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6">
      <p className="font-mono text-sm text-accent-text">Hi, my name is</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 text-lg text-muted">{siteConfig.description}</p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-8 w-fit rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Get in touch
      </a>
    </main>
  );
}
