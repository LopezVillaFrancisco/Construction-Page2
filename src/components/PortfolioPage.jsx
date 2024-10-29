import React from 'react';
import { Link } from 'react-router-dom';
import constructions from '../constructionsData';
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa';

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Proyectos Completados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {constructions.map(construction => (
          <div key={construction.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={construction.imageUrl[0]}
              alt={construction.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col h-44">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{construction.name}</h2>
                <div className="flex items-center mt-2">
                  <FaBed className="text-blue-600 mr-2" />
                  <p>{construction.rooms} Habitaciones</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  <p>{construction.location}</p>
                </div>
                <div className="text-gray-600 mb-2">
                  <strong className='text-blue-600'>Año de Construcción:</strong> {construction.year_built}
                </div>
                <div className="text-gray-600 mb-4">
                  <strong className='text-blue-600'>Características:</strong> {construction.features.join(', ')}
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">{construction.price}</p>
              </div>
            </div>
            <div className="p-4">
              <Link to={`/portfolio/${construction.id}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  Ver Detalles
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
