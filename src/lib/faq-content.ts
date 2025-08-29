export interface FAQSection {
  id: string;
  title: string;
  contentFile: string; // Reference to markdown file
}

export const faqContent: FAQSection[] = [
  {
    id: "para-quem",
    title: "Para quem é meu trabalho",
    contentFile: "para-quem.md",
  },
  {
    id: "minha-abordagem",
    title: "Minha abordagem",
    contentFile: "minha-abordagem.md",
  },
  {
    id: "como-trabalho",
    title: "Como trabalho",
    contentFile: "como-trabalho.md",
  },
  {
    id: "sobre-mim",
    title: "Sobre mim",
    contentFile: "sobre-mim.md",
  },
];

// Function to load markdown content
export async function loadMarkdownContent(filename: string): Promise<string> {
  try {
    const response = await fetch(`/content/faq/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown file ${filename}:`, error);
    return `Error loading content from ${filename}`;
  }
}
