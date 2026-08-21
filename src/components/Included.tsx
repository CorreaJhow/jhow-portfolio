import { CheckCircle2 } from "lucide-react";
import { included } from "../data/site";

export default function Included() {
  return (
    <section id="incluso" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-400">03 · O que já vem incluso</h2>
      <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {included.map((item) => (
          <li key={item.title} className="flex gap-3">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
            <div>
              <h3 className="mb-1 font-medium text-zinc-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
