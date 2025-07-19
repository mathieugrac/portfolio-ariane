"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    text: "Ariane me ajudou a superar minha ansiedade de forma incrível. Sua abordagem é muito acolhedora e profissional.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana L.",
    text: "As sessões com a Ariane transformaram minha vida. Ela tem uma forma única de conectar e entender as necessidades femininas.",
    rating: 5
  },
  {
    id: 3,
    name: "Carla M.",
    text: "Recomendo muito! Ariane é uma psicóloga excepcional que realmente se importa com o bem-estar das suas pacientes.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll on desktop
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    
    if (isDesktop) {
      autoScrollRef.current = setInterval(() => {
        handleTransition((currentIndex + 1) % testimonials.length);
      }, 6000);
    } else {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex]);

  // Handle circular navigation (unused but kept for future use)
  // const goToNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  // };

  // const goToPrev = () => {
  //   setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  // Remove scroll position update - we only want fade effect

  // Handle fade transition
  const handleTransition = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

    // Remove drag functionality - we only want fade effect



  const handleDotClick = (index: number) => {
    handleTransition(index);
  };

  const handleCardClick = () => {
    // Navigate to next testimonial on card click
    handleTransition((currentIndex + 1) % testimonials.length);
  };

  return (
    <footer className="">
      {/* Single Testimonial Display */}
      <div className="mb-4">
        <Card 
          className="border border-gray-200 rounded-xl cursor-pointer transition-shadow duration-200 shadow-none border-0"
          style={{ padding: '0', backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
          onClick={handleCardClick}
        >
          <CardContent className="p-7" >
            <div className="text-left">
              <p className={`text-gray-800 text-[16px] leading-relaxed mb-4 transition-opacity duration-300 select-none font-inter ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <p className="text-[19px] opacity-60">{testimonials[currentIndex].name}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === currentIndex 
                ? 'bg-gray-800 scale-120 -translate-y-1' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </footer>
  );
} 