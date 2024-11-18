// pages/register.tsx
import React from 'react';
import AuthForm from '../components/login/AuthForm';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const router = useRouter();

  const handleRegister = ({ email, password }: { email: string; password: string }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find((user: { email: string }) => user.email === email);

    if (userExists) {
      alert('Este correo ya está registrado.');
    } else {
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      router.push('/login');
    }
  };

  return <AuthForm onSubmit={handleRegister} buttonText="Registrar" />;
};

export default Register;
