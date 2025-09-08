export interface SiteConfig {
  // Personal Information
  personal: {
    name: string;
    jobTitle: string;
    credentials: string;
    profileImage: string;
    profileImageAlt: string;
  };

  // Contact Information
  contact: {
    whatsapp: {
      phoneNumber: string;
      message: string;
    };
    calendly: {
      url: string;
      sessionDuration: string;
    };
  };

  // Social Media
  social: {
    instagram: string;
    linkedin?: string;
  };

  // Website Content
  content: {
    header: {
      description: string;
    };
    buttons: {
      approach: string;
      whatsapp: string;
      calendly: string;
    };
  };

  // Testimonials
  testimonials: Array<{
    id: number;
    name: string;
    text: string;
    rating: number;
  }>;

  // SEO & Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
    locale: string;
    canonicalUrl: string;
    openGraph: {
      title: string;
      description: string;
      siteName: string;
      image: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Ariane Bochi",
    jobTitle: "Psicóloga online",
    credentials: "CRP 07/24244",
    profileImage: "/images/ariane-3.png",
    profileImageAlt: "Ariane Bochi",
  },

  contact: {
    whatsapp: {
      phoneNumber: "351912384883",
      message:
        "Olá! Estou pensando iniciar terapia e achei seu perfil. Podemos conversar?",
    },
    calendly: {
      url: "https://calendly.com/arianebochi",
      sessionDuration: "30min",
    },
  },

  social: {
    instagram: "https://instagram.com/psi.arianebochi",
    linkedin: "https://www.linkedin.com/in/ariane-bochi-6a1310a8/",
  },

  content: {
    header: {
      description:
        "Dedicada às mulheres que questionam os padrões tradicionais. Apoio você a viver suas escolhas com liberdade e autenticidade.",
    },
    buttons: {
      approach: "Sobre a minha abordagem",
      whatsapp: "Fale comigo no WhatsApp",
      calendly: "Agende uma conversa inicial (30min)",
    },
  },

  testimonials: [
    {
      id: 1,
      name: "Laura N.",
      text: "A Ariane tem um jeito muito especial de me fazer questionar coisas que eu sempre aceitei como 'normais'. Desde a primeira sessão me senti ouvida e respeitada e isso faz toda a diferença para mim.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carla R.",
      text: "A Ariane é daquelas profissionais que a gente percebe que realmente se importa. No meio da minha rotina, entre estudos, trabalho e família, consegui fazer do meu processo de autoconhecimento uma prioridade graças a ela. ME PRIORIZAR. A experiência com a terapia tem sido muito melhor do que eu imaginava.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana P.",
      text: "A terapia me ajudou a entender meus padrões e a ter mais coragem para dizer “não”. Aprendi a me colocar como prioridade e pela primeira vez, sinto que estou no caminho certo. Só tenho a agradecer ❤️",
      rating: 5,
    },
  ],

  seo: {
    title: "Ariane Bochi - Psicóloga de mulheres",
    description:
      "Psicóloga online | Mestre em Família e Género | Childfree | Feminilidade | Relações e escolhas conscientes",
    keywords: [
      "psicóloga brasileira",
      "psicóloga em Portugal",
      "atendimento psicológico",
      "terapia online",
      "consultas psicológicas",
      "brasileiras em Portugal",
      "psicologia",
      "terapia",
      "saúde mental",
    ],
    locale: "pt_BR",
    canonicalUrl: "https://arianebochi.com",
    openGraph: {
      title: "Ariane Bochi - Psicóloga de mulheres",
      description:
        "Psicóloga online | Mestre em Família e Género | Childfree | Feminilidade | Relações e escolhas conscientes",
      siteName: "Ariane Bochi Psicóloga",
      image: "/images/ari-hd.png",
    },
  },
};
