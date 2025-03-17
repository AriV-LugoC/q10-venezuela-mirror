
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificamos si el usuario ya está autenticado
    const user = localStorage.getItem('q10-user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.isLoggedIn) {
        navigate('/dashboard');
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
