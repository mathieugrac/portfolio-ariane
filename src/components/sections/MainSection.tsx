"use client";

import { Button } from "@/components/ui/button";

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
      {/* Description */}
      <p className="text-stone-800 text-[21px] leading-[32px] max-w-md mb-6 font-normal text-center font-sans">
        Dedicada às mulheres que questionam os padrões tradicionais. Apoio você
        a viver suas escolhas com liberdade e autenticidade.
      </p>

      <div className="space-y-3 mb-7 flex flex-col items-center w-full">
        <Button
          variant="outline"
          className="w-full h-[50px] text-[19px] font-normal border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center shadow-none font-sans"
          onClick={handleAbordagemClick}
        >
          Sobre a minha abordagem
        </Button>

        <Button
          variant="outline"
          className="w-full h-[50px] text-[19px] font-normal border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center shadow-none font-sans"
          onClick={handleWhatsAppClick}
        >
          Fale Comigo no WhatsApp
        </Button>

        <Button
          className="w-full h-[50px] text-[19px] font-normal bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white transition-all duration-200 border border-gray-700 flex items-center justify-center shadow-none font-sans"
          onClick={handleCalendlyClick}
        >
          Agende uma conversa inicial (30min)
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://instagram.com/ariane-bochi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/ariane-bochi-6a1310a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
