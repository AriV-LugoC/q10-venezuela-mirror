
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

type UserData = {
  email: string;
  role: string;
  isLoggedIn: boolean;
} | null;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<UserData>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('q10-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('q10-user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-q10-orange">Q10</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/#funcionalidades" className="text-gray-700 hover:text-q10-orange px-3 py-2 text-sm font-medium">
              Funcionalidades
            </Link>
            <Link to="/#beneficios" className="text-gray-700 hover:text-q10-orange px-3 py-2 text-sm font-medium">
              Beneficios
            </Link>
            <Link to="/#planes" className="text-gray-700 hover:text-q10-orange px-3 py-2 text-sm font-medium">
              Planes
            </Link>
            <Link to="/#contacto" className="text-gray-700 hover:text-q10-orange px-3 py-2 text-sm font-medium">
              Contacto
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" className="border-q10-orange text-q10-orange hover:bg-q10-orange hover:text-white">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-q10-orange"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-q10-orange hover:bg-q10-orange/90 text-white">
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-q10-orange hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/#funcionalidades" 
              className="text-gray-700 hover:text-q10-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              to="/#beneficios" 
              className="text-gray-700 hover:text-q10-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link 
              to="/#planes" 
              className="text-gray-700 hover:text-q10-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Planes
            </Link>
            <Link 
              to="/#contacto" 
              className="text-gray-700 hover:text-q10-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            
            {user ? (
              <div className="space-y-2 pt-2">
                <Link 
                  to="/dashboard" 
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full border-q10-orange text-q10-orange hover:bg-q10-orange hover:text-white">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full text-gray-700 hover:text-q10-orange"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-q10-orange hover:bg-q10-orange/90 text-white">
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
