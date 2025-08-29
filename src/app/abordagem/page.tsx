"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AbordagemPage() {
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
    <div className="min-h-screen relative">
      {/* Sticky Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/shadow-7.jpg')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Back Button */}
        <div className="flex-1 flex items-center justify-center px-4 py-30">
          <div className="w-full max-w-[720px] mx-auto space-y-20">
            {/* Content Box */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[24px] p-8 sm:p-[80px]">
              {/* Back Button */}
              <div className="mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                >
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
              </div>

                            {/* Page Title */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-stone-800 mb-4 font-bethany">
                Um espaço para se reconectar com você mesma
                </h1>
              </div>

              {/* Main Content */}
              <div className="text-lg">
                <div className="prose prose-gray max-w-none">
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Acredito que o processo terapêutico é sobre criar espaço
                    para se escutar com mais honestidade. Um caminho de
                    reconexão com a sua história, com o que você sente e com o
                    que realmente importa — no seu ritmo.
                  </p>
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Neste momento, atuo exclusivamente com mulheres, oferecendo
                    atendimentos online, especialmente para aquelas que estão:
                  </p>
                  <ul className="text-stone-700 leading-normal mb-6 list-disc pl-6 space-y-1 font-sans">
                    <li>
                      Explorando o desejo de ser mae — ou de não seguir esse
                      caminho
                    </li>
                    <li>Reavaliando relações, papéis e vínculos afetivos</li>
                    <li>
                      Buscando mais autenticidade na forma como vivem e se
                      relacionam
                    </li>
                    <li>
                      Morando fora do seu país e atravessando as dores (e
                      transformações) de recomeçar em um novo lugar
                    </li>
                    <li>
                      Desejando se libertar de expectativas e narrativas que já
                      não fazem sentido.
                    </li>
                  </ul>

                  <h3 className="text-[24px] text-stone-800 leading-normal mb-6 font-bold mt-8 font-bethany">
                    Minha formação
                  </h3>
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Sou Psicóloga (CRP 07/24244) formada pela UFCSPA (2014),
                    especialista em Terapias Cognitivas (NEAPC-2017) e mestre em
                    Família e Género pela Universidade de Lisboa (2024).
                  </p>
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Ao longo da minha trajetória, também atuei com Recursos
                    Humanos, o que aprofundou minha escuta sobre relações
                    interpessoais, identidade profissional e os impactos do
                    mundo do trabalho na saúde mental.
                  </p>
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Além disso, acompanhei junto a uma equipe multidisciplinar
                    pessoas em processos de emagrecimento, ampliando meu olhar
                    para questões relacionadas à imagem corporal, autoestima e
                    as exigências sociais sobre o corpo feminino.
                  </p>

                  <h3 className="text-[24px] text-stone-800 leading-normal mb-6 font-bold mt-8 font-bethany">
                    Como trabalho?
                  </h3>
                  <p className="text-stone-800 leading-normal font-bold mb-2 font-sans">
                    A nossa primeira conversa não tem custo e a duração é de
                    30min.
                  </p>

                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    É um momento dedicado para nos conhecermos, entender o que
                    te trouxe até aqui e combinarmos juntas como será o processo
                    terapêutico — incluindo frequência, valor das sessões e
                    disponibilidade de horários.
                  </p>
                  <p className="text-stone-800 leading-normal font-bold mb-2 font-sans">
                    As sessões seguintes têm 50 minutos.
                  </p>
                  <p className="text-stone-700 leading-normal mb-6 font-sans">
                    Atendo exclusivamente online, e mesmo com fusos diferentes,
                    podemos combinar um momento que funcione para nós duas.
                  </p>
                  <p className="text-stone-700 leading-normal mb-12 font-sans">
                    Esse pode ser o começo de um novo percurso. Vamos juntas?
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-8 flex flex-col items-center w-full mb-12">
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
              <p className="text-stone-500 leading-normal text-base mb-12 font-sans">
                <em>
                  As consultas acontecem por videochamada, via Google Meet ou
                  WhatsApp. Os pagamentos podem ser feitos por Pix ou PayPal.
                </em>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pb-8">
          <div className="w-full max-w-[680px] mx-auto px-4">
            {/* Footer content will be added later */}
          </div>
        </div>
      </div>
    </div>
  );
}
