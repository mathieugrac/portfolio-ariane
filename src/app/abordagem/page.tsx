"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { faqContent } from "@/lib/faq-content";
import PageLayout from "@/components/layout/PageLayout";

export default function AbordagemPage() {
  const handleWhatsAppClick = () => {
    // WhatsApp link - you can customize the phone number and message
    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "351912384883"; // Fallback for development
    const message =
      "Olá! Estou pensando iniciar terapia e achei seu perfil. Podemos conversar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCalendlyClick = () => {
    // Calendly link - replace with actual Calendly URL
    const calendlyUrl = "https://calendly.com/arianebochi"; // Replace with actual URL
    window.open(calendlyUrl, "_blank");
  };

  return (
    <PageLayout>
      {/* Back Button */}
      <div>
        <Button asChild variant="icon">
          <Link href="/">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </Button>
      </div>

      {/* FAQ Content */}
      <div>
        <FAQ sections={faqContent} defaultOpenId="para-quem" />
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 flex flex-col items-center w-full">
        <Button variant="primary" onClick={handleWhatsAppClick}>
          Fale comigo no WhatsApp
        </Button>

        <Button variant="primary" onClick={handleCalendlyClick}>
          Agende uma conversa inicial (30min)
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/">Voltar</Link>
        </Button>
      </div>
    </PageLayout>
  );
}
