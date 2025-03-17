
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Esquema de validación
const formSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Lista de usuarios de prueba
const MOCK_USERS = [
  { email: "admin@q10.com", password: "123456", role: "admin" },
  { email: "profesor@q10.com", password: "123456", role: "profesor" },
  { email: "padre@q10.com", password: "123456", role: "padre" },
  { email: "estudiante@q10.com", password: "123456", role: "estudiante" },
];

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // Simulamos un tiempo de carga
    setTimeout(() => {
      const user = MOCK_USERS.find(
        (user) => 
          user.email === values.email && 
          user.password === values.password
      );

      if (user) {
        // Guardamos la información en localStorage
        localStorage.setItem("q10-user", JSON.stringify({
          email: user.email,
          role: user.role,
          isLoggedIn: true,
        }));
        
        toast({
          title: "Inicio de sesión exitoso",
          description: `Bienvenido ${user.email}`,
        });
        
        navigate("/dashboard");
      } else {
        toast({
          title: "Error al iniciar sesión",
          description: "Credenciales incorrectas. Intenta de nuevo.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Bienvenido a <span className="text-q10-orange">Q10</span></h2>
        <p className="text-gray-600 mt-2">Inicia sesión en tu cuenta</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="correo@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-q10-orange hover:bg-q10-orange/90"
            disabled={isLoading}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Credenciales de prueba:
        </p>
        <div className="mt-2 text-xs text-gray-500 space-y-1">
          <p>admin@q10.com / 123456</p>
          <p>profesor@q10.com / 123456</p>
          <p>padre@q10.com / 123456</p>
          <p>estudiante@q10.com / 123456</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
