import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-20 pt-24 sm:pt-32">
      <p className="mb-4 font-mono text-sm text-emerald-400">
        {profile.role}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-zinc-400">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-emerald-300"
        >
          <Mail size={16} />
          Fale comigo
        </a>
        <a
          href="#servicos"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
        >
          Ver serviços
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
