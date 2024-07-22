import React from 'react';

const Lista = ({ items, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Posición</th>
          <th>Dorsal</th>
          <th>Estatura (cm)</th>
          <th>Equipo</th>
          <th>Fecha de Ingreso</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.edad}</td>
            <td>{item.posicion}</td>
            <td>{item.dorsal}</td>
            <td>{item.estatura}</td>
            <td>{item.equipo}</td>
            <td>{item.fechaIngreso}</td>
            <td>{item.genero}</td>
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
