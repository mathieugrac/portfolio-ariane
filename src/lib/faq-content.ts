export interface FAQSection {
  id: string;
  title: string;
  content: string | string[];
}

export const faqContent: FAQSection[] = [
  {
    id: "para-quem",
    title: "Para quem é meu trabalho",
    content: [
      "Atuo exclusivamente com mulheres que estão em diferentes momentos de suas jornadas pessoais e profissionais.",
      "Especialmente para aquelas que estão:",
      "• Explorando o desejo de ser mãe — ou de não seguir esse caminho",
      "• Reavaliando relações, papéis e vínculos afetivos",
      "• Buscando mais autenticidade na forma como vivem e se relacionam",
      "• Morando fora do seu país e atravessando as dores (e transformações) de recomeçar em um novo lugar",
      "• Desejando se libertar de expectativas e narrativas que já não fazem sentido",
    ],
  },
  {
    id: "minha-abordagem",
    title: "Minha abordagem",
    content: [
      "Acredito que o processo terapêutico é sobre criar espaço para se escutar com mais honestidade.",
      "É um caminho de reconexão com a sua história, com o que você sente e com o que realmente importa — no seu ritmo.",
      "Trabalho com uma abordagem integrativa, combinando técnicas das Terapias Cognitivas com uma visão humanista e contextual.",
      "O foco está em criar um espaço seguro onde você possa explorar suas experiências, questionar padrões estabelecidos e encontrar sua própria voz.",
    ],
  },
  {
    id: "como-trabalho",
    title: "Como trabalho",
    content: [
      "A nossa primeira conversa não tem custo e a duração é de 30 minutos.",
      "É um momento dedicado para nos conhecermos, entender o que te trouxe até aqui e combinarmos juntas como será o processo terapêutico — incluindo frequência, valor das sessões e disponibilidade de horários.",
      "As sessões seguintes têm 50 minutos.",
      "Atendo exclusivamente online, e mesmo com fusos diferentes, podemos combinar um momento que funcione para nós duas.",
      "As consultas acontecem por videochamada, via Google Meet ou WhatsApp. Os pagamentos podem ser feitos por Pix ou PayPal.",
    ],
  },
  {
    id: "quem-sou",
    title: "Quem sou eu",
    content: [
      "Sou Psicóloga (CRP 07/24244) formada pela UFCSPA (2014), especialista em Terapias Cognitivas (NEAPC-2017) e mestre em Família e Género pela Universidade de Lisboa (2024).",
      "Ao longo da minha trajetória, também atuei com Recursos Humanos, o que aprofundou minha escuta sobre relações interpessoais, identidade profissional e os impactos do mundo do trabalho na saúde mental.",
      "Além disso, acompanhei junto a uma equipe multidisciplinar pessoas em processos de emagrecimento, ampliando meu olhar para questões relacionadas à imagem corporal, autoestima e as exigências sociais sobre o corpo feminino.",
      "Esse pode ser o começo de um novo percurso. Vamos juntas?",
    ],
  },
];
