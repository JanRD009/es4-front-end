// src/componentes/Formulario.js

import React, { useState } from 'react';

const Formulario = ({ onSave, item }) => {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: item ? item.nombre : '',
    correo: item ? item.correo : '',
    edad: item ? item.edad : '',
    genero: item ? item.genero : 'hombre',
    fechaNacimiento: item ? item.fechaNacimiento : '',
  });

  const manejarCambio = (e) => {
    setFormularioDatos({ ...formularioDatos, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSave(formularioDatos);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input type="email" className="form-control" id="correo" name="correo" value={formularioDatos.correo} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">Edad</label>
        <input type="number" className="form-control" id="edad" name="edad" value={formularioDatos.edad} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Género</label>
        <div>
          <input type="radio" className="form-check-input" id="hombre" name="genero" value="hombre" checked={formularioDatos.genero === 'hombre'} onChange={manejarCambio} />
          <label htmlFor="hombre" className="form-check-label">Hombre</label>
        </div>
        <div>
          <input type="radio" className="form-check-input" id="mujer" name="genero" value="mujer" checked={formularioDatos.genero === 'mujer'} onChange={manejarCambio} />
          <label htmlFor="mujer" className="form-check-label">Mujer</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
        <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" value={formularioDatos.fechaNacimiento} onChange={manejarCambio} required />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default Formulario;
