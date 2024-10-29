import React from 'react';
import { FaBuilding, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const Services = () => (
  <section className="py-8 px-4">
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Nuestros Servicios</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
        <FaBuilding className="text-blue-600 mb-4 w-16 h-16" />
        <h3 className="text-xl font-semibold mb-2">Gestión de Construcción</h3>
        <p className="text-gray-700 text-center">Planificamos y gestionamos todos los aspectos de su proyecto de construcción, asegurando eficacia y calidad en cada etapa.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
        <FaClipboardList className="text-blue-600 mb-4 w-16 h-16" />
        <h3 className="text-xl font-semibold mb-2">Diseño de Edificios</h3>
        <p className="text-gray-700 text-center">Creamos diseños innovadores que cumplen con sus necesidades y requisitos, fusionando estética y funcionalidad.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
        <FaCheckCircle className="text-blue-600 mb-4 w-16 h-16" />
        <h3 className="text-xl font-semibold mb-2">Control de Calidad</h3>
        <p className="text-gray-700 text-center">Nos aseguramos de que todos los trabajos cumplan con los más altos estándares de calidad, garantizando satisfacción al cliente.</p>
      </div>
    </div>
  </section>
);

export default Services;
