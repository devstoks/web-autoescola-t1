import { whatsappMessages } from "@/config/contact";

export const categories = [
  { code: "A", name: "Motocicletas", text: "Para condução de veículos de duas ou três rodas, conforme as regras aplicáveis.", message: whatsappMessages.A, enabled: true },
  { code: "B", name: "Carros", text: "Para veículos compatíveis com a categoria B.", message: whatsappMessages.B, enabled: true },
  { code: "AB", name: "Carro + Moto", text: "Para quem deseja obter ambas as categorias.", message: whatsappMessages.AB, enabled: true },
];
