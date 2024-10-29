import React, { useState } from 'react';

const Contact = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos del Formulario:', datosFormulario);
    setDatosFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl text-center mb-6 text-blue-700">Contáctanos</h2>
      <form onSubmit={manejarEnvio} className="max-w-md mx-auto bg-white p-6 rounded">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={manejarCambio}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datosFormulario.email}
            onChange={manejarCambio}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={datosFormulario.mensaje}
            onChange={manejarCambio}
            required
            className="border border-gray-300 rounded p-2 w-full resize-none" 
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full px-4 hover:bg-blue-700">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;
