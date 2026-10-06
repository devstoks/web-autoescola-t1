import carro from "@/assets/carro.jpg";
import moto from "@/assets/moto.jpg";
import hero from "@/assets/hero.jpg";
import estrada from "@/assets/estrada.jpg";
import { whatsappMessages } from "@/config/contact";

export type Course = {
  id: string;
  category: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  price?: string; // vazio = "Consulte condições"
  message: string;
  popular?: boolean;
  enabled: boolean;
};

export const courses: Course[] = [
  { id: "primeira", category: "1ª CNH", name: "Primeira habilitação", description: "Para quem vai tirar a CNH pela primeira vez.", benefits: ["Aulas teóricas e práticas", "Acompanhamento completo"], image: hero, message: whatsappMessages.matricula, popular: true, enabled: true },
  { id: "B", category: "Categoria B", name: "Carro", description: "Aprenda a conduzir com segurança e confiança.", benefits: ["Aulas práticas com instrutor", "Horários flexíveis"], image: carro, message: whatsappMessages.B, enabled: true },
  { id: "A", category: "Categoria A", name: "Moto", description: "Preparação para a categoria A.", benefits: ["Treino de equilíbrio e controle", "Aulas acompanhadas"], image: moto, message: whatsappMessages.A, enabled: true },
  { id: "AB", category: "Categoria AB", name: "Carro + Moto", description: "Conquiste as duas categorias.", benefits: ["Formação completa", "Atendimento personalizado"], image: estrada, message: whatsappMessages.AB, enabled: true },
  { id: "adicao", category: "Adição", name: "Adição de categoria", description: "Para quem já possui habilitação.", benefits: ["Foco na nova categoria"], image: moto, message: whatsappMessages.geral, enabled: true },
  { id: "reciclagem", category: "Reciclagem", name: "Reciclagem", description: "Curso destinado aos casos aplicáveis.", benefits: ["Orientação sobre o processo"], image: carro, message: whatsappMessages.geral, enabled: true },
];
