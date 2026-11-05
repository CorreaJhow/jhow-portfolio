import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import { blackFriday } from "../data/site";
import { getWhatsappHref } from "../lib/whatsapp";

import { ativa, fim } from "../lib/blackFriday";

const KEY = "bf2026-fechado";
const href = () => getWhatsappHref(blackFriday.whatsappMessage);

const tag = "inline-block rounded bg-vermelho-500 px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-white";
const botao =
  "inline-flex items-center justify-center gap-2 rounded-md bg-vermelho-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-vermelho-600 hover:shadow-lg hover:shadow-vermelho-500/20 active:translate-y-0";

function BotaoWhats({
  onClick,
  className = "",
  texto = "Quero minha demonstração grátis",
}: {
  onClick?: () => void;
  className?: string;
  texto?: string;
}) {
  return (
    <a href={href()} target="_blank" rel="noreferrer" onClick={onClick} className={`${botao} ${className}`}>
      <MessageCircle size={16} />
      {texto}
    </a>
  );
}

/** Contagem regressiva até o fim do dia `ate` (prazo real, não reinicia). */
function Contagem() {
  const [agora, setAgora] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.max(0, Math.floor((fim().getTime() - agora) / 1000));
  const partes = [
    [Math.floor(s / 86400), "dias"],
    [Math.floor((s % 86400) / 3600), "horas"],
    [Math.floor((s % 3600) / 60), "min"],
    [s % 60, "seg"],
  ] as const;
  return (
    <div className="mt-6 flex gap-2" role="timer" aria-label="Tempo até o fim da Black Friday">
      {partes.map(([n, rotulo]) => (
        <div key={rotulo} className="w-16 rounded-lg bg-cafe-950 py-2 text-center ring-1 ring-cafe-800">
          <span className="block font-display text-3xl tabular-nums text-cafe-50">{String(n).padStart(2, "0")}</span>
          <span className="font-mono text-[10px] uppercase text-cafe-500">{rotulo}</span>
        </div>
      ))}
    </div>
  );
}

/** Faixa fina no topo; leva pra seção da oferta ("/#" pra funcionar também na página de links). */
export function BlackFridayBar() {
  if (!ativa()) return null;
  return (
    <a
      href="/#black-friday"
      className="block bg-vermelho-500 px-4 py-2 text-center text-xs font-medium text-white transition hover:bg-vermelho-600 sm:text-sm"
    >
      <span className="font-mono font-semibold">BLACK FRIDAY</span> · {blackFriday.barra} →
    </a>
  );
}

/** Seção completa da oferta, logo depois do Hero. */
export function BlackFridayOffer() {
  if (!ativa()) return null;
  return (
    <section id="black-friday" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-12">
      <div className="rounded-xl border border-vermelho-500/30 bg-gradient-to-b from-vermelho-500/[0.07] to-transparent px-6 py-10 sm:px-10">
        <p className={tag}>BLACK FRIDAY · ATÉ 30/11</p>
        <h2 className="mt-4 text-balance text-4xl uppercase text-cafe-50 sm:text-5xl">
          <span className="text-vermelho-500">Desconto</span> + {blackFriday.titulo}
        </h2>
        <p className="mt-4 text-balance leading-relaxed text-cafe-400">{blackFriday.subtitulo}</p>
        <Contagem />
        <BotaoWhats className="mt-6 w-full sm:w-auto" texto="Garantir meu desconto" />

        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {blackFriday.beneficios.map((b) => (
            <li key={b.titulo} className="flex gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-vermelho-400" />
              <div>
                <h3 className="font-medium text-cafe-100">{b.titulo}</h3>
                <p className="text-sm leading-relaxed text-cafe-400">{b.texto}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 mb-4 font-mono text-sm text-cafe-400">Como funciona</h3>
        <ol className="grid gap-4 sm:grid-cols-3">
          {blackFriday.passos.map((p, i) => (
            <li key={p.titulo} className="rounded-lg border border-cafe-800 bg-cafe-950/60 p-4">
              <span className="font-mono text-2xl font-semibold text-vermelho-400">{i + 1}</span>
              <h4 className="mt-2 font-medium text-cafe-100">{p.titulo}</h4>
              <p className="mt-1 text-sm leading-relaxed text-cafe-400">{p.texto}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-10 flex flex-col gap-4">
          {blackFriday.faq.map((f) => (
            <div key={f.q}>
              <dt className="font-medium text-cafe-100">{f.q}</dt>
              <dd className="text-sm text-cafe-400">{f.a}</dd>
            </div>
          ))}
        </dl>

        <BotaoWhats className="mt-8 w-full" />
        <p className="mt-3 text-center text-xs text-cafe-500">{blackFriday.rodape}</p>
      </div>
    </section>
  );
}

/** Card que aparece uma vez por visitante, 3s depois de abrir. Não cobre a tela (evita pop-up intrusivo no mobile). */
export default function BlackFriday() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!ativa()) return;
    try {
      if (localStorage.getItem(KEY)) return;
    } catch {
      /* storage bloqueado: mostra mesmo assim */
    }
    const t = setTimeout(() => setAberto(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && fechar();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [aberto]);

  function fechar() {
    setAberto(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* sem storage: só fecha nesta visita */
    }
  }

  if (!aberto) return null;

  return (
    <aside
      role="dialog"
      aria-labelledby="bf-titulo"
      className="fixed inset-x-3 bottom-3 z-[60] rounded-lg border border-vermelho-500/40 bg-cafe-950 p-5 shadow-2xl shadow-black/15 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-96"
      style={{ animation: "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar aviso de Black Friday"
        className="absolute top-3 right-3 rounded p-1 text-cafe-500 transition hover:text-cafe-100"
      >
        <X size={18} />
      </button>
      <p className={tag}>BLACK FRIDAY · ATÉ 30/11</p>
      <h2 id="bf-titulo" className="mt-2 text-2xl uppercase leading-tight text-cafe-50">
        Black Friday: desconto e seu site pronto pra ver antes de pagar.
      </h2>
      <p className="mt-2 text-sm text-cafe-400">
        Demonstração + orçamento grátis. Gostou, fechamos com desconto. Não gostou, não paga nada.
      </p>
      <BotaoWhats onClick={fechar} className="mt-4 w-full" />
      <a href="#black-friday" onClick={fechar} className="mt-3 block text-center text-xs text-cafe-400 underline-offset-2 hover:text-cafe-100 hover:underline">
        Ver todos os benefícios
      </a>
    </aside>
  );
}
