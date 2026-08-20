import { howItWorks } from "../data/site";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">03 · Como eu trabalho</h2>
      <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {howItWorks.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="font-mono text-sm text-emerald-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="mb-1 font-medium text-zinc-100">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
