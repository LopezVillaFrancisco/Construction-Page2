import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import constructions from '../constructionsData'; 
import { FaBed, FaMapMarkerAlt, FaCalendarAlt, FaRuler } from 'react-icons/fa';
import Contact from './Contact';

const ConstructionDetail = () => {
  const { id } = useParams();
  const construction = constructions.find((constr) => constr.id === parseInt(id)); 
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!construction) {
    return <div>Construcción no encontrada</div>; 
  }

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? construction.imageUrl.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === construction.imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{construction.name}</h1>

      <div className="mb-4 text-blue-500 text-2xl md:text-3xl font-bold">
        {construction.price} 
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {construction.imageUrl.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${index + 1} de ${construction.name}`}
              className={`w-full object-cover cursor-pointer rounded ${
                index === 0 ? 'col-span-2 row-span-2 sm:col-span-3 sm:row-span-3 lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => openCarousel(index)}
            />
          ))}
        </div>
      </div>

      {isCarouselOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            &times;
          </button>
          <div className="relative bg-white p-6 pt-7 rounded-lg max-w-3xl w-full">
            <div className="relative bg-white rounded">
              <img
                src={construction.imageUrl[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full object-cover rounded"
              />
              <button
                onClick={prevImage}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-blue-500 text-3xl p-4 rounded-full bg-transparent"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-blue-500 text-3xl p-4 rounded-full bg-transparent"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center text-sm sm:text-base">
          <FaBed className="text-blue-600 text-lg sm:text-xl mr-2" />
          <span>{construction.rooms} habitaciones</span> 
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl mr-2" />
          <span>{construction.location}</span>
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <FaCalendarAlt className="text-blue-600 text-lg sm:text-xl mr-2" />
          <span>{construction.year_built}</span>
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <FaRuler className="text-blue-600 text-lg sm:text-xl mr-2" />
          <span>{construction.size}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-6 text-sm sm:text-base">{construction.description}</p>

      <Contact/> 
    </div>
  );
};

export default ConstructionDetail;
