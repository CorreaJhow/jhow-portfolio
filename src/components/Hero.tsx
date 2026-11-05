import { ArrowDown, MessageCircle } from "lucide-react";
import { blackFriday, profile } from "../data/site";
import { ativa } from "../lib/blackFriday";
import { getWhatsappHref } from "../lib/whatsapp";
import portrait from "../assets/profile/portrait.webp";

/** "*palavra*" sai em vermelho (igual às capas); o resto entra palavra a palavra (animação word-reveal). */
function Headline({ text }: { text: string }) {
  return (
    <h1 className="word-reveal text-5xl uppercase leading-[0.95] text-cafe-50 sm:text-7xl">
      {text.split(" ").map((word, i) => {
        const destaque = word.startsWith("*");
        return (
          <span
            key={word + i}
            style={{ animationDelay: `${i * 0.07}s` }}
            className={`mr-[0.22em] inline-block ${destaque ? "text-vermelho-500" : ""}`}
          >
            {word.replace(/\*/g, "")}
          </span>
        );
      })}
    </h1>
  );
}

/** Foto redonda com um anel de texto girando em volta. */
function Retrato() {
  const frase = profile.ring.map((p) => `${p} · `).join("").repeat(2);
  return (
    <div className="relative w-56 shrink-0 sm:w-72">
      <svg viewBox="0 0 200 200" className="gira absolute inset-0 h-full w-full text-cafe-500" aria-hidden="true">
        <defs>
          <path id="anel" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" />
        </defs>
        <text className="fill-current font-mono text-[9.5px] uppercase">
          {/* textLength = volta inteira (2πr), pra frase fechar sem encavalar */}
          <textPath href="#anel" textLength="578" lengthAdjust="spacing">
            {frase}
          </textPath>
        </text>
      </svg>
      <img
        src={portrait}
        alt={`${profile.name} com uma xícara de café no escritório`}
        width={560}
        height={560}
        className="relative m-[13%] w-[74%] rounded-full shadow-2xl shadow-black/25"
      />
    </div>
  );
}

export default function Hero() {
  const bf = ativa();
  const whatsappHref = getWhatsappHref(bf ? blackFriday.whatsappMessage : undefined);

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-14 sm:pt-24">
      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-xl">
          <p className="mb-5 font-mono text-sm text-vermelho-400">
            Oi, eu sou o {profile.name.split(" ")[0]} · {profile.role.toLowerCase()}
          </p>
          <Headline text={profile.headline} />
          <p className="mt-6 text-balance text-lg leading-relaxed text-cafe-400">{profile.tagline}</p>
          {bf ? (
            <a href="#black-friday" className="mt-5 inline-flex items-center gap-2 rounded-full bg-vermelho-500/10 px-3 py-1.5 text-sm text-cafe-100 ring-1 ring-vermelho-500/40 hover:bg-vermelho-500/20">
              <span className="relative flex size-2 shrink-0"><span className="absolute inline-flex size-full animate-ping rounded-full bg-vermelho-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-vermelho-500" /></span>
              <span>
                Black Friday: <strong className="text-vermelho-400">desconto especial</strong> pra quem me chamar até 30/11
              </span>
            </a>
          ) : (
            <p className="mt-4 text-lg font-medium text-cafe-100">{profile.pitch}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-vermelho-500 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-vermelho-600 hover:shadow-lg hover:shadow-vermelho-500/25 active:translate-y-0"
            >
              <MessageCircle size={16} />
              {bf ? "Quero minha demonstração grátis" : "Falar no WhatsApp"}
            </a>
            <a
              href="#demos"
              className="group inline-flex items-center gap-2 rounded-full border border-cafe-700 px-5 py-2.5 text-sm font-medium text-cafe-200 transition hover:-translate-y-0.5 hover:border-cafe-500 hover:text-cafe-50 active:translate-y-0"
            >
              Ver sites que eu fiz
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
        <Retrato />
      </div>
    </section>
  );
}
