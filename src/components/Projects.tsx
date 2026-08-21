import { projects } from "../data/site";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">04 · Projetos</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-dashed border-zinc-800 p-5 transition hover:-translate-y-1 hover:border-solid hover:border-zinc-700 hover:bg-zinc-900/40 hover:shadow-lg hover:shadow-black/20"
          >
            <div className="flex items-center gap-3">
              {project.logoUrl && (
                <img
                  src={project.logoUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 rounded-md border border-zinc-800 object-cover"
                />
              )}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-zinc-200">{project.title}</h3>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-zinc-500">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-2 inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
              >
                Ver site
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
