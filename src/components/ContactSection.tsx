
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para <span className="text-q10-blue">comenzar</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ponte en contacto con nuestro equipo y descubre cómo Q10 puede transformar la gestión educativa en tu institución
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre completo</label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="institution" className="text-sm font-medium text-gray-700">Institución</label>
                      <Input id="institution" placeholder="Nombre de tu institución" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                      <Input id="phone" placeholder="+58 XXX XXXXXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                    <Textarea id="message" placeholder="¿Cómo podemos ayudarte?" rows={4} />
                  </div>
                  <Button className="w-full bg-q10-blue hover:bg-q10-dark-blue text-white">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Información de contacto</h3>
              <p className="text-gray-600">
                Estamos disponibles para responder cualquier pregunta que tengas sobre nuestra plataforma educativa Q10.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneCall className="h-6 w-6 text-q10-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+58 (212) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-q10-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Correo Electrónico</h4>
                  <p className="text-gray-600">info@q10venezuela.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-q10-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Oficina Principal</h4>
                  <p className="text-gray-600">
                    Av. Francisco de Miranda, Torre Parque Cristal,<br />
                    Piso 15, Oficina 15-A, Caracas, Venezuela
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Horario de Atención</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábado: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
