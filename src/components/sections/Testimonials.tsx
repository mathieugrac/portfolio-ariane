"use client";

import { useState } from "react";
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <footer className="mt-12">
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-6">
        O que dizem sobre mim
      </h3>
      
      {/* Testimonial Card */}
      <div className="relative mb-6">
        <Card className="border-2 border-purple-100 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-semibold">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
          </CardContent>
        </Card>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors"
        >
          ›
        </button>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </footer>
  );
} 