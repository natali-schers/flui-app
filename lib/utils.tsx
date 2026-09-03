import { Station } from "./types";

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
