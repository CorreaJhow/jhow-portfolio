import { ChevronDown } from "lucide-react";
import { faq } from "../data/site";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">05 · Perguntas frequentes</h2>
      <div className="space-y-3">
        {faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-zinc-900 bg-zinc-900/40 p-5 open:border-zinc-800"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-zinc-100 marker:content-none">
              {item.question}
              <ChevronDown
                size={16}
                className="shrink-0 text-zinc-600 transition group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
