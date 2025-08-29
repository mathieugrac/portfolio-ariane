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
      "Olá! Aqui é a Ariane, obrigada por me escrever. Se quiser, me conta o que te motivou a procurar terapia nesse momento. Vamos conversar com calma.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCalendlyClick = () => {
    // Calendly link - replace with actual Calendly URL
    const calendlyUrl = "https://calendly.com/ariane-bochi"; // Replace with actual URL
    window.open(calendlyUrl, "_blank");
  };

  return (
    <main className="flex flex-col items-center">
      <div className="space-y-4 mb-12 flex flex-col items-center w-full">
        <Button
          variant="outline"
          className="w-full h-[50px] border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center shadow-none"
          onClick={handleAbordagemClick}
        >
          Sobre a minha abordagem
        </Button>

        <Button
          variant="outline"
          className="w-full h-[50px] border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center shadow-none"
          onClick={handleWhatsAppClick}
        >
          Fale Comigo no WhatsApp
        </Button>

        <Button
          className="w-full h-[50px] bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white transition-all duration-200 border border-gray-700 flex items-center justify-center shadow-none"
          onClick={handleCalendlyClick}
        >
          Agende uma conversa inicial (30min)
        </Button>
      </div>
      <Testimonials />
    </main>
  );
}
