"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const testimonials = siteConfig.testimonials;

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
      <div className="mb-6">
        <Card
          className="cursor-pointer transition-shadow duration-200"
          onClick={handleCardClick}
        >
          <div className="text-left">
            <h3 className="mb-2">{testimonials[currentIndex].name}</h3>
            <p
              className={`transition-opacity duration-300 select-none ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {testimonials[currentIndex].text}
            </p>
          </div>
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
                ? "bg-[#66583d] scale-120 -translate-y-1"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </footer>
  );
}
