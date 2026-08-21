import { profile, links } from "../data/site";

const linkedin = links.find((link) => link.label === "LinkedIn")?.url;

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
        {linkedin && (
          <p className="text-sm text-zinc-500">
            Quer conhecer minha trajetória de perto?{" "}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-emerald-400 hover:text-emerald-300"
            >
              Meu histórico no LinkedIn
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
