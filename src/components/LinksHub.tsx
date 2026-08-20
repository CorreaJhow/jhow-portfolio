import { Mail, ExternalLink } from "lucide-react";
import { links } from "../data/site";

export default function LinksHub() {
  return (
    <section id="links" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-zinc-500">04 · Links</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const isMail = link.url.startsWith("mailto:");
          const Icon = isMail ? Mail : ExternalLink;
          return (
            <a
              key={link.label}
              href={link.url}
              target={isMail ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-lg border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-800 hover:text-zinc-100"
            >
              {link.label}
              <Icon size={16} className="text-zinc-600" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
