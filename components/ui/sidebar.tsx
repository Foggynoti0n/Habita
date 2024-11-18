// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  href: string;
  icon?: JSX.Element; // Opcional
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <aside className="bg-color5 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center space-x-2 p-2 hover:bg-color4 rounded-md transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

