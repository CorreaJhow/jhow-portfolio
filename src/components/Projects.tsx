import { projects } from "../data/site";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">04 · Projetos</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-dashed border-zinc-800 p-5"
          >
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
            <p className="mt-1 text-sm text-zinc-500">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-emerald-400 hover:text-emerald-300"
              >
                Ver site →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
