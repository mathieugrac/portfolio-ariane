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
    linkedin: "https://linkedin.com/in/arianebochi",
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
      name: "Maria S.",
      text: "Ariane me ajudou a superar minha ansiedade de forma incrível. Sua abordagem é muito acolhedora e profissional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ana L.",
      text: "As sessões com a Ariane transformaram minha vida. Ela tem uma forma única de conectar e entender as necessidades femininas.",
      rating: 5,
    },
    {
      id: 3,
      name: "Carla M.",
      text: "Recomendo muito! Ariane é uma psicóloga excepcional que realmente se importa com o bem-estar das suas pacientes.",
      rating: 5,
    },
  ],

  seo: {
    title: "Ariane Bochi - Psicóloga de mulheres",
    description:
      "Psicóloga brasileira oferecendo atendimento psicológico personalizado em Portugal. Consultas online e presenciais para brasileiras. Agende sua consulta via WhatsApp ou Calendly.",
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
    canonicalUrl: "https://portfolio-ariane-mathieugracs-projects.vercel.app",
    openGraph: {
      title: "Ariane Bochi - Psicóloga de mulheres",
      description:
        "Psicóloga brasileira oferecendo atendimento psicológico personalizado em Portugal. Consultas online e presenciais para brasileiras.",
      siteName: "Ariane Bochi Psicóloga",
      image: "/images/ari-hd.png",
    },
  },
};
