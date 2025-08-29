"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

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

      {/* Page Title */}
      <div>
        <h1>Um espaço para se reconectar com você mesma</h1>
      </div>

      {/* Main Content */}
      <div>
        <p>
          Acredito que o processo terapêutico é sobre criar espaço para se
          escutar com mais honestidade. Um caminho de reconexão com a sua
          história, com o que você sente e com o que realmente importa — no seu
          ritmo.
        </p>
        <p>
          Neste momento, atuo exclusivamente com mulheres, oferecendo
          atendimentos online, especialmente para aquelas que estão:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Explorando o desejo de ser mae — ou de não seguir esse caminho
          </li>
          <li>Reavaliando relações, papéis e vínculos afetivos</li>
          <li>
            Buscando mais autenticidade na forma como vivem e se relacionam
          </li>
          <li>
            Morando fora do seu país e atravessando as dores (e transformações)
            de recomeçar em um novo lugar
          </li>
          <li>
            Desejando se libertar de expectativas e narrativas que já não fazem
            sentido.
          </li>
        </ul>

        <h3 className="mt-8 font-bold">Minha formação</h3>
        <p>
          Sou Psicóloga (CRP 07/24244) formada pela UFCSPA (2014), especialista
          em Terapias Cognitivas (NEAPC-2017) e mestre em Família e Género pela
          Universidade de Lisboa (2024).
        </p>
        <p>
          Ao longo da minha trajetória, também atuei com Recursos Humanos, o que
          aprofundou minha escuta sobre relações interpessoais, identidade
          profissional e os impactos do mundo do trabalho na saúde mental.
        </p>
        <p>
          Além disso, acompanhei junto a uma equipe multidisciplinar pessoas em
          processos de emagrecimento, ampliando meu olhar para questões
          relacionadas à imagem corporal, autoestima e as exigências sociais
          sobre o corpo feminino.
        </p>

        <h3 className="mt-8 font-bold">Como trabalho?</h3>
        <p className="font-bold mb-2">
          A nossa primeira conversa não tem custo e a duração é de 30min.
        </p>

        <p>
          É um momento dedicado para nos conhecermos, entender o que te trouxe
          até aqui e combinarmos juntas como será o processo terapêutico —
          incluindo frequência, valor das sessões e disponibilidade de horários.
        </p>
        <p className="font-bold mb-2">As sessões seguintes têm 50 minutos.</p>
        <p>
          Atendo exclusivamente online, e mesmo com fusos diferentes, podemos
          combinar um momento que funcione para nós duas.
        </p>
        <p>Esse pode ser o começo de um novo percurso. Vamos juntas?</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 flex flex-col items-center w-full">
        <Button variant="secondary" onClick={handleWhatsAppClick}>
          Fale Comigo no WhatsApp
        </Button>

        <Button variant="primary" onClick={handleCalendlyClick}>
          Agende uma conversa inicial (30min)
        </Button>
      </div>

      <p>
        <em>
          As consultas acontecem por videochamada, via Google Meet ou WhatsApp.
          Os pagamentos podem ser feitos por Pix ou PayPal.
        </em>
      </p>
    </PageLayout>
  );
}
