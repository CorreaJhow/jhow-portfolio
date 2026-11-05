import { Check, MessageCircle } from "lucide-react";
import { produtos } from "../data/site";
import { getWhatsappHref } from "../lib/whatsapp";
import { ativa } from "../lib/blackFriday";

export default function Produtos() {
  const bf = ativa();
  return (
    <section id="produtos" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="font-mono text-sm text-vermelho-400">o que eu faço</p>
      <h2 className="mt-2 text-balance text-4xl uppercase text-cafe-50 sm:text-5xl">
        Escolha o que seu negócio precisa.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-cafe-400">
        Todo projeto começa com a demonstração grátis e o orçamento por escrito.
        {bf && " Até 30/11, quem me chamar no WhatsApp ganha desconto de Black Friday."}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {produtos.map((p) => (
          <article
            key={p.nome}
            className={`relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${
              p.destaque ? "border-vermelho-500/60 bg-vermelho-500/[0.06]" : "border-cafe-800 bg-cafe-900/50"
            }`}
          >
            {bf && (
              <span className="absolute -top-3 right-5 rotate-2 rounded bg-vermelho-500 px-2 py-1 font-mono text-xs font-bold text-white shadow-[3px_3px_0_#000]">
                DESCONTO ATÉ 30/11
              </span>
            )}
            <h3 className="font-display text-3xl uppercase text-cafe-50">{p.nome}</h3>
            <p className="mt-1 text-sm text-cafe-400">{p.pra}</p>
            {p.destaque && <p className="mt-2 font-mono text-xs text-vermelho-400">{p.destaque}</p>}
            <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm text-cafe-200">
              {p.itens.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-vermelho-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsappHref(p.mensagem)}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
                p.destaque
                  ? "bg-vermelho-500 text-white hover:bg-vermelho-600"
                  : "border border-cafe-600 text-cafe-100 hover:border-cafe-400"
              }`}
            >
              <MessageCircle size={16} />
              Quero esse
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-cafe-500">
        Precisa de algo maior, como sistema, painel ou automação? Também faço sob medida.{" "}
        <a href={getWhatsappHref()} target="_blank" rel="noreferrer" className="text-vermelho-400 hover:text-vermelho-300">
          Me conta →
        </a>
      </p>
    </section>
  );
}
