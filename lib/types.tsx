export interface Station {
  id: string;
  name: string;
  /** Nota média (0 a 5), pode ter casa decimal (ex: 4.5) */
  rating: number;
  reviewCount: number;
  /** Pontuação Flui Score, de 0 a 100 */
  score: number;
  status: "available" | "busy" | "unavailable";
  /** Quantidade de conectores livres agora */
  available: number;
  /** Quantidade total de conectores no ponto */
  total: number;
  /** Potência máxima de carga, em kW */
  maxPower: number;
  /** Tempo estimado até o ponto, em minutos */
  timeMin: number;
  /** Chaves de comodidades disponíveis, ver AMENITY_ICONS em utils.ts */
  amenities: string[];
  /** Frase curta explicando por que esse ponto foi recomendado */
  reason: string;
  latitude?: number;
  longitude?: number;
  address?: string;
}

export type AppScreen =
  | { type: "home" }
  | { type: "results" }
  | { type: "stationDetail"; id: string }
  | { type: "map" }
  | { type: "travel" };
