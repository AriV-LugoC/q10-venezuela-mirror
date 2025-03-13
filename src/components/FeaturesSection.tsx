
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, MessageSquare, Users, FileText, Award } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-q10-blue" />,
    title: "Contenido Académico",
    description: "Gestiona fácilmente el contenido académico, tareas y material de estudio para tus estudiantes."
  },
  {
    icon: <Calendar className="h-10 w-10 text-q10-yellow" />,
    title: "Calendario Escolar",
    description: "Organiza eventos, exámenes y fechas importantes del año escolar de manera intuitiva."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-q10-green" />,
    title: "Comunicación Efectiva",
    description: "Mantén comunicación directa entre profesores, estudiantes y padres de familia."
  },
  {
    icon: <Users className="h-10 w-10 text-q10-purple" />,
    title: "Gestión de Usuarios",
    description: "Administra perfiles de estudiantes, profesores y padres con distintos niveles de acceso."
  },
  {
    icon: <FileText className="h-10 w-10 text-q10-red" />,
    title: "Reportes y Evaluaciones",
    description: "Genera informes detallados sobre el rendimiento académico de los estudiantes."
  },
  {
    icon: <Award className="h-10 w-10 text-q10-light-blue" />,
    title: "Reconocimientos",
    description: "Sistema de reconocimientos y logros para motivar el desempeño de los estudiantes."
  }
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades <span className="text-q10-blue">principales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Q10 ofrece todas las herramientas necesarias para la gestión educativa moderna y eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
