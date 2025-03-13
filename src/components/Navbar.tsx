
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-q10-blue text-2xl font-bold mr-1">Q10</span>
                <span className="text-q10-blue font-medium">Venezuela</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-gray-700 hover:text-q10-blue transition-colors duration-200 font-medium">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-q10-blue transition-colors duration-200 font-medium">
              Beneficios
            </a>
            <a href="#planes" className="text-gray-700 hover:text-q10-blue transition-colors duration-200 font-medium">
              Planes
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-q10-blue transition-colors duration-200 font-medium">
              Contacto
            </a>
            <Button className="bg-q10-blue hover:bg-q10-dark-blue text-white">
              Iniciar Sesión
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-q10-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#funcionalidades" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-q10-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Funcionalidades
          </a>
          <a 
            href="#beneficios" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-q10-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Beneficios
          </a>
          <a 
            href="#planes" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-q10-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Planes
          </a>
          <a 
            href="#contacto" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-q10-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
          <div className="pt-2">
            <Button className="w-full bg-q10-blue hover:bg-q10-dark-blue text-white">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
