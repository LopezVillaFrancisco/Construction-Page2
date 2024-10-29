// src/components/WhyChooseUs.js

import React from 'react';
import { FaHammer, FaShieldAlt, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => (
  <section className="flex flex-col md:flex-row items-center py-8 px-4">
    <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
      <img 
        src="https://images.pexels.com/photos/6165164/pexels-photo-6165164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Por Qué Elegirnos" 
        className="w-[500px] h-[700px] object-cover rounded shadow" 
      />
    </div>
    <div className="md:w-1/2 md:pl-8">
      <h2 className="text-3xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center">
          <FaHammer className="text-blue-600 mr-2" />
          <span>Experiencia en la industria de la construcción</span>
        </li>
        <li className="flex items-center">
          <FaShieldAlt className="text-blue-600 mr-2" />
          <span>Compromiso con la calidad y la seguridad</span>
        </li>
        <li className="flex items-center">
          <FaUsers className="text-blue-600 mr-2" />
          <span>Un equipo dedicado y profesional</span>
        </li>
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
