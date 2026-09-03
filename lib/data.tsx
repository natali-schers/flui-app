import { Station } from "./types";

/**
 * Dados de exemplo. Troque por uma chamada de API quando tiver o backend
 * pronto — o formato de cada item deve seguir a interface `Station`.
 */
export const stations: Station[] = [
  {
    id: "1",
    name: "Shopping Villa Lobos",
    rating: 4.5,
    reviewCount: 128,
    score: 94,
    status: "available",
    available: 6,
    total: 8,
    maxPower: 150,
    timeMin: 8,
    amenities: ["Wi-Fi", "Café", "Banheiro", "Loja"],
    reason: "Ótimo equilíbrio entre velocidade, disponibilidade e comodidades.",
  },
  {
    id: "2",
    name: "Posto Ipiranga - Marginal",
    rating: 4,
    reviewCount: 64,
    score: 82,
    status: "available",
    available: 2,
    total: 4,
    maxPower: 60,
    timeMin: 12,
    amenities: ["Café", "Banheiro"],
    reason: "Boa disponibilidade e fácil acesso pela marginal.",
  },
  {
    id: "3",
    name: "Estação Elera - Av. Paulista",
    rating: 4.5,
    reviewCount: 210,
    score: 71,
    status: "busy",
    available: 1,
    total: 6,
    maxPower: 100,
    timeMin: 15,
    amenities: ["Wi-Fi", "Restaurante", "Estacionamento coberto"],
    reason: "Central, mas com maior tempo de espera no horário de pico.",
  },
  {
    id: "4",
    name: "EcoCharge - Morumbi",
    rating: 3.5,
    reviewCount: 37,
    score: 58,
    status: "unavailable",
    available: 0,
    total: 3,
    maxPower: 50,
    timeMin: 20,
    amenities: ["Segurança 24h"],
    reason: "Sem vagas livres no momento, mas rota rápida até lá.",
  },
];
