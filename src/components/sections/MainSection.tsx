"use client";

import { Button } from "@/components/ui/button";

export default function MainSection() {
  const handleWhatsAppClick = () => {
    // WhatsApp link - you can customize the phone number and message
    const phoneNumber = "351912345678"; // Replace with actual number
    const message = "Olá! Gostaria de saber mais sobre suas consultas de psicologia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendlyClick = () => {
    // Calendly link - replace with actual Calendly URL
    const calendlyUrl = "https://calendly.com/ariane-bochi"; // Replace with actual URL
    window.open(calendlyUrl, '_blank');
  };

  return (
    <main className="space-y-4 mb-8">
      <Button 
        variant="outline" 
        className="w-full h-14 text-base font-medium border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
        onClick={() => {/* TODO: Navigate to approach page */}}
      >
        Minha Abordagem
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full h-14 text-base font-medium border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
        onClick={() => {/* TODO: Navigate to background page */}}
      >
        Minha Formação
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full h-14 text-base font-medium border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
        onClick={handleWhatsAppClick}
      >
        Fale Comigo
      </Button>
      
      <Button 
        className="w-full h-14 text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
        onClick={handleCalendlyClick}
      >
        Agendar Consulta 1-1
      </Button>
    </main>
  );
} 