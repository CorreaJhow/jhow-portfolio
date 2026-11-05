import { MessageCircle } from "lucide-react";
import { profile } from "../data/site";
import { getWhatsappHref } from "../lib/whatsapp";

export default function Footer() {
  const whatsappHref = getWhatsappHref();

  return (
    <footer className="border-t border-cafe-900">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-cafe-100">Bora tirar o site do papel?</p>
          <p className="mt-1 text-sm text-cafe-400">
            Me chama no WhatsApp e conta como é o seu negócio.
          </p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-vermelho-500 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-vermelho-600 hover:shadow-lg hover:shadow-vermelho-500/20 active:translate-y-0"
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>
      </div>
      <div className="border-t border-cafe-900 px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-1 text-xs text-cafe-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location.region} · atendimento remoto pra todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
