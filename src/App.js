import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemActual, setItemActual] = useState(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const itemsAlmacenados = JSON.parse(localStorage.getItem('items')) || [];
    setItems(itemsAlmacenados);
  }, []);

  const guardarItem = (item) => {
    let nuevosItems;
    if (editando) {
      nuevosItems = items.map((it, index) => (index === itemActual ? item : it));
      setEditando(false);
    } else {
      nuevosItems = [...items, item];
    }
    setItems(nuevosItems);
    localStorage.setItem('items', JSON.stringify(nuevosItems));
  };

  const editarItem = (index) => {
    setItemActual(index);
    setEditando(true);
  };

  const eliminarItem = (index) => {
    const nuevosItems = items.filter((_, i) => i !== index);
    setItems(nuevosItems);
    localStorage.setItem('items', JSON.stringify(nuevosItems));
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: 'greenyellow', padding: '20px' }}>
      {/* Agregamos un estilo inline para el color de fondo */}
      <h1 className="mb-4">Aplicación CRUD con React y LocalStorage</h1>
      <Formulario onSave={guardarItem} item={editando ? items[itemActual] : null} />
      <Lista items={items} onEdit={editarItem} onDelete={eliminarItem} />
    </div>
  );
};

export default App;
