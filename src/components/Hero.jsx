import React from 'react';

const Hero = () => (
  <section className="py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-4">Bienvenido a Nuestra Página de Construcción</h1>
    <p className="text-center text-lg mb-8">Construyendo el futuro con innovación y calidad.</p>

    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex justify-center">
        <img src="https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 1" className="w-[300px] h-[500px] object-cover rounded shadow" />
      </div>
      <div className="flex justify-center mt-32">
        <img src="https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 2" className="w-[300px] h-[500px] object-cover rounded shadow" />
      </div>
      <div className="flex justify-center mt-32">
        <img src="https://images.pexels.com/photos/2100681/pexels-photo-2100681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 3" className="w-[300px] h-[500px] object-cover rounded shadow" />
      </div>
      <div className="flex justify-center">
        <img src="https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 4" className="w-[300px] h-[500px] object-cover rounded shadow" />
      </div>
    </div>
  </section>
);

export default Hero;
