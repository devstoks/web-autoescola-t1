// Edite este arquivo para adaptar o template a cada cliente.
// Campos vazios ("") são ocultados automaticamente no site.
export const businessConfig = {
  name: "Autoescola",
  slogan: "Prepare-se para dirigir com confiança.",
  description: "Formação para quem quer aprender a dirigir com segurança e confiança.",
  logo: "", // URL da logo (opcional). Vazio = logo em texto.
  heroImage: "", // URL da imagem do hero (opcional). Vazio = imagem padrão.
  primaryColor: "#F5B800",
  secondaryColor: "#111111",
  siteUrl: "",

  // Diferenciais da barra de confiança
  trust: [
    { icon: "users", title: "Instrutores preparados", text: "Profissionais dedicados ao seu aprendizado." },
    { icon: "car", title: "Aulas práticas", text: "Aprenda na prática com acompanhamento." },
    { icon: "calendar", title: "Horários flexíveis", text: "Opções de horários para diferentes rotinas." },
    { icon: "shield", title: "Veículos preparados", text: "Carros adequados para as aulas." },
    { icon: "heart", title: "Atendimento personalizado", text: "Acompanhamento durante sua jornada." },
  ],

  aboutHighlights: [
    "Atendimento próximo",
    "Aulas práticas",
    "Acompanhamento",
    "Estrutura adequada",
    "Veículos preparados",
    "Flexibilidade de horários",
  ],

  // NÃO invente números. Valores vazios são ocultados.
  statistics: [
    { value: "", label: "Alunos formados" },
    { value: "", label: "Anos de experiência" },
    { value: "", label: "Avaliação média" },
    { value: "", label: "Taxa de aprovação" },
  ],

  // Imagens do Instagram (URLs). Vazio = grade com placeholders visuais.
  instagramImages: [] as string[],
};
