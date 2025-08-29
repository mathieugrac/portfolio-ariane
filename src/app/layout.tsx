import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ariane Bochi - Psicóloga Brasileira em Portugal",
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
  authors: [{ name: "Ariane Bochi" }],
  creator: "Ariane Bochi",
  publisher: "Ariane Bochi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    "https://portfolio-ariane-mathieugracs-projects.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ariane Bochi - Psicóloga Brasileira em Portugal",
    description:
      "Psicóloga brasileira oferecendo atendimento psicológico personalizado em Portugal. Consultas online e presenciais para brasileiras.",
    url: "https://portfolio-ariane-mathieugracs-projects.vercel.app",
    siteName: "Ariane Bochi Psicóloga",
    images: [
      {
        url: "/images/ariane-bochi-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ariane Bochi - Psicóloga Brasileira em Portugal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariane Bochi - Psicóloga Brasileira em Portugal",
    description:
      "Psicóloga brasileira oferecendo atendimento psicológico personalizado em Portugal. Consultas online e presenciais para brasileiras.",
    images: ["/images/ariane-bochi-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/ariane-bochi-1.jpeg" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
