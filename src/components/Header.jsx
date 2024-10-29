import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`py-6 shadow-lg ${menuOpen ? 'bg-white' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:underline">Página de Construcción</Link>
        </h1>
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/about" className="hover:underline">Sobre Nosotros</Link>
          <Link to="/portfolio" className="hover:underline">Portafolio</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </nav>
      </div>
      {menuOpen && (
        <div className="bg-white py-4 md:hidden">
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:underline" onClick={toggleMenu}>Inicio</Link>
            <Link to="/about" className="hover:underline" onClick={toggleMenu}>Sobre Nosotros</Link>
            <Link to="/portfolio" className="hover:underline" onClick={toggleMenu}>Portafolio</Link>
            <Link to="/contact" className="hover:underline" onClick={toggleMenu}>Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
