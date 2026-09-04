import { profile } from "../data/site";

/** Monta o link wa.me com a mensagem pré-preenchida padrão (ou uma customizada). */
export function getWhatsappHref(message: string = profile.whatsappMessage): string {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}
