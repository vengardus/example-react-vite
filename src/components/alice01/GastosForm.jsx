import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { agregarGasto } from '../../redux/gastosSlice';


const GastosForm = () => {
  const categoryRef = useRef(null)
  const totalRef = useRef(null)

  const dispatch = useDispatch();
 
  const handleSubmit = ( event ) => {
    event.preventDefault();

    if (!categoryRef.current.value || !totalRef.current.value) {
      return;
    }

    const nuevoGasto = {
      category: categoryRef.current.value,
      total: Number(totalRef.current.value),
    };

    dispatch(agregarGasto(nuevoGasto));

    categoryRef.current.value = ''
    totalRef.current.value = ''
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>
        Categoría:
        <input
          type="text"
          ref={ categoryRef }
          
        />
      </label>
      <label>
        Total:
        <input
          type="number"
          ref={ totalRef }
          
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default GastosForm;
