import { profile } from "../data/site";

const items = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#links", label: "Links" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="font-mono text-zinc-100">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-emerald-400">.</span>
        </a>
        <ul className="flex gap-5 text-zinc-400">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-zinc-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
