
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Q10 ha transformado completamente la forma en que gestionamos nuestra institución. Los procesos que antes tomaban días ahora se realizan en minutos.",
    author: "María González",
    role: "Directora Académica",
    institution: "Colegio Santa María"
  },
  {
    quote: "Como profesor, puedo decir que Q10 ha facilitado enormemente mi trabajo diario. Puedo comunicarme fácilmente con padres y estudiantes, y gestionar mis clases de manera más eficiente.",
    author: "Carlos Rodríguez",
    role: "Profesor de Matemáticas",
    institution: "Liceo Internacional"
  },
  {
    quote: "La comunicación con los profesores y la institución ha mejorado significativamente desde que implementamos Q10. Como padre, me siento más conectado con la educación de mis hijos.",
    author: "Ana Martínez",
    role: "Madre de Familia",
    institution: "Instituto Moderno"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-q10-blue">usuarios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Miles de instituciones educativas ya confían en Q10 para su gestión académica diaria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-10 w-10 text-q10-blue/20 mb-4" />
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-q10-blue/10 text-q10-blue">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.institution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
