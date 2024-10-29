import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 px-4">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Mantente Conectado</h2>
      <div className="flex justify-center mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaFacebookF className="text-blue-600 hover:text-blue-500 w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaTwitter className="text-blue-400 hover:text-blue-300 w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedinIn className="text-blue-700 hover:text-blue-600 w-6 h-6" />
        </a>
      </div>
      <div className="mb-4">
        <p>Contáctanos: info@example.com</p>
        <p>Teléfono: +1 (123) 456-7890</p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Nombre de Tu Empresa. Todos los Derechos Reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
