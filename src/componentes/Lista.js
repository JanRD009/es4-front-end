// src/componentes/Lista.js

import React from 'react';

const Lista = ({ items, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Género</th>
          <th>Fecha de Nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.correo}</td>
            <td>{item.edad}</td>
            <td>{item.genero}</td>
            <td>{item.fechaNacimiento}</td>
            <td>
              <button className="btn btn-warning me-2" onClick={() => onEdit(index)}>Editar</button>
              <button className="btn btn-danger" onClick={() => onDelete(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Lista;
