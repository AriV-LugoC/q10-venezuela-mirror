
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Ahorra tiempo en procesos administrativos",
    "Mejora la comunicación entre todos los actores educativos",
    "Reduce el uso de papel y contribuye al medio ambiente",
    "Acceso desde cualquier dispositivo y lugar",
    "Soporte técnico especializado para instituciones educativas",
    "Actualizaciones constantes con nuevas funcionalidades"
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-q10-yellow rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-q10-orange rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-q10-orange/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-q10-orange">+500</span>
                    <span className="text-gray-600">Instituciones</span>
                  </div>
                  <div className="bg-q10-green/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-q10-green">+50k</span>
                    <span className="text-gray-600">Estudiantes</span>
                  </div>
                  <div className="bg-q10-purple/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-q10-purple">+10k</span>
                    <span className="text-gray-600">Profesores</span>
                  </div>
                  <div className="bg-q10-orange/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-q10-orange">+40k</span>
                    <span className="text-gray-600">Padres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Beneficios de usar <span className="text-q10-orange">Q10</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nuestra plataforma está diseñada para hacer más eficiente la gestión educativa, ahorrando tiempo y recursos a todos los involucrados.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-q10-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-q10-orange hover:bg-q10-orange/90 text-white">
              Solicitar Información
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
