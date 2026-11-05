import { useEffect, useRef, useState } from "react";
import { numeros } from "../data/site";

const fmt = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

/** Conta de 0 até `alvo` quando entra na tela (sem animação pra quem pediu menos movimento). */
function Contador({ alvo, sufixo }: { alvo: number; sufixo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Começa no valor real: se o observer nunca disparar, o número certo continua na tela.
  const [v, setV] = useState(alvo);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const passo = (t: number) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(alvo * (1 - (1 - p) ** 3));
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [alvo]);

  return (
    <span ref={ref}>
      {fmt(Number.isInteger(alvo) ? Math.round(v) : Math.round(v * 10) / 10)}
      {sufixo}
    </span>
  );
}

export default function Numeros() {
  return (
    <section id="por-que" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <p className="font-mono text-sm text-vermelho-400">por que ter site</p>
      <h2 className="mt-2 text-balance text-4xl uppercase text-cafe-50 sm:text-5xl">
        Seu cliente procura no Google <span className="text-vermelho-500">antes</span> de ir até você.
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {numeros.map((n) => (
          <figure key={n.fonte} className="flex flex-col rounded-xl border border-cafe-800 bg-cafe-900/50 p-6">
            <p className="font-display text-6xl text-vermelho-500">
              <Contador alvo={n.valor} sufixo={n.sufixo} />
            </p>
            <blockquote className="mt-3 flex-1 leading-relaxed text-cafe-200">{n.texto}</blockquote>
            <figcaption className="mt-4 text-xs text-cafe-500">
              Fonte:{" "}
              <a href={n.url} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-cafe-300">
                {n.fonte}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-balance text-lg text-cafe-300">
        Sem site e sem perfil no Google, quem pesquisa encontra <strong className="text-cafe-50">o seu concorrente</strong>.
      </p>
    </section>
  );
}
