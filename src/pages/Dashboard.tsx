
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type UserData = {
  email: string;
  role: string;
  isLoggedIn: boolean;
};

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('q10-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('q10-user');
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    navigate('/');
  };

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-q10-orange">Q10 Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{user.email}</span>
              <Button variant="outline" onClick={handleLogout}>Cerrar sesión</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bienvenido</CardTitle>
              <CardDescription>Has iniciado sesión como {user.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Este es un panel de administración simple que muestra que has iniciado sesión correctamente. 
                En una aplicación real, aquí se mostrarían las funcionalidades correspondientes a tu rol.
              </p>
            </CardContent>
          </Card>

          {/* Ejemplo de tarjeta con estadísticas */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
              <CardDescription>Resumen de actividad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-q10-orange/10 p-4 rounded-lg">
                  <p className="text-q10-orange text-2xl font-bold">24</p>
                  <p className="text-sm text-gray-600">Tareas pendientes</p>
                </div>
                <div className="bg-q10-green/10 p-4 rounded-lg">
                  <p className="text-q10-green text-2xl font-bold">18</p>
                  <p className="text-sm text-gray-600">Mensajes nuevos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Otra tarjeta con información */}
          <Card>
            <CardHeader>
              <CardTitle>Actividad reciente</CardTitle>
              <CardDescription>Últimas acciones</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 pb-2 border-b border-gray-100">Inicio de sesión: {new Date().toLocaleString()}</li>
                <li className="text-sm text-gray-600 pb-2 border-b border-gray-100">Vista del panel de administración</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
