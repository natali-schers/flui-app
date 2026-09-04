import { Station } from "./types";

/** Emoji usado para cada comodidade. Adicione novas chaves conforme necessário. */
export const AMENITY_ICONS: Record<string, string> = {
  "Wi-Fi": "📶",
  Café: "☕",
  Banheiro: "🚻",
  Loja: "🛍️",
  Restaurante: "🍽️",
  Estacionamento: "🅿️",
  Cobertura: "🏠",
  Acessibilidade: "♿",
  "Estacionamento coberto": "🅿️",
  "Segurança 24h": "🛡️",
  "Praça de alimentação": "🍔",
};

/**
 * Cores do gradiente do badge de score, do pior (vermelho) ao melhor
 * (verde). Retorna um array de 2 cores hex para usar direto no
 * `colors` do `LinearGradient` (expo-linear-gradient).
 */
export function getScoreGradient(score: number): [string, string] {
  if (score >= 85) return ["#16A34A", "#22C55E"];
  if (score >= 70) return ["#7C3AED", "#B747F8"];
  if (score >= 50) return ["#D97706", "#F59E0B"];
  return ["#DC2626", "#EF4444"];
}

/** Rótulo curto (adjetivo) correspondente à faixa de score. */
export function getScoreLabel(score: number): string {
  if (score >= 85) return "Excelente";
  if (score >= 70) return "Ótimo";
  if (score >= 50) return "Bom";
  return "Regular";
}

/** Cor (hex) associada ao status de disponibilidade do ponto. */
export function getStatusColor(status: Station["status"]): string {
  switch (status) {
    case "available":
      return "#16A34A";
    case "busy":
      return "#D97706";
    case "unavailable":
    default:
      return "#DC2626";
  }
}

/**
 * Monta a URL de uma imagem do Unsplash a partir do id da foto.
 * IMPORTANTE: diferente da versão web, `getScoreGradient` (acima) já
 * retorna um ARRAY de cores — nunca uma string CSS. Se algum outro
 * arquivo do projeto ainda importar uma versão antiga que devolvia uma
 * string tipo "linear-gradient(...)", é isso que causa o erro
 * `colors.map is not a function`. Garanta que só exista esta versão.
 */
export function unsplashUrl(id: string, width = 800, height = 400): string {
  return `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&q=80`;
}
