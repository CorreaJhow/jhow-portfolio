// Métricas da página de links via GoatCounter (gratuito, sem cookies, sem banner de consentimento).
// Pra ativar: crie a conta em goatcounter.com e coloque o código escolhido abaixo
// (ex.: "jhow" -> jhow.goatcounter.com). Vazio = nenhuma métrica é coletada.
const GOATCOUNTER_CODE = "";

interface GoatCounter {
  count: (vars: { path: string; title?: string; event?: boolean }) => void;
}

declare global {
  interface Window {
    goatcounter?: GoatCounter;
  }
}

/** Injeta o script (conta a visita automaticamente). */
export function initAnalytics(): void {
  if (!GOATCOUNTER_CODE) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(script);
}

/** Registra o clique num link (aparece como evento "click/<label>"). */
export function trackClick(label: string): void {
  window.goatcounter?.count({ path: `click/${label}`, title: label, event: true });
}
