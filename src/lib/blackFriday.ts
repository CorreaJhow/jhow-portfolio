import { blackFriday } from "../data/site";

/** Fim da promoção: último segundo do dia `ate`, no horário de quem visita. */
export const fim = () => new Date(`${blackFriday.ate}T23:59:59`);
export const ativa = () => new Date() <= fim();
