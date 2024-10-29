import React from 'react';

const About = () => (
  <section className="py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Sobre Nosotros</h1>
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Valores de la Compañía"
          className="w-full h-[400px] object-cover rounded shadow"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nuestros Valores</h2>
        <p className="text-lg text-gray-700">
          En nuestra empresa, estamos comprometidos con la integridad, la innovación y la
          colaboración. Estos valores fundamentales nos permiten ofrecer proyectos de alta calidad
          y construir relaciones de confianza con nuestros clientes y socios.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 order-2 md:order-1 md:pr-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nuestro Compromiso</h2>
        <p className="text-lg text-gray-700">
          Nos dedicamos a garantizar que cada proyecto cumpla con los más altos estándares de
          calidad y seguridad. Nuestro compromiso es con la satisfacción del cliente y la entrega
          de proyectos en tiempo y forma, superando las expectativas en cada etapa.
        </p>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Nuestro Compromiso"
          className="w-full h-[400px] object-cover rounded shadow"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://images.pexels.com/photos/15193738/pexels-photo-15193738/free-photo-of-carretera-gente-arena-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Nuestra Visión"
          className="w-full h-[400px] object-cover rounded shadow"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nuestra Visión</h2>
        <p className="text-lg text-gray-700">
          Aspiramos a ser líderes en el sector de la construcción, ofreciendo soluciones
          sostenibles e innovadoras que contribuyan al desarrollo de infraestructuras responsables
          y resilientes. Nuestra visión es transformar el paisaje urbano con proyectos que marquen
          la diferencia.
        </p>
      </div>
    </div>
  </section>
);

export default About;
