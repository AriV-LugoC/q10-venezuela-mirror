
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Conectando a toda la <span className="text-q10-orange">comunidad educativa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Q10 es la plataforma educativa que integra a colegios, profesores, padres y estudiantes en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-q10-orange hover:bg-q10-orange/90 text-white text-lg py-6 px-8">
                Solicitar Demo
              </Button>
              <Button variant="outline" className="border-q10-orange text-q10-orange hover:bg-q10-orange hover:text-white text-lg py-6 px-8">
                Conocer Más
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-xl animate-float">
              <div className="bg-q10-orange/10 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="h-8 w-32 bg-q10-orange/20 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-q10-orange/10 rounded"></div>
                    <div className="h-20 bg-q10-yellow/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-16 w-16 bg-q10-yellow rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              <span>Q10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
