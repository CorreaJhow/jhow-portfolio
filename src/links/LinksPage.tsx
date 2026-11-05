import type { ReactNode } from "react";
import {
  MessageCircle,
  Mail,
  Globe,
  Code2,
  Music,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from "../components/icons/Brands";
import { hubProfile, hubSections, type HubLink, type LinkIcon } from "../data/links";
import { trackClick } from "../lib/analytics";
import { BlackFridayBar } from "../components/BlackFriday";
import mark from "../assets/profile/avatar.webp";

type IconComponent = (props: { size?: number; className?: string }) => ReactNode;

const ICONS: Record<LinkIcon, IconComponent> = {
  whatsapp: MessageCircle,
  globe: Globe,
  mail: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  code: Code2,
  bass: Music,
  prompts: Sparkles,
  course: GraduationCap,
};

function LinkCard({ link }: { link: HubLink }) {
  const Icon = ICONS[link.icon];
  const soon = link.status === "soon" || !link.url;

  const base = "flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition";
  const tone = soon
    ? "cursor-default border-cafe-900 bg-cafe-900/20 text-cafe-500"
    : link.featured
      ? "border-vermelho-500 bg-vermelho-500 text-white hover:-translate-y-0.5 hover:bg-vermelho-600 hover:shadow-lg hover:shadow-vermelho-500/20"
      : "border-cafe-800 bg-cafe-900/40 text-cafe-100 hover:-translate-y-0.5 hover:border-cafe-700 hover:shadow-lg hover:shadow-black/10";

  const content = (
    <>
      <Icon size={20} className="shrink-0" />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium">{link.label}</span>
        {link.description && (
          <span
            className={`mt-0.5 block text-xs ${
              soon ? "text-cafe-600" : link.featured ? "text-white/85" : "text-cafe-400"
            }`}
          >
            {link.description}
          </span>
        )}
      </span>
      {soon ? (
        <span className="shrink-0 rounded-full border border-cafe-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cafe-500">
          Em breve
        </span>
      ) : (
        <ArrowUpRight size={16} className="shrink-0 opacity-60" />
      )}
    </>
  );

  if (soon) {
    return (
      <div className={`${base} ${tone}`} aria-disabled="true">
        {content}
      </div>
    );
  }

  const isMail = link.url!.startsWith("mailto:");
  return (
    <a
      href={link.url}
      target={isMail ? undefined : "_blank"}
      rel="noreferrer"
      onClick={() => trackClick(link.label)}
      className={`${base} ${tone}`}
    >
      {content}
    </a>
  );
}

const visibleSections = hubSections
  .map((section) => ({
    ...section,
    links: section.links.filter((link) => link.status === "live" || link.teaser),
  }))
  .filter((section) => section.links.length > 0);

export default function LinksPage() {
  return (
    <>
    <BlackFridayBar />
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-12 pt-12">
      <header className="flex flex-col items-center text-center">
        <img
          src={mark}
          alt={hubProfile.name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full border border-cafe-800 object-cover"
        />
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-cafe-50">{hubProfile.name}</h1>
        <p className="mt-1.5 text-balance text-sm text-cafe-400">{hubProfile.tagline}</p>
      </header>

      <div className="mt-10 space-y-8">
        {visibleSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-cafe-500">
              {section.title}
            </h2>
            <div className="space-y-2.5">
              {section.links.map((link) => (
                <LinkCard key={link.label} link={link} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center font-mono text-xs text-cafe-600">jhow.me</footer>
    </main>
    </>
  );
}
