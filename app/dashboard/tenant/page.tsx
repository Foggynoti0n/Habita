'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout';
import { FiInbox, FiFileText, FiDollarSign, FiBell, FiTool } from 'react-icons/fi';

const TenantDashboard: React.FC = () => {
  const menuItems = [
    { name: 'Incidencias', href: '/dashboard/tenant/incidencias', icon: <FiTool /> },
    { name: 'Acceso a Documentos', href: '/dashboard/tenant/documentos', icon: <FiFileText /> },
    { name: 'Registro de Pagos', href: '/dashboard/tenant/pagos', icon: <FiDollarSign /> },
    { name: 'Reportes / Mantenimiento', href: '/dashboard/tenant/reportes', icon: <FiTool /> },
    { name: 'Bandeja de Entrada', href: '/dashboard/tenant/chat', icon: <FiInbox /> },
    { name: 'Notificaciones', href: '/dashboard/tenant/notificaciones', icon: <FiBell /> },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Bienvenido, Inquilino</h1>
      <p>Selecciona una sección desde el menú para comenzar.</p>
    </DashboardLayout>
  );
};

export default TenantDashboard;
