'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-color4 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-color5 text-xl">
          HABITA
        </Link>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/about" className="hover:text-color1">
            Sobre nosotros
          </Link>
          <Link href="/properties" className="hover:text-color1">
            Propiedades
          </Link>
          <Link href="/contact" className="hover:text-color1">
            Contacto
          </Link>

          {/* Menú desplegable de Iniciar Sesión */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-color5 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              aria-expanded={isDropdownOpen}
            >
              Iniciar Sesión
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <Link href="/dashboard/tenant" className="block px-4 py-2 hover:bg-gray-100">
                  🏠 Inquilino
                </Link>
                <Link href="/dashboard/owner" className="block px-4 py-2 hover:bg-gray-100">
                  🏢 Propietario
                </Link>
              </div>
            )}
          </div>

          {/* Botón de Registrarse */}
          <Link href="/register">
            <button className="bg-color1 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Registrarse
            </button>
          </Link>
        </div>

        {/* Botón para el menú móvil */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden bg-color5 text-white px-4 py-2 rounded-full"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            Sobre nosotros
          </Link>
          <Link href="/properties" className="block px-4 py-2 hover:bg-gray-100">
            Propiedades
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contacto
          </Link>
          <Link href="/login/tenant" className="block px-4 py-2 hover:bg-gray-100">
            🏠 Inquilino
          </Link>
          <Link href="/login/owner" className="block px-4 py-2 hover:bg-gray-100">
            🏢 Propietario
          </Link>
          <Link href="/register" className="block px-4 py-2 bg-color1 text-white rounded-md mt-2 mx-4 text-center hover:bg-green-600">
            Registrarse
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
