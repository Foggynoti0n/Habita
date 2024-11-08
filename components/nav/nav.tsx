// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-color4 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className='font-bold'>
        Habita
        </Link>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
