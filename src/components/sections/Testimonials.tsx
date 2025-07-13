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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll on desktop
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    
    if (isDesktop && !isHovered && !isDragging) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
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
  }, [isHovered, isDragging]);

  // Handle circular navigation (unused but kept for future use)
  // const goToNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  // };

  // const goToPrev = () => {
  //   setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Touch/Mouse event handlers
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    
    // Snap to nearest card with circular navigation
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(currentScroll / cardWidth);
      
      // Handle circular navigation
      if (newIndex < 0) {
        setCurrentIndex(testimonials.length - 1);
      } else if (newIndex >= testimonials.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index: number) => {
    goToTestimonial(index);
  };

  const handleCardClick = () => {
    // Navigate to next testimonial on card click
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <footer className="mt-12">
      {/* Horizontal Scrollable Testimonials */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory mb-4 select-none testimonials-container"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={() => {
          handleEnd();
          handleMouseLeave();
        }}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-full snap-start px-2"
          >
            <Card 
              className="bg-transparent border-none shadow-none cursor-pointer hover:bg-gray-50/50 transition-colors duration-200"
              onClick={handleCardClick}
            >
              <CardContent className="text-center">
                <div className="flex flex-col items-center mb-4">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-gray-700 text-sm font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div> */}
                </div>
                <p className="text-gray-600 text-md leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="mt-2 font-semibold text-gray-800">{testimonial.name}</p>
              </CardContent>
            </Card>
          </div>
        ))}
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