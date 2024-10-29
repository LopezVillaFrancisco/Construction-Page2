import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juan Martínez",
      position: "CEO de Innovatech",
      text: "Trabajar con [Nombre de la Empresa] ha sido una experiencia increíble. La calidad de su trabajo y su compromiso con los plazos de entrega son excepcionales. Altamente recomendados.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Laura Gómez",
      position: "Directora de Operaciones en ConstruMax",
      text: "El equipo es muy profesional y siempre está enfocado en brindar la mejor calidad. Estamos muy satisfechos con los resultados de nuestro proyecto.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Carlos López",
      position: "Gerente de Proyectos en Edifica",
      text: "La atención al detalle y la innovación en cada proyecto hacen que [Nombre de la Empresa] sea nuestra elección preferida para cualquier desarrollo de construcción.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "María Fernández",
      position: "Arquitecta en Modern Design",
      text: "Los proyectos que hemos completado con [Nombre de la Empresa] son excepcionales en calidad y estética. Recomiendo sus servicios sin dudarlo.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    {
      name: "Pedro Morales",
      position: "Director en BuildPro",
      text: "Han superado nuestras expectativas en cada etapa del proyecto. La atención al cliente es fenomenal.",
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

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % totalTestimonials],
    testimonials[(currentIndex + 2) % totalTestimonials]
  ];

  return (
    <section className="py-8 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6">Testimonios</h2>
      <div className="relative max-w-5xl mx-auto flex items-center">
        <button 
          onClick={handlePrev} 
          className="absolute left-[-2rem] p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          &#8249;
        </button>
        <div className="flex gap-6 overflow-hidden w-full">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
              <p className="mt-4 text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        <button 
          onClick={handleNext} 
          className="absolute right-[-2rem] p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
