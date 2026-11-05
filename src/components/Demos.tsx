import { ExternalLink, MessageCircle } from "lucide-react";
import { blackFriday, demos } from "../data/site";
import { getWhatsappHref } from "../lib/whatsapp";
import saobento from "../assets/demos/saobento.webp";

const imgs = { saobento };

/** Celulares com a página inteira da demo rolando sozinha (print estático animado, sem vídeo pesado). */
export default function Demos() {
  return (
    <section id="demos" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <p className="font-mono text-sm text-vermelho-400">veja funcionando</p>
      <h2 className="mt-2 text-balance text-4xl uppercase text-cafe-50 sm:text-5xl">
        Assim fica o site <span className="text-vermelho-500">antes</span> de você pagar.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-cafe-400">
        Essa é uma demonstração que eu montei pra uma marmitaria daqui. É isso que você recebe no seu WhatsApp: o
        site funcionando, com a cara do seu negócio.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-10 sm:gap-16">
        {demos.map((d, i) => (
          <figure key={d.nome} className={`w-60 ${i % 2 ? "sm:mt-12" : ""}`}>
            <div className="rounded-[2.4rem] bg-black p-2.5 shadow-2xl shadow-black/60 ring-1 ring-cafe-800">
              <div className="relative h-[460px] overflow-hidden rounded-[1.9rem] bg-cafe-900">
                <img
                  src={imgs[d.img]}
                  alt={`Página do site de demonstração da ${d.nome} no celular`}
                  loading="lazy"
                  className="rola-demo w-full"
                  style={{ animationDelay: `${i * -6}s` }}
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center">
              <span className="block font-medium text-cafe-100">{d.nome}</span>
              <span className="text-sm text-cafe-500">{d.tipo} · demonstração</span>
              <a
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center justify-center gap-1 text-sm text-vermelho-400 hover:text-vermelho-300"
              >
                abrir o site <ExternalLink size={13} />
              </a>
            </figcaption>
          </figure>
        ))}
        {/* Vaga "do visitante": convite visual pra pedir a própria demonstração. */}
        <figure className="w-60 sm:mt-12">
          <a
            href={getWhatsappHref(blackFriday.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="group flex h-[480px] flex-col items-center justify-center gap-3 rounded-[2.4rem] border-2 border-dashed border-cafe-600 text-center transition hover:border-vermelho-500 hover:bg-vermelho-500/5"
          >
            <span className="font-display text-5xl uppercase leading-none text-cafe-400 transition group-hover:text-cafe-100">
              O seu
              <br />
              aqui<span className="text-vermelho-500">?</span>
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-vermelho-400">
              <MessageCircle size={14} /> quero minha demonstração
            </span>
          </a>
          <figcaption className="mt-4 text-center text-sm text-cafe-500">seu negócio · grátis até 30/11</figcaption>
        </figure>
      </div>
    </section>
  );
}
