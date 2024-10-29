import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="py-6 shadow-lg">
    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <Link to="/" className="hover:underline">Página de Construcción</Link>
      </h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/about" className="hover:underline">Sobre Nosotros</Link>
        <Link to="/portfolio" className="hover:underline">Portafolio</Link>
        <Link to="/contact" className="hover:underline">Contacto</Link>
      </nav>
    </div>
  </header>
);

export default Header;
