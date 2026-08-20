import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/site";
import mark from "../assets/profile/mark.webp";

const items = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#links", label: "Links" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-mono text-zinc-100"
        >
          <img
            src={mark}
            alt=""
            width={128}
            height={128}
            className="h-6 w-6 rounded-full border border-zinc-800"
          />
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-emerald-400">.</span>
        </a>
        <ul className="hidden gap-5 text-zinc-400 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-zinc-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="text-zinc-400 transition hover:text-zinc-100 sm:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-zinc-900 px-6 py-3 text-zinc-400 sm:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition hover:text-zinc-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
