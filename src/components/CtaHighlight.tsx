import { Check, MessageCircle } from "lucide-react";
import { profile, ctaHighlight } from "../data/site";

export default function CtaHighlight() {
  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    profile.whatsappMessage,
  )}`;

  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <div className="flex flex-col items-start gap-8 rounded-lg border border-zinc-900 bg-zinc-900/40 px-6 py-10 transition hover:border-zinc-800 sm:flex-row sm:items-center sm:justify-between lg:px-12 lg:py-14">
        <div className="sm:max-w-sm">
          <h3 className="mb-2 text-xl font-semibold text-zinc-50 sm:text-2xl">
            {ctaHighlight.title}
          </h3>
          <p className="text-zinc-400">{ctaHighlight.description}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20 active:translate-y-0"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
        <ul className="flex flex-col gap-2 text-sm text-zinc-300">
          {ctaHighlight.items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check size={16} className="shrink-0 text-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
