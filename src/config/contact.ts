export const contactConfig = {
  whatsapp: "5521985259914",
  whatsappDisplay: "+55 21 98525-9914",
  instagram: "https://www.instagram.com/theustoks",
  instagramHandle: "@theustoks",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  openingHours: "",
  googleMapsUrl: "",
};

export const whatsappMessages = {
  matricula: "Olá! Conheci a Autoescola pelo site e gostaria de saber mais sobre matrícula e as categorias disponíveis.",
  A: "Olá! Gostaria de saber mais sobre a categoria A e as condições para matrícula.",
  B: "Olá! Gostaria de saber mais sobre a categoria B e as condições para matrícula.",
  AB: "Olá! Gostaria de saber mais sobre a categoria AB e as condições para matrícula.",
  geral: "Olá! Conheci a Autoescola pelo site e gostaria de tirar algumas dúvidas.",
};

export function generateWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export const waLink = (message: string = whatsappMessages.geral) =>
  generateWhatsAppLink(contactConfig.whatsapp, message);
