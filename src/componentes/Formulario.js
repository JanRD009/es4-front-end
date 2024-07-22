import React, { useState, useEffect } from 'react';

const Formulario = ({ onSave, item }) => {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: item ? item.nombre : '',
    edad: item ? item.edad : '',
    posicion: item ? item.posicion : '',
    dorsal: item ? item.dorsal : '',
    estatura: item ? item.estatura : '',
    equipo: item ? item.equipo : '',
    fechaIngreso: item ? item.fechaIngreso : '',
    genero: item ? item.genero : 'hombre',
  });

  useEffect(() => {
    if (item) {
      setFormularioDatos({
        nombre: item.nombre,
        edad: item.edad,
        posicion: item.posicion,
        dorsal: item.dorsal,
        estatura: item.estatura,
        equipo: item.equipo,
        fechaIngreso: item.fechaIngreso,
        genero: item.genero
      });
    } else {
      setFormularioDatos({
        nombre: '',
        edad: '',
        posicion: '',
        dorsal: '',
        estatura: '',
        equipo: '',
        fechaIngreso: '',
        genero: 'hombre'
      });
    }
  }, [item]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    console.log('Campo cambiado:', name, 'Valor:', value); // Depuración
    setFormularioDatos({ ...formularioDatos, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formularioDatos); // Depuración
    onSave(formularioDatos);
    setFormularioDatos({
      nombre: '',
      edad: '',
      posicion: '',
      dorsal: '',
      estatura: '',
      equipo: '',
      fechaIngreso: '',
      genero: 'hombre'
    });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre Completo</label>
        <input type="text" className="form-control" id="nombre" name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">Edad</label>
        <input type="number" className="form-control" id="edad" name="edad" value={formularioDatos.edad} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="posicion" className="form-label">Posición</label>
        <select className="form-control" id="posicion" name="posicion" value={formularioDatos.posicion} onChange={manejarCambio} required>
          <option value="">Seleccione una posición</option>
          <option value="Base">Base</option>
          <option value="Escolta">Escolta</option>
          <option value="Alero">Alero</option>
          <option value="Ala-Pívot">Ala-Pívot</option>
          <option value="Pívot">Pívot</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="dorsal" className="form-label">Dorsal</label>
        <input type="number" className="form-control" id="dorsal" name="dorsal" value={formularioDatos.dorsal} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="estatura" className="form-label">Estatura (cm)</label>
        <input type="number" className="form-control" id="estatura" name="estatura" value={formularioDatos.estatura} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="equipo" className="form-label">Equipo</label>
        <input type="text" className="form-control" id="equipo" name="equipo" value={formularioDatos.equipo} onChange={manejarCambio} required />
      </div>
      <div className="mb-3">
        <label htmlFor="fechaIngreso" className="form-label">Fecha de Ingreso</label>
        <input type="date" className="form-control" id="fechaIngreso" name="fechaIngreso" value={formularioDatos.fechaIngreso} onChange={manejarCambio} required />
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
      <button type="submit" className="btn btn-primary">{item ? 'Guardar Actualizaciones' : 'Guardar'}</button>
    </form>
  );
};

export default Formulario;
