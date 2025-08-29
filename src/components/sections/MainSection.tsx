"use client";

import { Button } from "@/components/ui/button";
import Testimonials from "./Testimonials";
import { siteConfig } from "@/lib/config";

export default function MainSection() {
  const handleAbordagemClick = () => {
    // Navigate to approach page
    window.location.href = "/abordagem";
  };

  const handleWhatsAppClick = () => {
    // WhatsApp link - you can customize the phone number and message
    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || siteConfig.contact.whatsapp.phoneNumber;
    const message = siteConfig.contact.whatsapp.message;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCalendlyClick = () => {
    // Calendly link - replace with actual Calendly URL
    const calendlyUrl = siteConfig.contact.calendly.url;
    window.open(calendlyUrl, "_blank");
  };

  return (
    <main className="flex flex-col items-center">
      <div className="space-y-4 mb-12 flex flex-col items-center w-full">
        <Button variant="secondary" onClick={handleAbordagemClick}>
          {siteConfig.content.buttons.approach}
        </Button>

        <Button variant="secondary" onClick={handleWhatsAppClick}>
          {siteConfig.content.buttons.whatsapp}
        </Button>

        <Button variant="primary" onClick={handleCalendlyClick}>
          {siteConfig.content.buttons.calendly}
        </Button>
      </div>
      <Testimonials />
    </main>
  );
}
