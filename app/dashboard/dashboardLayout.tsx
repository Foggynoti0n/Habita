'use client';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  menuItems: { name: string; href: string; icon?: JSX.Element }[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, menuItems }) => {
  return (
    <div className="flex">
      
     
     
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
