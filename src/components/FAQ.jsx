import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos gestión de construcción, diseño de edificios y servicios de aseguramiento de calidad.",
    },
    {
      question: "¿Cómo puedo obtener un presupuesto?",
      answer: "Puedes obtener un presupuesto contactándonos a través del formulario en nuestro sitio web.",
    },
    {
      question: "¿Cuál es el tiempo estimado para los proyectos?",
      answer: "Los tiempos varían según el alcance y los requisitos del proyecto. Proporcionaremos una estimación durante la consulta inicial.",
    },
    {
      question: "¿Ofrecen garantías en su trabajo?",
      answer: "Sí, ofrecemos garantías en nuestros proyectos completados para asegurar tu satisfacción.",
    },
  ];

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border rounded shadow">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full p-4 bg-white text-left font-semibold focus:outline-none"
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
