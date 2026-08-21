import { MessageCircle } from "lucide-react";
import { profile } from "../data/site";

export default function Footer() {
  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    profile.whatsappMessage,
  )}`;

  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-zinc-100">Bora tirar o site do papel?</p>
          <p className="mt-1 text-sm text-zinc-500">
            Me chama no WhatsApp e conta como é o seu negócio.
          </p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20 active:translate-y-0"
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>
      </div>
      <div className="border-t border-zinc-900 px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-1 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location.region} · atendimento remoto pra todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
