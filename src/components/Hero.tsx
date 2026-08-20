import { ArrowDown, MessageCircle } from "lucide-react";
import { profile } from "../data/site";
import portrait from "../assets/profile/portrait.webp";

export default function Hero() {
  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    profile.whatsappMessage,
  )}`;

  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-16 pt-24 sm:pt-32">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="mb-4 font-mono text-sm text-emerald-400">{profile.role}</p>
          <h1 className="word-reveal text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            {profile.name.split(" ").map((word, i) => (
              <span
                key={word + i}
                style={{ animationDelay: `${i * 0.08}s` }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
          <p className="mt-3 font-medium text-zinc-100">{profile.pitch}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-emerald-300"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
            >
              Ver serviços
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <img
          src={portrait}
          alt={profile.name}
          width={640}
          height={851}
          className="w-36 shrink-0 rounded-xl border border-zinc-800 object-cover sm:w-48"
        />
      </div>
    </section>
  );
}
