import type { ReactNode } from "react";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from "./icons/Brands";
import { links } from "../data/site";

type IconComponent = (props: { size?: number; className?: string }) => ReactNode;

const ICONS: Record<string, IconComponent> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: MessageCircle,
  "E-mail": Mail,
};

export default function LinksHub() {
  return (
    <section id="links" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-cafe-400">06 · Links</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const isMail = link.url.startsWith("mailto:");
          const Icon = ICONS[link.label] ?? ExternalLink;
          return (
            <a
              key={link.label}
              href={link.url}
              target={isMail ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-cafe-900 bg-cafe-900/40 px-4 py-3 text-sm text-cafe-300 transition hover:-translate-y-0.5 hover:border-cafe-800 hover:text-cafe-100 hover:shadow-lg hover:shadow-black/10"
            >
              {link.label}
              <Icon
                size={16}
                className="text-cafe-500 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
