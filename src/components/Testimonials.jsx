import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juan Martínez",
      position: "CEO de Innovatech",
      text: "Trabajar con Construcción XYZ ha sido una experiencia increíble. La calidad de su trabajo y su compromiso con los plazos de entrega son excepcionales. Altamente recomendados.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Laura Gómez",
      position: "Directora de Operaciones en ConstruMax",
      text: "El equipo de Construcción XYZ es muy profesional y siempre está enfocado en brindar la mejor calidad. Estamos muy satisfechos con los resultados de nuestro proyecto.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Carlos López",
      position: "Gerente de Proyectos en Edifica",
      text: "La atención al detalle y la innovación en cada proyecto hacen que Construcción XYZ sea nuestra elección preferida para cualquier desarrollo de construcción.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "María Fernández",
      position: "Arquitecta en Modern Design",
      text: "Los proyectos que hemos completado con Construcción XYZ son excepcionales en calidad y estética. Recomiendo sus servicios sin dudarlo.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Pedro Morales",
      position: "Director en BuildPro",
      text: "Construcción XYZ ha superado nuestras expectativas en cada etapa del proyecto. La atención al cliente es fenomenal.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalTestimonials = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalTestimonials);
  };

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Testimonios</h2>
      <div className="relative max-w-md mx-auto flex items-center">
        <button 
          onClick={handlePrev} 
          className="absolute left-[-1rem] p-1 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          &#8249;
        </button>
        <div className="flex flex-col items-center w-full overflow-hidden">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-500">{testimonials[currentIndex].position}</p>
            <p className="mt-2 text-gray-700">"{testimonials[currentIndex].text}"</p>
          </div>
        </div>
        <button 
          onClick={handleNext} 
          className="absolute right-[-1rem] p-1 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
