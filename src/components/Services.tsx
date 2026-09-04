import { services, profile } from "../data/site";

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-400">02 · Serviços</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-zinc-900 bg-zinc-900/40 p-5 transition hover:-translate-y-1 hover:border-zinc-800 hover:shadow-lg hover:shadow-black/20"
          >
            <h3 className="mb-2 font-medium text-zinc-100">{service.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <a
        href={`mailto:${profile.email}?subject=Quero%20um%20site%20ou%20sistema`}
        className="group mt-6 inline-flex items-center text-sm text-emerald-400 transition hover:text-emerald-300"
      >
        Pedir orçamento
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}
