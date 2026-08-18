import { profile } from "../data/site";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">01 · Sobre</h2>
      <div className="space-y-4 text-zinc-300">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
