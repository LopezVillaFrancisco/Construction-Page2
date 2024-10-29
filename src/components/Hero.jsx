import React from 'react';

const Hero = () => (
  <section className="py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-4">Bienvenido a Nuestra Página de Construcción</h1>
    <p className="text-center text-lg mb-8">Construyendo el futuro con innovación y calidad.</p>

    <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
      <div className="flex justify-center mt-4 md:w-auto md:mt-0">
        <img src="https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 1" className="w-[150px] h-[250px] object-cover rounded shadow md:w-[300px] md:h-[500px]" />
      </div>
      <div className="flex justify-center mt-4 md:w-auto md:mt-32">
        <img src="https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 2" className="w-[150px] h-[250px] object-cover rounded shadow md:w-[300px] md:h-[500px]" />
      </div>
      <div className="flex justify-center mt-4 md:w-auto md:mt-32">
        <img src="https://images.pexels.com/photos/2100681/pexels-photo-2100681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 3" className="w-[150px] h-[250px] object-cover rounded shadow md:w-[300px] md:h-[500px]" />
      </div>
      <div className="flex justify-center mt-4 md:w-auto md:mt-0">
        <img src="https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción 4" className="w-[150px] h-[250px] object-cover rounded shadow md:w-[300px] md:h-[500px]" />
      </div>
    </div>
  </section>
);

export default Hero;
