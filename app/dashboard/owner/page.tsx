'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout';
import { FiInbox, FiFileText, FiDollarSign, FiBell, FiTool, FiBarChart, FiHome } from 'react-icons/fi';

const OwnerDashboard: React.FC = () => {
  const menuItems = [
    { name: 'Incidencias', href: '/dashboard/owner/incidencias', icon: <FiTool /> },
    { name: 'Acceso a Documentos', href: '/dashboard/owner/documentos', icon: <FiFileText /> },
    { name: 'Registro de Pagos', href: '/dashboard/owner/pagos', icon: <FiDollarSign /> },
    { name: 'Reportes / Mantenimiento', href: '/dashboard/owner/reportes', icon: <FiTool /> },
    { name: 'Crear Propiedad', href: '/dashboard/owner/crear-propiedad', icon: <FiHome /> },
    { name: 'Estadísticas', href: '/dashboard/owner/estadisticas', icon: <FiBarChart /> },
    { name: 'Bandeja de Entrada', href: '/dashboard/owner/chat', icon: <FiInbox /> },
    { name: 'Notificaciones', href: '/dashboard/owner/notificaciones', icon: <FiBell /> },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Bienvenido, Propietario</h1>
      <p>Selecciona una sección desde el menú para comenzar.</p>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
