import { projects } from "../data/site";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">03 · Projetos</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-dashed border-zinc-800 p-5"
          >
            <h3 className="font-medium text-zinc-200">{project.title}</h3>
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
