import React from 'react';
import Contact from './Contact'; 

const ContactPage = () => (
  <section className="py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">Contáctanos</h2>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Contact />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 mt-8">Nuestra Información</h3>
        <p className="mb-2"><strong>Dirección:</strong> Av. Construcción 123, Ciudad XYZ</p>
        <p className="mb-2"><strong>Teléfono:</strong> (123) 456-7890</p>
        <p><strong>Correo Electrónico:</strong> info@nombredeempresa.com</p>
      </div>
    </div>
  </section>
);

export default ContactPage;
