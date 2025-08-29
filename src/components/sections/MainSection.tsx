"use client";

import { Button } from "@/components/ui/button";
import Testimonials from "./Testimonials";

export default function MainSection() {
  const handleAbordagemClick = () => {
    // Navigate to approach page
    window.location.href = "/abordagem";
  };

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
    <main className="flex flex-col items-center">
      <div className="space-y-4 mb-12 flex flex-col items-center w-full">
        <Button variant="secondary" onClick={handleAbordagemClick}>
          Sobre a minha abordagem
        </Button>

        <Button variant="secondary" onClick={handleWhatsAppClick}>
          Fale comigo no WhatsApp
        </Button>

        <Button variant="primary" onClick={handleCalendlyClick}>
          Agende uma conversa inicial (30min)
        </Button>
      </div>
      <Testimonials />
    </main>
  );
}
