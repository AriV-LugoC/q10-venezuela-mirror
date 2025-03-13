
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$30",
    priceDescription: "por estudiante / mes",
    description: "Ideal para pequeñas instituciones educativas",
    features: [
      "Gestión académica básica",
      "Hasta 200 estudiantes",
      "Comunicación básica",
      "Reportes mensuales",
      "Soporte por correo electrónico"
    ],
    buttonText: "Empezar Ahora",
    highlighted: false
  },
  {
    name: "Premium",
    price: "$45",
    priceDescription: "por estudiante / mes",
    description: "Solución completa para instituciones medianas",
    features: [
      "Todas las características de Básico",
      "Hasta 1000 estudiantes",
      "Comunicación avanzada",
      "Reportes semanales personalizados",
      "Soporte telefónico prioritario",
      "Módulo de calificaciones avanzado"
    ],
    buttonText: "Elegir Premium",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    priceDescription: "contáctanos para más información",
    description: "Para grandes instituciones con necesidades específicas",
    features: [
      "Todas las características de Premium",
      "Estudiantes ilimitados",
      "API personalizada",
      "Integración con sistemas existentes",
      "Soporte 24/7",
      "Capacitación personalizada"
    ],
    buttonText: "Contactar Ventas",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="planes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes <span className="text-q10-orange">flexibles</span> para cada institución
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos planes que se adaptan al tamaño y necesidades de cada institución educativa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlighted ? 'border-q10-orange ring-2 ring-q10-orange/20' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}
            >
              <CardHeader className={`pb-2 ${plan.highlighted ? 'bg-q10-orange/5' : ''}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.priceDescription}</span>
                </div>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${plan.highlighted ? 'text-q10-orange' : 'text-q10-green'} mr-2 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-q10-orange hover:bg-q10-orange/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">¿Necesitas un plan personalizado para tu institución?</p>
          <a href="#contacto" className="text-q10-orange hover:underline font-medium">Contáctanos para más información</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
