import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-color2 p-6 mt-10">
      <div className="container mx-auto max-w-[1000px] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-2">Mi Cuenta</h3>
            <ul className="text-center">
              <li><a href="#" className="hover:text-gray-300">Registrarme</a></li>
              <li><a href="#" className="hover:text-gray-300">Garantía</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-2">Atención al Cliente</h3>
            <p className="hover:text-gray-300">lurm98@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          © {new Date().getFullYear()} Habita. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

